$('.addBar').mouseover(function () {
	$('.add').toggleClass('showAdd')
});


// KONAMI!
/*
var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);

    // Add your own easter egg here!!
    $('canvas').fadeIn('fast');
  }
});
/*
$('.projectMenu li:nth-child(1)').hover(function () {
	$('.aboutUs').show();} , function () {
		$('.aboutUs').hide();
});

$('.organizeMenu li:nth-child(2) h2').hover(function () {
	$('.ourOrganization').show();} , function () {
		$('.ourOrganization').hide();
});


/* On scroll window function
$(window).on('scroll',function(){
	var scrollposition = $(window).scrollTop();

	var var1 =
	$('body').css('background','linear-gradient(to bottom, rgb('+var1+','+var2+','+var3+'))');
});
*/
