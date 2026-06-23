<script lang="ts">
    import './dashboard.css';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="dashboard-home-layout">
    <div class="welcome-box">
        <h2>Bine ai venit pe AiLearningPlatform!</h2>
        <p>Aici este panoul tău principal. Selectează orice algoritm din meniu.</p>
    </div>

    <div class="content-leaderboard">
        <span class="leaderboard-title">🏆 Clasament Cursanți (Top 5 Live)</span>
        <div class="leaderboard-list">
            {#if data.leaderboard && data.leaderboard.length > 0}
                {#each data.leaderboard as user}
                    <div class="leaderboard-row" class:current-user={user.name === 'Andrei Popescu'}>
                        <span class="rank">#{user.rank}</span>
                        <span class="name">{user.name}</span>
                        <span class="points">{user.puncte} xp</span>
                    </div>
                {/each}
            {:else}
                <div class="leaderboard-row">
                    <span class="name" style="color: #64748b;">Nu există utilizatori în clasament momentan.</span>
                </div>
            {/if}
        </div>
    </div>
</div>