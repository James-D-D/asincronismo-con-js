/**
 *  LLAMAMOS LA LIBRERIA NPM PARA CONSULTAR NUESTRA API 
 */

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/';

/**
 * 
 *  SETEAMOS EL FUNCIONAMIENTO DE NUESTRA API
 * 
*/

function fetchData(urlApi, callback){

    //CREAMOS UNA INSTANCIA DE NUESTRA LIBRERIA NPM 
    let xhttp = new XMLHttpRequest();

    // ESPECIFICAMOS EL METODO DE CONSUMO Y LA URL 
    xhttp.open('GET', urlApi,true);

    //ESCUCHAMOS UN CAMBIO DE EVENTO PARA EMPESAR LA VALIDACION 
    xhttp.onreadystatechange = function(event){

        //VALIDAMOS QUE SE HAYA INCIIADO EL PROCESO 
        if(xhttp.readyState === 4) {

            // SI EL RESULTADO ES SATISFACTORIO, TRANSFORMAMOS EL JSON A TEXTO 
            if(xhttp.status === 200) {
                callback(null,JSON.parse(xhttp.responseText));
            } 
            
            //DE LO CONTRARIO MANDAMOS UN ERROR 
            else{
                const error = new Error('Error '+ urlApi);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}


fetchData(API, function(error1, data1){
    if(error1) return console.error(error1 + 55);
    fetchData(API + data1.results[1].id,function(error2, data2){
        if(error2) return console.error(error2 + 65);
        fetchData(data2.origin.url,function(error3,data3){
            if(error3) return console.error(error3 + 75);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});