<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let containerReact: HTMLDivElement | undefined = undefined; 
  let rootReact: any = null; 

  onMount(async () => {
    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
      const AVisualizer = ((await import('./Arbore.js')) as any).default;

      if (containerReact) {
        rootReact = createRoot(containerReact);
        rootReact.render(React.createElement(AVisualizer));
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

   <div class="container-cerinta">
      <div class="textProblema">
         În această problemă starea de start este Arad, iar starea obiectiv este București.
         <br><br>
         Costurile de tranziție sunt scrise pe muchii, iar estimarea euristică, h, a distanței de la start
         la obiectiv este scrisă în tabel. Să presupunem că legăturile sunt întotdeauna rupte prin
         alegerea stării care urmează mai întâi în ordine alfabetică.
      </div>

      <div class="coloana-imagini">
         <img src="/poze/harta.png" alt="Graful hărții RBFS" class="poza-graf">
         <img src="/poze/euristica.png" alt="Tabel valori euristice h" class="poza-graf-euristica">
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
     font-size: 25px;
     line-height: 1.6;
     text-align: justify;
     width: 50%;
  }
      
  .container-cerinta {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: 40px;
     margin-bottom: 40px;
  }

  .coloana-imagini {
     display: flex;
     flex-direction: column;
     gap: 15px;
     width: 50%;
  }

  .poza-graf {
     width: 80%;
     height: auto;
     object-fit: contain;
     border-radius: 12px;
     box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  }

  .poza-graf-euristica {
     width: 70%;
     height: auto;
     object-fit: right;
     border-radius: 12px;
     box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  }

  .zona-arbore-jos {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     box-sizing: border-box;
  }
</style>