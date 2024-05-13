// Async / Await

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes se descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 5000);
    });
}

function descargarPedidos() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de pedidos se descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });
}

async function ejecutar() {
    try {
        // console.log(1 + 1);
        // const respuesta = await descargarClientes();
        // const respuesta2 = await descargarPedidos();
        // console.log(2 + 2);
        // console.log(respuesta);
        // console.log(respuesta2);

        const respuesta = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
        
    } catch (error) {
        console.log(error);
    }
}

ejecutar();

