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
        <a href="/register" class="btn primary">Register</a>
        <div class="classes-link" style="display:inline-block;">
          Classes
          <div class="mega-menu">
            <a href="/gt3">GT3</a>
            <a href="/nascar">Nascar</a>
            <a href="/gt4">GT4</a>
            <a href="/gt2">GT2</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <main class="container">
    <h1>Register for a Race</h1>
    <div class="form-wrap">
      <form id="register-form">
        <label for="name">Full name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required>
        <label for="email">Car number</label>
        <input id="email" name="email" type="text" placeholder="669" required>
        <label for="notes">Discord ID</label>
        <textarea id="notes" name="notes" rows="4" placeholder="Discord ID"></textarea>
        <button type="submit" class="btn primary">Submit registration</button>
        <div id="reg-ok" style="display:none;margin-top:.8rem;padding:.6rem;background:rgba(100,108,255,0.06);border-radius:6px">Thanks — your registration is recorded (demo only).</div>
      </form>
    </div>
  </main>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© <span id="year"></span> Speediots Racing</div>
      <div class="footer-links">
        <a href="/">Home</a>
      </div>
    </div>
  </footer>
</template>
