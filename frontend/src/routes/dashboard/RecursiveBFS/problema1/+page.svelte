<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  let containerLaborator: HTMLDivElement | undefined = undefined;

  interface NodArbore {
    id: number;
    eticheta: string;
    euristica: string; 
    limita: string;    
    parinteId: number | null;
    taiat?: boolean;   
  }

  const problema1 = {
    titlu: "Problema 1: Căutare RBFS (Ruta S - F)",
    cerinta: "Folosind graful din imaginea din stânga, reconstruiți arborele de căutare rezultat prin aplicarea algoritmului Recursive Best First Search (RBFS). Puteți da click pe orice nod din desen pentru a-i actualiza valoarea f(n) sau limita pe parcursul algoritmului. Starea de start este S, iar starea obiectiv este F.",
    noduriDisponibile: ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    
    solutiePerfecta: [
      { nod: 'S', parinte: null, valoare: '10', limita: '∞' },
      { nod: 'A', parinte: 'S', valoare: '13', limita: '11' },
      { nod: 'B', parinte: 'S', valoare: '11', limita: '12' },
      { nod: 'C', parinte: 'S', valoare: '12', limita: "" },
      { nod: 'G', parinte: 'A', valoare: '11', limita: '11' },
      { nod: 'C', parinte: 'A', valoare: '13', limita: "" },
      { nod: 'E', parinte: 'G', valoare: '13', limita: "" },
      { nod: 'D', parinte: 'G', valoare: '13', limita: "" },
      { nod: 'A', parinte: 'B', valoare: '14', limita: "" },
      { nod: 'D', parinte: 'B', valoare: '12', limita: '12' },
      { nod: 'E', parinte: 'D', valoare: '13', limita: "" },
      { nod: 'F', parinte: 'D', valoare: '11', limita: "" }
    ]
  };

  let noduriArbore = $state<Array<NodArbore>>([]);
  let idContor = $state(0);
  let exercitiuCorectat = $state(false);
  let mesajRezultat = $state("");

  let parinteIdSelectat = $state<number | null>(null); 
  let afiseazaMeniuAdaugare = $state(false);
  let afiseazaMeniuEditare = $state(false); 

  let nodSelectatPentruAdaugare = $state("");
  let valoareCalculataInput = $state("");
  let limitaInput = $state(""); 
  let idNodEditat = $state<number | null>(null); // Corectat: eliminat spațiul din denumirea variabilei state

  function iesireManuala() {
    document.removeEventListener('fullscreenchange', detecteazaIesireFullscreen);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    goto('/dashboard/RecursiveBFS');
  }

  function detecteazaIesireFullscreen() {
    if (!document.fullscreenElement) {
      goto('/dashboard/RecursiveBFS');
    }
  }

  onMount(() => {
    noduriArbore = [{ id: idContor++, eticheta: 'S', euristica: '10', limita: '∞', parinteId: null, taiat: false }];
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

  function deschideEditareNod(nod: NodArbore) {
    idNodEditat = nod.id;
    valoareCalculataInput = nod.euristica;
    limitaInput = nod.limita;
    afiseazaMeniuEditare = true;
  }

  function traiteazaClickPeNod(nod: NodArbore) {
    deschideEditareNod(nod);
  }

  function salveazaModificariNod() {
    noduriArbore = noduriArbore.map(n => {
      if (n.id === idNodEditat) {
        return { ...n, euristica: valoareCalculataInput.trim(), limita: limitaInput.trim() };
      }
      return n;
    });
    afiseazaMeniuEditare = false;
    idNodEditat = null;
  }

  function seteazaCaParinteDinEditare() {
    if (idNodEditat !== null) {
      parinteIdSelectat = idNodEditat;
    }
    afiseazaMeniuEditare = false;
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

  function cereAdaugareDinLista(eticheta: string) {
    if (parinteIdSelectat === null) {
      alert("Te rugăm să selectezi mai întâi nodul părinte făcând click pe el în desen și apăsând 'Alege ca părinte'!");
      return;
    }
    nodSelectatPentruAdaugare = eticheta;
    valoareCalculataInput = "";
    limitaInput = ""; 
    afiseazaMeniuAdaugare = true;
  }

  function salveazaNodInArbore() {
    noduriArbore = [...noduriArbore, {
      id: idContor++,
      eticheta: nodSelectatPentruAdaugare,
      euristica: valoareCalculataInput.trim(),
      limita: limitaInput.trim(), 
      parinteId: parinteIdSelectat,
      taiat: false
    }];
    afiseazaMeniuAdaugare = false;
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
    const y = 100 + nivelNod * 110;
    return { x, y };
  }

  async function verificaRezolvare() {
    if (noduriArbore.length !== problema1.solutiePerfecta.length) {
      exercitiuCorectat = true;
      mesajRezultat = "❌ Incorect";
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
      if (!nodStudent || nodStudent.euristica.trim() !== sol.valoare || nodStudent.limita.trim() !== sol.limita) {
        totulEsteCorect = false;
        break;
      }
    }
    exercitiuCorectat = true;
    if (totulEsteCorect) {
      mesajRezultat = "🎉 Excelent!";
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
      mesajRezultat = "❌ Incorect";
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
        <img src="/poze/Astar.png" alt="Graful hărții cu valori h pentru RBFS" />
      </div>
    </div>

    <div class="zona-desen">
      <p class="instructiune-scurta">Indicație: Click pe un nod din desen pentru a-i modifica valorile/limita sau a-l seta ca părinte.</p>
      
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
          
          <div class="grup-valori-nod">
            {#if nod.euristica}
              <span class="valoare-euristica">f:{nod.euristica}</span>
            {/if}
            {#if nod.limita && nod.limita.trim() !== ""}
              <span class="valoare-limita">lim:{nod.limita}</span>
            {/if}
          </div>
        </button>
      {/each}

      {#if afiseazaMeniuAdaugare}
        <div class="fundal-intunecat-modal">
          <div class="interfata-adaugare-interna">
            <h4>Adaugă sub {noduriArbore.find(n => n.id === parinteIdSelectat)?.eticheta}</h4>
            <p class="info-adaugare">Nod succesor selectat: <strong>{nodSelectatPentruAdaugare}</strong></p>

            <label for="input-valoare">Valoare f(n) = g(n) + h(n):</label>
            <input id="input-valoare" type="text" placeholder="Introduceți valoarea f(n)" bind:value={valoareCalculataInput} />

            <label for="input-limita">Valoare limită (Opțional):</label>
            <input id="input-limita" type="text" placeholder="Lasă gol SAU introduceți limita (ex: 11)" bind:value={limitaInput} />

            <div class="grup-butoane-meniu">
              <button class="btn-salveaza" onclick={salveazaNodInArbore}>Confirmă</button>
              <button class="btn-anuleaza" onclick={() => afiseazaMeniuAdaugare = false}>Anulează</button>
            </div>
          </div>
        </div>
      {/if}

      {#if afiseazaMeniuEditare}
        <div class="fundal-intunecat-modal">
          <div class="interfata-adaugare-interna editare-speciala">
            <h4>Gestionează Nodul: {noduriArbore.find(n => n.id === idNodEditat)?.eticheta}</h4>
            
            <button class="btn-seteaza-parinte" onclick={seteazaCaParinteDinEditare}>
              ⭐ Alege ca părinte pentru extindere
            </button>
            
            <hr class="separator-modal" />

            <label for="edit-valoare">Actualizează valoare f(n):</label>
            <input id="edit-valoare" type="text" bind:value={valoareCalculataInput} />

            <label for="edit-limita">Setează/Modifică Limita f_limit:</label>
            <input id="edit-limita" type="text" placeholder="Ex: 11 sau lăsați gol" bind:value={limitaInput} />

            <div class="grup-butoane-meniu">
              <button class="btn-salveaza" onclick={salveazaModificariNod}>Salvează Modificări</button>
              <button class="btn-anuleaza" onclick={() => { afiseazaMeniuEditare = false; idNodEditat = null; }}>Închide</button>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <div class="panou-dreapta-noduri">
      <h3>Noduri Disponibile</h3>
      <p class="ajutor-text">Apasă pe nod pentru expandare:</p>
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
  .ecran-complet-student {
    width: 100vw;
    height: 100vh;
    background-color: #f8fafc;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    box-sizing: border-box;
    overflow: hidden;
  }

  :global(:fullscreen) {
    background-color: #f8fafc !important;
    width: 100% !important;
    height: 100% !important;
  }

  .antet-cerinta {
    background-color: #ffffff;
    padding: 20px 30px;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .grup-text-cerinta {
    max-width: 85%;
  }
  .antet-cerinta h2 {
    margin: 0 0 6px 0;
    color: #0A7E8C;
    font-size: 26px;
  }
  .antet-cerinta p {
    margin: 0;
    color: #475569;
    font-size: 15px;
    line-height: 1.5;
  }

  .buton-exit-direct {
    background: #e6f2f4;
    color: #0A7E8C;
    border: none;
    padding: 10px 18px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
  }
  .buton-exit-direct:hover {
    transform: scale(1.05);
  }

  .corp-interactiv {
    flex: 1;
    display: flex;
    overflow: hidden;
    background-color: #f1f5f9;
  }

  .panou-stanga-graf {
    flex: 2.6;
    background-color: #ffffff;
    border-right: 1px solid #e2e8f0;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .panou-stanga-graf h3 {
    margin: 0 0 12px 0;
    font-size: 18px;
    color: #0f172a;
    border-bottom: 2px solid #0A7E8C;
    padding-bottom: 6px;
    width: fit-content;
  }
  
  .container-imagine {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    overflow: hidden;
    width: 100%;
  }
  .container-imagine img {
    width: 100%;
    height: auto;
    max-height: 98%;
    object-fit: contain;
  }

  .zona-desen {
    flex: 2.8;
    background-color: #ffffff;
    position: relative;
    border-right: 1px solid #e2e8f0;
    overflow: hidden;
  }
  .instructiune-scurta {
    position: absolute;
    top: 15px;
    left: 25px;
    font-size: 14px;
    font-weight: bold;
    color: #64748b;
    margin: 0;
    z-index: 10;
  }
  .instructiune-scurta::after {
    content: " | Click-Dreapta pe nod pentru a-l tăia.";
    color: #ef4444;
    font-weight: normal;
  }
  .canvas-legaturi {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .nod-graf-arbore {
    position: absolute;
    min-width: 85px;
    height: 52px;
    background-color: #ffffff;
    border: 3px solid #0A7E8C;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    outline: none;
    padding: 0 12px;
  }
  .nod-graf-arbore.parinte-activ {
    border-color: #ff9800 !important;
    background-color: #fff3e0 !important;
    box-shadow: 0 0 12px #ff9800;
  }

  .nod-graf-arbore.nod-taiat {
    opacity: 0.55;
    border-color: #94a3b8 !important;
    background-color: #f1f5f9 !important;
    box-shadow: none;
  }
  .nod-taiat .nume-nod {
    color: #94a3b8;
  }
  .nod-taiat .valoare-euristica, .nod-taiat .valoare-limita {
    background-color: #94a3b8 !important;
  }
  .linie-rosie-taiere {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #ef4444;
    transform: rotate(-15deg);
    pointer-events: none;
    z-index: 10;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .nume-nod {
    font-weight: bold;
    font-size: 13px;
    color: #0f172a;
    white-space: nowrap;
    margin-bottom: 2px;
  }

  .grup-valori-nod {
    display: flex;
    gap: 4px;
    position: absolute;
    bottom: -11px;
  }

  .valoare-euristica {
    font-size: 9px;
    background-color: #0A7E8C;
    color: white;
    padding: 1px 5px;
    border-radius: 10px;
    font-weight: bold;
    white-space: nowrap;
  }

  .valoare-limita {
    font-size: 9px;
    background-color: #7c3aed; 
    color: white;
    padding: 1px 5px;
    border-radius: 10px;
    font-weight: bold;
    white-space: nowrap;
  }

  .fundal-intunecat-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(2px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .interfata-adaugare-interna {
    width: 340px;
    background-color: #ffffff;
    border-top: 4px solid #0A7E8C;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .btn-seteaza-parinte {
    background-color: #ff9800;
    color: white;
    border: none;
    padding: 12px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.2s;
  }
  .btn-seteaza-parinte:hover {
    background-color: #f57c00;
  }
  
  .separator-modal {
    border: 0;
    height: 1px;
    background: #cbd5e1;
    margin: 8px 0;
  }

  .interfata-adaugare-interna h4 {
    margin: 0 0 2px 0;
    color: #0A7E8C;
    font-size: 16px;
  }
  .info-adaugare {
    margin: 0 0 5px 0;
    font-size: 13px;
    color: #64748b;
  }
  .interfata-adaugare-interna label {
    font-size: 13px;
    font-weight: bold;
    color: #475569;
    margin-top: 4px;
  }
  .interfata-adaugare-interna input {
    padding: 8px 10px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
  }

  .grup-butoane-meniu {
    display: flex;
    gap: 12px;
    margin-top: 14px;
  }
  .btn-salveaza {
    flex: 1;
    background-color: #0A7E8C;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }
  .btn-anuleaza {
    background-color: #e2e8f0;
    color: #475569;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
  }

  .panou-dreapta-noduri {
    flex: 1.2;
    background-color: #f8fafc;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .ajutor-text {
    font-size: 13px;
    color: #64748b;
    margin: 0 0 16px 0;
  }
  .grila-noduri {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .buton-nod-lista {
    background-color: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 5px;
    font-size: 13px;
    font-weight: bold;
    color: #0f172a;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    transition: all 0.2s;
  }
  .buton-nod-lista:hover {
    border-color: #0A7E8C;
    background-color: #f0fdfa;
  }

  .bara-jos {
    background-color: #ffffff;
    padding: 20px 30px;
    border-top: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mesaj-feedback {
    font-size: 16px;
    font-weight: bold;
    color: #0f172a;
  }
  .buton-verifica {
    background-color: #0A7E8C;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
  }
</style>