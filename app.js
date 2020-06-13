$(document).ready(function () {
  const $date = $(".date");
  const $inputsForm = $(".inputs");
  // Hours Array
  const hours = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  // moment.js
  const currentH = moment().format("H");

  $date.text(moment().format("llll"));

  // insert HTML elements for each hour 9-5
  for (let i in hours) {
    const iTime = parseInt(i) + 9;
    const $inputGroupDiv = $("<div>");
    const $input = $("<input>");
    const $hourDiv = $("<div>");
    const $buttonDiv = $("<div>");
    const $saveBtn = $("<button>");
    const $saveIcon = $("<i>");

    $inputGroupDiv.addClass("input-group mb-3");
    $input.addClass("form-control").attr("type", "text");
    $hourDiv.addClass("input-group-prepend input-group-text").text(hours[i]);
    $buttonDiv.addClass("input-group-append");
    $saveBtn.addClass("btn btn-primary saveButton");
    $saveIcon.addClass("material-icons").text("save");

    if (iTime > currentH) {
      $input.addClass("future");
    } else if (iTime < currentH) {
      $input.addClass("past");
    } else {
      $input.addClass("current");
    }

    // Locally store each hour
    if (localStorage.getItem(hours[i])) {
      $input.val(localStorage.getItem(hours[i]));
    }

    $saveBtn.append($saveIcon);
    $buttonDiv.append($saveBtn);
    $inputGroupDiv.append($hourDiv, $input, $buttonDiv);
    $inputsForm.append($inputGroupDiv);
  }

  $(document).on("click", ".saveButton", function (e) {
    e.preventDefault();
    const inputVal = $(this)
      .parents(".input-group-append")
      .siblings("input")
      .val();
    const inputHour = $(this)
      .parents(".input-group-append")
      .siblings(".input-group-text")
      .text();

    localStorage.setItem(inputHour, inputVal);
  });
});
