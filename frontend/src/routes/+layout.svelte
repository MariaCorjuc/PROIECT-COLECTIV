<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let { children } = $props();

    let userProfile = $state({
        name: 'User',
        role: 'Student',
        points: 0,
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=User'
    });

    onMount(async () => {
        const name = localStorage.getItem('name') || 'User';
        const email = localStorage.getItem('userEmail'); 
        let points = Number(localStorage.getItem('points') || 0);

        if (email) {
            try {
                const response = await fetch("http://localhost:8080/api/leaderboard");
                if (response.ok) {
                    const leaderboard = await response.json();
                    const userCurent = leaderboard.find((u: any) => u.email === email || u.name === name);
                    if (userCurent) {
                        points = userCurent.puncte;
                        localStorage.setItem('points', points.toString());
                    }
                }
            } catch (err) {
                console.error("Eroare la preluarea punctajului din baza de date:", err);
            }
        }

        userProfile = {
            name,
            role: 'Student',
            points,
            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=' + name
        };
    });

    const isActive = (path: string) => page.url.pathname === path;
    const isAlgoActive = (algo: string) => page.url.pathname.includes(`/dashboard/${algo}`);

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('points');
        localStorage.removeItem('userEmail');
        goto('/');
    }
</script>

<svelte:head>
    <link rel="icon" href="/poze/logo2.png" />
    <title>AiLearningPlatform</title>
</svelte:head>

{#if page.url.pathname === '/'}
    {@render children()}
{:else}
    <div class="bg-decoration">
        <div class="blob blob1"></div>
        <div class="blob blob2"></div>
    </div>

    <div class="main-container">
        <div class="app-window">
            
            <aside class="sidebar">
                <div class="sidebar-logo">
                    AiLearningPlatform
                </div>
                
                <nav class="nav-menu">
                    <button class="nav-btn home-btn" class:active={isActive('/dashboard')} onclick={() => goto('/dashboard')}>
                        🏠 Home
                    </button>

                    <span class="section-title">Algoritmi</span>
                    <button class="nav-btn" class:active={isAlgoActive('BFS')} onclick={() => goto('/dashboard/BFS')}>Breadth First Search</button>
                    <button class="nav-btn" class:active={isAlgoActive('DFS')} onclick={() => goto('/dashboard/DFS')}>Depth First Search</button>
                    <button class="nav-btn" class:active={isAlgoActive('A')} onclick={() => goto('/dashboard/A')}>A* Search</button>
                    <button class="nav-btn" class:active={isAlgoActive('UCS')} onclick={() => goto('/dashboard/UCS')}>
                        Uniform Cost Search
                    </button>
                    <button class="nav-btn" class:active={isAlgoActive('Minimax')} onclick={() => goto('/dashboard/Minimax')}>Minimax</button>
                    <button class="nav-btn" class:active={isAlgoActive('Expectimax')} onclick={() => goto('/dashboard/Expectimax')}>Expectimax</button>
                    <button class="nav-btn" class:active={isAlgoActive('RecursiveBFS')} onclick={() => goto('/dashboard/RecursiveBFS')}>Recursive Best First Search</button>
                    <button class="nav-btn" class:active={isAlgoActive('IDA')} onclick={() => goto('/dashboard/IDA')}>Iterative Deepening A* Search</button>
                </nav>

                <div class="sidebar-spacer"></div>

                <button class="nav-btn logout-btn" onclick={handleLogout}>
                     Deconectare
                </button>
            </aside>

            <main class="content-area">
                <header class="top-header">
                    <div class="page-context-title">
                        {#if isActive('/dashboard')}
                            Pagina Principală
                        {:else if page.url.pathname.includes('dashboard/')}
                            Vizualizare Algoritm
                        {:else}
                            Panou Studiu
                        {/if}
                    </div>

                    <div class="user-profile-widget">
                        <div class="user-info">
                            <span class="user-name">{userProfile.name}</span>
                            <span class="user-points">⭐ {userProfile.points} puncte</span>
                            <span class="user-role">{userProfile.role}</span>
                        </div>
                        <img src={userProfile.avatar} alt="Avatar" class="avatar" />
                    </div>
                </header>

                <section class="dynamic-content">
                    {@render children()}
                </section>
            </main>

        </div>
    </div>
{/if}

<style>
    :global(body) {
        margin: 0;
        height: 100vh;
        overflow: hidden; 
        background-color: #dae9eb; 
        background-image: 
            radial-gradient(at 0% 0%, rgba(169, 209, 215, 0.6) 0px, transparent 50%),  
            radial-gradient(at 100% 0%, rgba(218, 185, 252, 0.5) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(10, 126, 140, 0.15) 0px, transparent 50%);
        font-family: sans-serif;
    }

    .bg-decoration {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        overflow: hidden;
    }

    .blob {
        position: absolute;
        width: 500px;
        height: 500px;
        filter: blur(80px);
        opacity: 0.4;
        border-radius: 50%;
    }

    .blob1 { background: #007577; top: -100px; right: -100px; }
    .blob2 { background: #376d61; bottom: -150px; left: -100px; }

    .main-container {
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    .app-window {
        display: flex;
        width: 95vw;
        height: 92vh;
        background: rgba(255, 255, 255, 0.45);
        border: 1px solid rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border-radius: 24px;
        box-shadow: 0 30px 70px rgba(12, 50, 43, 0.08);
        overflow: hidden;
    }

    .sidebar {
        width: 280px;
        background: rgba(255, 255, 255, 0.25);
        border-right: 1px solid rgba(0, 117, 119, 0.1);
        padding: 30px 20px;
        display: flex;
        flex-direction: column;
    }

    .sidebar-logo {
        font-size: 19px;
        font-weight: 700;
        color: rgba(11, 60, 51, 0.45);
        padding: 5px 0 25px 10px;
        letter-spacing: -0.4px;
        user-select: none;
    }

    .nav-menu {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .section-title {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        color: rgba(11, 60, 51, 0.5);
        margin-top: 14px;
        margin-bottom: 6px;
        padding-left: 10px;
        letter-spacing: 0.5px;
    }

    .nav-btn {
        background: none;
        border: none;
        text-align: left;
        padding: 12px 14px;
        font-size: 15px;
        font-weight: 600;
        color: #0b3c33;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s;
    }

    .nav-btn:hover {
        background: rgba(0, 117, 119, 0.06);
        color: #007577;
    }

    .nav-btn.active {
        background: linear-gradient(135deg, #007577, #376d61);
        color: white;
    }

    .home-btn {
        margin-bottom: 5px;
    }

    .sidebar-spacer {
        flex: 1;
    }

    .logout-btn {
        margin-top: 20px;
        color: #8a2b2b;
    }

    .logout-btn:hover {
        background: rgba(219, 68, 68, 0.1);
        color: #d32f2f;
    }

    .content-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 30px;
    }

    .top-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .page-context-title {
        font-size: 16px;
        font-weight: 600;
        color: rgba(11, 60, 51, 0.6);
    }

    .user-profile-widget {
        display: flex;
        align-items: center;
        gap: 12px;
        background: rgba(255, 255, 255, 0.5);
        padding: 6px 14px;
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.7);
    }

    .user-info {
        display: flex;
        flex-direction: column;
        text-align: right;
    }

    .user-name {
        font-size: 14px;
        font-weight: 700;
        color: #0b3c33;
    }

    .user-points {
        font-size: 11px;
        font-weight: 700;
        color: #0A7E8C;
        margin: 1px 0;
    }

    .user-role {
        font-size: 10px;
        color: rgba(11, 60, 51, 0.5);
    }

    .avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: #e2e4f7;
        border: 2px solid #007577;
    }

    .dynamic-content {
        flex: 1;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.8);
        padding: 30px;
        overflow-y: auto;
    }
</style>