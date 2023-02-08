// PRACTICAS DE TRABAJO EN JAVASCRIPT

//ejercicio4();

function ejercicio1() {
    let mensaje = prompt("Escribe tu mensaje");
    alert(mensaje);
}

function ejercicio3() {
    let numero = prompt("Indique un numero:")
    if (numero > 0) {
        console.log("El numero " + numero + " es mayor que cero");
    } else if (numero == 0) {
        console.log("El numero es cero")
    } else {
        console.log("El numero " + numero + " es menor que cero");
    }
}

function ejercicio4() {
    let num1 = parseInt(prompt("Digite el numero 1"));
    let num2 = parseInt(prompt("Digite el numero 2"));
    console.log("El resultado de la suma de " + num1 + " y " + num2 + " es " + (num1 + num2));
    console.log("El resultado de la resta de " + num1 + " y " + num2 + " es " + (num1 - num2));
    console.log("El resultado de la multiplicación de " + num1 + " y " + num2 + " es " + (num1 * num2));
    console.log("El resultado de la división de " + num1 + " y " + num2 + " es " + (num1 / num2));
}

function test() {
    var capaTres = document.getElementById("tres");
    capaTres.style.backgroundColor = "#ccc";
    capaTres.style.color = "red";
    capaTres.style.fontSize = "30px";
    capaTres.innerHTML = "Hiciste un <b>CLICK!</b>"
}

function test2() {
    let capaDos = document.getElementsByName("dos")[0];
    capaDos.style.fontSize = "50px";
    capaDos.innerText = "2";
}

function test3() {
    let listaElementos = document.getElementsByTagName("div");
    listaElementos[0].style.backgroundColor = "green";
}

function agregar() {
    let nombreAgregar = document.getElementById("nombre").value;
    let tabla = document.getElementsByTagName("table")[0];
    let body = tabla.children[0];
    let fila = document.createElement("tr");
    let columna = document.createElement("td");
    columna.innerText = nombreAgregar;
    fila.appendChild(columna);
    body.appendChild(fila);
}