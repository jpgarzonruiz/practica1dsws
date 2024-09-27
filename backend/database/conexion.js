const mysql = require("mysql2");
const db = mysql.createConnection ({
    host: "127.0.0.1",//"192.168.0.4",//"192.168.20.132", //"201.221.172.25",201.221.172.0
    user: "jpgarzon",//"jpgarzon",
    password: "juan1973",
    database: "cursos",
});

db.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log ("BD Mysql Conectado");
});

module.exports = db;

//sudo npm install netlify-cli -g
//npm init
//netlify init
//netlify dev
