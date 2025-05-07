class UsuariosController{
    construct(){
    }

     async consultarDetalle(req,res){

        try{
            const admin = require('./firebaseAdmin');
            let iden = req.query.iden;
            const userDoc = await admin.firestore().collection('users').doc(iden).get();

            if (!userDoc.exists) {
                return res.status(404).json({ error: 'Usuario no encontrado:' + iden  });
            }

            // Obtener los datos del documento
            const userData = userDoc.data();

            return res.status(200).json(userData);
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
