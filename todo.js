document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Add task function
    function addTask(taskContent) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskContent}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        // Add event listeners for buttons
        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.querySelector('span').style.textDecoration = 'line-through';
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }

    // Event listener for the "Add" button
    addTaskBtn.addEventListener('click', () => {
        const taskContent = taskInput.value.trim();
        if (taskContent) {
            addTask(taskContent);
            taskInput.value = '';
        }
    });

    // Optional: Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
