<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
<script>
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
</script>

  // Create a variable to reference the database
  var database = firebase.database();