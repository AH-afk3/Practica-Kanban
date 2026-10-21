
const DB_INICIAL = {
    menu: [
        { id: 1, nombre: "Tacos de Asada (Orden)", precio: 120.00 },
        { id: 2, nombre: "Hamburguesa Clásica", precio: 95.50 },
        { id: 3, nombre: "Ensalada César", precio: 80.00 }
    ],
    comandas: []
};

// Inicializar la BD si no existe
if (!localStorage.getItem('restauranteDB')) {
    localStorage.setItem('restauranteDB', JSON.stringify(DB_INICIAL));
}


function obtenerMenu() {
    // TAREA 1: Leer 'restauranteDB' de localStorage, convertirlo con JSON.parse y retornar el arreglo 'menu'.
    console.log("Falta programar: obtenerMenu()");
    return []; 
}

function guardarComanda(totalOrden) {
    // TAREA 5: Crear un objeto orden { fecha: new Date(), total: totalOrden }, guardarlo en el arreglo 'comandas' y actualizar localStorage.
    console.log("Falta programar: guardarComanda()");
}