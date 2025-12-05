<template>
  <div class="container">
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
  </div>
</template>
