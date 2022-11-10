export function importEmail() {
  let component = document.createElement("div");
  const emailId = location.pathname.split("/")[2];
  console.log(emailId);
  component.innerHTML = `<div class="cuerpo">
    <h2 class="title">Inbox ${emailId}</h2>
  
   `;
  return component;
}
