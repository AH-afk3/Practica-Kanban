
let totalActual = 0;

function cargarMenu() {
    // TAREA 3: Usar obtenerMenu() e iterar el arreglo para inyectar HTML en el div 'menu-container'.
    const contenedor = document.getElementById('menu-container');
    contenedor.innerHTML = "<p>El menú aún no se ha renderizado.</p>";
}

// TAREA 4: Crear función para sumar el precio al hacer clic en un platillo y actualizar el elemento 'total'.

document.getElementById('btn-ordenar').addEventListener('click', function() {
    // TAREA 6: Validar que el total sea mayor a 0, llamar a guardarComanda(), reiniciar el total y mostrar un alert().
    alert("Botón presionado, pero falta programar la lógica de envío.");
});

cargarMenu();