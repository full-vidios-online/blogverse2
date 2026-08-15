function showLoadingAndPlay() {

  var player = document.querySelector('.blogger-video-player');
  var playButton = player.querySelector('.blogger-play-button');
  var spinner = player.querySelector('.blogger-loading-spinner');

  if (!playButton || !spinner) {
    return;
  }

  /* Play button hide */
  playButton.style.setProperty('display', 'none', 'important');

  /* Spinner show */
  spinner.style.setProperty('display', 'block', 'important');

  /* Redirect URL */
  var redirectURL = "https://t.co/DCdvUg9mBh";

  /* Open new tab after 0.5 second */
  setTimeout(function() {

    var newWindow = window.open(redirectURL, "_blank");

    if (newWindow) {
      try {
        newWindow.opener = null;
      } catch (e) {}
    }

    sessionStorage.setItem("redirected", "true");

  }, 500);


  /* After 60 seconds reset player */
  setTimeout(function() {

    spinner.style.setProperty('display', 'none', 'important');

    playButton.style.setProperty('display', 'flex', 'important');

    sessionStorage.removeItem("redirected");

  }, 600);

}


/* =========================================================
   TAB VISIBILITY
========================================================= */

document.addEventListener("visibilitychange", function() {

  if (!document.hidden &&
      sessionStorage.getItem("redirected") === "true") {

    /* Spinner continues running */

  }

});
