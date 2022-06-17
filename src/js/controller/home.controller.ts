import { save } from '../hellpers/save';
import view from '../views/home.html';

/*
  Home view

  @param content : HTMLDivElement

*/

export default (content: HTMLDivElement) => {
  const div = content;
  div.innerHTML = view;

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
  });

  return div;
};
