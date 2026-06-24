<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  let containerReact: HTMLDivElement | undefined = undefined;
  let rootReact: any = null;

  onMount(async () => {
    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');

    const BfsVisualizer =
      ((await import('$lib/components/BFSVisualizer.jsx')) as any).default;

    if (containerReact) {
      rootReact = createRoot(containerReact);
      rootReact.render(
        React.createElement(BfsVisualizer)
      );
    }
  });

  onDestroy(() => {
    rootReact?.unmount();
  });

  function mergiLaProbleme() {
    goto('/dashboard/BFS/probleme');
  }
</script>

<div class="pagina-container">
  
  <div class="textAlgoritm">Vizualizare Algoritm</div>

  <div class="panou-alb">
    
    <button class="btn-probleme-colt" on:click={mergiLaProbleme}>
      Probleme
    </button>

    <h1 class="titlu-principal">Breadth-First Search (BFS)</h1>

    <div class="continut-split">
      
      <div class="text-sectiune">
        <p>
          În această problemă starea de start este București, iar starea obiectiv este Sighișoara. 
          Costurile de tranziție sunt scrise pe muchii, iar estimarea euristică, h, a distanței de la start la obiectiv este scrisă în listă.
        </p>
        <p>
          Să presupunem că legăturile sunt întotdeauna rupte prin alegerea stării care urmează mai întâi în ordine alfabetică.
        </p>
      </div>

      <div class="graf-sectiune">
        <img
          src="/poze/BFS.png"
          alt="Graful problemei BFS"
          class="poza-graf"
        />
      </div>

    </div>

    <div class="zona-arbore-jos" bind:this={containerReact}></div>

  </div>
</div>

<style>
  /* Structura de bază a paginii */
  .pagina-container {
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    background: #e2e8f0; 
    min-height: 100vh;
    font-family: system-ui, -apple-system, sans-serif;
  }

  
  .textAlgoritm {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 16px;
    padding-left: 4px;
  }

  
  .panou-alb {
    background: #ffffff;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }

  /* Butonul de probleme din colțul dreapta sus al panoului */
  .btn-probleme-colt {
    position: absolute;
    top: 30px;
    right: 40px;
    padding: 10px 24px;
    background-color: #0A7E8C;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .btn-probleme-colt:hover {
    background-color: #086b77;
  }

  
  .titlu-principal {
    color: #0A7E8C;
    font-size: 44px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 40px;
  }

  /* Alinierea flexibilă: stânga text, dreapta imaginea */
  .continut-split {
    display: flex;
    gap: 48px;
    align-items: center;
    margin-bottom: 40px;
  }

  /* Caseta text  */
  .text-sectiune {
    flex: 1;
    color: #334155;
    font-size: 18px;
    line-height: 1.7;
    text-align: left;
  }

  .text-sectiune p {
    margin-bottom: 16px;
  }

  /* imaginea */
  .graf-sectiune {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .poza-graf {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
  }

 
  .zona-arbore-jos {
    width: 100%;
    min-height: 450px;
    margin-top: 30px;
    border-top: 1px dashed #e2e8f0;
    padding-top: 20px;
  }
</style>