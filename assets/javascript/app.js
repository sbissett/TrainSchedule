//Initialize Firebase
var config = {
    apiKey:"",
    authDomain:"",
    databaseURL:"",
    projectld:"",
    storageBucket:"",
    messagingSenderId:""
    
};

firebase.intializeA;;(config);

//Create variable to reference the database

var database = firebase.database();

//Run Time

setInterval(function(startTime){
$("#time").html(moment().format('hh:mm a'))
},1000);

