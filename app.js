// Display Current Date
(function () {
  let m = moment();

  let current = document.getElementById("displayDate");
  current.innerHTML = m.format("dddd MMM Mo YYYY");
})();

$(".save").on("click", function () {
  let m = $(this).parent().attr("placeholder");
  let textContent = $("input").val().trim();

  localStorage.setItem(m, textContent);
  console.log(m, textContent);
});

$("#9am").children("input").attr("placeholder", localStorage.getItem("9am"));
$("#10am").children("input").attr("placeholder", localStorage.getItem("10am"));
$("#11am").children("input").attr("placeholder", localStorage.getItem("11am"));
$("#12pm").children("input").attr("placeholder", localStorage.getItem("12pm"));
$("#1pm").children("input").attr("placeholder", localStorage.getItem("1pm"));
$("#2pm").children("input").attr("placeholder", localStorage.getItem("2pm"));
$("#3pm").children("input").attr("placeholder", localStorage.getItem("3pm"));
$("#4pm").children("input").attr("placeholder", localStorage.getItem("4pm"));
$("#5pm").children("input").attr("placeholder", localStorage.getItem("5pm"));
// need window.onload

const m = moment(); // moment object

console.log(m.format("dddd MMM Mo YYYY")); // .format uses a token found in moment.js documentation
