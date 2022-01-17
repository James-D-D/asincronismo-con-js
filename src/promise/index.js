///////////
///////////  LLAMADO A UNA PROMESA DE MANERA NORMAL UTILIZAMOS 
///////////  .THEN( ) Y LA PALABRA "Promise"  SIEMPRE 
///////////  CON LA PRIMERA EN MAYUSCULA 
///////////  

const somethingWillHappens = () => {
    return new Promise ((resolve, reject) => {
        if(false){
            resolve('Hey!!!');
        }

        else{
            reject('whoops!');
        }
    });
};

somethingWillHappens()
    .then(response => console.log(response))
    .catch(err => console.error(err));


////////////////
////////////////    LLAMADO A UNA PROMESA UTILIZANDO SETTIMEOUT  RESPONSE === RESPUESTA, REJECT === ERROR   
////////////////
////////////////

const somethingWillHappens2 = () => {
    return new Promise ((resolve, reject) => {
        if(false){
            setTimeout(() => {
                resolve('Si se funcionar')
            }, 2000);
        } else{
            reject('No púedes pasar')
        }
    });
}

somethingWillHappens2()
    .then(response => console.log(response))
    .catch(err => console.error(err));



//////////////
//////////////  LLAMAMOS TODAS LAS PROMESAS ESPECIFICADAS
//////////////  COMO PARAMETRO Y TADAS ENCAPSULADAS 
//////////////  ENTRE LLAVES CERRADAS "[]"
//////////////


Promise.all([somethingWillHappens(), somethingWillHappens2()])
    .then(response => {  console.log('buenas tardes, ', response)})
    .catch(reject => {  console.error('No hay nadie', reject)});