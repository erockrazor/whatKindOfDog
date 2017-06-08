$(document).ready(function() {
  $("#afterSubmission").hide();



    // $("#submission").replaceWith('  "  <div id="submission">' +
    //   '<button type="button" id="pictureButton" class="btn btn-success center-block"><i class="fa fa-5x fa-camera" aria-hidden="true"></i></button></div>"');
  });


  (function() {
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getMedia(
      // constraints
      {
        video: true,
        audio: false
      },

      // success callback
      function(mediaStream) {
        var video = document.getElementsByTagName('video')[0];
        video.src = window.URL.createObjectURL(mediaStream);
        video.play();
      },
      //handle error
      function(error) {
        console.log(error);

        $("#pictureButton").click(function() {
          $("#submission").hide();
          video.pause();
          $("#afterSubmission").show();

        });
        $("#pictureButtonReset").click(function() {
          $("#afterSubmission").hide();
          $("#submission").show();
          video.play();
      });
  })();



});
