// FICTIONAL TEST APPLICATION: This deliberately uses mock client-side auth.
// It must never be adapted for handling real user accounts or secrets.
const DEMO_EMAIL = 'demo@northstar.test';
const DEMO_PASSWORD = 'Demo123!';
const STORAGE_KEY = 'northstar-qa-demo-v1';
const LOGIN_KEY = 'northstar-qa-demo-session';
const $ = (id) => document.getElementById(id);
let currentFilter = 'all';

const defaultState = () => ({ displayName: 'Demo User', tasks: [] });
function readState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return stored && Array.isArray(stored.tasks) && typeof stored.displayName === 'string'
      ? stored : defaultState();
  } catch { return defaultState(); }
}
let state = readState();
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function toggleAuth() {
  const signedIn = sessionStorage.getItem(LOGIN_KEY) === 'yes';
  $('login-view').hidden = signedIn;
  $('dashboard-view').hidden = !signedIn;
  if (signedIn) render();
}
function showError(id, message) {
  const el = $(id);
  el.textContent = message;
  el.hidden = !message;
}
function render() {
  $('welcome-name').textContent = state.displayName;
  $('display-name').value = state.displayName;
  $('task-count').textContent = `${state.tasks.length} ${state.tasks.length === 1 ? 'task' : 'tasks'}`;
  for (const b of document.querySelectorAll('[data-filter]')) {
    const active = b.dataset.filter === currentFilter;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  }
  const visible = state.tasks.filter(t => currentFilter === 'all' || (currentFilter === 'done' ? t.completed : !t.completed));
  $('task-list').replaceChildren();
  $('empty-state').hidden = visible.length !== 0;
  for (const task of visible) {
    const item = document.createElement('li');
    item.className = `task-item${task.completed ? ' is-done' : ''}`;
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = task.completed;
    check.setAttribute('aria-label', `Complete ${task.title}`);
    check.addEventListener('change', () => { task.completed = check.checked; saveState(); render(); });
    const title = document.createElement('span');
    title.className = 'task-title';
    title.textContent = task.title; // untrusted user text is never inserted as HTML
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'remove-task';
    remove.setAttribute('aria-label', `Delete ${task.title}`);
    remove.textContent = 'Delete';
    remove.addEventListener('click', () => { state.tasks = state.tasks.filter(t => t.id !== task.id); saveState(); render(); });
    item.append(check, title, remove);
    $('task-list').append(item);
  }
}
$('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = $('email').value.trim().toLowerCase();
  const password = $('password').value;
  if (!email || !password) return showError('login-error', 'Email and password are required.');
  if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) return showError('login-error', 'Invalid demo email or password.');
  showError('login-error', '');
  $('password').value = '';
  sessionStorage.setItem(LOGIN_KEY, 'yes');
  toggleAuth();
});
$('sign-out').addEventListener('click', () => { sessionStorage.removeItem(LOGIN_KEY); toggleAuth(); });
$('task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = $('task-title').value.trim();
  if (!title) return showError('task-error', 'Please enter a task title.');
  showError('task-error', '');
  state.tasks.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, title, completed: false });
  saveState();
  $('task-title').value = '';
  render();
});
for (const btn of document.querySelectorAll('[data-filter]')) {
  btn.addEventListener('click', () => { currentFilter = btn.dataset.filter; render(); });
}
$('profile-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('display-name').value.trim();
  $('profile-success').hidden = true;
  if (!name) return showError('profile-error', 'Display name is required.');
  showError('profile-error', '');
  state.displayName = name;
  saveState();
  render();
  $('profile-success').textContent = 'Profile saved.';
  $('profile-success').hidden = false;
});
toggleAuth();
