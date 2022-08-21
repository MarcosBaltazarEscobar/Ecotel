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
function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML+=`<li class="col-sm-3 list-group-item">
            <h3> ID: ${producto.id} </h3>
            <img src=${producto.foto} width="250" height="250">
            <p> Producto: ${producto.nombre}</p>
            <p><strong> $ ${producto.precio} </strong></p>
            <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
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
