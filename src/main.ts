import { handleRoute } from "./handleroute";

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}
function main() {
  const inboxEl = document.querySelector(".inbox");
  const sentEl = document.querySelector(".sent");
  inboxEl?.addEventListener("click", () => goTo("/inbox"));
  sentEl?.addEventListener("click", () => goTo("/sent"));
  window.addEventListener("load", handleRoute(location.pathname));
}
main();
