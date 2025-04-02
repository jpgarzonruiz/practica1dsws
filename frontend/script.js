function guardar(){

    let nota=0.0;
    let apellidos='';
    let datoingresado = document.getElementById("correo").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
      "dni": document.getElementById("dni").value,
      "nombre": document.getElementById("nombre").value,
      "apellidos": document.getElementById("apellidos").value,
      "email": document.getElementById("correo").value
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://ejemplodedsws.netlify.app/.netlify/functions/estudiantes", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}

//Ejemplo cuando se devuelve algo
function cargar(resultado){
    let transformado = JSON.parse(resultado);
    var salida="";
    var elemento="";

    elemento = "ID: " + transformado.id;
        elemento = elemento + "<br>Documento de identidad: " + transformado.dni;
        elemento = elemento + "<br>Nombres: " + transformado.nombre;
        elemento = elemento + "<br>Apellidos: " + transformado.apellidos;
        elemento = elemento + "<br>Correo electrónico : " + transformado.email;
        salida = salida  + elemento + "<br><br>";

    /*
    for (let vc in transformado){
        elemento = "ID: " + transformado[vc].id;
        elemento = elemento + "<br>Documento de identidad: " + transformado[vc].dni;
        elemento = elemento + "<br>Nombres: " + transformado[vc].nombre;
        elemento = elemento + "<br>Apellidos: " + transformado[vc].apellidos;
        elemento = elemento + "<br>Correo electrónico: " + transformado[vc].email;
        salida = salida  + elemento + "<br><br>";
    }*/
    document.getElementById("rta").innerHTML = salida;
}

function listar(){
    event.preventDefault();
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    fetch("https://ejemplodedsws.netlify.app/.netlify/functions/estudiantes", requestOptions)
      .then((response) =>
        response.text())
        //console.log("la respuesta es de " + response.text))
      .then((result) =>
        cargar(result))
        //console.log("Resultado desde el backend:"+result))
      .catch((error) =>
        console.error(error));
    /*
    fetch("https://ejemplodedsws.netlify.app/.netlify/functions/webService", requestOptions)
      .then((response) =>
        response.text())
        //console.log("la respuesta es de " + response.text))
      .then((result) =>
        //cargar(result))
        console.log("esto aa es lo que se devuelve:"+result))
      .catch((error) =>
        console.error(error));
    */

}
