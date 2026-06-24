<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  let containerLaborator: HTMLDivElement | undefined = undefined;

  // Frunzele (Nivelul 3) specifice problemei 1
  const frunze = [3, 12, 8, 2, 4, 6, 14, 5, 2, 4, 21, 1, 3, 12, 5, 6, 1, 1, 2, 3, 5, 5, 6, 9, 1, 4, 5];

  // Funcție recursivă care calculează valoarea corectă Minimax pentru orice nod
  function calculeazaValoareCorecta(id: number): number {
    if (id >= 13) return frunze[id - 13];
    const c1 = calculeazaValoareCorecta(id * 3 + 1);
    const c2 = calculeazaValoareCorecta(id * 3 + 2);
    const c3 = calculeazaValoareCorecta(id * 3 + 3);
    
    // Nivel 0 (rădăcina) și Nivel 2 (nodurile 4-12) sunt de tip MAX
    if (id === 0 || (id >= 4 && id <= 12)) {
        return Math.max(c1, c2, c3);
    }
    // Nivel 1 (nodurile 1-3) sunt de tip MIN
    return Math.min(c1, c2, c3);
  }

  // Calculăm coordonata X pentru a desena un arbore frumos
  function getX(id: number): number {
    if (id >= 13) return ((id - 13) * 55) + 30; // Spațiere frunze (lățime totală ~1500px)
    return (getX(id * 3 + 1) + getX(id * 3 + 3)) / 2; // Părintele este la jumătatea distanței dintre extremitățile copiilor
  }

  // Calculăm coordonata Y în funcție de nivel
  function getY(id: number): number {
    if (id === 0) return 60;
    if (id <= 3) return 180;
    if (id <= 12) return 300;
    return 420;
  }

  // Structura de stare a celor 40 de noduri
  let noduri = $state(
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      valoareCorecta: calculeazaValoareCorecta(i),
      valoareIntrodusa: "",
      isLeaf: i >= 13,
      type: i === 0 || (i >= 4 && i <= 12) ? 'MAX' : (i >= 1 && i <= 3 ? 'MIN' : 'LEAF'),
      x: getX(i),
      y: getY(i)
    }))
  );

  let mesajRezultat = $state("");
  let exercitiuCorectat = $state(false);

  function iesireManuala() {
    document.removeEventListener('fullscreenchange', detecteazaIesireFullscreen);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    goto('/dashboard/Minimax'); 
  }

  function detecteazaIesireFullscreen() {
    if (!document.fullscreenElement) goto('/dashboard/Minimax');
  }

  onMount(() => {
    const cereFullscreen = () => {
      if (containerLaborator && containerLaborator.requestFullscreen) {
        containerLaborator.requestFullscreen().catch(() => {});
      }
    };
    setTimeout(cereFullscreen, 300);
    document.addEventListener('fullscreenchange', detecteazaIesireFullscreen);
  });

  onDestroy(() => {
    document.removeEventListener('fullscreenchange', detecteazaIesireFullscreen);
  });

  async function verificaRezolvare() {
    let totulEsteCorect = true;
    
    // Verificăm doar nodurile care nu sunt frunze (0 - 12)
    for (let i = 0; i < 13; i++) {
      if (parseInt(noduri[i].valoareIntrodusa) !== noduri[i].valoareCorecta) {
        totulEsteCorect = false;
        break;
      }
    }
    
    exercitiuCorectat = true;
    if (totulEsteCorect) {
      mesajRezultat = "🎉 Excelent! Toate valorile sunt corecte.";
      const email = localStorage.getItem("userEmail");
      if (email) {
        try {
          await fetch("http://localhost:8080/api/update-points", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, points: 100 })
          });
        } catch(e){}
      }
    } else {
      mesajRezultat = "❌ Incorect. Verifică cu atenție calculele MAX și MIN!";
    }
  }
</script>

<div class="ecran-complet-student" bind:this={containerLaborator}>
  
  <div class="antet-cerinta">
    <div class="grup-text-cerinta">
      <h2>Problema 1: Completează Arborele Minimax</h2>
      <p>Introduceți valorile corecte în căsuțe pe baza frunzelor de jos. Pătratele sunt noduri <strong>MAX</strong>, iar cercurile sunt noduri <strong>MIN</strong>.</p>
    </div>
    <button class="buton-exit-direct" onclick={iesireManuala}>Exit ✕</button>
  </div>

  <div class="corp-interactiv">
    <div class="zona-desen-scroll">
      <div class="canvas-container">
        <svg width="1500" height="500" class="canvas-legaturi">
          {#each noduri as nod}
            {#if !nod.isLeaf}
              <line x1={nod.x} y1={nod.y} x2={noduri[nod.id * 3 + 1].x} y2={noduri[nod.id * 3 + 1].y} stroke="#cbd5e1" stroke-width="2"/>
              <line x1={nod.x} y1={nod.y} x2={noduri[nod.id * 3 + 2].x} y2={noduri[nod.id * 3 + 2].y} stroke="#cbd5e1" stroke-width="2"/>
              <line x1={nod.x} y1={nod.y} x2={noduri[nod.id * 3 + 3].x} y2={noduri[nod.id * 3 + 3].y} stroke="#cbd5e1" stroke-width="2"/>
            {/if}
          {/each}
        </svg>

        {#each noduri as nod}
          <div 
            class="nod-minimax {nod.type === 'MIN' ? 'forma-cerc' : (nod.type === 'MAX' ? 'forma-patrat' : 'forma-frunza')}"
            style="left: {nod.x}px; top: {nod.y}px;"
          >
            {#if !nod.isLeaf}
              <span class="eticheta-tip">{nod.type}</span>
              <input type="number" bind:value={nod.valoareIntrodusa} class="input-valoare" placeholder="?" />
            {:else}
              <span class="valoare-frunza">{nod.valoareCorecta}</span>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="bara-jos">
    <div class="mesaj-feedback">
      {mesajRezultat}
    </div>
    <button class="buton-verifica" onclick={verificaRezolvare}>Verifică Rezolvarea</button>
  </div>
</div>

<style>
  .ecran-complet-student { width: 100vw; height: 100vh; background-color: #f8fafc; display: flex; flex-direction: column; font-family: sans-serif; box-sizing: border-box; overflow: hidden; }
  :global(:fullscreen) { background-color: #f8fafc !important; width: 100% !important; height: 100% !important; }
  
  .antet-cerinta { background-color: #ffffff; padding: 20px 30px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; z-index: 10; }
  .grup-text-cerinta { max-width: 85%; }
  .antet-cerinta h2 { margin: 0 0 6px 0; color: #0A7E8C; font-size: 26px; }
  .antet-cerinta p { margin: 0; color: #475569; font-size: 15px; line-height: 1.5; }
  
  .buton-exit-direct { background: #e6f2f4; color: #0A7E8C; border: none; padding: 10px 18px; font-size: 16px; font-weight: bold; border-radius: 8px; cursor: pointer; transition: 0.2s; }
  .buton-exit-direct:hover { transform: scale(1.05); }
  
  .corp-interactiv { flex: 1; display: flex; background-color: #f1f5f9; overflow: hidden; }
  
  /* Permite scroll pe axa X pentru arborele lat */
  .zona-desen-scroll { flex: 1; overflow-x: auto; overflow-y: hidden; position: relative; }
  .canvas-container { position: relative; width: 1500px; height: 100%; min-height: 500px; margin: 0 auto; }
  .canvas-legaturi { position: absolute; top: 0; left: 0; z-index: 1; }

  /* Stilurile Nodurilor */
  .nod-minimax { position: absolute; z-index: 5; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 2px solid #0A7E8C; }
  
  /* MAX = Pătrat */
  .forma-patrat { width: 50px; height: 50px; border-radius: 6px; }
  /* MIN = Cerc */
  .forma-cerc { width: 50px; height: 50px; border-radius: 50%; }
  /* Frunze = Mici, simple */
  .forma-frunza { width: 36px; height: 36px; border-radius: 6px; background-color: #e2e8f0; border-color: #94a3b8; box-shadow: none; }

  .eticheta-tip { position: absolute; top: -20px; font-size: 11px; font-weight: bold; color: #64748b; letter-spacing: 1px; }
  .valoare-frunza { font-weight: bold; color: #334155; font-size: 15px; }
  
  /* Input-ul pentru student */
  .input-valoare { width: 80%; height: 60%; text-align: center; border: none; font-weight: bold; font-size: 16px; color: #0A7E8C; background: transparent; outline: none; }
  /* Ascunde săgețile de la input type="number" */
  .input-valoare::-webkit-outer-spin-button, .input-valoare::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  .input-valoare[type=number] { -moz-appearance: textfield; }

  .bara-jos { background-color: #ffffff; padding: 20px 30px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; z-index: 10; }
  .mesaj-feedback { font-size: 16px; font-weight: bold; color: #0f172a; }
  .buton-verifica { background-color: #0A7E8C; color: white; border: none; padding: 12px 30px; font-size: 16px; font-weight: bold; border-radius: 6px; cursor: pointer; }
</style>