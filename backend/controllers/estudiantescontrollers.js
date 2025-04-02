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
        try{/*
            const myJSON = JSON.stringify(req.body);
            console.log ("la información que llega es " + myJSON );
            */

            const {dni,nombre,apellidos,email} = req.body;
            console.log ("Un dato como el documento de identidad es " + dni);

            /*res.status(201).json({id: "123");*/
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
