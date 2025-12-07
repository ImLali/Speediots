<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© 2025 Speediots Racing - No rights reserved</div>
      <div class="footer-links">
        <RouterLink to="/">Home</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  /* ==== FOOTER ==== */
.site-footer{
  border-top:1px solid rgba(255,255,255,0.03);
  padding:1rem 0;
  margin-top:2rem;
}
.footer-inner{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.footer-links a{
  margin-left:1rem;
  color:var(--muted);
  text-decoration:none;
  }
</style>