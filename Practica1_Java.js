function suma() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let resultado = parseInt(num1) + parseInt(num2);
    if(resultado<0)
    {
        alert("El resultado de la suma es negativo " + resultado);
    } else
    {
        if(resultado>0)
        {
            alert("El resultado de la suma es positivo " + resultado);
        }
    }
}

function resta() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let resultado = parseInt(num1) - parseInt(num2);
    if(resultado<0)
    {
        alert("El resultado de la resta es negativo " + resultado);
    } else
    {
        if(resultado>0)
        {
            alert("El resultado de la resta es positivo " + resultado);
        }
    }
}

function multiplicacion() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let resultado = parseInt(num1) * parseInt(num2);
    if(resultado<0)
    {
        alert("El resultado de la multiplicación es negativo " + resultado);
    } else
    {
        if(resultado>0)
        {
            alert("El resultado de la multiplicación es positivo " + resultado);
        }
    }
}

function division() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let resultado = parseInt(num1) / parseInt(num2);
    if(resultado<0)
    {
        alert("El resultado de la division es negativo " + resultado);
    } else
    {
        if(resultado>0)
        {
            alert("El resultado de la division es positivo " + resultado);
        }
    }
}

function evalu(){
    var num;
    num = prompt("Ingrese un numero", "");
    if (num < 0){
        alert("El número es negativo");
    }else{
        if(num > 1){
            alert("El número es positivo");
        }
    }

}