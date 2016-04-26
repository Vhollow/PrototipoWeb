/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//creo array de imágenes 
var array_imagen;
array_imagen = new Array(4) ;
array_imagen[0] = new Image(120,41) ;
array_imagen[0].src = "Imagenes/granja.jpg" ;
array_imagen[1] = new Image(120,41) ;
array_imagen[1].src = "Imagenes/img2.jpg" ;
array_imagen[2] = new Image(120,41) ;
array_imagen[2].src = "Imagenes/img3.png"; 
array_imagen[3] = new Image(120,41) ;
array_imagen[3].src = "Imagenes/img4.jpg";

var array_url;
array_url = new Array(4) ;
array_url[0] = "Noticias/noticia-basta-maltrato-granjas.html";
array_url[1] = "Imagenes/img2.jpg" ;
array_url[2]= "Imagenes/img3.png"; 
array_url[3]= "Imagenes/img4.jpg";

var array_tit;
array_tit = new Array(4) ;
array_tit[0] = "Basta de maltrato en las granjas de animales";
array_tit[1] = "Basta de maltrato en las granjas de animales" ;
array_tit[2]= "Tercer titulo"; 
array_tit[3]= "Cuarto titulo";

var array_tex;
array_tex = new Array(4) ;
array_tex[0] = "Si alguien le hiciera a un perro o a un gato lo que la ganadería industrial hace a los animales de granja, acabaría en la cárcel. La diferencia es que los animales víctimas de la ganadería industrial son cerdos, vacas, terneras, pollos y gallinas, entre  otros.  ";
array_tex[1] = "Basta de maltrato en las granjas de animales" ;
array_tex[2]= "Parrafo con las primeras lineas de la noticia correspondiente"; 
array_tex[3]= "Parrafo con las primeras lineas de la noticia correspondiente";
//variable para llevar la cuenta de la imagen siguiente 
contador = 0 ;
var time;
//función para rotar el banner 
function alternar_banner(){ 
   	document.getElementById("centro").src = array_imagen[contador].src ;
        document.getElementById("link").href = array_url[contador];
        document.getElementById("titulo").textContent = array_tit[contador];
        document.getElementById("texto").textContent = array_tex[contador];
   	contador ++ ;
   	if(contador>3){contador=0;} 
   	time=setTimeout("alternar_banner()",10000) ;
}
//funcion para cambiar a la imagen anterior
function izquierda(){
    contador-=2;
    if(contador===-1) contador=3;
    if(contador===-2) contador=2;
    document.getElementById("centro").src = array_imagen[contador].src ;
    document.getElementById("link").href = array_url[contador];
    document.getElementById("titulo").textContent = array_tit[contador];
    document.getElementById("texto").textContent = array_tex[contador];
    contador++;
    clearTimeout(time);
    time=setTimeout("alternar_banner()",10000) ;
}
//funcion para cambiar a la imagen siguiente
function derecha(){
    if(contador>3) contador=0;
    document.getElementById("centro").src = array_imagen[contador].src ;
    document.getElementById("link").href = array_url[contador];
    document.getElementById("titulo").textContent= array_tit[contador];
    document.getElementById("texto").textContent = array_tex[contador];
    contador++;
    clearTimeout(time);
    time=setTimeout("alternar_banner()",10000) ;
}
//cambia la flecha izquierda al pulsar
function ci(){
    document.getElementById("Izq").src="Imagenes/i2.png";
}
//vuelve a cambiarla al levantar
function ci2(){
    document.getElementById("Izq").src="Imagenes/i1.png";
}
//cambia la flecha derecha al pulsar
function cd(){
    document.getElementById("Der").src="Imagenes/d2.png";
}
//vuelve a cambiarla al levantar
function cd2(){
    document.getElementById("Der").src="Imagenes/d1.png";
}


