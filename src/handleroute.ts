import { importSent } from "../componentes/sent/sent";
import { importInbox } from "../componentes/inbox/inbox";

export function handleRoute(routes): any {
  const contenedor = document.querySelector(".contenedor");

  const route = [
    {
      path: /\/inbox/,
      handler: () => contenedor?.appendChild(importInbox()),
    },
    {
      path: /\/sent/,
      handler: () => contenedor?.appendChild(importSent()),
    },
  ];
  for (const r of route) {
    if (r.path.test(routes)) {
      r.handler();
    }
  }
}
