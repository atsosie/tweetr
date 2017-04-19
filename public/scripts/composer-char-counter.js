// alert("Hello");

// .on( events [, selector ] [, data ], handler )
// $( "#dataTable tbody tr" ).on( "click", function() {
//   console.log( $( this ).text() );
// });

// $("selector").method();

$(document).ready(function() {

  $(".new-tweet textarea").on("keyup", function() {
    const charLimit = 140;
    const charUsed = $(this).val().length;
    const charRemaining = charLimit - charUsed;
    $(this).siblings(".counter").text(charRemaining);
    // if (charRemaining < 0) {
    //   $("")
    // }
  });

});

