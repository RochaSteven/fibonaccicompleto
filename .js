<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio Fibonnaci</title>
</head>
<body>
    <h1>Serie Fabonnaci</h1>
    Primero: <input type="text" name="primerNumero" id="primerNumero">
    <br><br>
    Segundo: <input type="text" name="segundoNumero" id="segundoNumero">
    <br><br>
    Maximo: <input type="text" name="maximoNumero" id="maximoNumero">
    <br><br>
    <input type="button" value="Generar" id="btnGenerar">
    <input type="button" value="Pares" id="btnPar">
    <input type="button" value="Impares" id="btnImpar">
    <div id="tabla">
        <hr>
        <table id="table" border="1">
                   
        </table>
    </div>
    <div id="tabla1">
        <hr>
        <table id="table1" border="1">
                   
        </table>
    </div>
    <div id="tabla2">
        <hr>
        <table id="table2" border="1">
                   
        </table>
    </div>
</body>
<script>

var divTabla =  document.getElementById('tabla');
divTabla.style.display = 'none';

var divTabla1 =  document.getElementById('tabla1');
divTabla1.style.display = 'none';

var divTabla2 =  document.getElementById('tabla2');
divTabla2.style.display = 'none';
//Se crea un clase llamada solver
class Solver {
    constructor(anterior,ultimo,maximo) {
        //atributos
        this.ant = anterior;
        this.ult = ultimo;
        this.max = maximo;
        this.serie = [];
        this.pares = [];
        this.impares = [];
        this.serie.push(this.ant);
        this.serie.push(this.ult); 
        this.pares.push(this.ult); 
        this.impares.push(this.ant);
        //metodo
        var esPar=function(numero){
            if (numero%2===0){
                return true;
            }else{
                return false;
            }

        }
  
        this.generador = function generador() {

        var anterior1 = this.ant;
        var ultimo2 = this.ult;
        var maximo = this.max;
        var array = this.serie;
        var array1 = this.pares;  
        var array2 = this.impares;  
        var generadorFibonacci = function(anterior, ultimo) {
        if (anterior + ultimo > maximo) {
            return array;
           
            }else {
            var nuevo = anterior + ultimo;
            if(esPar(nuevo)){
                array1.push(nuevo)
                
            }else{
                array2.push(nuevo)
            }
            array.push(nuevo);
            return generadorFibonacci(ultimo, nuevo);

            } 
        } 
        generadorFibonacci(anterior1,ultimo2);

        };
        
        this.muestraDatos = function muestraDatos() {

            var tabla = document.getElementById('table');
            var indice = 0;
            var array = this.serie;

            var muestraTabla = function(indice){
            if(indice===array.length){
            
            }else{
                var fila = document.createElement("tr"+'td');
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(array[indice]));
                fila.appendChild(td);
                tabla.appendChild(fila);
                return muestraTabla(indice+1);
                } 
            }
            muestraTabla(indice)
        };
this.muestra = function muestra() {
var tabla = document.getElementById('table1');
var indice = 0;
var array1 = this.pares;
var muestraTabla = function(indice){
if(indice===array1.length){
}else{
    var fila = document.createElement("tr"+'td');
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(array1[indice]));
    fila.appendChild(td);
    tabla.appendChild(fila);
    return muestraTabla(indice+1);
    } 
}
muestraTabla(indice)
};

// impares
this.muestra1 = function muestra1() {
var tabla = document.getElementById('table2');
var indice = 0;
var array2 = this.impares;
var muestraTabla = function(indice){
if(indice===array2.length){
}else{
    var fila = document.createElement("tr"+'td');
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(array2[indice]));
    fila.appendChild(td);
    tabla.appendChild(fila);
    return muestraTabla(indice+1);
    } 
}
muestraTabla(indice)
};
    }
}

// boton generar 
document.getElementById('btnGenerar').addEventListener('click',function () {
    var nuevoSolver = new Solver(parseInt(document.getElementById('primerNumero').value),
                                parseInt(document.getElementById('segundoNumero').value),
                                parseInt(document.getElementById('maximoNumero').value));
            nuevoSolver.generador();
            nuevoSolver.muestraDatos()
            divTabla.style.display = 'block';

})

// boton par
document.getElementById('btnPar').addEventListener('click',function () {
    var nuevoSolver = new Solver(parseInt(document.getElementById('primerNumero').value),
                                parseInt(document.getElementById('segundoNumero').value),
                                parseInt(document.getElementById('maximoNumero').value));
            nuevoSolver.generador();
            nuevoSolver.muestra()
            divTabla1.style.display = 'block';
})

// boton impar
document.getElementById('btnImpar').addEventListener('click',function () {
    var nuevoSolver = new Solver(parseInt(document.getElementById('primerNumero').value),
                                parseInt(document.getElementById('segundoNumero').value),
                                parseInt(document.getElementById('maximoNumero').value));
            nuevoSolver.generador();
            nuevoSolver.muestra1()
            divTabla2.style.display = 'block';

})
</script>
</html>
