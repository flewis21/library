function userClass() {
  var cCalId = Classroom.Courses.list().courses;
  for (var iC = 0; iC < cCalId.length; iC++) {
    var cJSON = cCalId[iC];
    console.log(cJSON["id"]);
    console.log(cJSON["room"]);
  }
}
