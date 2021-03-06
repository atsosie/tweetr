/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // prevent XSS with escaping
  function escape(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }


  function createTweetElement(tweetData) {
    let dateCreated = moment(tweetData.created_at).fromNow();
    let formattedTweet =
      `<article>
        <header>
        <img class="user-avatar" src="${tweetData.user.avatars.small}">
        <h2 class = "user-name">${tweetData.user.name}</h2>
        <span class = "user-handle">${tweetData.user.handle}</span>
      </header>
      <p>${escape(tweetData.content.text)}</p>
      <footer>
        <div>${dateCreated}</div>
        <div class="icons">
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
      </article>`;
    return formattedTweet;
  }


  // add formatted tweet to section of past tweets
  function renderTweets(dataArr) {
    $(".tweet-container").empty();
    dataArr.forEach(function(dataObj) {
      const $tweet = createTweetElement(dataObj);
      $("#tweet").prepend($tweet);
    });
  }


  // display all tweets
  function loadTweets() {
    $.ajax({
      url: "/tweets/",
      method: "GET",
      success: function (response) {
        renderTweets(response);
      }
    });
  }


  // toggle compose tweet form
  const $composeTweet = $(".new-tweet");

  $("#compose-button").on("click", function() {
    $composeTweet.slideToggle(300).find("textarea").focus();
  });


  // event listener for submitting new tweet
  $("form").on("submit", function(event) {
    console.log("form data: ", $(this).serialize());
    event.preventDefault();
    let charCount = $("#tweet-text").val().length;

    if (charCount === 0) {
      $.flash("Tweet not published. Type something before hitting 'Tweet'.");
      return;
    }

    if (charCount > 140) {
      $.flash("Tweet not published. Keep it under 140 characters.");
      return;
    }

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(this).serialize(),
      success: function() {
        loadTweets();
        $("#tweet-text").val("");
        $(".counter").text("140");
      }
    });
  });

  loadTweets();

});