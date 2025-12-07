<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">SPEEDIOTS</div>
      <input type="checkbox" id="nav-toggle" class="nav-toggle">
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span><span></span><span></span>
      </label>

      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/rules">Rules</RouterLink>
        <RouterLink to="/schedule">Schedule</RouterLink>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/supporters">Sponsor</RouterLink>

        <div class="classes-link">

          <!-- Mobile toggle (hidden on desktop) -->
          <input type="checkbox" id="classes-toggle" class="classes-toggle">
          <label for="classes-toggle" class="classes-toggle-label">
            Classes <span class="arrow">▼</span>
          </label>

          <!-- Desktop text (hidden on mobile) -->
          <div class="classes-desktop-title">Classes</div>

          <div class="mega-menu">
            <RouterLink to="/gt3">GT3</RouterLink>
            <RouterLink to="/nascar">Nascar</RouterLink>
            <RouterLink to="/gt4">GT2&4</RouterLink>
            <RouterLink to="/wec">LMU</RouterLink>
          </div>
        </div>
        <div class="auth-links">
          <RouterLink to="/login" class="nav-login">Log in</RouterLink>
          <RouterLink to="/register" class="btn primary">Register</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .site-header{
    backdrop-filter:blur(4px);
    position:sticky;
    top:0;
    z-index:20;
  }
  .header-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:.05rem 0;
  }
  .logo{
    font-weight:900;
    font-size:1.55rem;
    color:var(--accent-2);
    letter-spacing:1px;
    display:flex;
    align-items:center;
    height:1.5rem;
    line-height:.9;
  }
</style>
