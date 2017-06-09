$(document).ready(function() {
  $("#afterSubmission").hide();

  $("#pictureButton").click(function() {
    $("#submission").hide();
    $("#afterSubmission").show();

  });
  $("#pictureButtonReset").click(function() {
    $("#afterSubmission").hide();
    $("#submission").show();

  });

  var sayCheese = new SayCheese('#videoRow', {
    snapshots: true
  });

  sayCheese.on('start', function() {
    // do something when started
    sayCheese.start();
    this.takeSnapshot();
  });

  sayCheese.on('error', function(error) {
    // handle errors, such as when a user denies the request to use the webcam,
    // or when the getUserMedia API isn't supported
  });

  sayCheese.on('snapshot', function(snapshot) {
    // do something with a snapshot canvas element, when taken
  });

  sayCheese.start();




});
