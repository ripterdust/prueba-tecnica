import home from '../views/home.html';

export default (content: HTMLElement) => {
  const div = document.createElement('div') as HTMLDivElement;

  console.log(content, div, home);
};
