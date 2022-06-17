/*
    Get notes
    @param content : HTMLDivElement
*/

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
  data.map((todo: TodoModel) => {
    todos.innerHTML += `
        <div class="todo" id="todo" idTodo="${todo.id}">
            <div class="title" todoId="${todo.id}" id="todo-${todo.id}">${todo.name}</div>
            <div class="description">${todo.description}</div>
            <button class="button deleteTodo" idTodo="${todo.id}"></button>
        </div>
    `;
    return true;
  });
  return content;
};
