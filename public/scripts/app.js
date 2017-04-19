/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };


  function daysAgoCreated(miliseconds) {
    let today = new Date().getTime();
    let milisecondsDiff = today - miliseconds;
    let days = Math.floor(milisecondsDiff / (1000 * 60 * 60 * 24));
    return days;
  }

  // takes in a tweet object and returns tweet <article>
  function createTweetElement (tweetData) {
    let numberOfDays = daysAgoCreated(tweetData.created_at);
    let formattedTweet =
      `<article>
        <header>
        <img class="user-avatar" src="${tweetData.user.avatars.small}">
        <h2 class = "user-name">${tweetData.user.name}</h2>
        <span class = "user-handle">${tweetData.user.handle}</span>
      </header>
      <p>${tweetData.content.text}</p>
      <footer>
        <div class="date-created">${numberOfDays} days ago</div>
          <div>
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
      </footer>
      </article>`;
    return formattedTweet;
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $("#tweet").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});