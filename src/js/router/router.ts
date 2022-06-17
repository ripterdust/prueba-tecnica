import { pages } from '../controller';

/*
    Router controller
    @param string
*/

export const router = (route: string) => {
  const content = document.querySelector('#root') as HTMLDivElement;
  content.innerHTML = '';

  switch (route) {
    case '#/home': {
      content.appendChild(pages.home(content));
      break;
    }
    default: {
      pages.notFound();
    }
  }
};
