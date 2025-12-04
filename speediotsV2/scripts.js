function setYear(){
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = y;
}

function highlightNav(){
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(a=>{
    try{
      const href = a.getAttribute('href');
      if(location.pathname.endsWith(href) || (location.pathname === '/' && href.includes('index'))) a.classList.add('active');
    } catch(e){}
  });
}

function setupReveal(){
  let lastY = window.scrollY || 0;
  let scrollDir = 1;
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY || 0; scrollDir = (y > lastY) ? 1 : -1; lastY = y;
  }, {passive:true});

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const el = entry.target;
      if(entry.isIntersecting){
        el.classList.remove('from-top','from-bottom');
        if(scrollDir < 0) el.classList.add('from-top'); else el.classList.add('from-bottom');
        el.classList.add('in-view');
      } else {
        el.classList.remove('in-view','from-top','from-bottom');
      }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

function setupRegistration(){
  const form = document.getElementById('register-form');
  if(!form) return;
  form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if(!data.name || !data.email){ alert('Please provide your name and email.'); return; }
    const regs = JSON.parse(localStorage.getItem('speediots_regs')||'[]');
    regs.push({...data, ts:new Date().toISOString()});
    localStorage.setItem('speediots_regs', JSON.stringify(regs));
    form.reset();
    const ok = document.getElementById('reg-ok'); if(ok) ok.style.display='block';
  });
}

// --- Simple client-side auth helpers (demo) ---
function _saveUserRecord(user){
  const users = JSON.parse(localStorage.getItem('speediots_users')||'[]');
  users.push(user);
  localStorage.setItem('speediots_users', JSON.stringify(users));
}

function _findUser(usernameOrEmail){
  const users = JSON.parse(localStorage.getItem('speediots_users')||'[]');
  return users.find(u => u.username === usernameOrEmail || u.email === usernameOrEmail) || null;
}

function setCurrentUser(obj){
  if(!obj) { localStorage.removeItem('speediots_current'); return; }
  const record = { username: obj.username||obj.name||'', email: obj.email||'', expires: Date.now() + 7*24*60*60*1000 };
  localStorage.setItem('speediots_current', JSON.stringify(record));
}

function getCurrentUser(){
  try{
    const cur = JSON.parse(localStorage.getItem('speediots_current')||'null');
    if(!cur) return null;
    if(cur.expires && Date.now() > cur.expires){ localStorage.removeItem('speediots_current'); return null; }
    return cur;
  }catch(e){ return null; }
}

function registerAccount(payload){
  // payload: {username,email,password}
  if(!_findUser(payload.username) && !_findUser(payload.email)){
    _saveUserRecord(payload);
    setCurrentUser({ username: payload.username, email: payload.email });
    return { ok:true };
  }
  return { ok:false, error:'User already exists' };
}

function loginAccount(identifier, password){
  const u = _findUser(identifier);
  if(!u) return { ok:false, error:'User not found' };
  if(u.password !== password) return { ok:false, error:'Invalid credentials' };
  setCurrentUser({ username: u.username, email: u.email });
  return { ok:true };
}

function logout(){ setCurrentUser(null); location.reload(); }

function initAuthUI(){
  // Update nav: if logged in show Account + Logout; otherwise keep Register link to register.html and ensure login link exists elsewhere
  const cur = getCurrentUser();
  const nav = document.querySelector('.main-nav');
  if(!nav) return;
  const regLink = nav.querySelector('a[href="register.html"]');
  if(cur){
    if(regLink){ regLink.textContent = cur.username || 'Account'; regLink.href = 'race-register.html'; }
    // ensure logout button exists
    if(!nav.querySelector('.logout-btn')){
      const btn = document.createElement('button'); btn.className='btn logout-btn'; btn.style.marginLeft='0.6rem'; btn.textContent='Logout';
      btn.addEventListener('click', logout);
      nav.appendChild(btn);
    }
  } else {
    if(regLink) regLink.textContent = 'Register'; regLink.href = 'register.html';
    // remove logout if present
    const out = nav.querySelector('.logout-btn'); if(out) out.remove();
  }
}

function loadVideoFromInput(){
  const input = document.getElementById('video-url');
  const player = document.getElementById('video-embed');
  if(!input || !player) return;
  const val = input.value.trim();
  if(!val) return alert('Paste a YouTube video URL or ID from the SPEEDIOTS channel');
  const m = val.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
  const id = m ? m[1] : (val.length<=20?val:null);
  if(!id) return alert('Could not parse video ID — paste a full YouTube URL or ID.');
  player.innerHTML = `<iframe width="100%" height="480" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
}

document.addEventListener('DOMContentLoaded', ()=>{
  setYear(); highlightNav(); setupReveal(); setupRegistration();
  initAuthUI();
  const loadBtn = document.getElementById('load-video'); if(loadBtn) loadBtn.addEventListener('click', loadVideoFromInput);
});

window._speediots = { setupRegistration, loadVideoFromInput };

// expose auth helpers
window._speediots.auth = { registerAccount, loginAccount, getCurrentUser, logout };
