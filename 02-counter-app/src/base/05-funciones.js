
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});

const user = getUser();


// Tarea
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');


module.exports = {
    getUser,
    getUsuarioActivo
}