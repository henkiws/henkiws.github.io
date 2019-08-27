function load (){
  (function($){
  "use strict";

    $(window).on('scroll', function(){
      navScroll();
    });
    //jquery inview
    $('.hidding').on('inview', function(event, visible) {
      var effect = $(this).attr('data-animated');
      $(this).addClass(effect);
      $(this).addClass('visible');
    });

    $('#owl-works').owlCarousel({
      items : 3,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [980,5],
      itemsTablet: [768,5],
      itemsTabletSmall: [550,2],
      itemsMobile : [480,2],
  });

  //nivo lightbox
  $('.owl-carousel .item a').nivoLightbox({
  effect: 'fadeScale',                             // The effect to use when showing the lightbox
  theme: 'default',                           // The lightbox theme to use
  keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
  clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
  onInit: function(){},                       // Callback when lightbox has loaded
  beforeShowLightbox: function(){},           // Callback before the lightbox is shown
  afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
  beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
  afterHideLightbox: function(){},            // Callback after the lightbox is hidden
  onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
  onNext: function(element){},                // Callback when the lightbox gallery goes to next item
  errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
  });

  winHeight();

  $(document).ready(function() {
    $("#owl-folio").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        pagination: false,
        navigation: true,
        navigationText:["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

    $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }

    });
  //  animate modal

  });
  // =================== function ========================
  function winHeight(){
    var wHeight = $(window).height();
    $('.wide-screen').height(wHeight);
  }
  function navScroll(){

    // navbar on scroll
    var top = $(window).scrollTop();
    if (top > 0) {
      //$('.navbar-default').addClass('navbar-bg');
    }
    else{
      //$('.navbar-default').removeClass('navbar-bg');
    }

  }
  })(jQuery);

}