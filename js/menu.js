
(function($) {
    $('nav li').click(function() {
      $(this).addClass('active').siblings('li').removeClass('active');
      $('section:nth-of-type('+$(this).data('rel')+')').stop().fadeIn(200, 'linear').siblings('section').stop().fadeOut(400, 'linear'); 
    });
  })(jQuery);