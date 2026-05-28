<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let containerReact: HTMLDivElement | undefined = undefined;
  let rootReact: any = null; 

  onMount(async () => {
    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
      // Importăm componenta dedicată pentru vizualizarea algoritmului Minimax
      const MinimaxVisualizer = ((await import('$lib/components/MinimaxVisualizer.jsx')) as any).default;

      if (containerReact) {
        rootReact = createRoot(containerReact);
        rootReact.render(React.createElement(MinimaxVisualizer));
      }
    
    } catch (err) {
      console.error("Eroare la încărcarea React Flow pentru Minimax:", err);
    }
  });

  onDestroy(() => {
    if (rootReact && typeof rootReact.unmount === 'function') {
      rootReact.unmount();
    }
  });
</script>

<div class="pagina-container">
   <div class="textAlgoritm">Algoritmul Minimax</div>

   <div class="container-cerinta">
      <div class="textProblema">
         În această problemă analizăm un arbore de decizie cu 3 niveluri de mutări (Rădăcină ca nod MAX, urmat de MIN, apoi iar MAX) și un al 4-lea nivel format din stările terminale (frunze). 
         <br><br>
         Fiecare nod intern are exact 3 copii, generați în ordine de la stânga la dreapta. Valorile de pe ultimul nivel, citite de la stânga la dreapta, sunt: 
         <strong>3, 12, 8, 2, 4, 6, 14, 5, 2, 4, 21, 1, 3, 12, 5, 6, 1, 1, 2, 3, 5, 5, 6, 9, 1, 4, 5</strong>.
         <br><br>
         Determinați valoarea minimax a nodului rădăcină și drumul optim ales de algoritm.
      </div>

      <img src="/poze/harta_minimax.png" alt="Structura arborelui Minimax" class="poza-graf">
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
  }
</style>