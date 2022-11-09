export function importEmail() {
  let component = document.createElement("div");
  const emailId = location.pathname.split("/")[2];
  component.innerHTML = `<div class="cuerpo">
    <h2 class="title">Inbox ${emailId}</h2>
  
   `;
  return component;
}
