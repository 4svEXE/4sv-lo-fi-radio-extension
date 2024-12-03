import { environment } from './environments/environment';

const baseHrefElement = document.querySelector('base');
if (baseHrefElement) {
  baseHrefElement.setAttribute('href', environment.baseHref);
}
