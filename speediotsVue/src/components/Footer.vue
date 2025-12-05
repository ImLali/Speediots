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
</script>

<style scoped>
.site-footer {
  padding: 1.25rem 0;
  border-top: 1px solid #eee;
  margin-top: 2rem;
}
</style>
