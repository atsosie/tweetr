// alert("Hello");

// .on( events [, selector ] [, data ], handler )
// $( "#dataTable tbody tr" ).on( "click", function() {
//   console.log( $( this ).text() );
// });

// $("selector").method();

$(document).ready(function() {

  $(".new-tweet textarea").on("keyup", function() {
    let charsUsed = $(this).val().length;
    $(this).siblings(".counter").text(charsUsed);
  });

});

