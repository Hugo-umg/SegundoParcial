import { conectar } from "../modelo/db_conectar.js";

var crud_estudiante =({});

crud_estudiante.leer = (req, res) => {
    conectar.query('SELECT id_estudiante, carnet, nombres, apellidos, direccion, telefono, genero, email, DATE_FORMAT(estudiantes.fecha_nacimiento,"%d/%m/%Y") as fecha_nacimiento FROM estudiantes;', (error, results) => {
        if (error){
            throw error;
        }else{
            res.render('estudiantes/index', {resultado:results})
        }
    })
};

crud_estudiante.cud = (req, res) => {
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id = req.body.txt_id;
    const carnet = req.body.txt_carnet;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const genero = req.body.txt_genero;
    const email = req.body.txt_email;
    const fecha_nacimiento = req.body.txt_fechaNac;
  
    if (btn_crear){
        conectar.query('Insert Into Estudiantes SET ?', {carnet:carnet, nombres:nombres, apellidos:apellidos, direccion:direccion, telefono:telefono, genero:genero, email:email, fecha_nacimiento:fecha_nacimiento}, (error, results) => {
            if(error){
                console.log(error);
            }else{
                res.redirect('/');         
            }
        });
    }

    if (btn_actualizar){
        conectar.query('Update Estudiantes SET ? Where id_estudiante = ?', [{carnet:carnet, nombres:nombres, apellidos:apellidos, direccion:direccion, telefono:telefono, genero:genero, email:email, fecha_nacimiento:fecha_nacimiento}, id], (error, results) => {
            if(error){
                console.log(error);
            }else{   
                res.redirect('/');         
            }
        });
    }

    if (btn_borrar){
        conectar.query('Delete From Estudiantes Where id_estudiante = ?', [id], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/');         
            }
        });
    }
};

export {crud_estudiante}
