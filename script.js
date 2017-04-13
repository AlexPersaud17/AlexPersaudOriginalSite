$(document).ready(function(){
	$('#home-logo').fadeIn(1500).delay(1000).fadeOut(1500)
	$('#welcome').delay(4000).fadeIn(1500).fadeOut(1500)
	$('header').fadeIn(500)
	$('.body-wrapper').delay(250).fadeIn(1000)

	if(window.location.href.indexOf('/') > -1){
		setTimeout(function(){ window.location = 'about.html'; }, 7000);
	}
});