let carrito=[];
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    //FALTA cargar los elementos del carro abandonado a la tabla
}
let lista=document.getElementById("milista");


//Carga los elementos al html
renderizarProductos();

function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML+=`<li class="col-sm-3 list-group-item">
            <img src="${producto.foto}" width="250" height="250">
            <p> ${producto.nombre}</p>
            <p><strong> $ ${producto.precio} </strong></p>
            <button class='btn btn-outline-success' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }
    //eventos boton
    productos.forEach(producto =>{
        //evento individual para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    })
}

//Funcion agregar al carrito/tabla 

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    alert("Producto: "+producto.nombre+" agregado al carro!");
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    localStorage.setItem("carrito",JSON.stringify(carrito)); 
}

//agregar al carrito 

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    alert("Producto: "+producto.nombre+" agregado al carro!");
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    localStorage.setItem("carrito",JSON.stringify(carrito));
    //sumar el total de la compra
}


//vacia el la tabla y el carrito del logstorage al apretar "finalizar compra"
function vaciarCarrito(){
    document.getElementById("limpiarCarrito")
    carrito.length = 0;
    localStorage.setItem("carrito",JSON.stringify(carrito));
    document.getElementById("tablabody").innerHTML = ""
    
}
//mensaje que se envia al finalizar compra
function mensajeFinCompra(){
    if(carrito.length===0){
    alert ("El carrito está vacio.");
    }else {
    alert("Su pedido está siendo procesado y preparado para su entrega. El monto a pagar es: ");
    vaciarCarrito()
    } 
}

let finalizarCompra = document.getElementById("finalizarCompra")
finalizarCompra.addEventListener("click", mensajeFinCompra);{
}


carrito.length === 0 && console.log ("el carrito esta vacio")



const desestructurar=(item) =>{
    const {id,nombre}=item
    console.log(id,nombre)
}
desestructurar(productos)

//SPREAD

const nombresPromociones=["Cena romantica","Noche para dos","Cena tres pasos"]

//comienza los métodos de pago


// function mostrarMetodosPago()

// {
//     let = metodoPago = prompt("Elige el método de Pago ingresando el número.\n\n1) Tarjeta de Crédito (3 cuotas sin interes, 6 cuotas con un recargo del 5% o 12 cuotas con un recargo del 10%)\n2) Tarjeta de Débito (1 solo pago, 3 cuotas sin interes, 6 sin interés, 12 con un recargo del 10%)\n3) Cancelar Compra");

//     if (metodoPago == "1"){
//         tarjetaCrédito()
//     }else if(metodoPago == "2"){
//         tarjetaDébito()
//     }else if(metodoPago == "3"){
//         alert("Se ha cancelado la compra, será redireccionado a la pantalla de inicio.");    
//     }else{
//         alert("No es valido el número ingresado, vuelva a intentar");
//         mostrarMetodosPago()
//     }
// }

// mostrarMetodosPago()

//finaliza los métodos de pago


//inicio function de métodos de pagos

// function tarjetaDébito()
// {
//     let cantCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1)1 solo pago.\n2) 3 cuotas sin interés\n3) 6 cuotas sin interés\n4) 12 cuotas (Con recargo del 10%)");
//     if (cantCuotas == 1){
//         let sinRecargo = precio / 1;
//         alert("Perfecto, Cada cuota sera de $"+sinRecargo+". Ya seras redireccionado para finalizar la compra.");
//     }else if(cantCuotas == 2){
//         let sinRecargo = precio / 3;
//         alert("Perfecto, Cada cuota sera de $"+sinRecargo+". Ya seras redireccionado para finalizar la compra.");
//     }else if(cantCuotas == 2){
//         let sinRecargo = precio / 6;
//         alert("Perfecto, Cada cuota sera de $"+sinRecargo+". Ya seras redireccionado para finalizar la compra.");
//     }else if(cantCuotas == 2){
//         let conRecargo = (precio / 12) * 1.10;
//         alert("Perfecto, Cada cuota sera de $"+conRecargo+". Ya seras redireccionado para finalizar la compra.");
//     }else{
//         alert("No es valido el número ingresado, vuelva a intentar");
//         tarjetaDébito()
//     }
// }
// function tarjetaCrédito()
// {
//     let cantCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1) 3 cuotas\n2) 6 cuotas (Con un recargo del 5%)\n3) 12 cuotas (Con un recargo del 10%");
//     if (cantCuotas == 1){
//         let sinRecargo = precio / 3;
//         alert("Perfecto, Cada cuota sera de $"+sinRecargo+". Ya seras redireccionado para finalizar la compra.");
//     }else if(cantidadCuotas == 2){
//         let conRecargo = (precio / 6) * 1.05;
//         alert("Perfecto, Cada cuota sera de $"+conRecargo+". Ya seras redireccionado para finalizar la compra.");
//     }else if(cantidadCuotas == 3){
//         let conRecargo = (precio / 12) * 1.10;
//         alert("Perfecto, Cada cuota sera de $"+conRecargo+". Ya seras redireccionado para finalizar la compra.");
//     }else{
//         alert("No es valido el número ingresado, vuelva a intentar");
//         tarjetaCrédito()
//     }
// }


