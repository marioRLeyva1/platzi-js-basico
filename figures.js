//Evento Click
let clickCuadrado = document.getElementById("square");
let clickTriangulo = document.getElementById("triangle");
clickCuadrado.addEventListener("click", cuadrado);
clickTriangulo.addEventListener("click", triangulo);

//Función Cuadrado
function cuadrado(lado){
    const input = document.getElementById("square-side");
    console.log(input.value);
    if (input.value>0){
        let area = input.value * input.value;
        console.log(area);
        document.getElementById("result").innerHTML = "El resultado es " + area + " cm^2";
    } else if (input.value == ""){
        document.getElementById("result").innerHTML = "No se puede calcular, no se ingresó tamaño";
        console.log("error empty");
    }else{
        document.getElementById("result").innerHTML = "No se puede calcular, el tamaño tiene que ser mayor a cero.";
        console.log("error menor a cero");
    }
}
//Función Triángulo
function triangulo(base, altura){
    let area = (base * altura) / 2;
    return area;
}
//Función Circulo
function areaCiruculo(radio){
    let area = (radio * radio) * Math.PI;
    return area;
}