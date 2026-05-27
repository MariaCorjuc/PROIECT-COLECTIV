<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let containerReact: HTMLDivElement | undefined = undefined; 
  let rootReact: any = null; 

  onMount(async () => {
    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
      // Importăm componenta care conține doar butoanele și canvas-ul de React Flow
      const DFSVisualizer = ((await import('$lib/components/DFSVisualizer.jsx')) as any).default;

      if (containerReact) {
        rootReact = createRoot(containerReact);
        rootReact.render(React.createElement(DFSVisualizer));
      }
    } catch (err) {
      console.error("Eroare la încărcarea React Flow:", err);
    }
  });

  onDestroy(() => {
    if (rootReact && typeof rootReact.unmount === 'function') {
      rootReact.unmount();
    }
  });
</script>

<div class="pagina-container">
   <div class="textAlgoritm">Depth-First Search (DFS)</div>

   <div class="container-cerinta">
      <div class="textProblema">
         În această problemă starea de start este Arad, iar starea obiectiv este Bucuresti.
         Algoritmul explorează graful în adâncime. Să presupunem că legăturile (nodurile vecine) 
         sunt întotdeauna alese în ordine alfabetică pentru a fi adăugate pe stivă/expandate.
      </div>

      <img src="/poze/harta.png" alt="Graful problemei A*" class="poza-graf">
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
     margin-bottom: 40px; /* Adăugăm spațiu între partea de sus și arborele de jos */
  }

  .poza-graf {
     max-width: 55%;
     height: auto;
     border-radius: 12px;
  }

  /* Stil nou pentru zona de jos, care va sta sub text și imagine */
  .zona-arbore-jos {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     box-sizing: border-box;
  }
</style>