class ToDoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        this.view.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addTask();
        });

        this.view.taskList.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                const taskId = parseInt(e.target.getAttribute("data-id"));
                this.removeTask(taskId);
            }
            
            if (e.target.classList.contains("complete-btn")) {
                const taskId = parseInt(e.target.getAttribute("data-id"));
                this.updateTask(taskId);
            }
        });
    }

    addTask() {
        const taskText = this.view.getTaskInput();
        if (taskText) {
            this.model.addTask(taskText);
            this.view.clearInput();
            this.updateView();
        }
    }

    removeTask(id) {
        this.model.removeTask(id);
        this.updateView();
    }

    updateView() {
        const tasks = this.model.getTasks();
        this.view.renderTasks(tasks);
    }

    updateTask(id) {
        this.model.completeTask(id);
        this.updateView();
    }
}
    const model = new ToDoModel();
    const view = new ToDoView();
    const controller = new ToDoController(model, view);