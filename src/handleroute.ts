import { importSent } from "../componentes/sent/sent";
import { importInbox } from "../componentes/inbox/inbox";
import { importEmail } from "../componentes/inbox/email";
import { importEmailSent } from "../componentes/sent/email";
export function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}
export function handleRoute(contenedor): any {
  const routes = [
    {
      path: /\//,
      handler: () => importInbox(),
    },
    {
      path: /\/inbox/,
      handler: () => importInbox(),
    },
    {
      path: /\/sent/,
      handler: () => importSent(),
    },
    {
      path: /\/sent\//,
      handler: () => importEmailSent(),
    },
    {
      path: /\/inbox\//,
      handler: () => importEmail(),
    },
  ];
  for (const r of routes) {
    if (r.path.test(contenedor)) {
      const el = r.handler();
      const contenedor = document.querySelector(".contenedor");
      if (contenedor?.firstChild) {
        contenedor.firstChild.remove();
      }
      contenedor?.appendChild(el);
    }
  }
}
