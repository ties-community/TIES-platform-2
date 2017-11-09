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

$('.addBar').mouseover(function () {
	$('.add').toggleClass('showAdd')
});

function populateProjects(e) {
//Create div with required sub sections for each part of


  //Creates a variable and associates it with the id of the tag selected in the html
  //example: <div class="thread" id="senstaff">
  //var id becomes equal to senstaff
  var id = e.parent().attr('id');
  //logs the id to the console (verifies process is working)
  console.log(id);

	//creates variables to store the id above with appended specifier like -org i.e. senstaff-org

	//Project Header Data
	var mainImg = projHead[id + '-mainImg'];
	var org = projHead[id + '-org'];
	var title = projHead[id + '-title'];
	var subtitle = projHead[id + '-subtitle']
  var cat = projHead[id + '-cat'];

	//Project Details
	var link = projInfo[id + '-link'];
	var problem = projInfo[id + '-problem'];
	var solution = projInfo[id + '-solution'];
	var final = projInfo[id + '-final'];

	//Project Details Data
	var team = projView[id + '-team']
  var img = projView[id + '-img'];
  var imgTxt = projView[id + '-imgTxt'];
  var detail = projView[id + '-detail'];

  //Creates modal variable to store the id associated with the modal window whenever it is displayed
	var modal = $("#modalPopup");

  //finds specific tages within the modal and adds css, html tags, and attributes to them
  //i.e. passes info from database above to modal to be displayed
  modal.find('.org').html(org);
  modal.find('.title').html(title);
	modal.find('.subtitle').html(cat);
  modal.find('.cat').html(cat);
	modal.find('.problem').html(problem)
	modal.find('.solution').html(solution)
	modal.find('.final').html(final)
	modal.find('.link').attr('href', link);


	// processes array to html and css
	for (i = 0; i < img.length; i++){
		var imgAppend = $('<div class="imgDiv"><div class="img"><p class="imgTxt"></p></div></div>');
		//adds the overlay to the body everytime the modal is opened
		$(".projectImages").append(imgAppend);

		$(".imgDiv:nth-of-type("+(i+1)+")").find(".img").css('background-image', img[i]);
		$(".imgDiv:nth-of-type("+(i+1)+")").find('.imgTxt').html(imgTxt[i]);
	}

}


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
