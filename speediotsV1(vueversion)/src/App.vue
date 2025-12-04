<script setup>
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">SPEEDIOTS</div>
      <nav class="main-nav">
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
      </nav>
    </div>
  </header>
  <main class="container main-content">
    <RouterView />
  </main>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© <span id="year"></span> Speediots Racing</div>
      <div class="footer-links">
        <a href="rules.html">Rules</a>
        <a href="schedule.html">Schedule</a>
        <a href="register.html">Register</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
