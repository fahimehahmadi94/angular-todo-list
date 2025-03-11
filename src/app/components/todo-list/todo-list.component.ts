import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../core/services/task.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  taskTitle = signal('');
  protected todoService = inject(TodoService)

  addTask() {
    if (this.taskTitle) {
      this.todoService.addTask(this.taskTitle());
      this.taskTitle.set('');
    }
  }
  toggleTask(id: number) {
    this.todoService.toggleTask(id);
  }
  removeTask(id: number) {
    this.todoService.removeTask(id);
  }
}
