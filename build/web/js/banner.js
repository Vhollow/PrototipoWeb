/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//creo array de imágenes 
var array_imagen;
array_imagen = new Array(4) ;
array_imagen[0] = new Image(120,41) ;
array_imagen[0].src = "../Imagenes/img1.jpg" ;
array_imagen[1] = new Image(120,41) ;
array_imagen[1].src = "../Imagenes/img2.jpg" ;
array_imagen[2] = new Image(120,41) ;
array_imagen[2].src = "../Imagenes/img3.png"; 
array_imagen[3] = new Image(120,41) ;
array_imagen[3].src = "../Imagenes/img4.jpg";

//variable para llevar la cuenta de la imagen siguiente 
contador = 0 ;
var time;
//función para rotar el banner 
function alternar_banner(){ 
   	window.document["banner"].src = array_imagen[contador].src ;
   	contador ++ ;
   	if(contador>3){contador=0;} 
   	time=setTimeout("alternar_banner()",10000) ;
}
//funcion para cambiar a la imagen anterior
function izquierda(){
    contador-=2;
    if(contador===-1) contador=3;
    if(contador===-2) contador=2;
    window.document["banner"].src = array_imagen[contador].src ;
    contador++;
    clearTimeout(time);
    time=setTimeout("alternar_banner()",10000) ;
}
//funcion para cambiar a la imagen siguiente
function derecha(){
    if(contador>3) contador=0;
    window.document["banner"].src = array_imagen[contador].src ;
    contador++;
    clearTimeout(time);
    time=setTimeout("alternar_banner()",10000) ;
}
//cambia la flecha izquierda al pulsar
function ci(){
    document.getElementById("Izq").src="../Imagenes/i2.png";
}
//vuelve a cambiarla al levantar
function ci2(){
    document.getElementById("Izq").src="../Imagenes/i1.png";
}
//cambia la flecha derecha al pulsar
function cd(){
    document.getElementById("Der").src="../Imagenes/d2.png";
}
//vuelve a cambiarla al levantar
function cd2(){
    document.getElementById("Der").src="../Imagenes/d1.png";
}


