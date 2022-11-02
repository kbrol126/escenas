import { importSent } from "../componentes/sent/sent";
import { importInbox } from "../componentes/inbox/inbox";

export function handleRoute(routes): any {
  const route = [
    {
      path: /\/inbox/,
      handler: () => importInbox(),
    },
    {
      path: /\/sent/,
      handler: () => importSent(),
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
