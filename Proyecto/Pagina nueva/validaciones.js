//Obtengo valores en formulario del documento con la funcion getelement
//los elementos los guardo dentro de la variable elementos

let formulario = document.getElementsByName ('formulario')[0];
let elementos = formulario.elements;
let boton = document.getElementById('enviar');

//todo a minusucula
formulario.nombre.toLowerCase();
formulario.apellido.toLowerCase();

//validacion por nulo y por pocas letras
let validarNombre = function (e){
    if(formulario.nombre.value == '' || formulario.nombre.value.length <= 5){
        alert("Complete correctamente el sector Nombre");
        document.formulario.nombre.focus();
        e.preventDefault ();
        return;
    }
};
//validacion por nulo y por pocas letras
let validarApellido = function (e){
    if(formulario.apellido.value == '' || formulario.apellido.value.length <= 5){
        alert("Complete correctamente el sector Apellido");
        document.formulario.apellido.focus();
        e.preventDefault ();
        return;
    }
};
//validacion por nulo
let validarEmail = function (e){
    if(formulario.email.value == '' ){
        alert("Complete correctamente el sector Email");
        document.formulario.email.focus();
        e.preventDefault ();
        return;
    }
};
//validacion por nulo, pocas letras y por tipo de dato ingresado
let validarTelefono = function (e){
    if(formulario.telefono.value == '' || formulario.nombre.value.length <= 5 || isNaN(formulario.telefono.value)==true){
        alert("Escriba un numero de Telefono valido");
        document.formulario.telefono.focus();
        e.preventDefault ();
        return;
    }
};

//funcion que llama al resto de funciones
//segun teoria, la e es para que el programa no siga corriendo cuando se ejecuta la funcion. Esa parte solo pude copiar de la teoria, no pude terminar de comprender bien el funcionamiento
let validar = function (e){
    validarNombre(e);
    validarApellido(e);
    validarEmail(e);
    validarTelefono(e);
}

//Espera a la ejecucion del submit para activar la funcion Validar.
formulario.addEventListener("submit", validar);

