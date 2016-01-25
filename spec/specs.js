describe ('toDoList', function() {
  it("adds a task that the user inputs", function() {
    var testTask = new Task("Do the Dishes");
    expect(testTask.taskName).to.equal("Do the Dishes");
  });
});
