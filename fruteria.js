var precio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var frutitas = ['manzanas', 'plátanos', 'naranjas', 'nectarinas', 'pinia', 'peritas', 'arándanos', 'kiwi', 'sandia', 'granada'];
var precioKg = [2.5, 2.0, 1.43, 1.73, 3.59, 1.79, 4.48, 3.85, 0.53, 0.56];
function anadirCompra(frutas){
    var i;
    for(i = 0; i < frutitas.length;i++){
        if(frutitas[i] == frutas){
            precio[i]+=precioKg[i];
            kilos[i]+=1;
            break;
        }
    }
    console.log(frutitas[i] + " " + kilos[i] + " " + precio[i]);
}
function boton(){
    document.getElementById("cajaTexto").value="";
    var precioMedio = 0;
    var precioTotal = 0;
    var contador = 0;
    for(var i = 0;i<frutitas.length;i++){
        document.getElementById("cajaTexto").value+=frutitas[i]+ " Kilos: " + kilos[i] + " Precio: " + precio[i] + "\n";
        precioTotal += precio[i];
        if(precio[i] != 0){
            precioMedio += precioKg[i];
            contador++;
        }
    }
    precioMedio/=contador;
    document.getElementById("cajaTexto").value+="Precio total: " + precioTotal + "\n";
    document.getElementById("cajaTexto").value+="Precio medio: " + precioMedio;
}
