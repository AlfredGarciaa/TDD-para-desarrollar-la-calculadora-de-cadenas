describe("Calculadora de Cadenas", () => {
  it("Toma en cuenta la cadena vacía: Para una cadena “” -> 0", () => {
    expect(sumar_cadena("", "")).toEqual(0);
  });

  it("Deberia tomar en cuenta cadena con 1 solo numero", () => {
    expect(sumar_cadena("1", "")).toEqual(1);
  });

  it("Toma en cuenta cadena un solo número: Para una cadena “9” -> 9", () => {
    expect(sumar_cadena("9", "")).toEqual(9);
  });

  it("Deberia tomar en cuenta cadena por defecto con 2 numeros", () => {
    expect(sumar_cadena("4,5", "")).toEqual(9);
  });

  it("Toma en cuenta cadena con varios números: Para una cadena “1,3,6,18” -> 28", () => {
    expect(sumar_cadena("1,3,6,18", "")).toEqual(28);
  });

  it("calcular suma para cualquier cadena", () => {
    expect(calcularCadena("1-2,3", "")).toEqual(6);
  });

  it("calcular suma de una cadena con un delimitador por defecto", () => {
    expect(calcularCadena("6;7;4", ";")).toEqual(17);
  });

  it("calcular suma de una cadena con un delimitador por defecto ... con 1 numero mayor a 1000", () => {
    expect(calcularCadena("2, 1001", "")).toEqual(2);
  });
});


function sumar_cadena(cadena, delimitador){
  if(cadena == ""){
    return 0;
  }
  else{
    let subCadena = "", suma = 0, baseNumerico = 10;
    let entero;
    for(var i = 0; i <= cadena.length; i++){
      if(parseInt(cadena[i], baseNumerico) || cadena[i] == 0){
        subCadena = subCadena + cadena[i];
      }else{
        entero = parseInt(subCadena, baseNumerico);
        if(!delimitador || ((cadena[i] == delimitador || !cadena[i]) && entero)){
          if(entero <= 1000){
            suma = suma + entero;
          }
        } 
      }
      subCadena = "";
    }
    return suma;
  }
}
