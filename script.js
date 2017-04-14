$(document).ready(function(){
	console.log(window.location.href)
	$('#home-logo').fadeIn(1500).delay(1000).fadeOut(1500)
	$('#welcome').delay(4000).fadeIn(1500).fadeOut(1500)
	$('header').fadeIn(500)
	$('.body-wrapper').delay(250).fadeIn(1000)

	if(window.location.href == "https://alexpersaud17.github.io/" || window.location.href == "https://alexpersaud17.github.io/index.html"){
		setTimeout(function(){ window.location = "https://alexpersaud17.github.io/about.html"; }, 7000)
	}

	if(window.location.href.indexOf("index.html") > -1){
		setTimeout(function(){ window.location = "about.html"; }, 7000)
	}

	$(".fun-pics").mouseenter(function(){
		$(this).fadeTo(200, 0.5)
		$(this).position();
	});
	$(".fun-pics").mouseleave(function(){
		$(this).fadeTo(200, 1)
	});

});