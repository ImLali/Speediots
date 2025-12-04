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
    <h1>Create Account</h1>
    <div class="form-wrap">
      <form id="account-register-form">
        <label for="username">Username</label>
        <input id="username" name="username" type="text" placeholder="username" required>

        <label for="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required>

        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="choose a password" required>
        <br>
        <button type="submit" class="btn primary">Create account</button>
        <div id="acc-msg" style="display:none;margin-top:.8rem;padding:.6rem;border-radius:6px"></div>
      </form>
      <p style="margin-top:1rem">Already have an account? <a href="/login">Login here</a>.</p>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© <span id="year"></span> Speediots Racing</div>
      <div class="footer-links"><a href="/">Home</a></div>
    </div>
  </footer>
</template>
