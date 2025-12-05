<template>
  <div>
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
  </div>
</template>
