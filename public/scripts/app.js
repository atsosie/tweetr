/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {


  // take in a tweet object and return a formatted tweet <article>
  function createTweetElement (tweetData) {
    let dateCreated = moment(tweetData.created_at).fromNow();
    let formattedTweet =
      `<article>
        <header>
        <img class="user-avatar" src="${tweetData.user.avatars.small}">
        <h2 class = "user-name">${tweetData.user.name}</h2>
        <span class = "user-handle">${tweetData.user.handle}</span>
      </header>
      <p>${tweetData.content.text}</p>
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
  // *** Reverse this order, so newest tweet is first ***
  function renderTweets(dataArr) {
    dataArr.forEach(function(dataObj) {
      const $tweet = createTweetElement(dataObj);
      $("#tweet").append($tweet);
    });
  }

  // display submitted tweet along with all past tweets
  function loadTweets() {
    $.ajax({
      url: "/tweets/",
      method: "GET",
      success: function(response) {
        renderTweets(response);
      }
    });
  }

  // event listener for submitting new tweet
  $("form").on("submit", function (event) {
    console.log("form data ", $(this).serialize());
    event.preventDefault();
    $.ajax({
      url: "/tweets",
      method: 'POST',
      data: $(this).serialize(),
      success: loadTweets
    });
  });

  loadTweets();

});