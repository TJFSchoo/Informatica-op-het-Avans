// Activating Bootstrap's Scrollspy and configuring it to fit our needs
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});   

  $("#navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});