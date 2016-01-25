describe ('toDoList', function() {
  it("adds a task that the user inputs", function() {
    var testTask = new Task("Do the Dishes");
    expect(testTask.taskName).to.equal("Do the Dishes");
  });

  it("adds a strikethrough that appears when the user clicks on the task", function() {
    var str = "Do the Dishes"
    var testStrike = new Task(str.strike());
    expect(testStrike.str).to.equal(str.strike());
  });

});
