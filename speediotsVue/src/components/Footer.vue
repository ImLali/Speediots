<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© {{ year }} Speediots Racing</div>
      <div class="footer-links">
        <RouterLink to="/">Home</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
document.getElementById('year')?.textContent = year;
</script>
