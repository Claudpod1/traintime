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
      var trainName = childSnapshot.val().name;
      var trainDestination = childSnapshot.val().trainDestination;
      var trainFirst= childSnapshot.val().firstTrain;
      var trainFreq= childSnapshot.val().frequency;

      console.log(trainDestination);
  

    var firstTimeCoverted = moment(trainFirst,"HH:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(firstTimeCoverted), "minutes");
    var tFrequency = trainFreq;
    var tRemainder = diffTime % tFrequency;
    var minutesToArrival = tFrequency -tRemainder;
    var arrivalTime = moment().add(minutesToArrival, "minutes");


    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainFreq),
        $("<td>").text(minutesToArrival),
        $("<td>").text(arrivalTime),
       
      );

      $("#train-table").append(newRow);
  });

