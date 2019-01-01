var skillTitle = document.querySelector('.skills__title');
var skillName = document.querySelectorAll('.skill__name');
var skillLevel = document.querySelectorAll('.skill__level');
var infoPage = document.querySelector('.infoPage');
var projectPage = document.querySelector('.projectPage');
var contactPage = document.querySelector('.contactPage');


//Using Waypoint to appear the elements on scroll

//Title appear
var waypoint = new Waypoint({
  element: skillTitle,
  handler: function() {
    skillTitle.classList.add('transformReset')
  },
  offset: '100%'
});

//Skill appear
for (let i = 0; i < skillName.length; i++) {
  var waypoint = new Waypoint({
    element: skillName[i],
    handler: function() {
      skillName[i].classList.add('transformReset')
    },
    offset: '100%'
  });
}

//Skill Level appear
for (let i = 0; i < skillLevel.length; i++) {
  var waypoint = new Waypoint({
    element: skillLevel[i],
    handler: function() {
      skillLevel[i].classList.add('transformReset')
    },
    offset: '100%'
  });
}


//info Page appear
var waypoint = new Waypoint({
  element: infoPage,
  handler: function() {
    infoPage.classList.add('infoReset')
  },
});


//Project Page appear
var waypoint = new Waypoint({
  element: projectPage,
  handler: function() {
    projectPage.classList.add('projectReset')
  },
  offset: '100%'
});

//Contact Page appear
var waypoint = new Waypoint({
  element: contactPage,
  handler: function() {
    contactPage.classList.add('contactReset')
  },
  offset: '100%'
});