//Responsive Offset of Modal for different window sizes
var offsetTop = $(window).height() * 0.040;
//calls the leanModal Function anytime a link with the rel of leanModal is called
$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.6, closeButton: ".modal_close" });

//Function to populate the project section of the modal
function populateModal(elt) {
  //Creates a variable and associates it with the id of the tag selected in the html
  //example: <div class="thread" id="senstaff">
  //var id becomes equal to senstaff
  var id = elt.parent().attr('id');
  //logs the id to the console (verifies process is working)
  console.log(id);
	//creates variables to store the id above with appended specifier like -org i.e. senstaff-org
	//Project Header Data
	var mainImg = projHead[id + '-mainImg'];
	var org = projHead[id + '-org'];
	var title = projHead[id + '-title'];
	var subtitle = projHead[id + '-subtitle']
  var cat = projHead[id + '-cat'];
	//Project Details Data
	var imgs = projDetails[id + '-img'];
	var imgsTxt = projDetails[id + '-imgTxt'];
	var info = projDetails[id + '-info'];
	var links = projDetails[id + '-link'];
	//Project Team Data
	var team = projDetails[id + '-team']
  //Creates modal variable to store the id associated with the modal tags sub tags whenever it is displayed
	var projSide = $("#modalPopup .projectSide");
  //finds specific tages within the modal and adds css, html tags, and attributes to them - i.e. passes info from database above to modal to be displayed
	//Project Head Data//////////////////////////////////////////////////////////////////////////////////////////////////
	projSide.find('.projectHead .org').html(org);
	projSide.find('.projectHead .title').html(title);
	projSide.find('.projectHead .subtitle').html(subtitle);
	projSide.find('.projectHead .cat').html(cat);
	//Main Project Img
	projSide.find('.mainImg').css('background-image', mainImg);
	//Project Details Data
	//Add Project Images & Descriptions
	var imgAppend = $('<div class="imgDiv"><p class="imgTxt"></p></div>');
	//Append Divs to store image and text according to number of images stored in imgs matrix
	for (i = 0; i < imgs.length; i++){
		//Adds a div to the projectImages for each image stored in the database
		projSide.find('.projectImages').append(imgAppend);
		$('.projectImages .imgDiv:nth-of-type('+(i+1)+')').css('background-image', imgs[i]);
		$('.projectImages .imgDiv:nth-of-type('+(i+1)+') .imgTxt').html(imgsTxt[i]);
	}
	//Add Additional Project Info
	for (i = 0; i < info.length; i++) {
		projSide.find('.projectInfo p:nth-of-type('+(i+1)+')').html(info[i]);
	}
	//Add Project Team Data
	//for loop to populate team aside with correct number of divs for team members
	var teamSide = $("#modalPopup .teamSide");
	var teamAppend = $('<div class="teammates"><div class="teammateOverlay"><div class="teammatePic"></div></div><a class="teammateName"></a></div>');
	for (i = 0; i < team.length; i++) {
		var teammatePic = developers[team[i] + '-pic'];
		var teammateName = developers[team[i] + '-name'];
    var teammateLink = developers[team[i] + '-link'];
		teamSide.append(teamAppend);
		teamSide.find('.teammatePic:nth-of-type('+(i+1)+')').css('background-image', teammatePic);
		teamSide.find('.teammateName:nth-of-type('+(i+1)+')').html(teammateName).attr('href', teammateLink);
		//teamSide.find('.teammateName').attr('href', link);
	}
	// processes array to html and css
	/*
	for (i = 0; i < team.length; i++){
		var teamAppend = $('<div class="personDiv"><p class="name"></p></div></div>')
		$(".projectTeam").append(teamAppend);

		$(".personDiv:nth-of-type("+(i+1)+")").find(".name").html(team[i]);
	}
*/
}

//Function to take care of staying there if projects don't have a link
function clickable(elt) {
	return elt.attr('href') !== '#';
};

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
