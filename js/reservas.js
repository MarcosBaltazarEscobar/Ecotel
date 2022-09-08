const habitaciones = [
    {
        id: "suite1",
        nombre: "Suite",
        tipo:"Suite",
        descripcion: "Suite con vista al jardin de invierno del hotel y una cama king size",
        descripcionCompleta: "La superficie de esta habitacion es de 60 M2, cuenta con Tv smart, caja de seguridad, teléfono, baño con ducha y jacuzzi, minibar y escritorio de trabajo. Tambien cuenta con balcon con vista al jardin de invierno que se encuentra en el centro de nuestro hotel y servicio de desayuno incluido.",
        imagen: "../Assets/imagenes/habitaciones/habitacionSuite.jpg",
        precio: 8800,
    },
    {
        id: "ejecutiva1",
        nombre: "Ejecutiva",
        tipo:"Ejecutiva",
        descripcion: "Habitación ejecutiva con vista al mar y una cama king size ",
        descripcionCompleta: "La superficie de esta habitacion es de 50 M2, cuenta con Tv smart, caja de seguridad, teléfono, baño con ducha, minibar y escritorio de trabajo. Tambien cuenta con balcón y servicio de desayuno incluido",
        imagen: "../Assets/imagenes/habitaciones/habitacionEjecutiva.jpg",
        precio: 6555,
    },
    {
        id: "junior1",
        nombre: "Junior Twins",
        tipo:"JuniorTwins",
        descripcion: "Habitación junior con vista al mar y dos camas",
        descripcionCompleta: "La superficie de esta habitacion es de 42 M2, cuenta con Tv smart, caja de seguridad, teléfono, baño con ducha y jacuzzi, minibar y escritorio de trabajo. Desayuno incluido en la tarifa.",
        imagen: "../Assets/imagenes/habitaciones/habitacionJuniorTwin.jpg",
        precio:4300,
    },
    {
        id: "junior2",
        nombre: "Junior Matrimonial",
        tipo:"JuniorMatrimonial",
        descripcion: "Habitación junior matrimonial",
        descripcionCompleta: "La superficie de esta habitacion es de 42 M2, cuenta con Tv smart, caja de seguridad, teléfono, baño con ducha y jacuzzi, minibar y escritorio de trabajo. Desayuno incluido en la tarifa.",
        imagen: "../Assets/imagenes/habitaciones/habitacionJuniorMatrimonial.jpg",
        precio:4300,
    }
]

const divHabitaciones = document.getElementById("habitaciones");
const dibujarHabitaciones = () => {
    for(let i = 0; i < habitaciones.length; i++) {
        const habitacion = habitaciones[i];
        const divHabitacion = document.createElement("div");
        divHabitacion.classList.add("habitacion", "col-md-12","col-lg-12", "col-sm-6","d-flex", "flex-column", "align-items-center", "justify-content-center");
        divHabitacion.innerHTML = `
            <img src="${habitacion.imagen}" alt="${habitacion.nombre}">
            <h3>${habitacion.nombre}</h3>
            <p class="precio"><strong>$ ${habitacion.precio} / Por noche</strong></p>
            <p>${habitacion.descripcion}</p>
            <button class="btn btn-success" id=${habitacion.id}>Mas Detalles</button>
        `;
        divHabitaciones.appendChild(divHabitacion);

        const btnMasDetalles = document.getElementById(habitacion.id);

        btnMasDetalles.addEventListener("click", () => {
            let modal = document.createElement("div");
            modal.classList.add("modal", "fade");
            modal.setAttribute("role", "dialog");
            modal.setAttribute("tabindex", "-1");
            modal.setAttribute("aria-labelledby", "myModalLabel");
            modal.setAttribute("aria-hidden", "true");
            modal.innerHTML = `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">${habitacion.nombre}</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <img src="${habitacion.imagen}" alt="${habitacion.nombre}">
                            <p>${habitacion.descripcionCompleta}</p>
                            <p class="precio">Precio por noche:$ ${habitacion.precio}</p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-success" id=${habitacion.tipo} data-dismiss="modal">Reservar</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            $(modal).modal("show"); 


            const btnReservar = document.getElementById(habitacion.tipo);
            btnReservar.addEventListener('click', (e) => {
                reservar(
                    buscarHabitacion(e.target.id),
                    agregarHabitaciones(habitacion),
                    Swal.fire({
                        title: 'Se ha seleccionado la habitacion correctamente',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                )
            })
        })

    }
    
}
dibujarHabitaciones();

const reservas = [];

const buscarHabitacion = (nombreHabitacion) => {
    let resultado = habitaciones.find(habitacion => habitacion.tipo == nombreHabitacion);
    return resultado
}

const reservar = (habitacion) => { 
    reservas.push(habitacion);
    console.log(reservas);
}

//----------------



function agregarHabitaciones(habitacion){
    document.getElementById("tablabodyReservas").innerHTML+=`
        <tr>
            <td>${habitacion.nombre}</td>
            <td>${habitacion.precio}</td>
        </tr>
    `;
    localStorage.setItem("reservas",JSON.stringify(reservas));
    document.getElementById("reservasTotal").innerText=(`Total: $ ${calcularTotalReserva()}`);
    localStorage.setItem("reservas",JSON.stringify(reservas)); 
}

function calcularTotalReserva() {
    let suma = 0;
    for (const elemento of reservas) {
        suma = suma + elemento.precio ;
    }
    return suma;
}

function vaciarReservas(){
    document.getElementById("limpiarReservas")
    reservas.length = 0;
    localStorage.setItem("reservas",JSON.stringify(reservas));
    document.getElementById("tablabodyReservas").innerHTML = ""
    
}
//mensaje que se envia al finalizar compra
function mensajeFinReservas(){
    if(reservas.length===0){
    // alert ("El carrito está vacio.");
    Swal.fire({
        icon: 'error',
        title: 'Mmm... algo salió mal',
        text: 'El carrito aún está vacío! Selecciona alguna promocion por favor.',
        footer: '<a href="">Promociones validas en el día de hoy</a>'
      })
    }else {
    // alert("Su pedido está siendo procesado y preparado para su entrega. El monto a pagar es: ");
    Swal.fire(
        'Finalizaste tus reservas!!',
        'A continuacion te pediremos tus datos para finalizar tu reserva. ',
        'success'
      )
    vaciarReservas()
    } 
}

let realizarReserva = document.getElementById("finalizarReserva")
realizarReserva.addEventListener("click", mensajeFinReservas);{
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4eabe1b59dmsh8a04680525baf99p102831jsnb14b1c11c826',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

let divTemperatura= document.querySelector("#divtemperatura");

//  divTemperatura.innerHTML=`
//      <div class="card-panel white col s12">
//      <div class="black-text">
//      <h2>El clima de Mendoza es: </h2>
//      <p class="temperatura">
//          ${(response.data.[0].temp)},
//      </p>
//      </div>
//      </div>
//  `;

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=-32.8&lon=-68.8', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));