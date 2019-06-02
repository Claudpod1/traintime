// firebase and api key needed 
var firebaseConfig = {
    apiKey: "AIzaSyBnRpvC6Sq0POCyY3UNKTUItHP7-YzLkeU",
    authDomain: "test-project-8ecb1.firebaseapp.com",
    databaseURL: "https://test-project-8ecb1.firebaseio.com",
    projectId: "test-project-8ecb1",
    storageBucket: "test-project-8ecb1.appspot.com",
    messagingSenderId: "973484036922",
    appId: "1:973484036922:web:054c4987a9d2edd8"
  };

  firebaseConfig.initializeApp(firebaseConfig);
  var database = firebase.database();

  $("#train-btn").on("click", function(event){
      event.preventDefault();

      var trainName = $("#train-name-input").val().trim();
      var trainDestination= $("#designation-input").val().trim();
      var trainFirst= $("#first-input").val().trim();
      var trainFreq= ("#frequenct-input").val().trim();
      
      var newTrain = {
        name: trainName,
        designation: trainDestination,
        Train: trainFirst,
        frequency: trainFreq,
      };

      database.ref().push(newTrain.name);

      console.log(trainDestination);
    //clear the date 
      $("#train-name-input").val("");
      $("#designation-input").val("");
      $("#first-input").val();
      ("#frequenct-input").val("");

  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;

    console.log(trainName);
    


