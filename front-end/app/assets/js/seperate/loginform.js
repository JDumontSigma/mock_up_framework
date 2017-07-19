'use strict';
   $('.loginSubmit').click(function ( event ) {
      var username = $('#username').val();
      Cookies.set('username', username);
      window.location = './home.html'
   });   

