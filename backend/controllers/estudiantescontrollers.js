class EstudiantesController{


    construct(){
    }

    consultar(req,res){
        try{
            let arreglo=[];
            let myObj = {dni: "1234", nombre: "Juan", apellidos: "Perez", email:"ejemplo@nose.com"};
            arreglo.push (myObj); //nuevo

            let myObj2 = {dni: "2", nombre: "J2uan", apellidos: "222Perez", email:"222ejemplo@nose.com"};
            arreglo.push (myObj2); //nuevo

            let myJSON = JSON.stringify(arreglo);
            //let myJSON = JSON.stringify(myObj);
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
