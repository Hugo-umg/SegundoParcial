import mysql from 'mysql'

var conectar = mysql.createConnection({
    host : 'localhost',
    user : ' root',
    password : 'SegundoParcial123',
    database : 'db_universidad',
});

conectar.connect(function(err){
    if(err){
        console.error('Error en la conexion: ' + err.stack)
        return;
    }

    console.log('Conexion exitosa ID: ' + conectar.threadId)
});

export {conectar};