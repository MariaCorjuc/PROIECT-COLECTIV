<script>
    import { goto } from '$app/navigation';

    let pornit = $state(false);
    
    /** @type {HTMLDivElement | undefined} */
    let zonaProblema = $state(undefined);

    function activeazaFullscreenSiIncepe() {
        if (zonaProblema) {
            zonaProblema.requestFullscreen().then(() => {
                pornit = true; 
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
</script>

<div class="ecran-start" style:display={pornit ? 'none' : 'flex'}>
    <h1>Problema 1: Uniform Cost Search</h1>
    <p>Ești gata să rezolvi problema? Apasă pe buton pentru a deschide exercițiul complet.</p>
    <button class="btn-nav" onclick={activeazaFullscreenSiIncepe}>Începe Exercițiul ⛶</button>
</div>

<div bind:this={zonaProblema} class="container-problema-noua" style:display={pornit ? 'block' : 'none'}>

    <div class="bara-enunt-global">
        
        <div class="continut-text">
            <button class="btn-inapoi" onclick={inapoiLaTeorie}>
                ← Înapoi la pagina UCS
            </button>
            <h1>Problema 2:</h1>
            <p>Fie graful ponderat alăturat; rezolvați problema determinării drumului de cost minim de la nodul de start S la nodul final G aplicând algoritmul de căutare cu cost uniform (UC).</p>
        </div>
        
        <div class="zona-imagine-graf">
            <img src="/poze/poza_ex1_UCS.jpg" alt="Graful problemei UCS" class="poza-graf-noua">
        </div>
        
    </div>

    <div class="spatiu-rezolvare"></div>

</div>

<style>
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
        margin-top: 0;
    }

    .spatiu-rezolvare {
        width: 100%;
        height: calc(100vh - 300px); 
        margin-top: 25px;
        border: 2px dashed #cbd5e1;
        border-radius: 12px;
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
    }

    div:fullscreen {
        display: block !important;
        width: 100vw !important;
        height: 100vh !important;
        background-color: #f4f9fa !important;
    }
</style>