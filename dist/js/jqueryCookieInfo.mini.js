!function(o){o.cookieInfo=function(n="I use cookies technology for statistical purposes only.",e="OK",c="cookie-info"){localStorage.cookieInfo||(o("body").append('<div class="'+c+'"><span>'+n+'</span> <a class="'+c+'__button" href="#">'+e+"</a></div>"),o("."+c+"__button").on("click",function(n){n.preventDefault(),localStorage.cookieInfo=!0,o(this).parent().remove()}))}}(jQuery),$(function(){$.cookieInfo()});