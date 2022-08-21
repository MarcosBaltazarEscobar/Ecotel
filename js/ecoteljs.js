class Rooms {
        constructor(nombre, tipo, precio, cantidad) {

        this.nombre = nombre.toUpperCase();

        this.tipo = tipo;

        this.precio = precio;

        this.cantidad = cantidad;

        

      }
}

const productos = []


productos.push(new Rooms("Habitación suite","individual", 230, 5));
productos.push(new Rooms("Habitación ejecutiva", "individual", 200, 5));
productos.push(new Rooms("Habitación junior", "grupal", 180, 10));

function mayorDeEdad(n){
    return (m) => m => n

}
let mayorEdad=mayorDeEdad (18);
let edad = parseInt (prompt("Por favor ingrese su edad para comenzar a utilizar la aplicación."))
console.log ( mayorEdad(edad));

let habitacion=prompt("Bienvenido a Ecotel, te cuidamos como a nuestro hogar. Para comenzar, te recomendamos que explores nuestro sitio web para que te enteres de todos nuestros servicios y como ayudamos a cuidar a nuestro planeta. Si ya lo hiciste, te invitamos a que te hospedes con nosotros, por favor seleccione la opción que desee.\n\n1)Si quiere continuar\n2)Salir")
let precio=0;

if(habitacion == "1"){
    alert("En el siguiente anuncion podrá comenzar con la compra!")
    console.table(productos)
    habitacionesDisponibles()
}else if(habitacion == "2"){
        alert("Sabes que puedes reservar con nosotros cuando quieras!");
    }else{
        alert("No es valido el número ingresado, vuelva a intentar. Recuerde que las opciones es 1 o 2"); 
        habitacion=prompt("Bienvenido a Ecotel, te cuidamos como a nuestro hogar. Para comenzar, te recomendamos que explores nuestro sitio web para que te enteres de todos nuestros servicios y como ayudamos a cuidar a nuestro planeta. Si ya lo hiciste, te invitamos a que te hospedes en con nosotros, por favor seleccione la opción que desee.\n\n1)Si quiere continuar\n2)Salir")
    }

 //Finaliza el listado de habitaciones
 
//Arranca venta de habitaciones 


function habitacionesDisponibles()    
    
{   
    let habitaciones=prompt("Ingresa el nombre de las habitaciones que deseas adquirir. \n(Introduzca la palabra -salir- para abandonar la compra)")    

    while(habitaciones !="salir"){
             switch (habitaciones.toUpperCase()){
                 case "SUITE":
                         precio = precio + 230;
                         console.log ("La habitacion Suite cuesta $230");
                     break;
                case "EJECUTIVA":
                        precio = precio + 200;
                        console.log ("La habitacion Ejecutiva cuesta $200");
                    break;
                 case "JUNIOR":
                         precio = precio + 180;
                         console.log ("La habitación Junior tiene un valor de $180")
                     break;
                 // el tipo de habitacion no existe
                 default:
                     alert("Este tipo de habitación no existe. Por favor verificar el tipo de habitación que introduce.");
                     break;
             }
        habitaciones=prompt("Ingresa el nombre de las habitaciones que deseas adquirir. \n(Introduzca la palabra -salir- para abandonar la compra)")
    }

}    

console.log("Total a pagar por habitaciones $"+precio)


//Fin venta de habitaciones 

//Agregar IVA para residentes argentinos pendiente


//comienza los métodos de pago


function mostrarMetodosPago()

{
    let = metodoPago = prompt("Elige el método de Pago ingresando el número.\n\n1) Tarjeta de Crédito (3 cuotas sin interes, 6 cuotas con un recargo del 5% o 12 cuotas con un recargo del 10%)\n2) Tarjeta de Débito (1 solo pago, 3 cuotas sin interes, 6 sin interés, 12 con un recargo del 10%)\n3) Cancelar Compra");

    if (metodoPago == "1"){
        tarjetaCrédito()
    }else if(metodoPago == "2"){
        tarjetaDébito()
    }else if(metodoPago == "3"){
        alert("Se ha cancelado la compra, será redireccionado a la pantalla de inicio.");    
    }else{
        alert("No es valido el número ingresado, vuelva a intentar");
        mostrarMetodosPago()
    }
}

mostrarMetodosPago()

//finaliza los métodos de pago

// agregar IVA para residentes argentinos

//inicio function de métodos de pagos

function tarjetaDébito()
{
    let cantCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1)1 solo pago.\n2) 3 cuotas sin interés\n3) 6 cuotas sin interés\n4) 12 cuotas (Con recargo del 10%)");
    if (cantCuotas == 1){
        let sinRecargo = precio / 1;
        alert("Perfecto, Cada cuota sera de $"+sinRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else if(cantCuotas == 2){
        let sinRecargo = precio / 3;
        alert("Perfecto, Cada cuota sera de $"+sinRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else if(cantCuotas == 2){
        let sinRecargo = precio / 6;
        alert("Perfecto, Cada cuota sera de $"+sinRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else if(cantCuotas == 2){
        let conRecargo = (precio / 12) * 1.10;
        alert("Perfecto, Cada cuota sera de $"+conRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else{
        alert("No es valido el número ingresado, vuelva a intentar");
        tarjetaDébito()
    }
}
function tarjetaCrédito()
{
    let cantCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1) 3 cuotas\n2) 6 cuotas (Con un recargo del 5%)\n3) 12 cuotas (Con un recargo del 10%");
    if (cantCuotas == 1){
        let sinRecargo = precio / 3;
        alert("Perfecto, Cada cuota sera de $"+sinRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else if(cantidadCuotas == 2){
        let conRecargo = (precio / 6) * 1.05;
        alert("Perfecto, Cada cuota sera de $"+conRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else if(cantidadCuotas == 3){
        let conRecargo = (precio / 12) * 1.10;
        alert("Perfecto, Cada cuota sera de $"+conRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else{
        alert("No es valido el número ingresado, vuelva a intentar");
        tarjetaCrédito()
    }
}

// DOM
console.log (document.body);
let parrafos=document.getElementById("parrafito");
console.log(parrafos);
parrafos.innerHTML= "EL newsletter te otorgara grandes beneficios a la hora de obtener una habitacion con descuento!";
parrafos.style.backgroundColor="green";

let ul=document.createElement("ul");
document.body.append(ul);
let redesSociales = ["Facebook","Instagram","TripAdvisor"];
for (const redSocial of redesSociales){
    let li = document.createElement("li");
    li.innerHTML=redSocial
    ul.appendChild(li)
}

let formulario=document.getElementById("formulario");
formulario.addEventListener("submit",validarFormulario);
let campoNombre=document.getElementById("nombre");
let campoPais=document.getElementById("pais");


function validarFormulario(ev){
    if((campoNombre.value=="")||(!isNaN(campoNombre.value))||(campoPais.value=="")||(!isNaN(campoPais.value))){
        ev.preventDefault();
        alert("Ingrese nombre y un pais válido por favor");
    }
}

//esto va en promociones.html


console.log (document.body);
let parrafoPromocion=document.getElementById("descripcion_Habitaciones");
console.log(parrafoPromocion);
parrafoPromocion.style.backgroundColor="yellow";
parrafoPromocion.innerHTML= "lolalola";

// const rooms = ['Suite', 'Ejecutiva', 'Junior'];

// rooms.forEach(producto =>{
//     console.log(producto);
//     document.getElementById("tipoSuite").addEventListener("click");
//     parrafoPromocion.style.backgroundColor="yellow";
//     parrafoPromocion.innerHTML= "lolalola";



//ANIMACION EN LAS DESCRIPCIONES


// if(document.getElementById("tipoSuite").addEventListener("click")){
//     document.getElementById("descripcion_Habitaciones");
//     parrafoPromocion.innerHTML= "Habitacion SUITE";
//     parrafoPromocion.style.backgroundColor="green";
// }else if(document.getElementById("tipoEjecutiva").addEventListener("click")){
//     document.getElementById("descripcion_Habitaciones");
//     parrafoPromocion.innerHTML= "Habitacion Ejecutiva";
//     parrafoPromocion.style.backgroundColor="red";
// }

 
//HABITACIONES HTML

let parrafofin=document.getElementById("descriptions1");
console.log(parrafofin);
parrafofin.innerHTML= "lola la hora de obtener una habitacion con descuento!";
parrafofin.style.backgroundColor="red";
//Dark mode/ light mode

let modo;

if(localStorage.getItem("modo")){
    modo=localStorage.getItem("modo");
}else{
    modo="light";
}


let principal=document.getElementById("cuerpo");

let boton=document.getElementById("mode");

document.main.className=modo;

principal.className="light "+modo;

//guarda estado de modo dark/light en el local

localStorage.setItem("modo",modo);


//boton dark/light
boton.onclick=()=>{
    if(modo=="dark"){
        document.body.className="light";
        principal.className="light"
        boton.innerText="Light Mode";
        modo="light"
    }else{
        document.body.className="dark";
        principal.className="dark"
        boton.innerText="Dark Mode";
        modo="dark"
    }
    localStorage.setItem("modo",modo);
}


//PROMOCIONES//PROMOCIONES
//PROMOCIONES//PROMOCIONES
//PROMOCIONES//PROMOCIONES
//PROMOCIONES//PROMOCIONES

const promociones = [];

//CONSTRUCTOR DE PROMOCIONES

class Promocion {
    constructor(id, nombre, descripcion, precio, imagen, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;

    }
}


promociones.push(new Promocion(1, "Noche de bodas", "Una relajada estadía para compartir con tu pareja", 25000, "promociones/noche_de_bodas.jpg"))
promociones.push(new Promocion(1, "Cena de tres pasos", "Para disfrutar con esas personas especiales", 5000, "promociones/cena_tres_pasos.jpg"))
promociones.push(new Promocion(1, "Sunday Brunch", "Los domingos son para relajarse y comer rico", 3000, "promociones/sunday_brunch.jpg"))

let lista = document.getElementById("promocionesDisponibles");

// LLAMADA A RENDERIZAR 

renderizarPromociones();

function renderizarPromociones(){
    for (const promociones of promociones){
        lista.innerHTML+=`<li class="col-sm-3 list-group-items">
        <h3>ID: ${promociones.id}</h3>
        <img src=${promociones.imagen} width="250" height="250">
        <p>Promocion: ${promociones.nombre}</p>
        <p><strong>$ ${promociones.precio}</strong></p>
        <button class="btn btn-danger" id="btn${promociones.id}">Comprar</button>
    </li>`;
    }
}

//PROMOCIONES FIIIIIIIIIIIIIIIIIN

