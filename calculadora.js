let num1, num2, operacion;
let continuar = true;

const realizarOperacion = (num1, num2, operacion) => {
    if (operacion == "suma") {
        return (num1 + num2);
    } 
    else if (operacion == "resta") {
        return (num1 - num2);
    }
    else if (operacion == "multiplicacion") {
        return (num1 * num2);
    }
    else if (operacion == "division") {
        if (num2 == 0) {
            return "No es posible realizar una division por cero"
        }

        return (num1 / num2);
    }
    else {
        return "Esta operacion no es valida"
    }
}


while(operacion != "salir") {
    num1 = prompt("Ingrese el primer numero ");
    num2 = prompt("Ingrese el segundo numero ");
    
    operacion = prompt("Ingrese la operacion (suma, resta, multiplicacion, division): ");

    console.log("El resultado es: ")
    console.log(realizarOperacion(+num1, +num2, operacion))

    pregunta = prompt("Desea realizar otra operacion? (si/no): ")

    if (pregunta == "si") {
        continue
    } else {
        console.log("Gracias por usar la calculadora! Adios!!")
        break
    }
}