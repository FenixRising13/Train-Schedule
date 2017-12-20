
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCsxIQN5h5BQDVtHExEKyzGoJM0qILiDtI",
  authDomain: "train-schedule-96151.firebaseapp.com",
  databaseURL: "https://train-schedule-96151.firebaseio.com",
  projectId: "train-schedule-96151",
  storageBucket: "train-schedule-96151.appspot.com",
  messagingSenderId: "902832211257"
};
firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();

// Creates variables for our data
var trainName;
var destination;
var frequency;
var nextArrival;

// This is the click function for the form
$("#submit").on("click", function (event) {

  event.preventDefault();

  console.log("Submit was clicked")
  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  frequency = $("#frequency").val().trim();
  nextArrival = $("#nextArrival").val().trim();

  // console log data values for debugging
  console.log(trainName);
  console.log(destination);
  console.log(frequency);
  console.log(nextArrival);

  // Create object newTrain and store variable inside object.
  newTrain = {
    trainName: trainName,
    destination: destination,
    frequency: frequency,
    nextArrival: nextArrival,
  }

  // Push newTrain object to db
  database.ref().push(newTrain);

  trainName = $("#trainName").val("");
  destination = $("#destination").val("");
  frequency = $("#frequency").val("");
  nextArrival = $("#nextArrival").val("");

})

database.ref().on("child_added", function (childSnap) {
// Appends new table data into the HTML. Yay!
  var newRow = $("<tr>");
  newRow.append("<td>" + childSnap.val().trainName + "</td>");
  newRow.append("<td>" + childSnap.val().destination + "</td>");
  newRow.append("<td>" + childSnap.val().frequency + "</td>");
  newRow.append("<td>" + childSnap.val().nextArrival + "</td>");
  newRow.append("<td>" + "" + "</td>"); //Minutes Away
  $("tbody").append(newRow);
})
