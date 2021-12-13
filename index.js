function openSkills(evt, skills) {
    // Declaring all the variables
    var i, tabcontent, tablinks;
    
    // getting all elements with tabcontent to hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // getting all elements with tablinks and removing the active class 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab
    document.getElementById(skills).style.display = "block";
    evt.currentTarget.className += " active";
}


function openYear(evt, year) {
    // Declaring all the variables
    var i, tabcontent, tablinks;
    
    // getting all elements with tabcontent to hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // getting all elements with tablinks and removing the active class 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab
    document.getElementById(year).style.display = "block";
    evt.currentTarget.className += " active";
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


