export function importInbox() {
  let component = document.createElement("div");
  component.innerHTML = `<div class="cuerpo">
  <h2 class="title">Inbox</h2>
  <input
    type="email"
    class="email1 icono"
    id="primer_email"
    placeholder=" un email"
  />
  <input
    type="email"
    class="email1 icono"
    id="segundo_email"
    placeholder=" un email"
  />
</div>`;
  return component;
}