(function ($) {
  // Cookie info jQuery plugin
  $.cookieInfo = function (info = 'I use cookies technology for statistical purposes only.', close = 'OK', cookieInfo = 'cookie-info') {
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

//  Equivalent and recommended way of calling: $( document ).ready(function() { });
$(function () {
  $.cookieInfo();
});
