<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  let containerLaborator: HTMLDivElement | undefined = undefined;

  interface NodArbore {
    id: number;
    eticheta: string;
    euristica: string;
    parinteId: number | null;
  }

  const problema2 = {
    titlu: "Problema 2: Căutare A* (Ruta Sighișoara)",
    cerinta: "Folosind harta și tabelul de euristici din imaginea din stânga, reconstruiți arborele de căutare A* rezultat. Starea de start este București, iar starea obiectiv este Sighișoara. În caz de egalitate a valorii f(n) = g(n) + h(n), nodurile se aleg în ordine alfabetică.",
    noduriDisponibile: ['București', 'Buzău', 'Pitești', 'Târgoviște', 'Brașov', 'Făgăraș', 'Râmnicu Vâlcea', 'Sibiu', 'Mediaș', 'Sighișoara'],
    
    solutiePerfecta: [
      { nod: 'București', parinte: null, valoare: '223' },
      { nod: 'Buzău', parinte: 'București', valoare: '306' },
      { nod: 'Pitești', parinte: 'București', valoare: '269' },
      { nod: 'Târgoviște', parinte: 'București', valoare: '232' },

      { nod: 'București', parinte: 'Târgoviște', valoare: '379' },
      { nod: 'Buzău', parinte: 'Târgoviște', valoare: '393' },
      { nod: 'Brașov', parinte: 'Târgoviște', valoare: '291' },
      { nod: 'Făgăraș', parinte: 'Târgoviște', valoare: '305' },

      { nod: 'București', parinte: 'Pitești', valoare: '457' },
      { nod: 'Râmnicu Vâlcea', parinte: 'Pitești', valoare: '307' },

      { nod: 'Făgăraș', parinte: 'Brașov', valoare: '314' },
      { nod: 'Târgoviște', parinte: 'Brașov', valoare: '482' },
 
      { nod: 'Sighișoara', parinte: 'Făgăraș', valoare: '342' },
      { nod: 'Brașov', parinte: 'Făgăraș', valoare: '416' },
      { nod: 'Târgoviște', parinte: 'Făgăraș', valoare: '598' },

      { nod: 'București', parinte: 'Buzău', valoare: '441' },
      { nod: 'Târgoviște', parinte: 'Buzău', valoare: '381' },

      { nod: 'Sibiu', parinte: 'Râmnicu Vâlcea', valoare: '345' },
      { nod: 'Pitești', parinte: 'Râmnicu Vâlcea', valoare: '391' },

      { nod: 'Brașov', parinte: 'Făgăraș', valoare: '425' },
      { nod: 'Târgoviște', parinte: 'Făgăraș', valoare: '607' },
      { nod: 'Sighișoara', parinte: 'Făgăraș', valoare: '351' }
    ]
  };

  let noduriArbore = $state<Array<NodArbore>>([]);
  let idContor = $state(0);
  let exercitiuCorectat = $state(false);
  let mesajRezultat = $state("");

  let parinteIdSelectat = $state<number | null>(null); 
  let afiseazaMeniuAdaugare = $state(false);
  let nodSelectatPentruAdaugare = $state("");
  let valoareCalculataInput = $state("");

  function iesireManuala() {
    document.removeEventListener('fullscreenchange', detecteazaIesireFullscreen);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    goto('/dashboard/A');
  }

  function detecteazaIesireFullscreen() {
    if (!document.fullscreenElement) {
      goto('/dashboard/A');
    }
  }

  onMount(() => {
    noduriArbore = [{ id: idContor++, eticheta: 'București', euristica: '223', parinteId: null }];
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

  function selecteazaParinteDinDesen(idNod: number) {
    parinteIdSelectat = idNod;
  }

  function cereAdaugareDinLista(eticheta: string) {
    if (parinteIdSelectat === null) {
      alert("Te rugăm să selectezi mai întâi nodul părinte făcând click pe el în desenul din centru!");
      return;
    }
    nodSelectatPentruAdaugare = eticheta;
    valoareCalculataInput = "";
    afiseazaMeniuAdaugare = true;
  }

  function salveazaNodInArbore() {
    noduriArbore = [...noduriArbore, {
      id: idContor++,
      eticheta: nodSelectatPentruAdaugare,
      euristica: valoareCalculataInput.trim(),
      parinteId: parinteIdSelectat
    }];
    afiseazaMeniuAdaugare = false;
  }

  function anuleazaAdaugare() {
    afiseazaMeniuAdaugare = false;
  }

  async function acordaPuncte(puncte: number) {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      console.error("❌ Nu s-a găsit cheia 'userEmail' în localStorage!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/update-points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          points: puncte
        })
      });

      if (!response.ok) {
        console.error("❌ Serverul a întors eroare la salvarea punctelor pentru Exercițiul 2.");
      } else {
        console.log("✅ Punctele pentru Exercițiul 2 au fost stocate.");
      }
    } catch (err) {
      console.error("❌ Eroare de rețea backend:", err);
    }
  }

  async function verificaRezolvare() {
    // 1. Verificăm mai întâi dacă numărul total de noduri coincide
    if (noduriArbore.length !== problema2.solutiePerfecta.length) {
      exercitiuCorectat = true;
      mesajRezultat = "❌ Incorect (Număr incorect de noduri în arbore)";
      return;
    }

    let totulEsteCorect = true;

    // 2. Verificăm nod cu nod, exact în ordinea în care au fost introduse
    for (let i = 0; i < problema2.solutiePerfecta.length; i++) {
      const sol = problema2.solutiePerfecta[i];
      const nodStudent = noduriArbore[i]; // Luăm nodul de pe aceeași poziție

      // Verificăm eticheta nodului curent
      if (nodStudent.eticheta.toUpperCase() !== sol.nod.toUpperCase()) {
        totulEsteCorect = false;
        break;
      }

      // Verificăm valoarea f(n)
      if (nodStudent.euristica.trim() !== sol.valoare) {
        totulEsteCorect = false;
        break;
      }

      // Verificăm părintele
      if (sol.parinte === null) {
        if (nodStudent.parinteId !== null) {
          totulEsteCorect = false;
          break;
        }
      } else {
        if (nodStudent.parinteId === null) {
          totulEsteCorect = false;
          break;
        }
        const p = gasesteNod(nodStudent.parinteId);
        if (!p || p.eticheta.toUpperCase() !== sol.parinte.toUpperCase()) {
          totulEsteCorect = false;
          break;
        }
      }
    }

    exercitiuCorectat = true;
    if (totulEsteCorect) {
      mesajRezultat = "🎉 Excelent!";
      await acordaPuncte(100);
    } else {
      mesajRezultat = "❌ Incorect (Verifică valorile sau ordinea extinderii)";
    }
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
</script>

<div class="ecran-complet-student" bind:this={containerLaborator}>
  
  <div class="antet-cerinta">
    <div class="grup-text-cerinta">
      <h2>{problema2.titlu}</h2>
      <p>{problema2.cerinta}</p>
    </div>
    <button class="buton-exit-direct" onclick={iesireManuala}>Exit ✕</button>
  </div>

  <div class="corp-interactiv">
    
    <div class="panou-stanga-graf">
      <h3>Hartă și Euristici</h3>
      <div class="container-imagine">
        <img src="/poze/AEX2.png" alt="Graful hărții cu euristici România" />
      </div>
    </div>

    <div class="zona-desen">
      <p class="instructiune-scurta">Indicație: Click pe nodul părinte din arbore, apoi alege orașul fiu din dreapta.</p>
      
      <svg class="canvas-legaturi">
      {#each noduriArbore as nod}
        {#if nod.parinteId !== null && gasesteNod(nod.parinteId)}
          {@const pozCopil = calculeazaPozitie(nod.id, 650)}
          {@const pozParinte = calculeazaPozitie(nod.parinteId, 650)}
          <line x1={pozParinte.x} y1={pozParinte.y} x2={pozCopil.x} y2={pozCopil.y} stroke="#0A7E8C" stroke-width="3" />
          <circle cx={pozCopil.x} cy={pozCopil.y} r="5" fill="#0A7E8C" />
        {/if}
      {/each}  </svg>

      {#each noduriArbore as nod}
        {@const poz = calculeazaPozitie(nod.id, 650)}
        <button 
          class="nod-graf-arbore {parinteIdSelectat === nod.id ? 'parinte-activ' : ''}" 
          style="left: {poz.x}px; top: {poz.y}px;"
          onclick={() => selecteazaParinteDinDesen(nod.id)}
        >
          <span class="nume-nod">{nod.eticheta}</span>
          {#if nod.euristica}
            <span class="valoare-euristica">{nod.euristica}</span>
          {/if}
        </button>
      {/each}

      {#if afiseazaMeniuAdaugare}
        <div class="fundal-intunecat-modal">
          <div class="interfata-adaugare-interna">
            <h4>Adaugă sub {noduriArbore.find(n => n.id === parinteIdSelectat)?.eticheta}</h4>
            <p class="info-adaugare">Oraș succesor selectat: <strong>{nodSelectatPentruAdaugare}</strong></p>

            <label for="input-valoare">Valoare calculată f(n) = g(n) + h(n):</label>
            <input id="input-valoare" type="text" placeholder="Introduceți valoarea f(n)" bind:value={valoareCalculataInput} />

            <div class="grup-butoane-meniu">
              <button class="btn-salveaza" onclick={salveazaNodInArbore}>Confirmă</button>
              <button class="btn-anuleaza" onclick={anuleazaAdaugare}>Anulează</button>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <div class="panou-dreapta-noduri">
      <h3>Orașe Disponibile</h3>
      <p class="ajutor-text">Apasă pe nod pentru expandare:</p>
      <div class="grila-noduri">
        {#each problema2.noduriDisponibile as nodEticheta}
          <button 
            class="buton-nod-lista" 
            onclick={() => cereAdaugareDinLista(nodEticheta)}
          >
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
    min-width: 75px;
    height: 48px;
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
    padding: 0 10px;
  }
  .nod-graf-arbore.parinte-activ {
    border-color: #ff9800 !important;
    background-color: #fff3e0 !important;
    box-shadow: 0 0 12px #ff9800;
  }
  .nume-nod {
    font-weight: bold;
    font-size: 13px;
    color: #0f172a;
    white-space: nowrap;
  }
  .valoare-euristica {
    font-size: 10px;
    background-color: #0A7E8C;
    color: white;
    padding: 1px 6px;
    border-radius: 20px;
    position: absolute;
    bottom: -11px;
    font-weight: bold;
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
    margin-top: 10px;
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