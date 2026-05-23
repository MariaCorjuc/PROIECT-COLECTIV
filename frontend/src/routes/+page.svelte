<script lang="ts">
  import './login/login.css';
  import { goto } from '$app/navigation';
  
  let isLogin = $state(true); 
  let email = $state('');
  let password = $state('');
  let errorMessage = $state('');
  let successMessage = $state(''); // Cameră nouă pentru mesajul verde de succes
  let loading = $state(false);

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    errorMessage = '';
    successMessage = ''; // Resetăm mesajele la fiecare trimitere
    loading = true;

    try {
      if (isLogin) {
        // --- AUTENTIFICARE REALĂ ---
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (!response.ok) throw new Error(data.message || 'Email sau parolă incorectă!');
          localStorage.setItem('token', data.token);
          window.location.href = '/dashboard';
        } else {
          const textError = await response.text();
          throw new Error(textError || 'Eroare de autentificare pe server.');
        }

      } else {
        // --- ÎNREGISTRARE REALĂ ---
        const response = await fetch('http://localhost:8080/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Eroare la crearea contului.');
          }

          // REZOLVARE: Fără alert() de sus! Punem mesajul direct în pagină
          successMessage = 'Contul a fost creat cu succes! Te poți autentifica acum.';
          isLogin = true; // Îl mutăm direct pe Login
          password = '';  // Curățăm câmpul parolei
        } else {
          const textError = await response.text();
          throw new Error(textError || 'Eroare la crearea contului pe server.');
        }
      }
    } catch (err: any) {
      errorMessage = err.message || 'A apărut o eroare la comunicarea cu serverul.';
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

    {#if successMessage}
      <div class="success-box">{successMessage}</div>
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
      <button class="link-btn" type="button" onclick={() => { isLogin = !isLogin; errorMessage = ''; successMessage = ''; }}>
        {isLogin ? 'Înregistrează-te' : 'Conectează-te'}
      </button>
    </div>
  </div>
</div>