<template>
  <div>
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
  </div>
</template>
