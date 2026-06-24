<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  let containerLaborator: HTMLDivElement | undefined = undefined;

  interface NodArbore {
    id: number;
    eticheta: string;
    parinteId: number | null;
    taiat?: boolean;   
  }

  const problema1 = {
    titlu: "Problema 1: Căutare DFS (Arad - Bucharest)",
    cerinta: "Folosind harta din stânga, construiți arborele de căutare rezultat prin aplicarea algoritmului Depth-First Search (DFS). Extindeți vecinii în ordine alfabetică. Starea de start este Arad, iar starea obiectiv este Bucharest.",
    noduriDisponibile: ["Arad", "Bucharest", "Craiova", "Drobeta", "Eforie", "Fagaras", "Giurgiu", "Hirsova", "Iasi", "Lugoj", "Mehadia", "Neamt", "Oradea", "Pitesti", "Rimnicu Vilcea", "Sibiu", "Timisoara", "Urziceni", "Vaslui", "Zerind"],
    
    // Soluția corectă DFS cu expandare alfabetică
    solutiePerfecta: [
      { nod: 'Arad', parinte: null },
      { nod: 'Sibiu', parinte: 'Arad' },
      { nod: 'Timisoara', parinte: 'Arad' },
      { nod: 'Zerind', parinte: 'Arad' },
      { nod: 'Fagaras', parinte: 'Sibiu' },
      { nod: 'Oradea', parinte: 'Sibiu' },
      { nod: 'Rimnicu Vilcea', parinte: 'Sibiu' },
      { nod: 'Bucharest', parinte: 'Fagaras' }
    ]
  };

  let noduriArbore = $state<Array<NodArbore>>([]);
  let idContor = $state(0);
  let exercitiuCorectat = $state(false);
  let mesajRezultat = $state("");
  let parinteIdSelectat = $state<number | null>(null); 

  function iesireManuala() {
    document.removeEventListener('fullscreenchange', detecteazaIesireFullscreen);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    goto('/dashboard/DFS'); // Actualizează ruta dacă e nevoie
  }

  function detecteazaIesireFullscreen() {
    if (!document.fullscreenElement) {
      goto('/dashboard/DFS');
    }
  }

  onMount(() => {
    noduriArbore = [{ id: idContor++, eticheta: 'Arad', parinteId: null, taiat: false }];
    parinteIdSelectat = noduriArbore[0].id; 

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

  // La DFS nu avem nevoie de meniu modal, setăm direct părintele
  function traiteazaClickPeNod(nod: NodArbore) {
    parinteIdSelectat = nod.id;
  }

  function comutaTaiereNod(e: MouseEvent, idNod: number) {
    e.preventDefault();
    noduriArbore = noduriArbore.map(n => {
      if (n.id === idNod) {
        return { ...n, taiat: !n.taiat };
      }
      return n;
    });
  }

  // La DFS adăugăm nodul instant sub părinte, fără modal pentru f(n)
  function cereAdaugareDinLista(eticheta: string) {
    if (parinteIdSelectat === null) {
      alert("Te rugăm să selectezi mai întâi nodul părinte dând click pe el pe planșă!");
      return;
    }
    noduriArbore = [...noduriArbore, {
      id: idContor++,
      eticheta: eticheta,
      parinteId: parinteIdSelectat,
      taiat: false
    }];
  }

  function gasesteNod(id: number) {
    return noduriArbore.find((n: NodArbore) => n.id === id);
  }

  function obtineNiveluri() {
    let niveluri: Array<Array<NodArbore>> = [];
    function determinaNivel(nod: NodArbore): number {
      if (nod.parinteId === null) return 0;
      const parinte = noduriArbore.find((n: NodArbore) => n.id === nod.parinteId);
      return parinte ? determinaNivel(parinte) + 1 : 0;
    }
    noduriArbore.forEach((nod: NodArbore) => {
      const niv = determinaNivel(nod);
      if (!niveluri[niv]) niveluri[niv] = [];
      niveluri[niv].push(nod);
    });
    return niveluri;
  }

  function calculeazaPozitie(nodId: number, latimeSpatiu: number) {
    const toateNivelurile = obtineNiveluri();
    let nivelNod = 0;
    let indexInNivel = 0;
    let totalPeNivel = 1;
    for (let n = 0; n < toateNivelurile.length; n++) {
      const gasit = toateNivelurile[n].findIndex((nod: NodArbore) => nod.id === nodId);
      if (gasit !== -1) {
        nivelNod = n;
        indexInNivel = gasit;
        totalPeNivel = toateNivelurile[n].length;
        break;
      }
    }
    const spatiuOrizontal = latimeSpatiu / (totalPeNivel + 1);
    const x = spatiuOrizontal * (indexInNivel + 1);
    const y = 80 + nivelNod * 90; // Puțin mai strâns pe OY pentru că nu avem etichete de limite sub nod
    return { x, y };
  }

  async function verificaRezolvare() {
    if (noduriArbore.length !== problema1.solutiePerfecta.length) {
      exercitiuCorectat = true;
      mesajRezultat = "❌ Incorect (Noduri lipsă sau în plus)";
      return;
    }
    let totulEsteCorect = true;
    for (let sol of problema1.solutiePerfecta) {
      const nodStudent = noduriArbore.find(n => {
        if (n.eticheta.toUpperCase() !== sol.nod.toUpperCase()) return false;
        if (sol.parinte === null) return n.parinteId === null;
        if (n.parinteId === null) return false;
        const p = gasesteNod(n.parinteId);
        return p && p.eticheta.toUpperCase() === sol.parinte.toUpperCase();
      });
      if (!nodStudent) {
        totulEsteCorect = false;
        break;
      }
    }
    exercitiuCorectat = true;
    if (totulEsteCorect) {
      mesajRezultat = "🎉 Excelent! Arborele DFS este corect.";
      const email = localStorage.getItem("userEmail");
      if (email) {
        try {
          await fetch("http://localhost:8080/api/update-points", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, points: 100 })
          });
        } catch(e){}
      }
    } else {
      mesajRezultat = "❌ Incorect. Verifică ordinea alfabetică a expandării!";
    }
  }
</script>

<div class="ecran-complet-student" bind:this={containerLaborator}>
  
  <div class="antet-cerinta">
    <div class="grup-text-cerinta">
      <h2>{problema1.titlu}</h2>
      <p>{problema1.cerinta}</p>
    </div>
    <button class="buton-exit-direct" onclick={iesireManuala}>Exit ✕</button>
  </div>

  <div class="corp-interactiv">
    <div class="panou-stanga-graf">
      <h3>Graful Problemei</h3>
      <div class="container-imagine">
        <img src="/poze/harta.png" alt="Harta României" />
      </div>
    </div>

    <div class="zona-desen">
      <p class="instructiune-scurta">Indicație: Click stânga pe nod pentru a-l seta ca părinte. Apoi alege un oraș din dreapta.</p>
      
      <svg class="canvas-legaturi">
        {#each noduriArbore as nod}
          {#if nod.parinteId !== null && gasesteNod(nod.parinteId)}
            {@const pozCopil = calculeazaPozitie(nod.id, 650)}
            {@const pozParinte = calculeazaPozitie(nod.parinteId, 650)}
            <line 
              x1={pozParinte.x} y1={pozParinte.y} 
              x2={pozCopil.x} y2={pozCopil.y} 
              stroke={nod.taiat ? "#94a3b8" : "#0A7E8C"} 
              stroke-width="3" 
              stroke-dasharray={nod.taiat ? "5,5" : "0"}
            />
            <circle cx={pozCopil.x} cy={pozCopil.y} r="5" fill={nod.taiat ? "#94a3b8" : "#0A7E8C"} />
          {/if}
        {/each}
      </svg>

      {#each noduriArbore as nod}
        {@const poz = calculeazaPozitie(nod.id, 650)}
        <button 
          class="nod-graf-arbore {parinteIdSelectat === nod.id ? 'parinte-activ' : ''} {nod.taiat ? 'nod-taiat' : ''}" 
          style="left: {poz.x}px; top: {poz.y}px;"
          onclick={() => traiteazaClickPeNod(nod)}
          oncontextmenu={(e) => comutaTaiereNod(e, nod.id)}
        >
          {#if nod.taiat}
            <div class="linie-rosie-taiere"></div>
          {/if}
          <span class="nume-nod">{nod.eticheta}</span>
        </button>
      {/each}
    </div>

    <div class="panou-dreapta-noduri">
      <h3>Noduri Disponibile</h3>
      <p class="ajutor-text">Selectează părintele în centru, apoi apasă pe nod pentru expandare:</p>
      <div class="grila-noduri">
        {#each problema1.noduriDisponibile as nodEticheta}
          <button class="buton-nod-lista" onclick={() => cereAdaugareDinLista(nodEticheta)}>
            {nodEticheta}
          </button>
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
  /* Am păstrat integral structura de styling din codul tău Svelte */
  .ecran-complet-student { width: 100vw; height: 100vh; background-color: #f8fafc; display: flex; flex-direction: column; font-family: sans-serif; box-sizing: border-box; overflow: hidden; }
  :global(:fullscreen) { background-color: #f8fafc !important; width: 100% !important; height: 100% !important; }
  .antet-cerinta { background-color: #ffffff; padding: 20px 30px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
  .grup-text-cerinta { max-width: 85%; }
  .antet-cerinta h2 { margin: 0 0 6px 0; color: #0A7E8C; font-size: 26px; }
  .antet-cerinta p { margin: 0; color: #475569; font-size: 15px; line-height: 1.5; }
  .buton-exit-direct { background: #e6f2f4; color: #0A7E8C; border: none; padding: 10px 18px; font-size: 16px; font-weight: bold; border-radius: 8px; cursor: pointer; transition: 0.2s; }
  .buton-exit-direct:hover { transform: scale(1.05); }
  .corp-interactiv { flex: 1; display: flex; overflow: hidden; background-color: #f1f5f9; }
  .panou-stanga-graf { flex: 2.6; background-color: #ffffff; border-right: 1px solid #e2e8f0; padding: 20px; display: flex; flex-direction: column; }
  .panou-stanga-graf h3 { margin: 0 0 12px 0; font-size: 18px; color: #0f172a; border-bottom: 2px solid #0A7E8C; padding-bottom: 6px; width: fit-content; }
  .container-imagine { flex: 1; display: flex; align-items: center; justify-content: center; background-color: #ffffff; overflow: hidden; width: 100%; }
  .container-imagine img { width: 100%; height: auto; max-height: 98%; object-fit: contain; }
  .zona-desen { flex: 2.8; background-color: #ffffff; position: relative; border-right: 1px solid #e2e8f0; overflow: hidden; }
  .instructiune-scurta { position: absolute; top: 15px; left: 25px; font-size: 14px; font-weight: bold; color: #64748b; margin: 0; z-index: 10; }
  .instructiune-scurta::after { content: " | Click-Dreapta pe nod pentru a-l tăia."; color: #ef4444; font-weight: normal; }
  .canvas-legaturi { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
  .nod-graf-arbore { position: absolute; min-width: 85px; height: 40px; background-color: #ffffff; border: 3px solid #0A7E8C; border-radius: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 5; transform: translate(-50%, -50%); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); cursor: pointer; outline: none; padding: 0 12px; }
  .nod-graf-arbore.parinte-activ { border-color: #ff9800 !important; background-color: #fff3e0 !important; box-shadow: 0 0 12px #ff9800; }
  .nod-graf-arbore.nod-taiat { opacity: 0.55; border-color: #94a3b8 !important; background-color: #f1f5f9 !important; box-shadow: none; }
  .nod-taiat .nume-nod { color: #94a3b8; }
  .linie-rosie-taiere { position: absolute; width: 100%; height: 3px; background-color: #ef4444; transform: rotate(-15deg); pointer-events: none; z-index: 10; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
  .nume-nod { font-weight: bold; font-size: 14px; color: #0f172a; white-space: nowrap; margin-bottom: 0px; }
  .panou-dreapta-noduri { flex: 1.2; background-color: #f8fafc; padding: 20px; display: flex; flex-direction: column; }
  .ajutor-text { font-size: 13px; color: #64748b; margin: 0 0 16px 0; }
  .grila-noduri { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .buton-nod-lista { background-color: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 5px; font-size: 13px; font-weight: bold; color: #0f172a; cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: all 0.2s; }
  .buton-nod-lista:hover { border-color: #0A7E8C; background-color: #f0fdfa; }
  .bara-jos { background-color: #ffffff; padding: 20px 30px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
  .mesaj-feedback { font-size: 16px; font-weight: bold; color: #0f172a; }
  .buton-verifica { background-color: #0A7E8C; color: white; border: none; padding: 12px 30px; font-size: 16px; font-weight: bold; border-radius: 6px; cursor: pointer; }
</style>