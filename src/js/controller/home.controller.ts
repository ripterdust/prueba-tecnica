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
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  return div;
};
