import { importSent } from "../componentes/sent/sent";
import { importInbox } from "../componentes/inbox/inbox";
import { importEmail } from "../componentes/inbox/email";
import { importEmailSent } from "../componentes/sent/email";

export function handleRoute(routes): any {
  const route = [
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
  for (const r of route) {
    if (r.path.test(routes)) {
      const el = r.handler();
      const contenedor = document.querySelector(".contenedor");
      if (contenedor?.firstChild) {
        contenedor.firstChild.remove();
      }
      contenedor?.appendChild(el);
    }
  }
}
