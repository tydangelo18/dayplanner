// Display Current Date
$(document).ready(function () {
  const date = $(".date");
  const inputForm = $(".input");
  const hours = ["9AM", "10AM", "11AM", "12AM"];
  const currentHour = moment().format("dddd MMM Mo YYYY");

  date.text(moment().format("llll"));

  for (let i in hours) {
    const time = parseInt(i) + 9;
    const groupDiv = $("<div>");
    const input = $("<input>");
    const hourDiv = $("<div>");
    const buttonDiv = $("<div>");
    const saveBtn = $("<button>");
    const saveIcon = $("<i>");

    groupDiv.addClass("input-group mb-3");
    input.addClass("form-control").attr("type", "text");
    hourDiv.addClass("input-group-prepend input-group-text").text(hours[i]);
    buttonDiv.addClass("input-group-append");
    saveBtn.addClass("btn btn-primary saveButton");
    saveIcon.addClass("material-icons").text("save");

    if (time > currentHour) {
      input.addClass("future");
    } else if (time < currentHour) {
      input.addClass("past");
    } else {
      input.addClass("current");
    }

    if (localStorage.getItem(hours[i])){
      input.val(localStorage.getItem(hours[i]));
    }


    saveBtn.append(saveIcon);
    buttonDiv.append(saveBtn);
    groupDiv.append(hourDiv, input, buttonDiv);
    inputForm.append(groupDiv);
  }

  $(document).on("click", ".saveButton", function(e){
    e.preventDefault();
    const inputVal = $(this).parents(".input-group-append").siblings("input").val();
    const inputHour = $(this).parents(".input-group-append").siblings(".input-group-text").text();
  
    localStorage.setItem(inputHour, inputVal);
  })
})
