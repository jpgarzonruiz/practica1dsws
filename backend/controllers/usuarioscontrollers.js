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

     async consultarDetalle(req,res){

        try{
            const admin = require('./firebaseAdmin');
            const userDoc = await admin.firestore().collection('users').doc('user124').get();
            // Verificar si el documento existe
                if (!userDoc.exists) {
                  return res.status(404).json({ error: 'Usuario no encontrado' });
                }

                // Obtener los datos del documento
                const userData = userDoc.data();

                return res.status(200).json(userData);

/*
            let arreglo=[];
            let myObj = {dni: "1234", nombre: "ojo le paso un...", apellidos: "parametro y si lo lee es ", email:"ejemplo@nose.com"};
            let myObj2 = {dni: "2", nombre: "Otro nombre", apellidos: "222Perez", email:"222ejemplo@nose.com"};

            arreglo.push (myObj);
            arreglo.push (myObj2);

            let myJSON = JSON.stringify(arreglo);

            res.status(200).send (myJSON);
        }catch (err){
            res.status(500).send(err.message);
        }
*/


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
