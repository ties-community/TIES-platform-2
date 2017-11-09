//Populate Main Page with threads
var projInfo = {
  //Project Organizations
	'senstaff-org'   : "Design, Innovation, & Society",
  //Project Title
  'senstaff-title' : 'Senstaff',
  //Project Categories
  'senstaff-cat' : 'Product',
  //Project subtitle
	'senstaff-subtitle' : 'I am a subtitle!',
	//Project problem
	'senstaff-problem' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	//Project solution
	'senstaff-solution' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	//Project final
	'senstaff-final' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	//Additional Info Link
	'senstaff-link'   : 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
};

var projView = {
	'senstaff-team' : ['Luke Bateman', 'Lei Luo', "Sean Alderdice", "Lilit Balagyozyan"],
	//Project Images
	'senstaff-img' : ['url(images/projects/senstaff/prototype1.jpg)',
	'url(images/projects/senstaff/working.jpg)'],
	//Project Image Description
  'senstaff-imgTxt' : ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
};

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
