const ur = require('colors');
const { cursos }= require('./noveno');
const fs = require('fs');
var express = require('express')
var app = express()



const opciones = {

    Id_Curso:{
        demand:true,
        alias:"ali"
    },
    Nombre_Usuario:{
        demand:true,
        alias:"user"
    },
    Cedula:{
        demand:true,
        alias:"cd"
    }           
}



const argv = require('yargs')
             .command ('inscripcion', 'Registrarse en Educacion Continua', opciones)
             .argv
             
             
             if (argv._[0] === "inscripcion"){

                console.log("Felicitaciones...Tus datos de inscripción son Usuario: ".green +argv.Nombre_Usuario+ ", cedula: ".green +argv.Cedula + " y estas inscrito al ID:".green +argv.Id_Curso + " que corresponde al programa de ".green + cursos[argv.Id_Curso-1].nombre +"\n ,tiene una duracion de ".green+ cursos[argv.Id_Curso-1].duracion + " y su costo es ".green + cursos[argv.Id_Curso-1].valor + "\nPara volver a los cursos digita el comando node decimo".blue)
                texto = 'Felicitaciones...Tus datos de inscripción son Usuario: " '+argv.Nombre_Usuario+' ", cedula: " '+argv.Cedula +' " y estas inscrito al ID:" '+argv.Id_Curso +' " que corresponde al programa de " '+ cursos[argv.Id_Curso-1].nombre +' "\n ,tiene una duracion de " '+ cursos[argv.Id_Curso-1].duracion +' " y su costo es " '+ cursos[argv.Id_Curso-1].valor +''
                fs.writeFile('constancia.txt',texto, (err)=>{
                    if(err) throw (err);
                    console.log('Se generó la constancia de inscripción');
                })
            }             



console.log("")
if(!argv._[0]){
console.log(" EDUCACIÓN CONTINUA-TECNOLÓGICO DE ANTIOQUIA ".bgCyan)
console.log("")
console.log(" Cursos ".bgBlue + " " +" ID".bgBlue + " " +" Duración ".bgBlue + " " + " Valor    ".bgBlue)
for (var i = 0; i < cursos.length ; i++) {
    (function(index) {
        setTimeout(function() { console.log( cursos[index].nombre.bgGreen+ " " + cursos[index].id  + "   " + cursos[index].duracion.bgGreen + " " + cursos[index].valor.bgGreen); }, i * 2000);
    })(i);
}

setTimeout(function(){console.log("")},6000);
setTimeout(function(){console.log(" Si estas interesado, ingresa tus datos como en el siguiente ejemplo: ".bgMagenta)},6000);
setTimeout(function(){console.log("Despues de el esquema " + "C:/Users/Administrador/Desktop/fundamentos>".green + "\nEscribe node decimo inscripcion --Id_Curso=" + "1".red + "--Nombre_Usuario="+"Edison_Giraldo".red +"--Cedula="+"3645623".red +"\ny modificas los valores en color rojo segun tu preferencia y datos personales")},6000);
setTimeout(function(){console.log("")},6000);
}


 
app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)
