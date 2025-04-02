class ToDoModel {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        const newTask = {
            id: Date.now(), 
            text: task,
            completed: "Pendiente",
            date: new Date().toLocaleString(),
        };
        this.tasks.push(newTask);
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = "Completada"; 
        }
    }

    getTasks() {
        return this.tasks;
    }
}