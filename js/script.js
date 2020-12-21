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

MMTitle.addEventListener('click', () => 
{
  primaryPanelContainer.innerHTML = `<div id="cityHeadings"><a href="#"><h1 class="cityName">MONSOONAL <br/>MULTIPLICITIES</h1></a></div><div id="primaryPanel" class="content"><h3 id="contentTitle">An exhibition of <br/> Monsoon Assemblages</h3> <br><br><p class="contentText">Bangladesh’s sediment heavy rivers frequently braid or shift, creating precarious, nomadic units of land called chars that cannot be mapped, legally owned or recorded in revenue papers because they move around too quickly and too frequently. Chars have historically been occupied by precarious, marginal populations, often without official documents. Those who live on them lead perilous, calamitous lives. When the monsoon breaks and the flow of rivers increase each year, their land frequently deserts them, their shelters are devastated, crops are damaged and livestock washed away. As the river recedes, new chars emerge and fierce, at times violent struggles to occupy them, overseen by local strongmen, ensue.</p></div>`;

  cityHeadings.innerHTML = "<a href='#'><h1 class='cityName'>MONSOONAL <br/>MULTIPLICITIES</h1></a>";

  videoContent.style.display = 'block';
  videoContent.style.opacity = 0;
  contentSection.style.position = 'relative';
  contentSection.style.top = '24.5vh';
});

// UATitle.addEventListener('click', () => 
// {
//   primaryPanelContainer.innerHTML = `<div id="cityHeadings">
//   <div id='cityNameContainer'><a id='chennaiTitle' href='#'><h1 id='cityChennai' class='cityTitlePrimary'>CHENNAI</h1></a><a id='dhakaTitle' href='#'><h1 id='cityDhaka' class='cityTitlePrimary'>DHAKA</h1></a><a id='YangonTitle' href='#'><h1 id='cityYangon' class='cityTitlePrimary'>YANGON</h1></a><a id='LondonTitle' href='#'><h1 id='cityLondon' class='cityTitlePrimary'>LONDON</h1></a></div>
// </div>`;

//   videoContent.style.display = 'none';
//   videoContent.style.opacity = 0;
//   contentSection.style.position = 'relative';
//   contentSection.style.top = '23.5vh';
  
// var chennaiTitle = document.getElementById('chennaiTitle');
// var cityChennai = document.getElementById('cityChennai');
// var DhakaTitle = document.getElementById('dhakaTitle');
// var cityDhaka = document.getElementById('cityDhaka');
// var YangonTitle = document.getElementById('YangonTitle');
// var cityYangon = document.getElementById('cityYangon');
// var LondonTitle = document.getElementById('LondonTitle');
// var cityLondon = document.getElementById('cityLondon');

// chennaiTitle.addEventListener('click', () => 
// {
//   cityChennai.style.fontWeight = '900';

//   $("#cityDhaka").delay(100).animate({"opacity": "0"}, 500);
//   $("#cityYangon").delay(100).animate({"opacity": "0"}, 500);
//   $("#cityLondon").delay(100).animate({"opacity": "0"}, 500);
  
// });

// DhakaTitle.addEventListener('click', () => 
// {
//   cityDhaka.style.fontWeight = '900';
//   dhakaScroll = true;
//   var scrollCounter = 0;

//   var changeDhakaPosition = setTimeout(dhakaTimer, 1000);

//   function dhakaTimer ()
//   {
//     cityDhaka.style.position = "absolute";
//     cityDhaka.style.top = '9.5vh';
//     var contentSection = document.getElementById('primaryPanel');
//     contentSection.innerHTML = `<p class='contentText'>“Dhaka was a floating city. That's why Dhaka was chosen to be the capital, in those days water was the protection” (River activist, interview with Beth Cullen, 19th October 2019, Dhaka)</p>`;
//     contentSection.style.position = 'absolute';
//     contentSection.style.top = '26vh';
//     contentSection.style.opacity = '0';
//     videoContent.style.display = 'block';

//     $("#primaryPanel").delay(250).animate({"opacity": "1"}, 500);
//     $("#videoContent").delay(250).animate({"opacity": "1"}, 500);
//   }

//   $("#cityChennai").delay(250).animate({"opacity": "0"}, 500);
//   $("#cityYangon").delay(250).animate({"opacity": "0"}, 500);
//   $("#cityLondon").delay(250).animate({"opacity": "0"}, 500);
// });

// });

// var zoom = new dmuka.Zoom({
//   element: document.querySelector("#hydrologicalImage"),
//       // Transform scale increment
//       increment: 0.3,

//       // Transform min scale
//       minZoom: 1,

//       // Transform max scale
//       maxZoom: 5,

//       // Animate enable
//       transitionEnable: true,

//       // Element append to new parent element
//       parentEnable: true,

//       // If added parent then classes will add to parent
//       parentClasses: "",

//       // If added parent then overflow css will add to parent
//       parentOverflow: "hidden",

//       // If added parent then padding css will add to parent
//       parentPadding: 20
// });

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