//Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectld: "",
    storageBucket: "",
    messagingSenderId: ""

};

firebase.intializeA;; (config);

//Create variable to reference the database

var database = firebase.database();

//Run Time

setInterval(function (startTime) {
    $("#time").html(moment().format('hh:mm a'))
}, 1000);

// Capture Button Click
$("#add-train").on("click", function () {
    // Don't refresh the page!
    event.preventDefault();

    // Code in the logic for storing and retrieving the most recent train information
    var train = $("#trainname-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var firstTime = $("#firsttime-input").val().trim();

    // Don't forget to provide initial data to your Firebase database. - set replaces old data
    //if you want to add more users than just the latest one, then use push
    //database.ref().set({
    var trainInfo = {
        formtrain: train,
        formdestination: destination,
        formfrequency: frequency,
        formfirsttime: firstTime,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };
    //this is added so we can get most resent user so we can get most recent user to brower and to do this we need to change the listener  
    database.ref().push(trainInfo);

    console.log(trainInfo.formtrain);
    console.log(trainInfo.formdestination);
    console.log(trainInfo.formfrequency);
    console.log(trainInfo.formfirsttime);
    console.log(trainInfo.dateAdded);

    // alert("Train was successfully added");

    // Clears all of the text-boxes
    $("#trainname-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#firsttime-input").val("");

});

