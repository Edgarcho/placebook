//business logic
function Location(name, landmark, note, date) {
  this.placeName = name;
  this.placeMark = landmark;
  this.placeNote = note;
  this.placeDate = date;
}

// user interface logic
$(document).ready(function() {
  $("form#location").submit(function(event) {
    event.preventDefault();

    var inputLocation = $("input#new-location").val();
    var inputLandmark = $("input#new-landmark").val();
    var inputNote = $("input#new-note").val();
    var inputDate = $("#new-date").val();

    var newLocation = new Location(inputLocation, inputLandmark, inputNote, inputDate);

    $("ul#destination").append("<li><span class='location'>" + newLocation.placeName + "</span></li>");

    $(".location").last().click(function() {
      $("#show-location").toggle();
      $("#show-location h2").text(newLocation.placeName);
      $(".place-mark").text(newLocation.placeMark);
      $(".place-note").text(newLocation.placeNote);
      $(".place-date").text(newLocation.placeDate);
    });

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-note").val("");
    $("#new-date").val("")
  });
});
