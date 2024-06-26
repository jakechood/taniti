// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }

  $('#home').addClass("active");

//   Smooth scrolling
      $("#home").click(function() {
           $('html, body').animate({
               scrollTop:        $("#home").offset().top-66
           }, 1000);
        return false;
       });
      
      $("#localLiving").click(function() {
           $('html, body') .animate({
               scrollTop:        $("#localLiving").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#transportation").click(function() {
           $(' html,body') .animate({
               scrollTop:        $("#transportation").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#entertainment").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop:        $("#entertainment").offset().top-112
           }, 1000);
        return false;
       });

       $("#faq").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop:        $("#faq").offset().top-112
           }, 1000);
        return false;
       });

       $('#localLiving').waypoint(function() {
      
        $(".container ul li").children().removeClass("active");
        $("#localLiving").addClass("active");
        
      }, { offset: 101 });
      
      
      $('#transportation').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#transportation").addClass("active");
      }, { offset: 101 });
      
      $('#entertainment').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#entertainment").addClass("active");
      }, { offset: 101 });

      $('#faq').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#faq").addClass("active");
      }, { offset: 101 });
      
      $('#home').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#home").addClass("active");
      }, { offset: 0 });