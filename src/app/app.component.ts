import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List';
  todos = [
  {
    label:'Bring Milk',
    done:false,
    priority:3
  },
  {
    label:'Pay mobile bill',
    done:true,
    priority:1
  },
  {
    label:'Clean house',
    done:false,
    priority:4
  },
  {
    label:'Fix the bulb',
    done:false,
    priority:5
  },
  {
    label:'Go to shopping centre',
    done:true,
    priority:2
  },
  {
    label:'Look after Animals',
    done:false,
    priority:2
  },
];
addTodo(newTodoLabel) {
  var newTodo = {
    label:newTodoLabel,
    priority:4,
    done:true
  };
  this.todos.push(newTodo);
}
deleteTodo(todo) {
  this.todos = this.todos.filter( t => t.label !== todo.label );
}
}

