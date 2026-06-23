<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount, onDestroy } from 'svelte';

  let containerReact: HTMLDivElement | null = null;
  let rootReact: any = null;

  onMount(async () => {
    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
      const RBFSVisualizer = ((await import('./Arbore.js')) as any).default;

      if (containerReact) {
        rootReact = createRoot(containerReact);
        rootReact.render(React.createElement(RBFSVisualizer));
      }
    } catch (err) {
      console.error("Eroare la încărcarea React Flow din arbore.js:", err);
    }
  });

  onDestroy(() => {
    if (rootReact && typeof rootReact.unmount === 'function') {
      rootReact.unmount();
    }
  });
</script>

<div class="pagina-container">
  <div class="textAlgoritm">Recursive Best First Search</div>

  <div class="textSub">
    Exemplu demonstrativ și exerciții interactive
  </div>

  <div class="zona-exercitii-interactive">
    <div class="grila-carduri-mari">
      
      <button class="card-mare-ex" onclick={() => goto('/dashboard/RecursiveBFS/problema1')}>
        <div class="numar-ex">01</div>
        <div class="info-ex">
          <h3>Exercițiul 1</h3>
        </div>
        <div class="status-badge-ex activ">Începe ➔</div>
      </button>

      <button class="card-mare-ex" onclick={() => goto('/dashboard/RecursiveBFS/problema2')}>
        <div class="numar-ex">02</div>
        <div class="info-ex">
          <h3>Exercițiul 2</h3>
        </div>
        <div class="status-badge-ex activ">Începe ➔</div>
      </button>

    </div>
  </div>

  <div class="container-cerinta">
    <div class="textProblema">
      <h3> Exemplu Demonstrativ </h3>
      În această problemă starea de start este Arad, iar starea obiectiv este București.
      Costurile de tranziție sunt scrise pe muchii, iar estimarea euristică, h, a distanței de la start
      la obiectiv este scrisă în tabel. Să presupunem că legăturile sunt întotdeauna rupte prin
      alegerea stării care urmează mai întâi în ordine alfabetică.
    </div>

    <div class="coloana-imagini">
      <img src="/poze/harta+euristica.png" alt="RBFS" class="poza-graf">
    </div>
  </div>

  <div class="zona-arbore-jos" bind:this={containerReact}></div>
</div>

<style>
  .pagina-container {
     width: 100%;
     box-sizing: border-box;
     padding: 20px 40px;
     font-family: sans-serif;
  }

  .textAlgoritm {
     color: #0A7E8C;
     font-weight: bold;
     text-align: center;
     font-size: 50px;
     margin-bottom: 10px;
  }

  .textSub {
     text-align: center;
     margin-bottom: 40px;
     color: #64748b;
     font-size: 16px;
  }

  .zona-exercitii-interactive {
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
  }

  .grila-carduri-mari {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 25px;
    width: 100%;
    max-width: 1000px;
  }

  .card-mare-ex {
    background: #ffffff;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    text-align: left;
    transition: all 0.25s ease;
    outline: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }

  .card-mare-ex:hover {
    border-color: #0A7E8C;
    background: #e6f2f4;
    transform: translateY(-4px);
    box-shadow: 0 12px 20px -5px rgba(10, 126, 140, 0.15);
  }

  .numar-ex {
    font-size: 40px;
    font-weight: 900;
    color: #0A7E8C;
    background: #e6f2f4;
    width: 70px;
    height: 70px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-ex {
    flex: 1;
  }
  .info-ex h3 {
    margin: 0 0 6px 0;
    font-size: 18px;
    color: #0f172a;
  }

  .status-badge-ex {
    font-size: 13px;
    font-weight: bold;
    color: #64748b;
  }
  .status-badge-ex.activ {
    color: #0A7E8C;
    background: #ffffff;
    padding: 8px 14px;
    border-radius: 8px;
    border: 1px solid #0A7E8C;
  }
  .card-mare-ex:hover .status-badge-ex.activ {
    background: #0A7E8C;
    color: #ffffff;
  }

  .container-cerinta {
     display: flex;
     justify-content: space-between;
     gap: 40px;
     padding: 0 20px;
     margin-bottom: 40px;
     align-items: center;
  }

  .textProblema {
     width: 50%;
     font-size: 17px;
     line-height: 1.6;
     text-align: justify;
     color: #334155;
  }
  .textProblema h3 {
    margin-top: 0;
    color: #0A7E8C;
    font-size: 22px;
  }

  .coloana-imagini {
     width: 50%;
  }

  .poza-graf {
     width: 100%;
     border-radius: 12px;
     box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  }

  .zona-arbore-jos {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     box-sizing: border-box;
  }
</style>