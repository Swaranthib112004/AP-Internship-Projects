// Sign-In Modal
const authModal = document.getElementById('authModal');
const authBtn = document.getElementById('authBtn');
const closeBtn = document.querySelector('.close-btn');
authBtn.onclick = () => authModal.classList.remove('hidden');
closeBtn.onclick = () => authModal.classList.add('hidden');
window.onclick = e => { if (e.target === authModal) authModal.classList.add('hidden'); };

// Sign-In Form
document.getElementById('authForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ Signed in successfully!');
  authModal.classList.add('hidden');
});

// Contact Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  const name = document.getElementById('name').value.trim();
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Min 2 characters.'; valid = false;
  }
  const email = document.getElementById('email').value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email.'; valid = false;
  }
  const message = document.getElementById('message').value.trim();
  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Min 10 characters.'; valid = false;
  }
  if (!valid) return;
  alert('✅ Message sent!');
  form.reset();
});

// To-Do List Logic
const inputBox = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  todoList.innerHTML = '';
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn" data-index="${idx}">&times;</button>`;
    li.addEventListener('click', () => toggleTask(idx));
    todoList.appendChild(li);
  });
}
function toggleTask(idx) {
  tasks[idx].completed = !tasks[idx].completed;
  saveAndRender();
}
addBtn.addEventListener('click', () => {
  const val = inputBox.value.trim();
  if (!val) return alert('Enter a task!');
  tasks.push({ text: val, completed: false });
  saveAndRender();
  inputBox.value = '';
});
todoList.addEventListener('click', e => {
  if (e.target.matches('.delete-btn')) {
    const i = e.target.dataset.index;
    tasks.splice(i,1);
    saveAndRender();
  }
});
function saveAndRender() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}
renderTasks();
