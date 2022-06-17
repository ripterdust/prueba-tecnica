import view from '../views/home.html';

export default (content: HTMLDivElement) => {
  const div = content;
  div.innerHTML = view;

  return div;
};
