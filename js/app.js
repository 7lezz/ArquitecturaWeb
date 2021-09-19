const correo = document.getElementById('correo');
const btLogin =  document.getElementById('login');


btLogin.addEventListener('click',obtenerDatos)

function obtenerDatos(e){
    e.preventDefault();
    if(validarCorreo() === 0){
        return;
    }



}
//validacion correo
function validarCorreo()
{
    if (correo.value === '' ) {
        console.log('Correo no puede ser vacio');
        return 0;
    }
    if(correo.value.indexOf('@') <= 0){
        console.log('Falta el arroba');
        return 0 ;
    }
    
    console.log('Correo valido');
    return 1;
}


