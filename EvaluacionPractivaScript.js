function verificarCumpleanos() {
    // Obtener la fecha actual
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11

    // Obtener el mes de nacimiento del usuario
    var fechaNacimiento = new Date(document.getElementById("fecha").value);
    var mesNacimiento = fechaNacimiento.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11

    // Obtener el nombre del usuario
    var nombreUsuario = document.getElementById("nombre").value;

    // Verificar si es el cumpleaños del usuario
    if (mesActual === mesNacimiento) {
      // Mostrar el mensaje de descuento y una imagen
      document.getElementById("mensaje").textContent = "¡Feliz cumpleaños, " + nombreUsuario + "! Obtén un 10% de descuento en tu compra.";
      document.getElementById("imagen").src ="Descuento.jpg";
    } else {
      // Mostrar el mensaje de no descuento
      document.getElementById("mensaje").textContent = "Hoy no es tu cumpleaños, " + nombreUsuario + ". No obtienes descuento.";
    }
  }