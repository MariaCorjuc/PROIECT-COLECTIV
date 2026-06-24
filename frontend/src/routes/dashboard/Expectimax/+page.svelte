<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  

  let pasCurent = $state(0);
  let esteAnimat = $state(false);
  let intervalId: any = null;
  const totalPasi = 13; 

  let containerReact: HTMLDivElement | undefined = undefined; 
  let rootReact: any = null; 
  let ExpectimaxVisualizerComponent: any = null;
  let ReactInstance: any = null;

  
  function randeazaComponentaReact() {
    if (rootReact && ExpectimaxVisualizerComponent && ReactInstance) {
      rootReact.render(
        ReactInstance.createElement(ExpectimaxVisualizerComponent, { 
          pasCurent: pasCurent,
          key: pasCurent 
        })
      );
    }
  }

  
  $effect(() => {
    pasCurent; 
    randeazaComponentaReact();
  });

  onMount(async () => {
    ReactInstance = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
      ExpectimaxVisualizerComponent = 
        ((await import('$lib/components/ExpectimaxVizualizer')) as any).default;

      if (containerReact) {
        rootReact = createRoot(containerReact);
        randeazaComponentaReact();
      }
    } catch (err) {
      console.error("Eroare la încărcarea Expectimax:", err);
    }
  });

  function pasulUrmator() {
    if (pasCurent < totalPasi) {
      pasCurent++;
    } else {
      opresteAnimatia();
    }
  }

  function pasulAnterior() {
    if (pasCurent > 0) {
      pasCurent--;
    }
  }

  function reseteaza() {
    opresteAnimatia();
    pasCurent = 0;
  }

  function comutaAnimatia() {
    if (esteAnimat) {
      opresteAnimatia();
    } else {
      esteAnimat = true;
      intervalId = setInterval(pasulUrmator, 1500);
    }
  }

  function opresteAnimatia() {
    esteAnimat = false;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  onDestroy(() => {
    opresteAnimatia();
    if (rootReact && typeof rootReact.unmount === 'function') {
      rootReact.unmount();
    }
  });
</script>

<div class="pagina-container">

   <div class="container-buton-probleme">
      <a href="/dashboard/Expectimax/probleme" class="buton-probleme">
         Probleme
      </a>
   </div>

   <div class="textAlgoritm">
      Expectimax
   </div>

   <div class="container-cerinta">
      <div class="textProblema">
         Aplicați strategia de căutare
         Expectimax pe arborii de mai jos.
         <br/><br/>
         Nodurile șansă sunt reprezentate
         de nodurile de pe nivelul MIN (CHANCE).
      </div>

      <img
         src="/poze/expectimax.png"
         alt="Arbore Expectimax"
         class="poza-graf"
      >
   </div>

   <div class="panou-simulare-controale">
      <button class="btn-interact" onclick={pasulAnterior} disabled={pasCurent === 0}>
        Pasul anterior
      </button>
      
      <button class="btn-interact btn-toggle {esteAnimat ? 'stop' : 'start'}" onclick={comutaAnimatia}>
        {esteAnimat ? 'Stop' : 'Start'}
      </button>
      
      <button class="btn-interact" onclick={pasulUrmator} disabled={pasCurent === totalPasi}>
        Pasul următor
      </button>
      
      <button class="btn-interact" onclick={reseteaza}>
        Resetează
      </button>
      
      <span class="indicator-pasi">
        Pas curent: <strong>{pasCurent} / {totalPasi}</strong>
      </span>
   </div>

   <div
      class="zona-arbore-jos"
      bind:this={containerReact}
   ></div>

</div>

<style>
  .panou-simulare-controale {
     display: flex;
     gap: 12px;
     align-items: center;
     background-color: #f1f5f9;
     border: 1px solid #cbd5e1;
     padding: 14px 24px;
     border-radius: 12px 12px 0 0;
     width: 100%;
     box-sizing: border-box;
  }

  .btn-interact {
     padding: 8px 18px;
     font-family: sans-serif;
     font-weight: bold;
     font-size: 14px;
     border-radius: 6px;
     border: 1px solid #94a3b8;
     background-color: #2a6f97;
     color: white;
     cursor: pointer;
     transition: all 0.2s;
  }

  .btn-interact:hover:not(:disabled) {
     background-color: #014f86;
  }

  .btn-interact:disabled {
     opacity: 0.4;
     cursor: not-allowed;
  }

  .btn-toggle.start {
     background-color: #a7c957;
     color: #1b4332;
  }

  .btn-toggle.stop {
     background-color: #bc4749;
     color: white;
  }

  .indicator-pasi {
     margin-left: auto;
     font-family: sans-serif;
     font-size: 14px;
     color: #475569;
  }

  .container-buton-probleme {
     width: 100%;
     display: flex;
     justify-content: flex-end;
     padding-right: 20px;
     box-sizing: border-box;
  }

  .buton-probleme {
     background-color: #0A7E8C;
     color: white;
     font-family: sans-serif;
     font-weight: bold;
     font-size: 16px;
     padding: 10px 25px;
     border-radius: 8px;
     text-decoration: none;
  }

  .pagina-container {
     width: 100%;
     box-sizing: border-box;
     padding-top: 20px;
  }

  .textAlgoritm {
     color: #0A7E8C;
     font-weight: bold;
     text-align: center;
     font-family: sans-serif;
     font-size: 50px;
     margin: 0 0 30px 0;
  }
  
  .textProblema {
     color: #1a2426;
     font-family: sans-serif;
     font-size: 20px;
     line-height: 1.6;
     max-width: 550px;
  }
      
  .container-cerinta {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: 40px;
     margin-bottom: 40px;
  }

  .poza-graf {
     max-width: 55%;
     height: auto;
     border-radius: 12px;
  }

  .zona-arbore-jos {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     box-sizing: border-box;
     min-height: 520px;
     border: 1px solid #cbd5e1;
     border-top: none;
     background: #ffffff;
     border-radius: 0 0 12px 12px;
     padding: 20px;
  }
</style>