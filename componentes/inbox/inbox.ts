export function importInbox() {
  let component = document.createElement("div");
  component.innerHTML = `<div class="cuerpo">
  <h2 class="title">Inbox</h2>

  <ul>
  <li class="email1" > <a href="/inbox/unemail">un email</a></li>
  <li class="email1"> <a href="/inbox/otroemail">otro email</a></li>


</ul>
</div>`;
  return component;
}
