 function sum(num1,num2){
     return num1 + num2;
 }

 function calc(num1,num2,callback){
     return callback(num1,num2);
 }

 console.log(calc(4,5, sum));

 /*
  * 
  * CALLBACK COMO MEDIO PARA UNA FUNCION 
  * 
 */


 function date(callback){
     console.log(new Date);

     setTimeout(function(){
         let date = new Date;

         console.log(date);
     }, 5000)
 };

 /**
  * 
  *  LO PRIMEROM EN EJECUTARSE ES LA FUNCION CALLBACK, 
  *  LA PODEMOS USAR PARA MOSTRAR VARIAS PROPIEDADES   
  *  MIENTRAS NUESTRA FUNCION SETTIME ESTA 
  *  EN LA COLA DE EJECUCION
  * 
  */

 function printDate(dateNow){
     console.log(dateNow);

     console.log(555);
 };

 date(printDate("buenas tardes"));
