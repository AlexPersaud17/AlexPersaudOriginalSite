$(document).ready(function(){
	console.log(window.location.href)
	$('#home-logo').fadeIn(1500).delay(1000).fadeOut(1500)
	$('#welcome').delay(4000).fadeIn(1500).fadeOut(1500)
	$('header').fadeIn(500)
	$('.body-wrapper').delay(250).fadeIn(1000)

	if(window.location.href == "https://alexpersaud17.github.io/" || window.location.href == "https://alexpersaud17.github.io/index.html"){
		setTimeout(function(){ window.location = "https://alexpersaud17.github.io/about.html"; }, 7000);
	}
});