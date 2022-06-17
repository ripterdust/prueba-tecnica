/*
    Get notes
    @param content : HTMLDivElement
*/

import { deleteTodo } from './deleteTodo';

interface TodoModel {
  name: string;
  description: string;
  id: number;
}

export const getTodos = (content: HTMLDivElement) => {
  const elements = localStorage.notes;
  if (!elements) return true;
  const data = JSON.parse(elements);
  const todos = document.querySelector('#todos') as HTMLDivElement;
  todos.innerHTML = '';
  data.reverse().map((todo: TodoModel) => {
    todos.innerHTML += `
        <div class="todo box" id="todo" idTodo="${todo.id}">
            <div class="title" todoId="${todo.id}" id="todo-${todo.id}">${todo.name}</div>
            <div class="description">${todo.description}</div>
            <button class="button deleteTodo" idTodo="${todo.id}">
                <i class="fa-solid fa-trash-can" idTodo="${todo.id}"></i>
            </button>
        </div>
    `;
    return true;
  });

  // Delete button
  const deleteBTN = document.querySelectorAll<HTMLElement>('.deleteTodo');

  deleteBTN.forEach((el: HTMLElement) => {
    el.removeEventListener('click', () => true);
    el.addEventListener('click', (e: Event) => {
      if (e.target) {
        const button = el as HTMLButtonElement;
        // @ts-ignore
        const id: number = button.getAttribute('idTodo');
        deleteTodo(id);
        getTodos(content);
      }
    });
  });
  return content;
};
