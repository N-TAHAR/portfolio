var skillTitle = document.querySelector('.skills__title');
var skillName = document.querySelectorAll('.skill__name');
var skillLevel = document.querySelectorAll('.skill__level');

//Using Waypoint to appear the elements on scroll

//Title appear
var waypoint = new Waypoint({
  element: skillTitle,
  handler: function() {
    skillTitle.classList.add('transformReset')
  },
  offset: 550
});

//Skill appear
for (let i = 0; i < skillName.length; i++) {
  var waypoint = new Waypoint({
    element: skillName[i],
    handler: function() {
      skillName[i].classList.add('transformReset')
    },
    offset: 550
  });
}


//Skill Level appear
for (let i = 0; i < skillLevel.length; i++) {
  var waypoint = new Waypoint({
    element: skillLevel[i],
    handler: function() {
      skillLevel[i].classList.add('transformReset')
    },
    offset: 550
  });
}