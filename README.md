Demo page: https://mysliwiec.pro/cookie-info/

Dependencies:
jQuery - https://jquery.com/

Installation:
Add plugin just before </body> tag:
<script type="text/javascript" src="js/jqueryCookieInfo.mini.js"></script>

Usage with default parameters:
//  Equivalent and recommended way of calling: $( document ).ready(function() { });
$(function () {
  $.cookieInfo(); // Default parameters info = 'I use cookies technology for statistical purposes only.', close = 'OK', cookieInfo = 'cookie-info'
});

Usage with own parameters:
//  Equivalent and recommended way of calling: $( document ).ready(function() { });
$(function () {
  $.cookieInfo('Cookie info message', 'Close text');
});