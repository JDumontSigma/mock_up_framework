'use strict';

let detail = '',
    baseStorage = new Array(),
    count = 0,
    currentPos = 0,
    columnTitle = ['id', 'name', 'gender', 'test', 'sequence'];

Table_Generator();

$('.table_holder2').append( detail );

function Table_Generator () {
    let rowCount = 10,
       columnCount = 5;
        detail += '<button class="sort btn btn-primary" data-sort="id">Sort by id</button>';
        detail += '<button class="sort btn btn-primary" data-sort="name">Sort by name</button>'
        detail += '<button class="sort btn btn-primary" data-sort="gender">Sort by gender</button>'
        detail += '<button class="sort btn btn-primary" data-sort="sequence">Sort by sequence</button>'
    detail += '<table class="table table-striped">';
    detail += '<thead>';
        detail += '<tr>';
        for( let x = 0; x < columnTitle.length; x++ ) {
            detail += '<th style="font-weight:bold;font-size:1.2em;color:black;">' + columnTitle[x] + '</th>';
        }
        detail += '</tr>';
    detail += '</thead>';

    detail += '<tbody class="list">';
   for( let i = 0; i < rowCount; i++ ) {
      detail += '<tr>';
         for( let x = 0; x < columnTitle.length; x++ ) {
            detail += '<td contenteditable class="item column' + x + ' ' + columnTitle[x] +' " id="'+  x + '">' + Math.floor(Math.random() * 10) + '</td>';
         }
      detail += '</tr>';   
   } 
   detail += '<tr class="newEntryHere">';
      for( let i = 0; i < columnCount; i++ ) {
         detail += '<td>';
            detail += '<input class="new_input" type="text">';
         detail += '</td>';
      }
   detail += '</tr>';
   detail += '</tbody>';
   detail += '</table>';
   detail += '<button class="btn btn-primary" id="newField">Insert</button>';
   detail += '<div class="select">';
      detail += '<p>Select all record from column</p>';
      detail += '<select class="columnChoice">';
      for(let i = 0; i < columnTitle.length; i++ ){
          detail += '<option value="' + columnTitle[i] + '">' + columnTitle[i] + '</option>';
      }
      detail += '</select>';
      detail += 'where record equal <input type="text" id="searchVal">';
      detail += '<button type="submit" id="searchRecords" class="btn btn-primary">Search</button>';
      detail += '<div class="searchHolder"></div>'; 
}



$('body').on('click', '#newField', function ( event ) {
   event.preventDefault();
   let entry = new Array(),
       newInsert = '';
   $('.new_input').each( function () {
      entry.push($( this ).val());
      $( this ).val('');
   });
   newInsert += '<tr>';
      for( let p = 0; p < entry.length; p++ ) {
         newInsert += '<td class="item column' + p + ' " id="' + p + '">';
            newInsert += entry[p];
         newInsert += '</td>'
      }
   newInsert += '</tr>';

   $('.newEntryHere').before( newInsert );
});

$('body').on('click', '#searchRecords', function ( event ) {
    let column = $('.columnChoice').val(),
        query = $('#searchVal').val();
    $( '.' + column ).each( function () {
        if( $( this ).html() === query ) {
            $(this).parent().addClass('success');
        }
    });
    $('.searchHolder').append('<p>Results for all records in column ' + column + ' with the value ' + query);
});

var options = {
  valueNames: [ 'id', 'name', 'gender', 'test', 'sequence' ]
};

var tableList = new List('user', options);
// $( document ).on('mousedown', '.item', function () {
//    let column = $( this ).attr('id'),
//        colVal = $( this ).html();
//    $( this ).addClass('active');
//    $( '.column' + column ).on('mouseenter', function() {
//       //this is the draggin segment
//       if( $( this ).html() !== colVal ) {
//          $( this ).html( colVal );
//          $( this ).addClass('active');
//       }
      
//    });

//    $('.item').on('mouseup', function () {
//       $( '.column' + column ).unbind('mouseenter');
//       $('.active').each( function () {
//          $( this ).removeClass('active');
//       });
//    });
//


const login = require('./seperate/loginform');