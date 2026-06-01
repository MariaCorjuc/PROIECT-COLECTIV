<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let containerReact: HTMLDivElement | undefined = undefined; 
  let rootReact: any = null; 

  onMount(async () => {
    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
      const BfsVisualizer = ((await import('$lib/components/BFSVisualizer.jsx')) as any).default;

      if (containerReact) {
        rootReact = createRoot(containerReact);
        rootReact.render(React.createElement(BfsVisualizer));
      }
    } catch (err) {
      console.error("Eroare la încărcarea React Flow pentru BFS:", err);
    }
  });

  onDestroy(() => {
    if (rootReact && typeof rootReact.unmount === 'function') {
      rootReact.unmount();
    }
  });
</script>

<div class="pagina-container">
   <div class="textAlgoritm">Breadth-First Search (BFS)</div>

   <div class="container-cerinta">
      <div class="textProblema">
         În această problemă starea de start este Bucuresti, iar starea obiectiv este Sighisoara.
         Costurile de tranziție sunt scrise pe muchii, iar estimarea euristică, h, a distanței de la start
         la obiectiv este scrisă în listă. Să presupunem că legăturile sunt întotdeauna rupte prin
         alegerea stării care urmează mai întâi în ordine alfabetică.
      </div>

      <img src="/poze/BFS.png" alt="Graful problemei BFS" class="poza-graf">
   </div>

   <div class="zona-arbore-jos" bind:this={containerReact}></div>
</div>

<style>
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
     display: flex;
     justify-content: center;
     padding-top: 10px;
     margin: 0 0 30px 0;
  }
  
  .textProblema {
     color: #1a2426;
     font-family: sans-serif;
     padding-top: 20px;
     font-size: 20px;
     line-height: 1.6;
     text-align: justify;
     flex: 1;
     max-width: 500px;
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
     min-height: 500px; 
  }
</style>