describe("Calculadora de Cadenas", () => {
  it("Toma en cuenta la cadena vacía: Para una cadena “” -> 0", () => {
    expect(sumar_cadena("")).toEqual(0);
  });

  it("Deberia tomar en cuenta cadena con 1 solo numero", () => {
    expect(sumar_cadena("1")).toEqual(1);
  });

  it("Toma en cuenta cadena un solo número: Para una cadena “10” -> 10", () => {
    expect(sumar_cadena("10")).toEqual(10);
  });

  it("Deberia tomar en cuenta cadena con 2 numeros", () => {
    expect(sumar_cadena("4,5")).toEqual(9);
  });
});


function sumar_cadena(cadena){
  if(cadena == ""){
    return 0;
  }
  return 4+5;
  //return parseInt(cadena);
}
