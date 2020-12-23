var accordianContainer = document.querySelector('#accordianSection');
var leftHandSideMM = false;

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

Array.from(groupedFocusedSubtitles).forEach(subtitle => {
  subtitle.addEventListener('click', function(event) 
  {
    leftHandSideMM = true;
    checkLeftHandSideMM();  
  });
});

hilsaSubchapter.addEventListener('click', function() 
{
  hilsaSubchapter.style.textDecoration = "underline";
  imageInCorner.src = '';

  $('.hilsaContainer').fadeIn(3000);

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

  else if (leftHandHeadings === false)
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