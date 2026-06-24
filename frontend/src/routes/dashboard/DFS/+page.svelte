<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let containerReact: HTMLDivElement | undefined = undefined;
  let rootReact: any = null; 

  onMount(async () => {
    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
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

   <div class="sectiune-probleme">
      <h2 class="titlu-sectiune">Exerciții Practice Interactive</h2>
      <p class="descriere-sectiune">Acum că ai înțeles teoria, testează-ți cunoștințele construind manual arborele de căutare DFS!</p>
      
      <div class="grup-butoane-probleme">
         <a href="/dashboard/DFS/problema1" class="buton-problema">▶ Rezolvă Problema 1 (Arad)</a>
         <a href="/dashboard/DFS/problema2" class="buton-problema">▶ Rezolvă Problema 2 (Timișoara)</a>
      </div>
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

  /* --- STILURI NOI ADAUGATE PENTRU BUTOANELE DE PROBLEME --- */
  .sectiune-probleme {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     background-color: #f8fafc;
     padding: 30px 20px;
     border-radius: 12px;
     margin-bottom: 40px;
     border: 1px solid #e2e8f0;
     box-sizing: border-box;
     box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .titlu-sectiune {
     color: #0A7E8C;
     margin: 0 0 10px 0;
     font-family: sans-serif;
     font-size: 24px;
  }

  .descriere-sectiune {
     color: #475569;
     font-family: sans-serif;
     margin: 0 0 25px 0;
     font-size: 16px;
  }

  .grup-butoane-probleme {
     display: flex;
     gap: 20px;
  }

  .buton-problema {
     background-color: #0A7E8C;
     color: white;
     text-decoration: none;
     padding: 16px 32px;
     font-size: 18px;
     font-weight: bold;
     border-radius: 8px;
     font-family: sans-serif;
     transition: all 0.2s ease-in-out;
     box-shadow: 0 4px 6px rgba(10, 126, 140, 0.2);
  }

  .buton-problema:hover {
     background-color: #08606b;
     transform: translateY(-2px);
     box-shadow: 0 6px 12px rgba(10, 126, 140, 0.3);
  }
  /* -------------------------------------------------------- */

  .zona-arbore-jos {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     box-sizing: border-box;
  }
</style>