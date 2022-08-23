const habitaciones = [
    {
        id: "suite1",
        nombre: "Suite",
        tipo:"Suite",
        descripcion: "Suite con vista al mar y una cama king size",
        imagen: "../Assets/imagenes/habitaciones/habitacionSuite.jpg",
        precio: 19999,
    },
    {
        id: "ejecutiva1",
        nombre: "Ejecutiva",
        tipo:"Ejecutiva",
        descripcion: "Habitación ejecutiva con vista al mar y una cama king size",
        imagen: "../Assets/imagenes/habitaciones/habitacionEjecutiva.jpg",
        precio: 13122,
    },
    {
        id: "junior1",
        nombre: "Junior Twins",
        tipo:"JuniorTwins",
        descripcion: "Habitación junior con vista al mar y dos camas",
        imagen: "../Assets/imagenes/habitaciones/habitacionesJuniorTwins.jpg",
        precio:123123,
    },
    {
        id: "junior2",
        nombre: "Junior Matrimonial",
        tipo:"JuniorMatrimonial",
        descripcion: "Habitación junior matrimonial con vista al mar y una cama king size",
        imagen: "../Assets/imagenes/habitaciones/habitacionJuniorMatrimonial.jpg",
        precio:567567,
    }
]

const divHabitaciones = document.getElementById("habitaciones");
const dibujarHabitaciones = () => {
    for(let i = 0; i < habitaciones.length; i++) {
        const habitacion = habitaciones[i];
        const divHabitacion = document.createElement("div");
        divHabitacion.classList.add("habitacion", "col-md-4", "col-sm-6","d-flex", "flex-column", "align-items-center", "justify-content-center");
        divHabitacion.innerHTML = `
            <img src="${habitacion.imagen}" alt="${habitacion.nombre}">
            <h3>${habitacion.nombre}</h3>
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
                            <p>${habitacion.descripcion}</p>
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
                    buscarHabitacion(e.target.id)
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
