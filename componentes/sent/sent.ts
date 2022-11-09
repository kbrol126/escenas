export function importSent() {
  let component = document.createElement("div");
  component.innerHTML = `<div class="cuerpo">
  <h2 class="title">Sent</h2>
  <ul>
  <li class="email1" > <a href="/sent/unemail">un email</a></li>
  <li class="email1"> <a href="/sent/otroemail">otro email</a></li>


</ul>
</div>`;
  return component;
}
