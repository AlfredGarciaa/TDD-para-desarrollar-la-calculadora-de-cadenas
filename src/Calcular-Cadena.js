class Calculador{
    sumar_cadena(cadena, delimitador){
        if(cadena == ""){
        return 0;
        }
        else{
        let suma = 0, baseNumerico = 10;
        if(delimitador){
            cadena = cadena.split(delimitador)
            for(var i = 0; i < cadena.length; i++){
            suma = suma + parseInt(cadena[i], baseNumerico);
            }
        } 
        if(!delimitador) {
            let subCadena = "";
            let entero;
            for(var i = 0; i <= cadena.length; i++){
            if(parseInt(cadena[i], baseNumerico) || cadena[i] == 0){
                subCadena = subCadena + cadena[i];
            }else{
                entero = parseInt(subCadena, baseNumerico);
                if(entero <= 1000) suma = suma + entero;
                subCadena = "";
            }
            }
        }
        return suma;
        }
    }
}

export default Calculador;