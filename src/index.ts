//let precioProducto: number = 450.5;
//let porcentajeDescuento: number = 0.1;
//let descuento: number = precioProducto * porcentajeDescuento;
//let precioFinal: number = precioProducto - descuento;
//console.log(precioFinal);

let precioProducto = document.getElementById("precioProducto");

btnEnv.addEventListener("click", () => {
  console.log(
    "El precio final es: ",
    precioProducto.value - precioProducto.value * 0.1
  );
});
