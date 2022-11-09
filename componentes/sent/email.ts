export function importEmailSent() {
  let component = document.createElement("div");
  const emailId = location.pathname.split("/")[2];
  component.innerHTML = `<div class="cuerpo">
      <h2 class="title">Sent ${emailId}</h2>
    
     `;
  return component;
}
