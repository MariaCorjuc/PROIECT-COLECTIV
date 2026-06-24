<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { calculeazaPunctajUCS, raspunsCorect } from './dateArbore.js';

    let pornit = $state(false);
    let statusValidare = $state(''); 
    
    let dejaRezolvata = $state(false);

    onMount(() => {
        if (localStorage.getItem('problema_1_ucs_rezolvata') === 'true') {
            dejaRezolvata = true;
        }

        const handleFullscreenChange = () => {
            if (!document.fullscreenElement && pornit) {
                inapoiLaTeorie();
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    });

    /** @type {HTMLDivElement | undefined} */
    let zonaProblema = $state(undefined);

    const toateNodurile = ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    /** @type {string | null} */
    let nodSursaSelectat = $state(null); 
    /** @type {string | null} */
    let nodTintaSelectat = $state(null); 
    let valoareIntrodusa = $state('');
    let asteaptaValoare = $state(false);

    let idCounter = 0;

    /** @type {string[]} */
    let drumStudent = $state([]);        
    let celMaiBunPunctaj = $state(0);    
    let punctajCurent = $state(0);       
    let mesajFeedback = $state("");     

    /** @type {Array<{idUnique: string, label: string, x: number, y: number}>} */
    let noduriDesenate = $state([
        { idUnique: 'S_0', label: 'S', x: 400, y: 60 }
    ]);

    /** @type {Array<{deLaUnique: string, laUnique: string, cost: number}>} */
    let muchiiDesenate = $state([]); 

    let scale = $state(1);
    let panX = $state(0);
    let panY = $state(0);
    let isDragging = $state(false);
    let startX = 0;
    let startY = 0;

    /** @type {string[]} */
    let idNoduriVizitate = $state([]);

    function activeazaFullscreenSiIncepe() {
        if (zonaProblema) {
            zonaProblema.requestFullscreen().then(() => {
                pornit = true; 
                resetZoom(); 
            }).catch(err => {
                console.error("Eroare:", err);
                pornit = true;
            });
        }
    }

    function inapoiLaTeorie() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        pornit = false;
        goto('/dashboard/UCS'); 
    }

    /** @param {WheelEvent} e */
    function handleWheel(e) {
        e.preventDefault();
        const zoomFactor = 0.05;
        if (e.deltaY < 0) {
            scale = Math.min(scale + zoomFactor, 2); 
        } else {
            scale = Math.max(scale - zoomFactor, 0.4); 
        }
    }

    /** @param {MouseEvent} e */
    function handleMouseDown(e) {
        if (e.target && /** @type {HTMLElement} */(e.target).closest('.controale-zoom')) return;
        
        isDragging = true;
        startX = e.clientX - panX;
        startY = e.clientY - panY;
    }

    /** @param {MouseEvent} e */
    function handleMouseMove(e) {
        if (!isDragging) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
    }

    function handleMouseUp() {
        isDragging = false;
    }

    function zoomIn() { scale = Math.min(scale + 0.1, 2); }
    function zoomOut() { scale = Math.max(scale - 0.1, 0.4); }
    function resetZoom() {
        scale = 1;
        panX = 0;
        panY = 0;
    }

    /** @param {string} uniqueId */
    function selecteazaNodSursa(uniqueId) {
        if (asteaptaValoare || statusValidare !== '' || dejaRezolvata) return; 
        if (nodSursaSelectat === uniqueId) {
            nodSursaSelectat = null; 
        } else {
            nodSursaSelectat = uniqueId;
        }
    }

    /** @param {string} nodLabel */
    function selecteazaNodTinta(nodLabel) {
        if (!nodSursaSelectat || asteaptaValoare || statusValidare !== '' || dejaRezolvata) return; 
        
        const sursa = noduriDesenate.find(n => n.idUnique === nodSursaSelectat);
        if (sursa && sursa.label === nodLabel) return;

        nodTintaSelectat = nodLabel;
        asteaptaValoare = true; 
    }

    function adaugaConexiune() {
        if (!valoareIntrodusa || isNaN(Number(valoareIntrodusa)) || !nodTintaSelectat || !nodSursaSelectat) {
            alert("Te rog introdu un număr valid.");
            return;
        }

        const parinte = noduriDesenate.find(n => n.idUnique === nodSursaSelectat);
        if (!parinte) return;

        idCounter++;
        const noulIdUnic = `${nodTintaSelectat}_${idCounter}`;

        const copiiExistenti = muchiiDesenate.filter(m => m.deLaUnique === nodSursaSelectat).length;
        
        const nivel = Math.round((parinte.y - 60) / 90);
        const yAutomat = parinte.y + 90; 
        
        const distantaOrizontala = nivel === 0 ? 160 : 65;  

        let xDecalaj = 0;
        if (copiiExistenti === 0) {
            xDecalaj = -distantaOrizontala; 
        } else if (copiiExistenti === 1) {
            xDecalaj = distantaOrizontala;  
        } else {
            xDecalaj = (copiiExistenti % 2 === 0) ? -(distantaOrizontala + 30) : (distantaOrizontala + 30);
        }

        const xAutomat = parinte.x + xDecalaj;

        noduriDesenate.push({ idUnique: noulIdUnic, label: nodTintaSelectat, x: xAutomat, y: yAutomat });

        muchiiDesenate.push({
            deLaUnique: nodSursaSelectat,
            laUnique: noulIdUnic,
            cost: Number(valoareIntrodusa)
        });

        if (!idNoduriVizitate.includes(nodSursaSelectat)) {
            idNoduriVizitate = [...idNoduriVizitate, nodSursaSelectat];
        }

        drumStudent = [...drumStudent, nodTintaSelectat];

        nodSursaSelectat = null;
        nodTintaSelectat = null;
        valoareIntrodusa = '';
        asteaptaValoare = false;
    }

    function anuleazaConexiune() {
        nodSursaSelectat = null;
        nodTintaSelectat = null;
        valoareIntrodusa = '';
        asteaptaValoare = false;
    }

    function marcheazaDrumInchis() {
        if (!nodSursaSelectat || statusValidare !== '' || dejaRezolvata) return;

        const nodCurent = noduriDesenate.find(n => n.idUnique === nodSursaSelectat);
        if (!nodCurent) return;

        if (!idNoduriVizitate.includes(nodSursaSelectat)) {
            idNoduriVizitate = [...idNoduriVizitate, nodSursaSelectat];
        }

        drumStudent = [...drumStudent, nodCurent.label];
        nodSursaSelectat = null;
    }

    const verificaRezolvare = async () => {
        if (dejaRezolvata) return;

        let listaRezultat = ['S'];

        muchiiDesenate.forEach(muchie => {
            const nodTinta = noduriDesenate.find(n => n.idUnique === muchie.laUnique);
            if (nodTinta) {
                listaRezultat.push(nodTinta.label);
            }
        });

        let scorCalculat = calculeazaPunctajUCS(listaRezultat);

        if (scorCalculat === 100) {
            punctajCurent = 100;
            statusValidare = 'corect';
            mesajFeedback = "🎉 Excelent! Ai aplicat corect algoritmul UCS pe acest graf.";
            
            localStorage.setItem('problema_1_ucs_rezolvata', 'true');
            dejaRezolvata = true;
        } else {
            punctajCurent = 0;
            statusValidare = 'incorect';
            mesajFeedback = "❌ Structura arborelui sau costurile sunt greșite. Mai încearcă!";
        }

        if (punctajCurent > celMaiBunPunctaj) {
            celMaiBunPunctaj = punctajCurent;
        }

        try {
            const userEmail = localStorage.getItem('userEmail') || 'student_test@example.com';

            const response = await fetch('http://localhost:8080/api/update-points', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userEmail,
                    points: punctajCurent
                })
            });

            if (!response.ok) {
                console.error("Eroare la trimiterea punctajului către server:", response.status);
            }
        } catch (error) {
            console.error("Nu s-a putut contacta backend-ul pentru actualizarea punctajului:", error);
        }
    };

    function restartProblema() {
        if (dejaRezolvata) return; 
        idCounter = 0;
        noduriDesenate = [{ idUnique: 'S_0', label: 'S', x: 400, y: 60 }];
        muchiiDesenate = [];
        drumStudent = [];
        idNoduriVizitate = []; 
        punctajCurent = 0;
        statusValidare = '';
        mesajFeedback = "";
        resetZoom();
    }
</script>

<div class="ecran-start" style:display={pornit ? 'none' : 'flex'}>
    <h1>Problema 1: Uniform Cost Search</h1>
    {#if dejaRezolvata}
        <p style="color: #10b981; font-weight: bold;">✓ Ai rezolvat deja această problemă cu succes și ai obținut punctajul maxim.</p>
    {:else}
        <p>Ești gata să rezolvi problema? Apasă pe buton pentru a deschide exercițiul complet.</p>
    {/if}
    <button class="btn-nav" onclick={activeazaFullscreenSiIncepe}>
        {dejaRezolvata ? 'Vizualizează Exercițiul ⛶' : 'Începe Exercițiul ⛶'}
    </button>
</div>

<div bind:this={zonaProblema} class="container-problema-noua" style:display={pornit ? 'block' : 'none'}>

    <div class="bara-enunt-global">
        <div class="continut-text">
            <button class="btn-inapoi" onclick={inapoiLaTeorie}>
                ← Înapoi la pagina UCS
            </button>
            <h1>Problema 1:</h1>
            <p>Fie graful ponderat alăturat; rezolvați problema determinării drumului de cost minim de la nodul de start S la nodul final G aplicând algoritmul de căutare cu cost uniform (UCS). Atunci când introduceți copiii unui nod, aceștia se vor genera în ordine alfabetică.</p>
        </div>
        
        <div class="zona-imagine-graf">
            <img src="/poze/poza_ex1_UCS.jpg" alt="Graful problemei UCS" class="poza-graf-noua">
        </div>
    </div>

    <div class="spatiu-rezolvare">
        
        <div class="rezolvare-graf" aria-label="Zonă interactivă pentru desenarea și mutarea grafului">
            <div class="controale-zoom">
                <button onclick={zoomIn} title="Zoom In">+</button>
                <button onclick={zoomOut} title="Zoom Out">-</button>
                <button onclick={resetZoom} class="btn-reset-zoom">Reset ⟲</button>
            </div>

            <svg
                class="canvas-graf"
                role="application"
                aria-label="Canvas pentru desenarea grafului"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid meet"
                onwheel={handleWheel}
                onmousedown={handleMouseDown}
                onmousemove={handleMouseMove}
                onmouseup={handleMouseUp}
                onmouseleave={handleMouseUp}
            >
                <g transform="translate({panX}, {panY}) scale({scale})">
                    
                    {#each muchiiDesenate as muchie}
                        {@const n1 = noduriDesenate.find(n => n.idUnique === muchie.deLaUnique)}
                        {@const n2 = noduriDesenate.find(n => n.idUnique === muchie.laUnique)}
                        {#if n1 && n2}
                            <line x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="#0A7E8C" stroke-width="3" />
                            <rect x={(n1.x + n2.x)/2 - 14} y={(n1.y + n2.y)/2 - 14} width="28" height="24" rx="4" fill="#ffffff" stroke="#0A7E8C"/>
                            <text x={(n1.x + n2.x)/2} y={(n1.y + n2.y)/2 + 4} text-anchor="middle" font-size="12" font-weight="bold" fill="#2c3e50">{muchie.cost}</text>
                        {/if}
                    {/each}

                    {#each noduriDesenate as nod}
                        <circle 
                            cx={nod.x} 
                            cy={nod.y} 
                            r="22" 
                            role="button"
                            tabindex="0"
                            aria-label="Selectează nodul {nod.label}"
                            class="nod-desenat"
                            class:sursa-activa={nodSursaSelectat === nod.idUnique}
                            class:vizitat={idNoduriVizitate.includes(nod.idUnique)} 
                            onclick={() => selecteazaNodSursa(nod.idUnique)}
                            onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') selecteazaNodSursa(nod.idUnique); }}
                        />
                        <text x={nod.x} y={nod.y + 5} text-anchor="middle" fill="white" font-weight="bold" style="pointer-events: none;">
                            {nod.label}
                        </text>
                    {/each}

                </g>
            </svg>
        </div>

        <div class="cadran-noduri">
            <div class="widget-scor-permanent">
                🏅 Punctaj: <strong>{dejaRezolvata ? 100 : celMaiBunPunctaj} / 100 puncte</strong>
            </div>

            <h3>Noduri Disponibile</h3>
            <p class="subtitlu">Selectează un nod destinație</p>
            
            <div class="grid-noduri">
                {#each toateNodurile as nod}
                    <button 
                        class="btn-nod" 
                        class:dezactivat={!nodSursaSelectat || statusValidare !== '' || dejaRezolvata}
                        class:tinta-activa={nodTintaSelectat === nod}
                        onclick={() => selecteazaNodTinta(nod)}
                        disabled={!nodSursaSelectat || asteaptaValoare || statusValidare !== '' || dejaRezolvata}
                    >
                        {nod}
                    </button>
                {/each}
            </div>

            {#if asteaptaValoare}
                <div class="zona-introducere-cost">
                    <p>Introdu costul dintre <strong>{noduriDesenate.find(n => n.idUnique === nodSursaSelectat)?.label}</strong> și <strong>{nodTintaSelectat}</strong>:</p>
                    <input type="number" bind:value={valoareIntrodusa} placeholder="Ex: 4" min="0" />
                    <div class="grup-actiuni-cost">
                        <button class="btn-adauga" onclick={adaugaConexiune}>Adaugă în desen</button>
                        <button class="btn-anuleaza" onclick={anuleazaConexiune}>Anulează</button>
                    </div>
                </div>
            {/if}

            {#if nodSursaSelectat && !asteaptaValoare && statusValidare === '' && !dejaRezolvata}
                <div class="zona-inchidere-drum">
                    <button class="btn-inchide-drum" onclick={marcheazaDrumInchis}>
                        Marchează ca drum închis / vizitat
                    </button>
                </div>
            {/if}

            <div class="zona-control-jos">
                {#if dejaRezolvata}
                    <div class="mesaj-succes">
                        🎉 Ai rezolvat deja această problemă cu succes în trecut! Nu o mai poți modifica.
                        <p class="puncte-info">Puncte obținute: 100 puncte.</p>
                    </div>
                {:else if statusValidare === 'incorect'}
                    <div class="mesaj-eroare">
                        {mesajFeedback}
                        <p class="puncte-info">Puncte obținete: {punctajCurent} puncte.</p>
                        <button class="btn-urmator-eroare" onclick={restartProblema}>Reîncearcă exercițiul ⟲</button>
                    </div>
                {/if}

                {#if statusValidare === '' && !dejaRezolvata}
                    <div class="butoane-principale-sub-cadran">
                        <button class="btn-verifica" onclick={verificaRezolvare} disabled={muchiiDesenate.length === 0}>
                            Verifică
                        </button>
                        <button class="btn-restart-oricand" onclick={restartProblema}>
                            Restart ⟲
                        </button>
                    </div>
                {/if}
            </div>

        </div>
    </div>

</div>

<style>
    .zona-inchidere-drum {
        margin-top: 10px;
        margin-bottom: 20px;
        width: 100%;
    }
    .btn-inchide-drum {
        width: 100%;
        background-color: #475569;
        color: white;
        border: none;
        padding: 12px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s;
    }
    .btn-inchide-drum:hover {
        background-color: #334155;
    }

    .widget-scor-permanent {
        background: #f1f5f9;
        border: 1px solid #cbd5e1;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 14px;
        color: #334155;
        margin-bottom: 20px;
        text-align: center;
    }
    .puncte-info {
        margin: 4px 0;
        font-size: 14px;
        font-style: italic;
    }
    .btn-urmator-eroare {
        background: #991b1b;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 5px;
        font-weight: bold;
    }
    .btn-verifica:disabled {
        background: #94a3b8;
        cursor: not-allowed;
    }
    .ecran-start {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 70vh; 
        font-family: sans-serif;
    }
    .container-problema-noua {
        width: 100vw;
        height: 100vh;
        background-color: #f4f9fa;
        padding: 30px;
        box-sizing: border-box;
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
    }
    div:fullscreen {
        display: flex !important;
        flex-direction: column !important;
        width: 100vw !important;
        height: 100vh !important;
        background-color: #f4f9fa !important;
    }
    .bara-enunt-global {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        background: #ffffff;
        padding: 25px 30px;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        width: 100%;
        box-sizing: border-box;
        gap: 40px;
    }
    .continut-text {
        flex: 1.3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .continut-text h1 {
        margin: 20px 0 8px 0;
        color: #0A7E8C;
        font-size: 24px;
        font-weight: 700;
    }
    .continut-text p {
        font-size: 16px;
        line-height: 1.6;
        color: #34495e;
        margin: 0;
    }
    .zona-imagine-graf {
        flex: 1;
        max-width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .poza-graf-noua {
        width: 100%;
        height: auto;
        max-height: 180px; 
        object-fit: contain;
        border-radius: 8px;
    }
    .btn-nav, .btn-inapoi {
        background: #0A7E8C;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
    }
    .spatiu-rezolvare {
        display: flex;
        width: 100%;
        flex: 1;
        margin-top: 25px;
        gap: 25px;
        min-height: 0;
    }
    .rezolvare-graf {
        flex: 1.5;
        border: 2px dashed #cbd5e1;
        border-radius: 12px;
        background: #ffffff;
        position: relative;
        overflow: hidden; 
    }
    .controale-zoom {
        position: absolute;
        top: 15px;
        left: 15px;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .controale-zoom button {
        background: #ffffff;
        border: 1px solid #cbd5e1;
        color: #334155;
        width: 36px;
        height: 36px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0,0,0,0.06);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }
    .controale-zoom button:hover {
        background: #f8fafc;
        border-color: #94a3b8;
    }
    .controale-zoom .btn-reset-zoom {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
    }
    .canvas-graf {
        width: 100%;
        height: 100%;
        display: block;
        background: #ffffff;
    }
    .nod-desenat {
        fill: #3b5998;
        cursor: pointer;
        transition: fill 0.2s;
    }
    .nod-desenat:hover {
        opacity: 0.9;
    }
    .nod-desenat.sursa-activa {
        fill: #e11d48 !important;
        stroke: #fecdd3;
        stroke-width: 4px;
    }
    .nod-desenat.vizitat {
        fill: #10b981 !important;
        stroke: #059669;
        stroke-width: 2px;
    }
    .cadran-noduri {
        flex: 1;
        background: #ffffff;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        display: flex;
        flex-direction: column;
        border: 1px solid #e2e8f0;
    }
    .cadran-noduri h3 {
        margin: 0 0 5px 0;
        color: #2c3e50;
    }
    .cadran-noduri .subtitlu {
        font-size: 13px;
        color: #64748b;
        margin: 0 0 20px 0;
    }
    .grid-noduri {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        margin-bottom: 20px;
    }
    .btn-nod {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        color: #334155;
        padding: 15px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn-nod.dezactivat {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .btn-nod.tinta-activa {
        background: #0A7E8C !important;
        color: white;
    }
    .zona-introducere-cost {
        background: #f0fdfa;
        border: 1px solid #99f6e4;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
    }
    .zona-introducere-cost p {
        margin: 0 0 10px 0;
        font-size: 14px;
        color: #0f766e;
    }
    .zona-introducere-cost input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccfbf1;
        border-radius: 6px;
        box-sizing: border-box;
        margin-bottom: 12px;
    }
    .grup-actiuni-cost {
        display: flex;
        gap: 10px;
    }
    .btn-adauga {
        background: #0A7E8C;
        color: white;
        border: none;
        padding: 8px 14px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
    }
    .btn-anuleaza {
        background: #e2e8f0;
        color: #475569;
        border: none;
        padding: 8px 14px;
        border-radius: 6px;
    }
    .zona-control-jos {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .butoane-principale-sub-cadran {
        display: flex;
        gap: 12px;
        width: 100%;
    }
    .btn-verifica {
        flex: 1; 
        background: #10b981;
        color: white;
        border: none;
        padding: 14px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn-restart-oricand {
        flex: 1;
        background: #ef4444;
        color: white;
        border: none;
        padding: 14px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s;
    }
    .btn-restart-oricand:hover {
        background: #dc2626;
    }
    .mesaj-succes {
        background: #d1fae5;
        color: #065f46;
        padding: 12px;
        border-radius: 8px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .mesaj-eroare {
        background: #fee2e2;
        color: #991b1b;
        padding: 12px;
        border-radius: 8px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>