/**
 *  LLAMAMOS LA LIBRERIA NPM PARA CONSULTAR NUESTRA API 
 */

 let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
 
 /**
  *  SETEAMOS EL FUNCIONAMIENTO DE NUESTRA API
 */
 const fetchData = (urlApi) => {
     
    return new Promise((resolve, reject) => { 
        //CREAMOS UNA INSTANCIA DE NUESTRA LIBRERIA NPM 
     let xhttp = new XMLHttpRequest();
     // ESPECIFICAMOS EL METODO DE CONSUMO Y LA URL 
     xhttp.open('GET', urlApi,true);
     //ESCUCHAMOS UN CAMBIO DE EVENTO PARA EMPESAR LA VALIDACION 
     xhttp.onreadystatechange = (() => {
        //VALIDAMOS QUE SE HAYA INCIIADO EL PROCESO 
        if(xhttp.readyState === 4) {
            // SI EL RESULTADO ES SATISFACTORIO, TRANSFORMAMOS EL JSON A TEXTO 
            (xhttp.status === 200) 
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error('Error', urlApi));
        }
    })
     xhttp.send();
    });
 }
    
 
 module.exports = fetchData;