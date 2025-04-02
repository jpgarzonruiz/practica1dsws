class EstudiantesController{
    construct(){
    }

    consultar(req,res){
        try{
            let myObj = {dni: "1234", nombre: "Juan", apellidos: "Perez", email:"ejemplo@nose.com"};
            let myJSON = JSON.stringify(myObj);
            res.status(200).send (myJSON);
        }catch (err){
            res.status(500).send(err.message);
        }
    }

    ingresar(req,res){
        try{

            const {dni,nombre,apellidos,email} = req.body;
            console.log ("Documento de identidad: " + dni);
            console.log ("Nombres con apellidos:" + nombre + " " + apellidos);
            console.log ("email: "+ email);
            res.status(200).send ("Funciono ok");
        }catch (err){
            res.status(500).send(err.message);
        }
    }
}

module.exports = new EstudiantesController();
