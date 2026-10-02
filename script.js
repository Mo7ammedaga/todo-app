'use strict';

const taskList = document.querySelector('.task-list ul');
const inputField = document.querySelector('.inputField');
const addButton = document.querySelector('.add');

let taskCounter = taskList.querySelectorAll('li').length;

function setupTask(taskItem) {
  const taskLabel = taskItem.querySelector('label');
  const taskEditButton = taskItem.querySelector('.edit-btn');
  const taskDeleteButton = taskItem.querySelector('.delete-btn');

  let isEditing = false;
  let taskEditInput;

  function updateAriaLabels() {
    const taskName = taskLabel.textContent;
    const editAction = isEditing ? 'Save' : 'Edit';

    taskEditButton.setAttribute(
      'aria-label',
      `${editAction} task: ${taskName}`,
    );
    taskDeleteButton.setAttribute('aria-label', `Delete task: ${taskName}`);
  }

  function startEditing() {
    taskEditInput = document.createElement('input');
    taskEditInput.className = 'edit-input';
    taskEditInput.dir = 'auto';
    taskEditInput.setAttribute('aria-label', 'Edit task name');
    taskEditInput.value = taskLabel.textContent;
    taskLabel.after(taskEditInput);

    taskItem.classList.add('editing');
    taskEditButton.textContent = 'Save';

    isEditing = true;
    updateAriaLabels();

    taskEditInput.focus();
    taskEditInput.select();

    taskEditInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        saveEditing();
      }

      if (event.key === 'Escape') {
        stopEditing();
      }
    });
  }

  function stopEditing() {
    taskEditInput.remove();

    taskItem.classList.remove('editing');
    taskEditButton.textContent = 'Edit';

    isEditing = false;
    updateAriaLabels();

    taskEditButton.focus();
  }

  function saveEditing() {
    const newText = taskEditInput.value.trim();

    if (newText === '') {
      taskEditInput.focus();
      return;
    }

    taskLabel.textContent = newText;

    stopEditing();
  }

  taskEditButton.addEventListener('click', function () {
    if (!isEditing) {
      startEditing();
    } else {
      saveEditing();
    }
  });

  taskDeleteButton.addEventListener('click', function () {
    taskItem.remove();
  });

  taskLabel.dir = 'auto';
  updateAriaLabels();
}

const existingTasks = document.querySelectorAll('.task-list li');

existingTasks.forEach(function (taskItem) {
  setupTask(taskItem);
});

function createTaskElement(taskText) {
  const taskItem = document.createElement('li');

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.id = `task${taskCounter}`;
  taskItem.append(taskCheckbox);

  const taskLabel = document.createElement('label');
  taskLabel.textContent = taskText;
  taskLabel.htmlFor = `task${taskCounter}`;
  taskItem.append(taskLabel);

  const taskEditButton = document.createElement('button');
  taskEditButton.className = 'edit-btn';
  taskEditButton.textContent = 'Edit';
  taskItem.append(taskEditButton);

  const taskDeleteButton = document.createElement('button');
  taskDeleteButton.className = 'delete-btn';
  taskDeleteButton.textContent = 'Delete';
  taskItem.append(taskDeleteButton);

  return taskItem;
}

function addTask() {
  const taskText = inputField.value.trim();

  if (taskText === '') {
    return;
  }

  taskCounter++;

  const taskItem = createTaskElement(taskText);
  taskList.append(taskItem);

  setupTask(taskItem);

  inputField.value = '';
  inputField.focus();
}

addButton.addEventListener('click', function () {
  addTask();
});

inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
