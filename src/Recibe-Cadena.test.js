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
});


function sumar_cadena(cadena, delimitador){
  let subCadena = "", suma = 0, baseNumerico = 10;
  if(cadena != ""){
    for(var i = 0; i <= cadena.length; i++){
      if(parseInt(cadena[i], baseNumerico)){
        subCadena = subCadena + cadena[i];
      }else{
        suma = suma + parseInt(subCadena, baseNumerico);
        subCadena = "";
      }
    }
    return suma;
  }
  else{
    if(cadena == ""){
      return 0;
    }
  }
}
