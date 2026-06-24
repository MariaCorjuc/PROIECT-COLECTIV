<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let containerTester: HTMLDivElement | undefined = undefined; 
  let rootTester: any = null; 
  
  
  let idProblemaCurenta = $state(1);

  async function randeazaProblema(id: number) {
    idProblemaCurenta = id;
    
    if (rootTester && typeof rootTester.unmount === 'function') {
      rootTester.unmount();
    }

    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    
    try {
      const ExpectimaxTester =
        ((await import('$lib/components/ExpectimaxTester')) as any).default;

      if (containerTester) {
        rootTester = createRoot(containerTester);
        rootTester.render(React.createElement(ExpectimaxTester, { idProblema: id }));
      }
    } catch (err) {
      console.error("Eroare la încărcarea ExpectimaxTester:", err);
    }
  }

  onMount(() => {
    randeazaProblema(1);
  });

  onDestroy(() => {
    if (rootTester && typeof rootTester.unmount === 'function') {
      rootTester.unmount();
    }
  });
</script>

<div class="top-bar-visualizare">
  <span class="titlu-global">Vizualizare Algoritm</span>
  <a href="/dashboard/Expectimax" class="btn-inapoi">
    ← Înapoi la Expectimax
  </a>
</div>

<div class="bara-selectare-probleme">
  <button 
    class={idProblemaCurenta === 1 ? "btn-selectare activ" : "btn-selectare"} 
    onclick={() => randeazaProblema(1)}
  >
    Problema 1
  </button>
  <button 
    class={idProblemaCurenta === 2 ? "btn-selectare activ" : "btn-selectare"} 
    onclick={() => randeazaProblema(2)}
  >
    Problema 2
  </button>
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
  }

  .bara-selectare-probleme {
    display: flex;
    gap: 12px;
    padding: 15px 24px 0 24px;
    background-color: #f1f5f9;
  }

  .btn-selectare {
    padding: 10px 24px;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #475569;
    background-color: #e2e8f0;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }

  .btn-selectare:hover {
    background-color: #cbd5e1;
  }

  .btn-selectare.activ {
    color: #ffffff !important;
    background-color: #0A7E8C !important;
    border-color: #0A7E8C !important;
    box-shadow: 0 2px 4px rgba(10, 126, 140, 0.3);
  }

  .problems-page-container {
    padding: 24px;
    background-color: #f1f5f9;
    min-height: calc(100vh - 120px);
    box-sizing: border-box;
  }

  .zona-tester-react {
    width: 100%;
  }
</style>