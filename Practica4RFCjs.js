const form = document.getElementById('RFC-form');
const rfcParagraph = document.getElementById('rfc');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellidoPaterno = document.getElementById('apellidopa').value;
  const apellidoMaterno = document.getElementById('apellidoma').value;
  const anioNacimiento = document.getElementById('anaci').value;
  const mesNacimiento = document.getElementById('mesna').value;
  const diaNacimiento = document.getElementById('diana').value;

  const rfc = apellidoPaterno.slice(0, 2) + apellidoMaterno.slice(0, 1) + nombre.slice(0, 1) + anioNacimiento.slice(2, 4) + mesNacimiento.padStart(2, '0') + diaNacimiento.padStart(2, '0');

  rfcParagraph.textContent = `Su RFC es: ${rfc}`;
});
