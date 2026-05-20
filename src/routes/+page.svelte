<script lang="ts">
  import './login/login.css';
  import { goto } from '$app/navigation';
  
  let isLogin = $state(true); 
  let email = $state('');
  let password = $state('');
  let errorMessage = $state('');
  let loading = $state(false);

  // Funcție care simulează răspunsul unui server real
  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    errorMessage = '';
    loading = true;

    // Simulăm o mică așteptare de 1 secundă ca să pară real
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      if (isLogin) {
        // --- SIMULARE LOGARE ---
        localStorage.setItem('token', 'fake-jwt-token-pentru-testare');
        
        // REZOLVARE: Folosim window.location.href în loc de goto pentru a forța 
        // layout-ul să se reconstruiască de la zero, curat și centrat!
        window.location.href = '/dashboard';
      } else {
        // --- SIMULARE ÎNREGISTRARE ---
        alert('Contul a fost simulat cu succes! Acum te poți autentifica.');
        isLogin = true; 
        password = '';  
      }
    } catch (err) {
      errorMessage = 'A apărut o eroare la simulare.';
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>{isLogin ? 'Login' : 'Creare Cont'} | AiLearning</title>
</svelte:head>

<div class="background">
  <div class="blob blob1"></div>
  <div class="blob blob2"></div>
</div>

<div class="container">
  <div class="card">
    <h1 class="logo">AiLearningPlatform</h1>
    

    {#if errorMessage}
      <div class="error-box">{errorMessage}</div>
    {/if}

    <form onsubmit={handleSubmit}>
      <div class="field">
        <label for="reg-email">Email</label>
        <input id="reg-email" type="email" bind:value={email} placeholder="nume@exemplu.com" required />
      </div>

      <div class="field">
        <label for="reg-password">Parolă</label>
        <input id="reg-password" type="password" bind:value={password} placeholder="••••••••" required />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Se procesează...' : (isLogin ? 'Autentificare' : 'Creează Cont')}
      </button>
    </form>

    <div class="toggle-mode">
      <span>{isLogin ? 'Nu ai un cont?' : 'Ai deja un cont?'}</span>
      <button class="link-btn" type="button" onclick={() => { isLogin = !isLogin; errorMessage = ''; }}>
        {isLogin ? 'Înregistrează-te' : 'Conectează-te'}
      </button>
    </div>
  </div>
</div>