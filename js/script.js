var accordianContainer = document.querySelector('#accordianSection');
var monsoonalMultiplicitiesTitle = document.querySelector('#multipleMonsoons');
var backGroundvideo = document.querySelector('#backgroundVideo');
var leftHandSideMM = false;

var aboutNav = document.querySelector('#aboutPanelNav');
var eventsNav = document.querySelector('#EventsPanelNav');
var residencyNav = document.querySelector('#ResidencyPanelNav');
var landingPageRightContainer = document.querySelector('#RightTextContainer');
var MonsoonalPanelNav = document.querySelector('#GlossaryNav');
var CollabPanelNav = document.querySelector('#CollabPanelNav');
var acknowledgementsNav = document.querySelector('#AcknowledgementPanelNav');
var MonsoonPanelNav = document.querySelector('#MonsoonPanelNav');

var contentSection = document.getElementById('primaryPanel');
var contentSectionTitle = document.getElementById('cityHeadings');
var primaryPanelContainer = document.querySelector('.Layout__wrapper-container');
var primaryTitle = document.querySelector('.cityName');
var contentText = document.querySelector('.contentText');
var cityTitle = document.querySelector('.cityTitle');
var leftHandHeadings = document.querySelector('.headings');

var imageInCorner = document.querySelector('#imageInCorner');
var airSubchapter = document.querySelector('#airFocus');
var atmosphereSubchapter = document.querySelector('#atmosphereFocus');
var groundwaterSubchapter = document.querySelector('#groundwaterFocus');
var oceanSubchapter = document.querySelector('#oceanFocus');
var saltSubchapter = document.querySelector('#saltFocus');
var sedimentSubchapter = document.querySelector('#sedimentFocus');
var dragonSubchapter = document.querySelector('#dragonFliesFocus');
var hilsaSubchapter = document.querySelector('#HilsaFishairFocus');
var snakesSubchapter = document.querySelector('#SnakesFocus');
var weedsSubchapter = document.querySelector('#WeedsFocus');
var khalsSubchapter = document.querySelector('#khalsFocus');
var tankSubchapter = document.querySelector('#tanksFocus');
var pipesPotsSubchapter = document.querySelector('#pipesPotsFocus');
var timeSubchapter = document.querySelector('#timeFocused');
var pedagogySubchapter = document.querySelector('#pedagogyFocused');
var spaceSubchapter = document.querySelector('#spaceFocused');
var drawingSubchapter = document.querySelector('#drawingFocused');
var ethnographySubchapter = document.querySelector('#ethnographyFocused');
var londonSubchapter = document.querySelector('#londonFocus');
var yangonSubchapter = document.querySelector('#yangonFocus');
var dhakaSubchapter = document.querySelector('#dhakaFocus');
var chennaiSubchapter = document.querySelector('#chennaiFocus');

var hilsaSmallTabHeading = document.querySelector('#HilsaFish');
var snakesSmallTabHeading = document.querySelector('#Snakes');
var saltSmallTabHeading = document.querySelector('#Salt');
var dhakaSmallTabHeading = document.querySelector('#DhakaNav');
var khalsSmallTabHeading = document.querySelector('#Khals');
var timeSmallTabHeading = document.querySelector('#Time');
var sedimentSmallTabHeading = document.querySelector('#Sediment');
var airSmallTabHeading = document.querySelector('#Air');
var potsSmallTabHeading = document.querySelector('#PipesAndPots');
var weedsSmallTabHeading = document.querySelector('#Weeds');
var londonSmallTabHeading = document.querySelector('#LondonNav');
var tanksSmallTabHeading = document.querySelector('#Tanks');
var groundwaterSmallTabHeading = document.querySelector('#groundwaterFocus');
var ethnographySmallTabHeading = document.querySelector('#Ethnography');
var atmosphereSmallTabHeading = document.querySelector('#Atmosphere');
var spaceSmallTabHeading = document.querySelector('#Space');
var chennaiSmallTabHeading = document.querySelector('#ChennaiNav');

var AccordianOne = document.getElementById('sectionOne');
var AccordianTwo = document.getElementById('sectionTwo');
var AccordianThree = document.getElementById('sectionThree');
var AccordianFour = document.getElementById('sectionFour');
var AccordianFive = document.getElementById('sectionFive');

var subtitleContainerOne = document.getElementById('subtitleContainerOne');
var focusedSubtitlesOne = document.getElementById('focusedSubtitlesOne');
var subtitleContainerTwo = document.getElementById('subtitleContainerTwo');
var focusedSubtitlesTwo = document.getElementById('focusedSubtitlesTwo');
var subtitleContainerThree = document.getElementById('subtitleContainerThree');
var focusedSubtitlesThree = document.getElementById('focusedSubtitlesThree');
var subtitleContainerFour = document.getElementById('subtitleContainerFour');
var subtitleContainerFive = document.getElementById('subtitleContainerFive');
var focusedSubtitlesFour = document.getElementById('focusedSubtitlesFour');
var focusedSubtitlesFive = document.getElementById('focusedSubtitlesFive');
var groupedFocusedSubtitles = document.querySelectorAll('.focusedSingleSubtitle');

var videoContent = document.getElementById('videoContent');

var residencySection = document.querySelector('#residency');
var eventsSection = document.querySelector('#events');
var aboutSection = document.querySelector('#about');
var glossarySection = document.querySelector('#glossarySection');
var collaboratorsSection = document.querySelector('#collaboratorsSection');
var acknowledgementSection = document.querySelector('#acknowledgementSection');
var assemblagesSection = document.querySelector('#assemblagesSection');

setTimeout(function()
{ 
  $('#backgroundVideo').fadeOut(2000);
}, 20000);

aboutNav.addEventListener('click', () => 
{
  aboutSection.scrollIntoView();  
  residencyNav.classList.remove("activeNavbarTitle");
  aboutNav.classList.add("activeNavbarTitle");
  eventsNav.classList.remove("activeNavbarTitle");
  CollabPanelNav.classList.remove("activeNavbarTitle");
  MonsoonalPanelNav.classList.remove("activeNavbarTitle");
  acknowledgementsNav.classList.remove("activeNavbarTitle");
  MonsoonPanelNav.classList.remove("activeNavbarTitle");
});

eventsNav.addEventListener('click', () => 
{
  eventsSection.scrollIntoView(); 
  residencyNav.classList.remove("activeNavbarTitle");
  aboutNav.classList.remove("activeNavbarTitle");
  eventsNav.classList.add("activeNavbarTitle");
  MonsoonalPanelNav.classList.remove("activeNavbarTitle");
  CollabPanelNav.classList.remove("activeNavbarTitle");
  acknowledgementsNav.classList.remove("activeNavbarTitle");
  MonsoonPanelNav.classList.remove("activeNavbarTitle");
});

residencyNav.addEventListener('click', () => 
{
  residencySection.scrollIntoView();
  aboutNav.classList.remove("activeNavbarTitle");
  residencyNav.classList.add("activeNavbarTitle");
  eventsNav.classList.remove("activeNavbarTitle");
  MonsoonalPanelNav.classList.remove("activeNavbarTitle");
  CollabPanelNav.classList.remove("activeNavbarTitle");
  acknowledgementsNav.classList.remove("activeNavbarTitle");
  MonsoonPanelNav.classList.remove("activeNavbarTitle");
});

MonsoonalPanelNav.addEventListener('click', () => 
{
  glossarySection.scrollIntoView();
  aboutNav.classList.remove("activeNavbarTitle");
  residencyNav.classList.remove("activeNavbarTitle");
  eventsNav.classList.remove("activeNavbarTitle");
  MonsoonalPanelNav.classList.add("activeNavbarTitle");
  CollabPanelNav.classList.remove("activeNavbarTitle");
  acknowledgementsNav.classList.remove("activeNavbarTitle");
  MonsoonPanelNav.classList.remove("activeNavbarTitle");
});

CollabPanelNav.addEventListener('click', () => 
{
  collaboratorsSection.scrollIntoView();
  aboutNav.classList.remove("activeNavbarTitle");
  residencyNav.classList.remove("activeNavbarTitle");
  eventsNav.classList.remove("activeNavbarTitle");
  MonsoonalPanelNav.classList.remove("activeNavbarTitle");
  CollabPanelNav.classList.add("activeNavbarTitle");
  acknowledgementsNav.classList.remove("activeNavbarTitle");
  MonsoonPanelNav.classList.remove("activeNavbarTitle");
});

acknowledgementsNav.addEventListener('click', () => 
{
  acknowledgementSection.scrollIntoView();
  aboutNav.classList.remove("activeNavbarTitle");
  residencyNav.classList.remove("activeNavbarTitle");
  eventsNav.classList.remove("activeNavbarTitle");
  MonsoonalPanelNav.classList.remove("activeNavbarTitle");
  CollabPanelNav.classList.remove("activeNavbarTitle");
  acknowledgementsNav.classList.add("activeNavbarTitle");
  MonsoonPanelNav.classList.remove("activeNavbarTitle");
});

MonsoonPanelNav.addEventListener('click', () => 
{
  console.log('clicked assemblages');
  assemblagesSection.scrollIntoView();
  aboutNav.classList.remove("activeNavbarTitle");
  residencyNav.classList.remove("activeNavbarTitle");
  eventsNav.classList.remove("activeNavbarTitle");
  MonsoonalPanelNav.classList.remove("activeNavbarTitle");
  CollabPanelNav.classList.remove("activeNavbarTitle");
  acknowledgementsNav.classList.remove("activeNavbarTitle");
  MonsoonPanelNav.classList.add("activeNavbarTitle");
});

var section = $('li');

var rellax = new Rellax('.rellax', {
  center: true,
  horizontal: true,
  wrapper: document.querySelector('.Layout__main') // or '.Layout__main'
});

function toggleAccordion() 
{
  section.removeClass('active');
  $(this).addClass('active');
}

dragonSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Dragonfly.jpg';
});

hilsaSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Hilsa-fish2.jpg';
});

snakesSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/snakes.gif';
});

weedsSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/weed.jpg';
});

airSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/air.gif';
});

atmosphereSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/atmosphere3.gif';
});

groundwaterSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Groundwater.jpg';
});

oceanSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/OCEAN.jpg';
});

saltSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/salt.jpg';
});

sedimentSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/sediment2.gif';
});

khalsSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Khals.jpg';
});

tankSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Tanks2.jpg';
});

pipesPotsSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/PipesPots.jpg';
});

timeSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/time.gif';
});

pedagogySubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/pedagogy2.gif';
});

spaceSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/space.gif';
});

drawingSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Drawing.jpg';
});

ethnographySubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/ethnography.gif';
});

chennaiSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/chennai.gif';
});

dhakaSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/dhaka.gif';
});

londonSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/London.jpg';
});

yangonSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Yangon.gif';
});

Array.from(groupedFocusedSubtitles).forEach(subtitle => {
  subtitle.addEventListener('click', function(event) 
  {
    leftHandSideMM = true;
    checkLeftHandSideMM();  
  });
});

monsoonalMultiplicitiesTitle.addEventListener('click', function() 
{
  leftHandSideMM = false;
  checkLeftHandSideMM(); 
  $('.hilsaContainer').fadeOut(2000);
  $('.snakesContainer').fadeOut(2000);
  $('.saltContainer').fadeOut(2000);
  $('.khalsContainer').fadeOut(2000);
  $('.dhakaContainer').fadeOut(2000);
  $('.timeContainer').fadeOut(2000);
  $('.weedsContainer').fadeOut(2000);
  $('.sedimentContainer').fadeOut(2000);
  $('.londonContainer').fadeOut(2000);
  $('.potsContainer').fadeOut(2000);
  $('.airContainer').fadeOut(2000);
  $('.tanksContainer').fadeOut(2000);
  $('.groundwaterContainer').fadeOut(2000);
  $('.atmosphereContainer').fadeOut(2000);
  $('.ethnographyContainer').fadeOut(2000);
  $('.spaceContainer').fadeOut(2000);
  $('.chennaiContainer').fadeOut(2000);

  $('.MMContainer').fadeIn(2000);
  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  tankSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  dhakaSmallTabHeading.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';

  hilsaSubchapter.style.textDecoration = "none";
  weedsSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  tanksSmallTabHeading.style.textDecoration = 'none';
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  londonSmallTabHeading.style.textDecoration = 'none';
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';

  $('#backgroundVideo').fadeIn(3000);
});

hilsaSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "underline";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  weedsSubchapter.style.textDecoration = 'none';
  airSubchapter.style.textDecoration = "none";
  londonSubchapter.style.textDecoration = 'none';
  dhakaSubchapter.style.textDecoration = "none";
  groundwaterSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  khalsSubchapter.style.textDecoration = "none";
  tankSubchapter.style.textDecoration = 'none';
  timeSubchapter.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "underline";
  snakesSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  londonSmallTabHeading.style.textDecoration = 'none';
  airSmallTabHeading.style.textDecoration = "none";
  tanksSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeIn(3000);
  $('.tanksContainer').fadeOut(2000);
  $('.saltContainer').fadeOut(2000);
  $('.khalsContainer').fadeOut(2000);
  $('.snakesContainer').fadeOut(2000);
  $('.airContainer').fadeOut(2000);
  $('.dhakaContainer').fadeOut(2000);
  $('.sedimentContainer').fadeOut(2000);
  $('.weedsContainer').fadeOut(2000);
  $('.potsContainer').fadeOut(2000);
  $('.timeContainer').fadeOut(2000);
  $('.atmosphereContainer').fadeOut(2000);
  $('.ethnographyContainer').fadeOut(2000);
  $('.londonContainer').fadeOut(2000);
  $('.groundwaterContainer').fadeOut(2000);
  $('.spaceContainer').fadeOut(2000);
  $('.chennaiContainer').fadeOut(2000);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

snakesSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "underline";
  saltSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  weedsSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  dhakaSubchapter.style.textDecoration = "none";
  atmosphereSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "underline";
  khalsSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  londonSmallTabHeading.style.textDecoration = 'none';
  airSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  sedimentSubchapter.style.textDecoration = "none";
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(2000);
  $('.tanksContainer').fadeOut(2000);
  $('.snakesContainer').fadeIn(3000);
  $('.saltContainer').fadeOut(2000);
  $('.khalsContainer').fadeOut(2000);
  $('.dhakaContainer').fadeOut(3000);
  $('.sedimentContainer').fadeOut(2000);
  $('.airContainer').fadeOut(2000);
  $('.potsContainer').fadeOut(2000);
  $('.weedsContainer').fadeOut(2000);
  $('.londonContainer').fadeOut(2000);
  $('.atmosphereContainer').fadeOut(2000);
  $('.timeContainer').fadeOut(2000);
  $('.spaceContainer').fadeOut(2000);
  $('.groundwaterContainer').fadeOut(2000);
  $('.chennaiContainer').fadeOut(2000);
  $('.ethnographyContainer').fadeOut(2000);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

saltSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "underline";
  dhakaSubchapter.style.textDecoration = "none";
  tankSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  khalsSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  atmosphereSubchapter.style.textDecoration = 'none';
  timeSubchapter.style.textDecoration = "none";
  groundwaterSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  pipesPotsSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "underline";
  khalsSmallTabHeading.style.textDecoration = "none";
  londonSmallTabHeading.style.textDecoration = 'none';
  dhakaSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  weedsSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  timeSmallTabHeading.style.textDecoration = "none";
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  sedimentSubchapter.style.textDecoration = "none";
  atmosphereSmallTabHeading.style.textDecoration = 'none';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(2000);
  $('.snakesContainer').fadeOut(2000);
  $('.khalsContainer').fadeOut(2000);
  $('.saltContainer').fadeIn(3000);
  $('.dhakaContainer').fadeOut(2000);
  $('.sedimentContainer').fadeOut(2000);
  $('.airContainer').fadeOut(2000);
  $('.londonContainer').fadeOut(2000);
  $('.tanksContainer').fadeOut(2000);
  $('.groundwaterContainer').fadeOut(2000);
  $('.atmosphereContainer').fadeOut(2000);
  $('.ethnographyContainer').fadeOut(2000);
  $('.potsContainer').fadeOut(2000);
  $('.timeContainer').fadeOut(2000);
  $('.weedsContainer').fadeOut(2000);
  $('.chennaiContainer').fadeOut(2000);
  $('.spaceContainer').fadeOut(2000);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

dhakaSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  londonSubchapter.style.textDecoration = 'none';
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "underline";
  khalsSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  weedsSubchapter.style.textDecoration = 'none';
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  tankSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  pipesPotsSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "underline";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  airSmallTabHeading.style.textDecoration = "none";
  ethnographySmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  sedimentSmallTabHeading.style.textDecoration = "none";

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(2000);
  $('.snakesContainer').fadeOut(2000);
  $('.saltContainer').fadeOut(2000);
  $('.timeContainer').fadeOut(2000);
  $('.sedimentContainer').fadeOut(2000);
  $('.dhakaContainer').fadeIn(3000);
  $('.khalsContainer').fadeOut(2000);
  $('.londonContainer').fadeOut(2000);
  $('.atmosphereContainer').fadeOut(2000);
  $('.potsContainer').fadeOut(2000);
  $('.tanksContainer').fadeOut(2000);
  $('.airContainer').fadeOut(2000);
  $('.groundwaterContainer').fadeOut(2000);
  $('.ethnographyContainer').fadeOut(2000);
  $('.spaceContainer').fadeOut(2000);
  $('.chennaiContainer').fadeOut(2000);
  $('.weedsContainer').fadeOut(2000);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

khalsSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  londonSubchapter.style.textDecoration = 'none';
  timeSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "underline";
  sedimentSubchapter.style.textDecoration = "none";
  weedsSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  pipesPotsSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  weedsSmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  khalsSmallTabHeading.style.textDecoration = "underline";

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(2000);
  $('.snakesContainer').fadeOut(2000);
  $('.saltContainer').fadeOut(2000);
  $('.dhakaContainer').fadeOut(2000);
  $('.timeContainer').fadeOut(2000);
  $('.sedimentContainer').fadeOut(2000);
  $('.tanksContainer').fadeOut(2000);
  $('.airContainer').fadeOut(2000);
  $('.potsContainer').fadeOut(2000);
  $('.weedsContainer').fadeOut(2000);
  $('.londonContainer').fadeOut(2000);
  $('.groundwaterContainer').fadeOut(2000);
  $('.atmosphereContainer').fadeOut(2000);
  $('.ethnographyContainer').fadeOut(2000);
  $('.spaceContainer').fadeOut(2000);
  $('.chennaiContainer').fadeOut(2000);
  $('.khalsContainer').fadeIn(3000);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

timeSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  atmosphereSubchapter.style.textDecoration = 'none';
  sedimentSmallTabHeading.style.textDecoration = "none";
  chennaiSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  timeSubchapter.style.textDecoration = "underline";
  pipesPotsSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  londonSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  timeSmallTabHeading.style.textDecoration = "underline";

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(2000);
  $('.snakesContainer').fadeOut(2000);
  $('.saltContainer').fadeOut(2000);
  $('.dhakaContainer').fadeOut(2000);
  $('.khalsContainer').fadeOut(2000);
  $('.sedimentContainer').fadeOut(2000);
  $('.airContainer').fadeOut(2000);
  $('.weedsContainer').fadeOut(2000);
  $('.potsContainer').fadeOut(2000);
  $('.londonContainer').fadeOut(2000);
  $('.tanksContainer').fadeOut(2000);
  $('.groundwaterContainer').fadeOut(2000);
  $('.atmosphereContainer').fadeOut(2000);
  $('.ethnographyContainer').fadeOut(2000);
  $('.spaceContainer').fadeOut(2000);
  $('.chennaiContainer').fadeOut(2000);
  $('.timeContainer').fadeIn(3000);
  

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

sedimentSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  weedsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  tankSubchapter.style.textDecoration = 'none';
  timeSubchapter.style.textDecoration = "none";
  atmosphereSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  sedimentSubchapter.style.textDecoration = "underline";
  chennaiSubchapter.style.textDecoration = 'none';
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  londonSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  sedimentSmallTabHeading.style.textDecoration = "underline";

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.sedimentContainer').fadeIn(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


airSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  londonSubchapter.style.textDecoration = 'none';
  timeSubchapter.style.textDecoration = "none";
  tankSubchapter.style.textDecoration = 'none';
  sedimentSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  airSubchapter.style.textDecoration = "underline";
  ethnographySubchapter.style.textDecoration = 'none';

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  weedsSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  airSmallTabHeading.style.textDecoration = "underline";

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.airContainer').fadeIn(0);
  $('.londonContainer').fadeOut(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

pipesPotsSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  londonSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  sedimentSubchapter.style.textDecoration = "none";
  chennaiSubchapter.style.textDecoration = 'none';
  airSubchapter.style.textDecoration = "none";
  weedsSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  pipesPotsSubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  weedsSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  potsSmallTabHeading.style.textDecoration = 'underline';
  londonSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.potsContainer').fadeIn(0);
  $('.chennaiContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


weedsSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'underline';
  londonSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.weedsContainer').fadeIn(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

londonSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'underline';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.londonContainer').fadeIn(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


tankSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'underline';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);
  $('.tanksContainer').fadeIn(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

groundwaterSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'underline';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);
  $('.groundwaterContainer').fadeIn(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

ethnographySubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'underline';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);
  $('.ethnographyContainer').fadeIn(0);
  $('.atmosphereContainer').fadeOut(0);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

atmosphereSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'underline';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);

  $('.atmosphereContainer').fadeIn(0);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


spaceSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'underline';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.chennaiContainer').fadeOut(0);
  $('.spaceContainer').fadeIn(0);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


chennaiSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "none";
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  tankSubchapter.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'underline';
  

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  dhakaSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  weedsSmallTabHeading.style.textDecoration = 'none';
  londonSmallTabHeading.style.textDecoration = 'none';
  tanksSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'underline';

  $('#backgroundVideo').fadeOut(2000);

  $('.hilsaContainer').fadeOut(0);
  $('.snakesContainer').fadeOut(0);
  $('.saltContainer').fadeOut(0);
  $('.dhakaContainer').fadeOut(0);
  $('.khalsContainer').fadeOut(0);
  $('.timeContainer').fadeOut(0);
  $('.sedimentContainer').fadeOut(0);
  $('.airContainer').fadeOut(0);
  $('.potsContainer').fadeOut(0);
  $('.weedsContainer').fadeOut(0);
  $('.londonContainer').fadeOut(0);
  $('.tanksContainer').fadeOut(0);
  $('.groundwaterContainer').fadeOut(0);
  $('.ethnographyContainer').fadeOut(0);
  $('.atmosphereContainer').fadeOut(0);
  $('.spaceContainer').fadeOut(0);
  $('.chennaiContainer').fadeIn(0);

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});



 function checkActiveAccordian()
{
    if (AccordianOne.classList.contains('active'))
    {
      subtitleContainerOne.style.display = 'none';
      focusedSubtitlesOne.style.display = 'block';

    }
    else if (AccordianTwo.classList.contains('active'))
    {
      subtitleContainerTwo.style.display = 'none';
      focusedSubtitlesTwo.style.display = 'block';
    }
    else if (AccordianThree.classList.contains('active'))
    {
      subtitleContainerThree.style.display = 'none';
      focusedSubtitlesThree.style.display = 'block';
    }
    else if (AccordianFour.classList.contains('active'))
    {
      subtitleContainerFour.style.display = 'none';
      focusedSubtitlesFour.style.display = 'block';
    }
    else if (AccordianFive.classList.contains('active'))
    {
      subtitleContainerFive.style.display = 'none';
      focusedSubtitlesFive.style.display = 'block';
    }
}

function checkInactiveAccordian()
{
  if(!$(sectionOne).hasClass("active"))
  {
    subtitleContainerOne.style.display = 'inline';
    focusedSubtitlesOne.style.display = 'none';

  }
  if (!$(sectionTwo).hasClass("active"))
  { 
    subtitleContainerTwo.style.display = 'inline';
    focusedSubtitlesTwo.style.display = 'none';

  }
  if (!$(sectionThree).hasClass("active"))
  {
    subtitleContainerThree.style.display = 'inline';
    focusedSubtitlesThree.style.display = 'none';

  }
  if (!$(sectionFour).hasClass("active"))
  {
    subtitleContainerFour.style.display = 'inline';
    focusedSubtitlesFour.style.display = 'none';

  }
  if (!$(sectionFive).hasClass("active"))
  {
    subtitleContainerFive.style.display = 'inline';
    focusedSubtitlesFive.style.display = 'none';
  }
}

function checkLeftHandSideMM () 
{
  if (leftHandSideMM === true)
  {
    $(".headingTitle").animate({opacity: 1}, 2500);
    $(".headingItem").animate({opacity: 1}, 2500);

    $('.MMContainer').fadeOut(2000);
  }

  else if (leftHandSideMM === false)
  {
    $(".headingTitle").animate({opacity: 0}, 1000);
    $(".headingItem").animate({opacity: 0}, 1000);
  }
}

section.on('click', toggleAccordion);
section.on('click', checkActiveAccordian);
section.on('click', checkInactiveAccordian);

checkActiveAccordian();
checkInactiveAccordian();

$('#dhakaTwelve').imageZoom({zoom : 250});
$('#dhakaFourteen').imageZoom({zoom : 250});
$('#dhakaEighteen').imageZoom({zoom : 250});
$('#khalsMapOne').imageZoom({zoom : 250});
$('#chennaiSeventeen').imageZoom({zoom : 250});
$('#chennaiThirtyFive').imageZoom({zoom : 250});


var zoomin = false;
var dhakaMapOne = document.querySelector('.containerZoom');

// $(".containerZoom" ).click(function() 
// {
//   if (zoomin == false)
//   {
//     document.querySelector(".containerZoom").style.setProperty("cursor", "zoom-in", "important");

//       setTimeout(function(){ zoomin = true; }, 200);
//   }

//  if (zoomin == true)
//   {
//     document.querySelector(".containerZoom").style.setProperty("cursor", "zoom-out", "important");
//     setTimeout(function(){ zoomin = false; }, 200);
//   }
// });

// window.addEventListener(
//   "wheel",
//   function handleWheelEvent( event ) {

//     var direction = ( event.deltaY >= 0 )
//       ? "DOWN"
//       : "UP"
//     ;

//     console.log( "Event: wheel,", direction, event.target );

//   },
//   true
// );

// window.addEventListener(
//   "scroll",
//   function handleScrollEvent( event ) {

//     console.log( "Event: scroll" );

//   },
//   true
// );