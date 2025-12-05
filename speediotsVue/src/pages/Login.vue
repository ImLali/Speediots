<template>
  <div class="container">
    <main class="container">
      <h1>Login</h1>
      <div class="form-wrap">
        <form id="login-form">
          <label for="ident">Username or Email</label>
          <input id="ident" name="ident" type="text" placeholder="username or email" required>
          <label for="password">Password</label>
          <input id="password" name="password" type="password" placeholder="password" required>
          <br>
          <button type="submit" class="btn primary">Login</button>
          <div id="login-msg" style="display:none;margin-top:.8rem;padding:.6rem;border-radius:6px"></div>
        </form>
        <p style="margin-top:1rem">No account? <a href="/register">Create one</a>.</p>
      </div>
    </main>
  </div>
</template>
        <a href="/register" class="btn primary">Register</a>
