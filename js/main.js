//Populate Main Page with threads
var projHead = {
	//Title Pictures
	'senstaff-mainImg' : 'url(images/projects/senstaff/prototype1.jpg)',
	//Project Organizations
	'senstaff-org'   : "Design, Innovation, & Society",
	//Project Title
	'senstaff-title' : 'Senstaff',
	//Project subtitle
	'senstaff-subtitle' : 'I am a subtitle!',
	//Project Categories
	'senstaff-cat' : 'Product',

};
var projDetails = {
	//Project Images
	'senstaff-img' : ['url(images/projects/senstaff/prototype1.jpg)',
	'url(images/projects/senstaff/working.jpg)'],
	//Project Image Description
  'senstaff-imgTxt' : ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
	//Project Info
	'senstaff-info' : ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
	//Additional Info Link
	'senstaff-link' : ['https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk'],
	//Project Team
	'senstaff-team' : ['luke', 'emil', 'jack']
};
var developers = {
	//Developer Names
	'luke-name' : 'Luke Bateman',
	'lei-name' : 'Lei Luo',
	'sean-name' : 'Sean Alderdice',
	'lilit-name' : 'Lilit Balagyozyan',
	'emil-name' : 'Emil Andreasan',
	'jack-name' : 'Jack Yang',
	//Developer Images
	'luke-pic' : 'url(images/projects/senstaff/prototype1.jpg)',
	'lei-pic' : 'url(images/projects/senstaff/prototype1.jpg)',
	'sean-pic' : 'url(images/projects/senstaff/prototype1.jpg)',
	'lilit-pic' : 'url(images/projects/senstaff/prototype1.jpg)',
	'emil-pic' : 'url(images/projects/senstaff/prototype1.jpg)',
	'jack-pic' : 'url(images/projects/senstaff/prototype1.jpg)',
	//Developer links
	'luke-link' : 'https://www.linkedin.com/in/luke-bateman-245226a0/',
	'lei-link' : 'url(images/projects/senstaff/prototype1.jpg)',
	'sean-link' : 'url(images/projects/senstaff/prototype1.jpg)',
	'lilit-link' : 'url(images/projects/senstaff/prototype1.jpg)',
	'emil-link' : 'url(images/projects/senstaff/prototype1.jpg)',
	'jack-link' : 'url(images/projects/senstaff/prototype1.jpg)',
};
var threads = [
	//senstaff
	{
		id: 'senstaff',
		title: 'The Senstaff',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgsTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	//doorstop
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},

];
//Creates threads equal to the amount stored in the array and assigns them individual ids
for (i = 0; i < threads.length; i++) {
	$('.threads').append('<div class="thread"><a rel="leanModal" onclick="populateModal($(this)); return true;" class="projectLink projectLink-mainImg" href="#modalPopup"></a><a rel="leanModal" onclick="populateModal($(this)); return true;" class="projectLink projectLink-cat" href="#modalPopup"></a><a rel="leanModal" onclick="populateModal($(this)); return true;" class="projectLink projectLink-title" href="#modalPopup"></a><a rel="leanModal" onclick="populateModal($(this)); return true;" class="projectLink projectLink-org" href="#modalPopup"></a></div>');

	$('.thread:nth-of-type('+(i+1)+')').addClass(threads[i].id).attr('id', i);
	$('.thread .projectLink-mainImg').css('background-image', threads[i].mainImg);
	$('.thread .projectLink-cat').html(threads[i].cat);
	$('.thread .projectLink-title').html(threads[i].title);
	$('.thread .projectLink-org').html(threads[i].org);
	console.log(threads[i].id);
}

// KONAMI Code!
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
