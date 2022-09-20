let carrito=[];
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
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
    //eventos boton de promociones
    productos.forEach(producto =>{
        //evento individual para cada boton de promociones
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
    Swal.fire({
        title: producto.nombre,
        text: 'Precio de la promoción:' + producto.precio,
        imageUrl: producto.foto,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    localStorage.setItem("carrito",JSON.stringify(carrito));

//sumar el total de la compra de todos las promociones

    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function calcularTotal() {
    let suma = 0;
    for (const elemento of carrito) {
        suma = suma + elemento.precio ;
    }
    return suma;
}


//Funcion formulario de fin de compra
function formFindeCompra(){
    document.getElementById("promocionesDisponibles").innerHTML+=`
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="well well-sm">
                    <form class="form-horizontal" method="" id=formularioFinCompra>
                        <fieldset>
                            <legend class="text-center header">Completa los siguientes datos</legend>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="nombreFinCompra" name="name" type="text" placeholder="Nombre" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="apellidoFinCompra" name="name" type="text" placeholder="Apellido" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="emailFinCompra" name="email" type="email" placeholder="Email" class="form-control">
                                    <p></p> 
                                </div>
                            </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="phone" name="phone" type="text" placeholder="Número de teléfono" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                                <div class="col-md-8">
                                    <textarea class="form-control" id="mensajeFinCompra" name="message" placeholder="Por favor complete este espacio para detallar sobre su reserva" rows="7"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-12 text-center">
                                <a href=""><button onclick="seEnviaMail()"type="submit" class="btn btn-outline-success">Enviar</button></a>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}
//vacia el la tabla y el carrito del logstorage al apretar "finalizar compra"
function vaciarCarrito(){
    document.getElementById("limpiarCarrito")
    carrito.length = 0;
    localStorage.setItem("carrito",JSON.stringify(carrito));
    document.getElementById("tablabody").innerHTML = "";
    document.getElementById("gastoTotal").innerText=(`Total: $ 0`)
    setTimeout (formFindeCompra,3000)
    
}
//mensaje que se envia al finalizar compra
function mensajeFinCompra(){
    if(carrito.length===0){
    Swal.fire({
        icon: 'error',
        title: 'Mmm... algo salió mal',
        text: 'El carrito aún está vacío! Selecciona alguna promocion por favor.',
        footer: '<a href="">Promociones validas en el día de hoy</a>'
      })
    }else {
    Swal.fire(
        'Finalizaste tu seleccion de promociones!!',
        'Ahora te pediremos los datos para poder reservar tu lugar ',
        'success'
      )
    vaciarCarrito()
    } 
}

let finalizarCompra = document.getElementById("finalizarCompra")
finalizarCompra.addEventListener("click", mensajeFinCompra);{
}

//Funcion que envia mail al hacer click en el formulario de fin de compra
function seEnviaMail(){
    Swal.fire(
        'Te enviamos un correo!',
        'Por favor revisa tu casilla de correos, como también tu casilla de spam!'
      )
}
carrito.length === 0 && console.log ("el carrito esta vacio")



const desestructurar=(item) =>{
    const {id,nombre}=item
    console.log(id,nombre)
}
desestructurar(productos)

window.addEventListener('load', ()=> {
    const formularioFinCompra = document.querySelector('#formularioFinCompra')
    const emailFinCompra = document.getElementById('emailFinCompra')

    formularioFinCompra.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCamposFinCompra()
    })
    
    const validaCamposFinCompra = ()=> {
        //capturar los valores ingresados por el usuario
        const emailFinCompraValor = emailFinCompra.value.trim()

        //validando campo email
        if(!emailFinCompraValor){
            validaFallaFinCompra(emailFinCompra, 'Campo vacío')            
        }else if(!validaEmailFinCompra(emailFinCompraValor)) {
            validaFallaFinCompra(emailFinCompra, 'El e-mail no es válido')
        }else {
            validaOk(emailFinCompra)
        }
    }

    const validaFallaFinCompra = (input, msje) => {
        const formularioControl = input.parentElement
        const aviso = formularioControl.querySelector('p')
        aviso.innerText = msje

        formularioControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formularioControl = input.parentElement
        formularioControl.className = 'form-control ok'
    }

    const validaEmailFinCompra = (emailFinCompra) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailFinCompra);        
    }

})


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


