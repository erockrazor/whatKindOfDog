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


  $(function() {
    var sayCheese = new SayCheese('#videoRow', { audio: true });
    
    sayCheese.on('start', function() {
      this.takeSnapshot();
    });

    sayCheese.on('snapshot', function(snapshot) {
      // a snapshot has been taken, do something with it :)
    });

    sayCheese.start();
  });

});
