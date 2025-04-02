class EstudiantesController{
    construct(){
    }

    consultar(req,res){
        try{
            res.status(200).send ("Funciono ok");
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
