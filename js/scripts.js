function Task(taskName) {
    this.taskName = taskName;
}

// Task.prototype.strike = function() {
//   return this.locationName + ", " + this.landmarkName + ", " + this.timeYearName;
// }

$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var newTask = new Task(inputtedTask);

    $("ul#task").append("<li><span class='task'>" + newTask.taskName + "</span></li>");

    $(".task").click(function() {
      $(this).parents("li").css("text-decoration", "line-through");
    });

    $(".task").dblclick(function() {
      $(this).parents("li").css("display", "none");
    });

  });
});
