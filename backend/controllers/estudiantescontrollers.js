class EstudiantesController{
    construct(){
    }

    consultar(req,res){
        try{
            let myObj = {dni: "1234", nombre: "Juan", apellidos: "Perez", enail:"ejemplo@nose.com"};
            let myJSON = JSON.stringify(myObj);
            res.status(200).send (myJSON);
            //res.status(200).send ("Funciono ok desde ws ");
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
/*
    consultarDetalle(req,res){
        const {id} = req.params;
        try{

            db.query('SELECT  * FROM estudiantes WHERE id=?',
            [id],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                res.status(200).json(rows[0]);
            });
        }catch (err){
            res.status(500).send(err.message);
        }

    }
*/
}

module.exports = new EstudiantesController();
