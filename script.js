//After clase 10
let carrito=[];
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    //cargar los elementos del carro abandonado a la tabla
}
let lista=document.getElementById("milista");
    
//llamada a renderizar
renderizarProductos();

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

//agregar un boton de finalizar compra -> borrado de estructuras, mensaje al usuario de que
//su pedido está en proceso de preparacion y entrega.

//poder eliminar productos de la tabla y de todas las estructuras de carro


