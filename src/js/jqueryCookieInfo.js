(function ($) {
  // Cookie info jQuery plugin
  $.cookieInfo = function (info = 'This website uses cookies to improve browsing experience and provide additional functionality.', close = 'OK', cookieInfo = 'cookie-info') {
    if (!localStorage.cookieInfo) {
      $('body').append('<div class="' + cookieInfo + '"><span>' + info + '</span> <a class="' + cookieInfo + '__button" href="#">' + close + '</a></div>');
      $('.' + cookieInfo + '__button').on('click', function (e) {
        e.preventDefault();
        localStorage.cookieInfo = true;
        $(this).parent().remove();
      });
    }
  };
})(jQuery);
