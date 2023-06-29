$(document).ready(function () {
	$("html").css("scroll-behavior", "auto");
	$(this).scrollTop(0);
	$("html").css("scroll-behavior", "smooth");
	$("#slide").click(function () {
		this.requestFullscreen();
	});
	setTimeout("schowajlewy()", 4900);
	setTimeout("schowajsrodek()", 4900);
	setTimeout("schowajprawy()", 4900);
});

var number_of_photos = 10;
var photos = [];
fetch("test.json")
	.then((response) => response.json())
	.then((data) => {
		photos = data.photos;
	});

var numer = Math.floor(Math.random() * number_of_photos) + 1;
setTimeout("console.log(numer)", 10000);

function schowajlewy() {
	$(".slider_left").fadeOut(500);
}

function schowajsrodek() {
	$(".slider_main").fadeOut(500);
}

function schowajprawy() {
	$(".slider_right").fadeOut(500);
}


setTimeout(function () {
	let photo_left = document.querySelector(".photo_left");
	let photo_middle = document.querySelector(".photo_middle");
	let photo_right = document.querySelector(".photo_right");

	setInterval(function () {
		$(".slider_left").fadeIn(500);
		$(".slider_main").fadeIn(500);
		$(".slider_right").fadeIn(500);
		let random_1 = Math.floor(Math.random() * photos.length);
		let random_2 = Math.floor(Math.random(3) * photos.length);
		let random_3 = Math.floor(Math.random(5) * photos.length);
		if (random_1 == random_2 || random_1 == random_3){
			random_1 = 2
		} 
		if (random_2 == random_1 || random_2 == random_3){
			random_2 =5
		} 
		photo_left.src = "photos/" + photos[random_1];
		photo_middle.src = "photos/" + photos[random_2];
		photo_right.src = "photos/" + photos[random_3];
		setTimeout("schowajlewy()", 4500);
		setTimeout("schowajsrodek()", 4500);
		setTimeout("schowajprawy()", 4500);
	}, 5000);
}, 300);

