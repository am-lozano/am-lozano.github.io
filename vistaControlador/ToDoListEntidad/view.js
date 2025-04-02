class ToDoView {
    constructor() {
        this.app = document.getElementById("app");
        this.taskForm = document.getElementById("task-form");
        this.taskInput = document.getElementById("task-input");
        this.taskList = document.getElementById("task-list");
    }

    getTaskInput() {
        return this.taskInput.value;
    }

    clearInput() {
        this.taskInput.value = "";
        this.taskInput.value = "";
    }

    renderTasks(tasks) {
        this.taskList.innerHTML = ""; 
        tasks.forEach(task => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.text}</td>
                <td>${task.desc}</td>
                <td>${task.date}</td>
                <td>${task.completed}</td>
                <td>
                    <button class="delete-btn" data-id="${task.id}">Eliminar</button>
                    <button class="complete-btn" data-id="${task.id}">Completar</button>
                </td>
            `;
            this.taskList.appendChild(row);
        });
    }
}