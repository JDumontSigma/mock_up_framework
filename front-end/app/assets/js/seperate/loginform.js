'use strict';
   $('.loginSubmit').click(function ( event ) {
      var username = $('#username').val(),
          password = $('#password').val();
      
      if((username === '') || (password === '')) {
         $('#errorLog').remove();
         $('.loginSubmit').before('<p id="errorLog" style="color:white; background-color:red;padding:1em 2em;">Please enter in a username and password to login</p>');
      } else {
         Cookies.set('username', username);
         window.location = './home.html';
      }
      
   });   

