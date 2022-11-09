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
  const aEl = document.querySelectorAll("a");
  for (const links of aEl) {
    links.addEventListener("click", (e) => {
      e.preventDefault();
      const link = (e.target as any).getAttribute("href");
      goTo(link);
    });
  }
}
main();
