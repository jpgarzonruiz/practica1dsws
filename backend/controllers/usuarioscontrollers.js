class UsuariosController{
    construct(){
    }


    /*
    const admin = require('./firebaseAdmin');

exports.handler = async (event, context) => {
  try {
    const userId = event.queryStringParameters.id;
    const userDoc = await admin.firestore().collection('users').doc(userId).get();

    if (!userDoc.exists) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Usuario no encontrado' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(userDoc.data()),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener el usuario' }),
    };
  }
};
*/

    consultardetalle(req,res){
        const admin = require('./firebaseAdmin');

        try{
            let arreglo=[];
            let myObj = {dni: "1234", nombre: "Juan", apellidos: "Perez", email:"ejemplo@nose.com"};
            let myObj2 = {dni: "2", nombre: "J2uan", apellidos: "222Perez", email:"222ejemplo@nose.com"};

            arreglo.push (myObj);
            arreglo.push (myObj2);

            let myJSON = JSON.stringify(arreglo);

            res.status(200).send (myJSON);
        }catch (err){
            res.status(500).send(err.message);
        }
    }
    ingresar(req,res){
        try{
            const {dni,nombre,apellidos,email} = req.body;
            console.log ("Documento de identidad:... " + dni);
            console.log ("Nombres con apellidos:" + nombre + " " + apellidos);
            console.log ("email: "+ email);
            res.status(200).send ("Funciono ok");
        }catch (err){
            res.status(500).send(err.message);
        }
    }
}
module.exports = new UsuariosController();
