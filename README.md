## Demo page
https://mysliwiec.pro/cookie-info/

## Description
This jQuery plugin adds cookie law info message on the page bottom.

## Dependencies
jQuery - https://jquery.com/

## Installation
Add plugin just before `</body>` tag:

`<script type="text/javascript" src="js/jqueryCookieInfo.mini.js"></script>`

## Usage with default parameters
```
//  Equivalent and recommended way of calling: $( document ).ready(function() { });
$(function () {
  // Default parameters info = 'I use cookies technology for statistical purposes only.', close = 'OK', cookieInfo = 'cookie-info'
  $.cookieInfo();
});
```

## Usage with own parameters
```
//  Equivalent and recommended way of calling: $( document ).ready(function() { });
$(function () {
  $.cookieInfo('Cookie info message', 'Close text', 'CSS selector name');
});
```

## Sample SCSS (used on demo page)
```
.cookie-info {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: .3em;
    background-color: rgba(243, 234, 243, 0.7);
    animation: slideUp 2.2s ease-out;
    &__button {
      display: inline-block;
      color: #330000;
      min-width: 4em;
      background: #c7c7c7;
      border-radius: .3em;
      margin: 0.3em;
      padding: 0.45em 0.6em;
      transition: all 0.3s;
      &:hover {
        background: #d6d6d6;
      }
     }
  }

  @keyframes slideUp {
    from {bottom: -5em;} 
    to {bottom: 0;} 
  }
  ```
