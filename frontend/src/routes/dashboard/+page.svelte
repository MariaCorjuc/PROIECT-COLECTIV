<script lang="ts">
 import './dashboard.css';
  const leaderboard = [
    { rank: 1, name: 'Maria S.', puncte: 2450 },
    { rank: 2, name: 'Ioan D.', puncte: 2100 },
    { rank: 3, name: 'Andrei Popescu', puncte: 1850 },
    { rank: 4, name: 'Elena V.', puncte: 1600 },
    { rank: 5, name: 'Stefan M.', puncte: 1420 }
  ];
</script>

<div class="dashboard-home-layout">
  <div class="welcome-box">
    <h2>Bine ai venit pe AiLearningPlatform!</h2>
    <p>Aici este panoul tău principal. Selectează orice algoritm din meniul din stânga pentru a-i studia logica.</p>
  </div>

  <div class="content-leaderboard">
    <span class="leaderboard-title">🏆 Clasament Cursanți (Top 5)</span>
    <div class="leaderboard-list">
      {#each leaderboard as user}
        <div class="leaderboard-row" class:current-user={user.name === 'Andrei Popescu'}>
          <span class="rank">#{user.rank}</span>
          <span class="name">{user.name}</span>
          <span class="points">{user.puncte} xp</span>
        </div>
      {/each}
    </div>
  </div>
</div>