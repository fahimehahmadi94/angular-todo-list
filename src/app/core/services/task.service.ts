import { Injectable, signal } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    tasks = signal<Task[]>([]);


    addTask(title: string) {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false
        }

        this.tasks.update(tasks => [...tasks, newTask]);
    }
    toggleTask(id: number) {
        this.tasks.update(tasks =>
            tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
        )
    }
    removeTask(id: number) {
        this.tasks.update(tasks =>
            tasks.filter(task => task.id !== id)
        )
    }
}