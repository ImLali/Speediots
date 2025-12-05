<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">SPEEDIOTS</div>
      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/rules">Rules</RouterLink>
        <RouterLink to="/schedule">Schedule</RouterLink>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/supporters">Supporters</RouterLink>
        <div class="classes-link" style="display:inline-block;">
          Classes
          <div class="mega-menu">
            <RouterLink to="/gt3">GT3</RouterLink>
            <RouterLink to="/nascar">Nascar</RouterLink>
            <RouterLink to="/gt4">GT4</RouterLink>
            <RouterLink to="/gt2">GT2</RouterLink>
          </div>
        </div>
        <RouterLink to="/register" class="btn primary">Register</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>
