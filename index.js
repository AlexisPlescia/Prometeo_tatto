//Forma recomendable para definir variables
//let: edad = 45; 

/* Forma alternativa
let edad2;
edad2 = 50
const CURSO = "JavaScript"; */

//nombreBonitoGrande => CamelCase (Para Javascript)
//nombre_bonito_grande => SnakeCase
//NombreBonitoGrande => PascalCase

/*let numeroUno = 5;
let numeroDos = 10;
let resultadoSuma = numeroUno + numeroDos;
console.log("aca el resultado de la suma", resultadoSuma );
*/

/*let saludo = "Hola";
let nombre = "andres";
let salidoCompleto = "Hola andres";
console.log(saludoCompleto);
*/
/*let saludo;
saludo = "Bienvenido";
alert(saludo);
let numero1 = parseInt(prompt("ingrese un numero"));
let numero2 = parseInt(prompt("ingrese otro"));
let suma = (numero1 + numero2);
alert("El resultado de la suma es "+suma);
*/

/*let numero = parseInt(prompt('Ingrese un numero'));

for(let i = 1; i <= 10; i++){
    let resultado = numero * i;
    alert(`${numero} X ${i} = ${resultado}`)
}
*/
/*let usuario =  prompt("Ingrese usuario");
let contraseña =  prompt("ingrese su contraseña");


if (((usuario == "roman") && (contraseña == "roman1"))){
    alert("Usuario correcto")
        alert("Bienvenido Roman !")
        let numero1 = parseInt(prompt("Ingrese un numero y se multiplicara por si mismo "));
    let I;
            for(I = numero1 ; I <=1000 ; I++ ){
                let resultado = I * I;
                alert(`${resultado}`)

            }
    
    
    }
   
else if (usuario != "roman")
    alert("Ingrese otro usuario");


else if(contraseña != "roman1")
    alert("Contraseña incorrecta");

*/

// let producto = prompt("¿Que producto deseas buscar? para salir ingrese salir");

// while (producto != "salir") {
//     switch (producto) {
//         case "monitor":
//             alert(`contamos con 5 ${producto}`);
//             break;
//         case "mouse":
//             alert(`contamos con 20 ${producto}`);
//             break;
//         case "":
//             alert("No ingresó ningún producto");
//             break;
//         default:
//             alert(`${producto} no está disponible`);
//             break;
//     }
//     producto = prompt("¿Que producto deseas buscar?");
// 
// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;

// const iva = x => x * 0.21;

// let precio_producto = parseInt(prompt("ingrese un numero"));
// let divicion = parseInt(prompt("ingrese el por el cual desea"));
// let precio_iva = resta(suma(precio_producto,iva(precio_producto)),descuento)
// let mensaje = `el precio del producto es ${precio_iva}`;

// alert(mensaje);

// let num1 = parseInt(prompt("ingrese un numero mayor a 10"));
// let num2 = parseInt(prompt("ingrese el numero por el cual desea dividir"));
// let resto = num1 + 8000 ;
// let mensaje = `El resto de la divicion es ${resto}`;
// alert (mensaje);

// 

// let nombre = prompt("ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad mayor a 18"));
// let lugar_tatuaje = prompt("ingrese el lugar del tatuaje");
// let fecha = Date(prompt('ingrese una fecha'));
// alert("su turno fue agendado");


// const function = true_false (info){
//     nombre = false
//     edad = false
//     lugar_tatuaje = false
//     numero = false




// const function = new tatuaje (info){
//     this.nombre = info.nombre
//     this.tatuaje = info.tatuaje
//     this.fecha = info.fecha
// }
// const producto1 = newtatuaje(
//     {
//         let nombre = prompt("Ingrese su nombre");

    
//     }
// 
const horarios = [
    {
        dia: "lunes", 
        horario: "15:30", 
        precio: 1000
    },
    {
        dia: "martes", 
        horario: "17:30", 
        precio: 1000},
    {
        dia: "miercoles", 
        horario: "19:00", 
        precio: 1000
    },
];
let carrito = []

let seleccion = prompt("Bienvenido a prometeo tatto, desea agendar un turno ? ")

while(seleccion != "si" && seleccion != "no" ){
    alert("La respuesta solo puede ser Si o No")
    seleccion = prompt("Bienvenido a prometeo tatto, desea agendar un turno ? ")
}

if(seleccion == "si" ){
    alert("Estos son los turnos disponibles")
    let todoslosturnos = horarios.map((horarios) => horarios.dia + "\n " + horarios.horario +  "  \n$" + horarios.precio + "\n" );
    alert(todoslosturnos.join("  "))}
    else if(seleccion == "no"){
        alert("Gracias por venir, hasta pronto")
    }
while (seleccion != "no"){
    let turno = prompt ("agrega un turno al carrito")
    let precio = 0
    
    if(turno == "lunes" || turno == "martes" || turno == "miercoles"){
        switch (turno) {
        case "lunes":
            dia = "lunes";
            horario = "15:30";
            precio = 1000;
            break;
        case "martes": 
            dia = "martes";
            horario = "17:30"
            precio = 1000;
            break;
         case "miercoles":
            dia = "miercoles";
            horario = "19:00"
            precio = 1000;
            break;  
         default:
                break;
            }
    let unidades = prompt ("deseas agendar otro turno?")
    carrito.push({dia, horario, precio})
    console.log(carrito)
}
    else{
        alert("no tenemos ese horario")
    
    }
    seleccion = prompt("desea agendar otro turno ? ")

    while(seleccion == "no"){
        alert("Su turno fue agendado, Gracias por confiar en nosotors")
        carrito.forEach( ( turnoFinal ) => {
            console.log(`horarios: ${turnoFinal.horario}, precio: ${turnoFinal.precio}
            , el total de su seña a abonar es de: ${turnoFinal.unidades * turnoFinal.precio}`)

        });
        break;
    }
}