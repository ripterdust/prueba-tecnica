import { router } from './js/router/router';

// Importing css
import './styles/main.scss';

// Routing
const init = () => {
  router(window.location.hash);

  window.addEventListener('hashchange', () => {
    router(window.location.hash);
  });
};

window.addEventListener('load', init);
