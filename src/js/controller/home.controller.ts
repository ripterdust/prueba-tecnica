import { edit } from '../helpers/edit';
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

  // Saving todo
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
  // Save edited todo
  const editForm = document.querySelector('#editForm') as HTMLFormElement;

  editForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    edit();
    getTodos(content);
  });
  return div;
};
