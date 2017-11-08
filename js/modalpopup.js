//Responsive Offset of Modal for different window sizes
var offsetTop = $(window).height() * 0.1;
//calls the leanModal Function anytime a link with the rel of leanModal is called
$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });


//Creates a matrix variable to store all project info displayed within the modal
var projInfo = {
  //Project Organizations
	'senstaff-org'   : "Design, Innovation, & Society",
  //Project Title
  'senstaff-title' : 'Senstaff',
  //Project Categories
  'senstaff-cat' : 'Product',
  //Additional Info Link
	'senstaff-link'   : 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
};

var projView = {
	'senstaff-team' : ['Luke Bateman', 'Lei Luo', "Sean Alderdice", "Lilit Balagyozyan"]
	//Project Images
	'senstaff-img' : ['url(images/projects/senstaff/prototype1.jpg)'],
	//Project Image Description
  'senstaff-imgTxt' : ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
	//Project details
	'senstaff-detail' : ['The Senstaff unites active living with technological and environmental agency. The design goal was to create an object that engaged youthful curiosity in the collection of environmental data. By designing a product that serves as both a hiking staff and a sensor for environmental pollutants, the senstaff hopes to inspire democratic collection of environmental data for local communities to leverage in the pursuit of sustainable development.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
};

//Creates a matrix variable to store all the team member info associated with each project
/*var teamInfo = {
  Team Info
  Team Member Names
  'luke-teamName'   : 'Luke Bateman',
  Team Member Pictures
	'luke-teamImg'   : 'url(images/developers/luke.jpg)',
}*/
//Function to populate the project section of the modal
function populateModal(elt) {
  //Creates a variable and associates it with the id of the tag selected in the html
  //example: <div class="thread" id="senstaff">
  //var id becomes equal to senstaff
  var id = elt.parent().attr('id');
  //logs the id to the console (verifies process is working)
  console.log(id);
  //creates a variable to store the id above with appended specifier like -org i.e. senstaff-org
  var org = projInfo[id + '-org'];
	var title = projInfo[id + '-title'];
  var cat = projInfo[id + '-cat'];
	var link = projInfo[id + '-link'];

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
  modal.find('.cat').html(cat);
	modal.find('.link').attr('href', link);


	// processes array to html and css
	for (i = 0; i < img.length; i++){
		modal.find('.img:nth-of-type(i)').css('background-image', img);
	}

	for (i = 0; i < imgTxt.length; i++){
		modal.find('.imgTxt:nth-of-type(i)').html(imgTxt);
	}

	for (i = 0; i < detail.length; i++){
		modal.find('.detail:nth-of-type(i)').html(details);
	}

}


//Function to take care of staying there if projects don't have a link
function clickable(elt) {
	return elt.attr('href') !== '#';
}
//Functions to populate team inset within modalfunction populateModal(elt) {
  /*
  function populateModal(elt) {
  //Creates a variable and associates it with the id of the tag selected in the html
  //example: <div class="thread" id="senstaff">
  //var id becomes equal to senstaff
  var id = elt.parent().attr('id');
  //logs the id to the console (verifies process is working)
  console.log(id);
  //creates a variable to store the id above with appended specifier like -org i.e. senstaff-org
  var org = projInfo[id + '-org'];
  var title = projInfo[id + '-title'];
  var cat = projInfo[id + '-cat'];
  var img = projInfo[id + '-img'];
  var imgTxt = projInfo[id + '-imgTxt'];
  var goal = projInfo[id + '-goal'];
  var link = projInfo[id + '-link'];
  //Creates modal variable to store the id associated with the modal window whenever it is displayed
  var modal = $("#modalPopup");
  //finds specific tages within the modal and adds css, html tags, and attributes to them
  //i.e. passes info from database above to modal to be displayed
  modal.find('.org').css('background-image', img);
  modal.find('.title').html(name);
  modal.find('.cat').attr('href', link);
  modal.find('.img').css('background-image', img);
  modal.find('.imgTxt').html(name);
  modal.find('.goal').attr('href', link);
  modal.find('.link').html(bio);
  }
  */
//Function to link each team members name to their LinkedIn Profile
/*
function clickable(elt) {
	return elt.attr('href') !== '#';
}

*/
