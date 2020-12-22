var MMTitle = document.getElementById('multipleMonsoons');
var UATitle = document.getElementById('UA');
var UrbanAssemblagesNav = document.querySelector('#UrbanAssemblages');
var cityTitle = document.querySelector('.cityTitle');

var disableRightHandPanel = false;

var contentSection = document.getElementById('primaryPanel');
var contentSectionTitle = document.getElementById('cityHeadings');
var primaryPanelContainer = document.querySelector('.Layout__wrapper-container');
var primaryTitle = document.querySelector('.cityName');
var contentText = document.querySelector('.contentText');

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

var dhakaScroll = false;

var videoContent = document.getElementById('videoContent');

var section = $('li');

var rellax = new Rellax('.rellax', {
  center: true,
  horizontal: true,
  wrapper: document.querySelector('.Layout__main') // or '.Layout__main'
});

// $(document).ready(function () {
//   $(document).on("scroll", onScroll);
  
//   //smoothscroll
//   $('a[href^="#"]').on('click', function (e) {
//       e.preventDefault();
//       $(document).off("scroll");
      
//       $('a').each(function () {
//           $(this).removeClass('active');
//       })
//       $(this).addClass('active');
    
//       var target = this.hash,
//           menu = target;
//       $target = $(target);
//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top+2
//       }, 500, 'swing', function () {
//           window.location.hash = target;
//           $(document).on("scroll", onScroll);
//       });
//   });
// });

// function onScroll(event){
//   var scrollPos = $(document).scrollTop();
//   $('#menu-center a').each(function () {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//           $('#menu-center ul li a').removeClass("active");
//           currLink.addClass("active");
//       }
//       else{
//           currLink.removeClass("active");
//       }
//   });
// }

function toggleAccordion() 
{
  section.removeClass('active');
  $(this).addClass('active');
}

  UrbanAssemblagesNav.addEventListener('click', (event) => 
{
    if (AccordianFive.offsetWidth >= 385)
    {
      event.stopPropagation();
        $("#navbarTitlesContainer").animate({
          left: '-=30%',
          opacity: '0'
        }, 1000);

        $("#RightTextContainer").animate({
          left: '-=30%',
          opacity: '0'
        }, 1000);

        $(".cityTitle").animate({
          left: '-=30%',
          opacity: '0'
        }, 1000);

        $(".Layout__wrapper-container").animate({
          opacity: '0'
        }, 1000);

        $(".headingItem").animate({
          opacity: '1'
        }, 2000);

        $(".headingTitle").animate({
          opacity: '1'
        }, 2000);

        subtitleContainerFive.style.display = 'none';
        focusedSubtitlesFive.style.display = 'none';
        UrbanAssemblagesNav.style.opacity = 0;

        $(".Layout__wrapper-container").animate({
          opacity: '1'
        }, 3000);

        var switchToUA = setTimeout(UATimer, 3000);

        function UATimer()
        {
          primaryPanelContainer.innerHTML = `
          <a id="ChapterName" href="#"><h2 class="UrbanAssemblagesChapterName">Urban Assemblages</h2></a>
          
          <div id="cityHeadings">
          <div id='cityNameContainer'><a id='chennaiTitle' href='#'><h1 id='cityChennai' class='cityTitlePrimary'>CHENNAI</h1></a><a id='dhakaTitle' href='#'><h1 id='cityDhaka' class='cityTitlePrimary'>DHAKA</h1></a><a id='YangonTitle' href='#'><h1 id='cityYangon' class='cityTitlePrimary'>YANGON</h1></a><a id='LondonTitle' href='#'><h1 id='cityLondon' class='cityTitlePrimary'>LONDON</h1></a></div>
        </div>`;
        }

        AccordianFive.style.pointerEvents = "none";
      }

      $("#sectionThree").addClass('active');
      $('#sectionFive').remove('active');
      checkActiveAccordian();
      checkInactiveAccordian();

      subtitleContainerFive.style.display = 'none';
      focusedSubtitlesFive.style.display = 'none';
      disableRightHandPanel = true;
});

section.on('click', toggleAccordion);
section.on('click', checkActiveAccordian);
section.on('click', checkInactiveAccordian);


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

  if (!$(sectionFive).hasClass("active") && disableRightHandPanel === true)
  {
    subtitleContainerFive.style.display = 'none';
    focusedSubtitlesFive.style.display = 'none';
  }
}

checkActiveAccordian();
checkInactiveAccordian();