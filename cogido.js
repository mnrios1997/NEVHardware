let selectorCarrito = document.querySelector(".carrito"); //SELECCIONO LA CAJA DEL CARRITO
let catalogo = document.querySelector(".contenedorCatalogo") //selecciono al catalogo entero

let selectorProducto = catalogo.getElementsByTagName("div"); //getElementsByTagName me duelve todos los div que posee catalogo

let producto = [];
let btnAgregar = [];
for (let i = 0; i < selectorProducto.length; i++) {
    producto[i] = selectorProducto[i]; //dentro de cada posicion del arreglo producto, guardo un elemento div del catalogo(osea un div producto). Ahi cree dos arreglos creo que se puede optimizar un poco mas y remover un arreglo y dejar uno
    btnAgregar[i] = producto[i].querySelector(".btn-agregar"); //ahora en cada posicion btnAgregar guardo el o los botones que tenga el div de prodcuto. Si vos haces un console log del btnAgragar te tiene que devolver un arreglo pero de elementos de tipo button.
    console.log(btnAgregar[i]);
}






let nombreProducto = catalogo.querySelectorAll("h3");
//console.log(nombre);



//Gennerando precios aleatorios por producto
let todosLosProductos = document.querySelectorAll(".producto");
let precioTodosLosProductos = [];
for (let i = 0; i < todosLosProductos.length; i++) {
    precioTodosLosProductos[i] = todosLosProductos[i].querySelector(".precio");
    let precio = 100 + (Math.random() * 100);
    let precioRedondeado = Math.round(precio);

    precioTodosLosProductos[i].innerHTML = `$ ${precioRedondeado}`
    //console.log(precioTodosLosProductos[i]);
}
//seleccionar carrito de compras
let cantidadEnCarrito = document.querySelector(".incrementador-carrito");
let incremento = 0;
cantidadEnCarrito.innerHTML = `${incremento}`

for (let i = 0; i < btnAgregar.length; i++) {
    //con el for recorro el arreglo de botones y le doy un evento cada boton de cada producto.
    btnAgregar[i].addEventListener("click", () => {
        let crear = document.createElement("DIV"); //creo un elemento de tipo div
        let nombre = document.createElement("H3");
        let imagencita = document.createElement("IMG");
        imagencita.classList.add("imagencita");
        imagencita.src = "Imagenes/Ig.png";
        
        console.log(imagencita);
        crear.appendChild(nombre);
        crear.appendChild(imagencita);
        
        nombre.innerHTML = nombreProducto[i].textContent;
        console.log(nombre);
       // console.log(nombre);
        crear.classList.add("verdes"); //al elemento que cree arriba le a??ado  una clase (verdes) como si lo hiciera en el html. Eso para probar si anda. Pero sirve para ir modificando el css de las cajitas que se van agregando a carrito
        selectorCarrito.appendChild(crear); //aca solo lo que hago es agregar el div nuevo a la caja carrito

        incremento++;
        //console.log(incremento);
        cantidadEnCarrito.innerHTML = `${incremento}`
    });
}