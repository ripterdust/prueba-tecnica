import { deleteTodo } from '../helpers/deleteTodo';
import { getTodos } from '../helpers/getTodos';
import { save } from '../helpers/save';
import view from '../views/home.html';

/*
  Home view

  @param content : HTMLDivElement

*/

export default (content: HTMLDivElement) => {
  const div = content;
  div.innerHTML = view;

  // Getting todos
  getTodos(content);
  // Form to add TODOs
  const form = document.querySelector('.form') as HTMLFormElement;
  const name = document.querySelector('#name') as HTMLInputElement;
  const desc = document.querySelector('#desc') as HTMLInputElement;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    if (name.value == null && desc.value == null) return;
    const data: { name: string; description: string } = {
      name: name.value,
      description: desc.value,
    };
    save(data);
    getTodos(content);
  });

  // Delete button
  const deleteBTN = document.querySelectorAll<HTMLElement>('.deleteTodo');

  deleteBTN.forEach((el: HTMLElement) => {
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

  return div;
};
