function guardar(){

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


    for (let vc in transformado){
        elemento =  "<br>DI: " + transformado[vc].dni;
        elemento = elemento + "<br>Nombres y apellidos: " + transformado[vc].nombre + " " + transformado[vc].apellidos;
        elemento = elemento + "<br>Correo electrónico: " + transformado[vc].email;
        salida = salida  + elemento + "<br><br>";
    }

    document.getElementById("rta").innerHTML = salida;
}

function listar(){
    event.preventDefault();
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };



    fetch("https://ejemplodedsws.netlify.app/.netlify/functions/usuarios?id=user124", requestOptions)
      .then((response) =>
        response.text())
      .then((result) =>
        cargar(result))
      .catch((error) =>
        console.error(error));
}


/*


//Ejemplo cuando se devuelve algo
function cargar(resultado){
    let transformado = JSON.parse(resultado);
    var salida="";
    var elemento="";


    for (let vc in transformado){
        elemento =  "<br>DI: " + transformado[vc].dni;
        elemento = elemento + "<br>Nombres y apellidos: " + transformado[vc].nombre + " " + transformado[vc].apellidos;
        elemento = elemento + "<br>Correo electrónico: " + transformado[vc].email;
        salida = salida  + elemento + "<br><br>";
    }

    document.getElementById("rta").innerHTML = salida;
}

function oka(){

*/
    /*
    document.getElementById('consultar').addEventListener('click', async () => {
      //const userId = 'user124'; // Reemplaza con el ID del documento que agregaste
      const userId = document.getElementById("identificador").value;
      try {
        const response = await fetch(`https://ejemplodefirebase.netlify.app/.netlify/functions/usuarios?id=${userId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('resultado').textContent = JSON.stringify(data, null, 2);
      } catch (error) {
        document.getElementById('resultado').textContent = error.toString();
      }
    });
    */
/*
    const userId = 'user124';
    event.preventDefault();
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://ejemplodedsws.netlify.app/.netlify/functions/usuarios?id=${userId}", requestOptions)
      .then((response) =>
        response.text())
      .then((result) =>
        cargar(result))
      .catch((error) =>
        console.error(error));

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
      .then((result) =>
        cargar(result))
      .catch((error) =>
        console.error(error));
}
*/
