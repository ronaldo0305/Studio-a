//---HEADER----




//----menu

var btn = document.querySelector(".btn");
var menu = document.querySelector(".title_content")
btn.addEventListener("click", function(){
	btn.classList.toggle("btn1");
	menu.classList.toggle("title_content1");



})



//---main
/*var caja = document.querySelector(".informacion_content");
caja.addEventListener("click", function(){

	caja.classList.toggle("informacion_content2");

})
//


var img1 = document.querySelector(".img_a");
var img2 = document.querySelector(".img_b");
var img3 = document.querySelector(".img_c");
var img4 = document.querySelector(".img_d");
var img5 = document.querySelector(".img_e");
var img6 = document.querySelector(".img_f");
var img7 = document.querySelector(".img_g");
var img8 = document.querySelector(".img_h");
var img9 = document.querySelector(".img_i");
var img10 = document.querySelector(".img_j");
var img11 = document.querySelector(".img_k");



img1.addEventListener("click", function(){

	img1.classList.toggle("img_a1");
	})
img2.addEventListener("click", function(){

	img2.classList.toggle("img_b2");
	})
img3.addEventListener("click", function(){

	img3.classList.toggle("img_c3");
	})
img4.addEventListener("click", function(){

	img4.classList.toggle("img_d4");
	})
img5.addEventListener("click", function(){

	img5.classList.toggle("img_e5");
	})
img6.addEventListener("click", function(){

	img6.classList.toggle("img_f6");
	})
img7.addEventListener("click", function(){

	img7.classList.toggle("img_g7");
	})
img8.addEventListener("click", function(){

	img8.classList.toggle("img_h8");
	})
img9.addEventListener("click", function(){

	img9.classList.toggle("img_i9");
	})
img10.addEventListener("click", function(){

	img10.classList.toggle("img_j10");
	})
img11.addEventListener("click", function(){

	img11.classList.toggle("img_k11");
	})

///*
//var imagenes = document.querySelectorAll("img");

//imagenes.forEach(function(elem){
//	elem.addEventListener("click", function(){
//		imagenes.classList.toggle("img_a1")
	//

//})
//})

//grid

/*var img = document.querySelectorAll("img");
var escala = true;
//context


img.forEach(function(elem){
	elem.addEventListener("click", function(){
		if (escala=true) {
			elem.style.transform="scale(1.2)";
		}else{elem.style.transform="scale(1.1)"

		}
	//
})



})*/


//footer
var anticlick = document.querySelector(".footer");
anticlick.addEventListener("contextmenu", function(){

	window.alert("no puedes copiar aqui");

});





