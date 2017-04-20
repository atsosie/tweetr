$(document).ready(function() {

  $(".new-tweet textarea").on("keyup", function() {
    const charLimit = 140;
    const charUsed = $(this).val().length;
    const charRemaining = charLimit - charUsed;
    const charCount = $(this).siblings(".counter").text(charRemaining);
    if (charRemaining < 0) {
      charCount.addClass("error-text");
    } else {
      charCount.removeClass("error-text");
    }
  });

});

