function calcular() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operacion = document.querySelector('input[name="operacion"]:checked').value;
    let resultado;

    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        resultado = num1 / num2;
    }

    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}