// firebase and api key needed 
var firebaseConfig = {
    apiKey: "AIzaSyBsefHc-Q1bYWUYZod-tZk_gSoqX5fFN9Q",
    authDomain: "train-time-476fa.firebaseapp.com",
    databaseURL: "https://train-time-476fa.firebaseio.com",
    projectId: "train-time-476fa",
    storageBucket: "train-time-476fa.appspot.com",
    messagingSenderId: "363232870712",
    appId: "1:363232870712:web:fa0b0917d3528db4"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  $("#train-btn").on("click", function(event){
      event.preventDefault();
        console.log("click");
      var trainName = $("#train-name-input").val().trim();
      var trainDestination= $("#destination-input").val().trim();
      var trainFirst= $("#first-input").val().trim();
      var trainFreq= $("#frequency-input").val().trim();
      
      var newTrain = {
        name: trainName,
        destination: trainDestination,
        firstTrain: trainFirst,
        frequency: trainFreq,
      };

      database.ref().push(newTrain);

      console.log(trainDestination);
    //clear the date 
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#first-input").val();
      $("#frequency-input").val("");
  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    var frequency = childSnapshot.val().frequency

    var firstTrain =childSnapshot.val().firstTrain
    // var arrivalTime= this where Im gonna do mathtime
    // var minutesToArrival =math to do the mins to arrival
    var row = $("<tr>");
    var nameTd =$("<td>").text(childSnapshot.val().name);
    var destinationTd =$("<td>").text(childSnapshot.val().destination);
    // var minutesTd =$("<td>").text(minutesToArrival);
    var frequencyTd =$("<td>").text(frequency);
    // var arrivalTd =$("<td>").text(arrivalTime);

    row.append(nameTD, destinationTD, frequencyTD);


    

    // var trainName = childSnapshot.val().name;

    // console.log(trainName);

  });

