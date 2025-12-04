<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">SPEEDIOTS</div>
      <nav class="main-nav">
        <a href="/">Home</a>
        <a href="/rules">Rules</a>
        <a href="/schedule">Schedule</a>
        <a href="/news">News</a>
        <a href="/supporters">Supporters</a>
        <div class="classes-link" style="display:inline-block;">
          Classes
          <div class="mega-menu">
            <a href="/gt3">GT3</a>
            <a href="/nascar">Nascar</a>
            <a href="/gt4">GT4</a>
            <a href="/gt2">GT2</a>
          </div>
        </div>
        <a href="/register" class="btn primary">Register</a>
      </nav>
    </div>
  </header>
  <main class="container">
    <h1>Racing Schedule</h1>
    <div class="form-wrap">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap">
        <p style="margin:0">Upcoming 2 weeks — add races (owner only)</p>
        <div>
          <button id="add-race-btn" class="btn">Add race</button>
          <small style="color:var(--muted);margin-left:.6rem">(owner-only — client-side)</small>
        </div>
      </div>
      <div id="calendar" style="margin-top:1rem"></div>
    </div>
  </main>
</template>
