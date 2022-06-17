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
  data.reverse().map((todo: TodoModel) => {
    todos.innerHTML += `
        <div class="todo box" id="todo" idTodo="${todo.id}">
            <div class="title" todoId="${todo.id}" id="todo-${todo.id}">${todo.name}</div>
            <div class="description">${todo.description}</div>
            <button class="button deleteTodo" idTodo="${todo.id}">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `;
    return true;
  });
  return content;
};
