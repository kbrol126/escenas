import map from "lodash";
import { importSent } from "../componentes/sent/sent";
import { importInbox } from "../componentes/inbox/inbox";

function handleRoute(routes) {
  const contenedor = document.querySelector(".contenedor");

  const route = [
    {
      path: /\/inbox/,
      handler: () => contenedor.appendChild(importInbox()),
    },
    {
      path: /\/sent/,
      handler: () => contenedor.appendChild(importSent()),
    },
  ];
  for (const r of route) {
    if (r.path.test(routes)) {
      r.handler();
    }
  }
}

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}
function main() {
  const inboxEl = document.querySelector(".inbox");
  const sentEl = document.querySelector(".sent");
  inboxEl.addEventListener("click", () => goTo("/inbox"));
  sentEl.addEventListener("click", () => goTo("/sent"));
  window.addEventListener("load", handleRoute(location.pathname));
}
main();
