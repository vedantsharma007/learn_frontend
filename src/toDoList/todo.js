
setInterval(() => {
  document.getElementById('date').innerText =
    new Date().toLocaleTimeString();
}, 1000);


function show() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const task = taskInput.value.trim();
    if (task) {
        const listItem = document.createElement('li');
        listItem.innerText = task;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
    
}

function remove() {
  const taskList = document.getElementById('task-list');

  if (taskList.lastChild) {
    taskList.removeChild(taskList.lastChild);
  }
}
