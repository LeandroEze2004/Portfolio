const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Completá todos los campos.");
    return;
  }

  if (!email.includes("@")) {
    alert("Ingresá un correo válido.");
    return;
  }

  const asunto = encodeURIComponent("Contacto desde mi portfolio");
  const cuerpo = encodeURIComponent(mensaje + "\n\nDe: " + nombre + " (" + email + ")");
  window.location.href = "mailto:Mikolajewski.04@gmail.com?subject=" + asunto + "&body=" + cuerpo;
});
