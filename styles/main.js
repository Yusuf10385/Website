// https://codepen.io/zchee/pen/ogzvZZ
//https://www.hellojava.com/a/55389.html
(function () {
  'use strict';

  let section = document.querySelectorAll(".section"); //returns all elements in the document matching  "section"
  let sections = {}; //object declaration
  let i = 0; //integer

  Array.prototype.forEach.call(section, function (e) {    //Array used to store each section id into the "sections" object  
    sections[e.id] = e.offsetTop;  // "sections" object used with the offsetTop Value
  });

  window.onscroll = function () {  //Function for each time the page is being scrolled
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; //how far the page is being scrolled from the top

    for (i in sections) {
      if (sections[i] <= scrollPosition) {   // Checks if a section has been fully scrolled down
        document.querySelector('.active').setAttribute('class', ' '); // if the statement is true, remove class "active" from the active page
        document.querySelector('a[href*=' + i + '').setAttribute('class', 'active'); //Add "active" class to the a tag that matches to the page
      }
    }
  };
})();

//https://www.youtube.com/watch?v=bkvH28PXLWc

//Function used to display current date and time
function currentDate() {
  document.getElementById("todayDate").innerHTML = Date();
}

//the endh
