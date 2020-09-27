//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  $("#show").click(function(){
    $(".apper").show('1000');
  });
});
$(document).ready(function(){
  $("#show1").click(function(){
    $(".apper1").show('1000');
  });
});
$(document).ready(function(){
  $("#show2").click(function(){
    $(".apper2").show('1000');
  });
});




// Add active class to the current button (highlight it)


// add tabs link;

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}






//  end add tabs link;


$(document).ready(function(){
  
  $("#em").click(function(){
    $("#show").show();
    $("#hide").hide();
  });
  $("#em1").click(function(){
    $("#show1").show();
    $("#hide1").hide();
  });
  $("#em2").click(function(){
    $("#show2").show();
    $("#hide2").hide();
  });
});









