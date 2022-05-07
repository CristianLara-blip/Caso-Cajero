function startTime() {
    //declaramos las  variables que nos proporcionaran los datos como la hora, minutos etc.

    var today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        date = today.getDate(),
        day = today.getDay(),
        month = today.getMonth();

    //utilizaremos operadores ternarios esto nos ayudara a mostrar la hora solo del 1 al 12
    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;

    //pasaremos las horas y minutos a una funcion que crearemos mas adelante
    hours = checkTime(hours);
    minutes = checkTime(minutes);

    //primero para los dias y meses crearemos un arreglo esto por que la funcion que nos debuelve
    //los dias y meses nos los debuelbe en numero
    var dia = ["Domingo", " Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado"],
        mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    //haora solo imprimimos los datos
    var hr = document.getElementById('time').innerHTML = hours + ":" + minutes,
        dt = document.getElementById('date').innerHTML = dia[day] + ", " + date + " de " + mes[month]+" de 2022";

    //esta funcion hara que nuestro escript se ejecute constantemente
    var time = setTimeout(function() {
        startTime();
    }, 500);
}
//solo falta crear la funcion que nos diga si tine uno o dos dijitos
//esto para que si solo tiene uno le agrege u  cero a la izquierda
function checkTime(e) {
    if (e < 10) {
        e = "0" + e;
    }
    return e;
}


function login(){
    let contraseña="77529553"
    var pass;
      pass = document.getElementById("contraseña").value;


   if (pass == contraseña && pass.length == 8){
      location="inicio.html"
    }else if(pass.length > 8){
        alert("       --ERROR--\n"+
               "Contraseña incorrecta") ;
    }
} 


function generar(){

    var n1, n2;
    n1 = parseInt(document.getElementById("cuenta").value);
    n2 = parseInt(document.getElementById("cantidad").value);
       
    if (n1 == 77529553){
    revelar02();
        
    }else if (n1 != 77529553){
     revelar();

    }
 }




 function revelar(){
 n1 = parseInt(document.getElementById("cuenta").value);
 n2 = parseInt(document.getElementById("cantidad").value);
 document.getElementById("resultado").value = 2000 - n2;

 if (n2 > 2000){
    alert("--------------------ERROR--------------------\n"
    + "El límite de cada depósito es de $.2 000,00"
    +"\n-----------------------------------------------")
  
 }else if(n2<1){ 
    alert("--------------------ERROR--------------------\n"
    + "No ha escrito una cantidad para depósitar"
    +"\n-----------------------------------------------") 
 }else{
    alert("------Depósito exitoso------\n"
    + " N° cuenta: "+ n1 + "\n"
    + " Monto depositado: $." + n2 +".00"
    + "\n-------------------------------")
 }
}

function revelar02(){
    n1 = parseInt(document.getElementById("cuenta").value);
    n2 = parseInt(document.getElementById("cantidad").value);
    document.getElementById("resultado").value = 2000 + n2;
   
    if (n2 > 10000){
    alert("--------------------ERROR--------------------\n"
               + "El límite de cada depósito es de $.10 000,00"
               +"\n-----------------------------------------------") 
    
    }else{
        alert("------Depósito exitoso------\n"
        + " N° cuenta: "+ n1 + "\n"
        + " Monto depositado: $." + n2 +",00"
        + "\n-------------------------------")
    }
   }



 function generar1(){
 n2 = parseInt(document.getElementById("cantidad").value);
 document.getElementById("resultado").value = 2000 - n2;

 if (n2 > 2000){
    alert("--------------------ERROR--------------------\n"
    + "El límite de cada depósito es de $.2 000,00"
    +"\n-----------------------------------------------")
  
 }else if(n2<1){ 
    alert("--------------------ERROR--------------------\n"
    + "No ha escrito una cantidad para depósitar"
    +"\n-----------------------------------------------") 
 }else{
    alert("------Depósito exitoso------\n"
    + " Monto retirado: $." + n2 +".00"
    + "\n-------------------------------")
 }
}

