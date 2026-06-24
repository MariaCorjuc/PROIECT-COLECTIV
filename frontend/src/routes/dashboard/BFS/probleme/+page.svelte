<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let containerTester: HTMLDivElement | undefined = undefined; 
  let rootTester: any = null; 

  async function initializeazăTester() {
    
    if (rootTester && typeof rootTester.unmount === 'function') {
      try {
        rootTester.unmount();
      } catch (e) {
        console.log("Root deja demontat");
      }
      rootTester = null;
    }

    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
     
      const BFSTester = ((await import('$lib/components/BFSTester')) as any).default;

      if (containerTester) {
       
        containerTester.innerHTML = '';
        
        rootTester = createRoot(containerTester);
        rootTester.render(React.createElement(BFSTester));
      }
    } catch (err) {
      console.error("Eroare la încărcarea BFSTester:", err);
    }
  }

  onMount(() => {
    initializeazăTester();
  });

  onDestroy(() => {
    if (rootTester && typeof rootTester.unmount === 'function') {
      rootTester.unmount();
    }
  });
</script>

<div class="top-bar-visualizare">
  <span class="titlu-global">Vizualizare Algoritm: BFS</span>
  <a href="/dashboard/BFS" class="btn-inapoi">
    ← Înapoi la BFS
  </a>
</div>

<div class="problems-page-container">
  <div bind:this={containerTester} class="zona-tester-react"></div>
</div>

<style>
  .top-bar-visualizare {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e2e8f0;
    padding: 12px 24px;
    border-bottom: 1px solid #cbd5e1;
  }

  .titlu-global {
    font-size: 15px;
    font-weight: 600;
    color: #475569;
    font-family: sans-serif;
  }

  .btn-inapoi {
    background-color: #ef4444;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 14px;
    transition: background-color 0.2s;
  }

  .btn-inapoi:hover {
    background-color: #dc2626;
  }

  .problems-page-container {
    padding: 24px;
    background-color: #f1f5f9;
    min-height: calc(100vh - 70px);
    box-sizing: border-box;
  }

  .zona-tester-react {
    width: 100%;
  }
</style>