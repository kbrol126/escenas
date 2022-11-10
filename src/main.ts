import { handleRoute } from "./handleroute";
import { goTo } from "./handleroute";

function main() {
  const inboxEl = document.querySelector(".inbox");
  const sentEl = document.querySelector(".sent");
  inboxEl?.addEventListener("click", () => goTo("/inbox"));
  sentEl?.addEventListener("click", () => goTo("/sent"));
  const aEl = document.querySelectorAll("a");
  for (const links of aEl) {
    links.addEventListener("click", (e) => {
      e.preventDefault();
      const link = (e.target as any).getAttribute("href");
      goTo(link);
    });
  }
  window.addEventListener("load", () => handleRoute(location.pathname));
}
main();
