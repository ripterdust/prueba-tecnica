import view from '../views/home.html';

/*
  Home view

  @param content : HTMLDivElement

*/

export default (content: HTMLDivElement) => {
  const div = content;
  div.innerHTML = view;

  return div;
};
