//Responsive Offset of Modal for different window sizes
var offsetTop = $(window).height() * 0.1;
//calls the leanModal Function anytime a link with the rel of leanModal is called
$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });


//Creates a matrix variable to store all project info displayed within the modal
//Stored variables in main.js to reference for populating the landing page

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
	var subtitle = projInfo[id + '-subtitle']
  var cat = projInfo[id + '-cat'];
	var link = projInfo[id + '-link'];
	var problem = projInfo[id + '-problem'];
	var solution = projInfo[id + '-solution'];
	var final = projInfo[id + '-final'];


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
