const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    if(auth) {
        resolve('Usuario autenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión'); // El promise no se cumple
    }
});

console.log(usuarioAutenticado);

// En los promises existen 3 valores posibles: 
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - No se ha cumplido y tampoco fue rechazado

// Los promises son muy útiles para realizar tareas síncronas.


