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
          <RouterLink to="/login" class="nav-login btn primary">Log in</RouterLink>
          <RouterLink to="/register" class="btn primary">Register</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .main-nav {
    display: flex;
    align-items: center;
  }
  .main-nav > a {
    color: inherit;
    text-decoration: none;
    margin-left: 1rem;
    padding: .35rem .6rem;
    border-radius: 6px;
  }
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
    font-weight: 900;
    font-size:1.55rem;
    letter-spacing:1px;
    display:flex;
    align-items:center;
    height:1.5rem;
    line-height:.9;
    color: #646cff;
  }

  .nav-toggle {
    display: none;
  }

  .nav-toggle-label {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
  }

  .nav-toggle-label span {
    width: 28px;
    height: 3px;
    background: #fff;
    border-radius: 4px;
    transition: 0.3s;
  }

  .nav-login {
    margin: 5px;
  }

  @media(max-width: 1050px) {
    .nav-toggle-label {
      display: flex;
    }

    .main-nav {
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      background: var(--card);
      flex-direction: column;
      align-items: flex-start;
      gap: .4rem;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
    }

    .nav-toggle:checked~.main-nav {
      max-height: 800px;
      opacity: 1;
      padding: 1rem;
    }

    .main-nav > a,
    .classes-link {
      padding: .55rem 0;
      margin-left: 1rem;
    }

    .classes-desktop-title {
      display: none;
    }

    .classes-toggle-label {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
      padding: 0;
      font-weight: 600;
      margin: 0;
    }

    .arrow {
      transition: transform 0.3s ease;
    }

    .classes-toggle:checked+.classes-toggle-label .arrow {
      transform: rotate(180deg);
    }

    .classes-link .mega-menu {
      position: relative;
      display: block;
      padding-left: 0.8rem;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      border-left: 2px solid var(--accent-2);
      transition: 0.35s;
    }

    .classes-toggle:checked~.mega-menu {
      max-height: 300px;
      opacity: 1;
    }
  }

  .mega-menu {
    position: absolute;
    left: 0;
    top: 100%;
    background: var(--card);
    padding: 1rem;
    border-radius: 8px;
    min-width: 320px;
    display: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  .classes-link:hover .mega-menu {
    display: block;
  }

  .mega-menu a {
    display: block;
    padding: 0.4rem 0.6rem;
    color: inherit;
    text-decoration: none;
    border-radius: 6px;
  }

  .mega-menu a:hover {
    background: rgba(255, 255, 255, 0.02);
  }
</style>
