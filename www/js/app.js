// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


//CALCULATOR
function convert(degree) {
    var x;
    if (degree == "C") {
		//calculation
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
		//session storage for fahrenheit
		sessionStorage.setItem("fahrenheit", $("#f").val());
    } else {
		//calculation
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
		//session storage for celcius
		sessionStorage.setItem("celcius", $("#c").val());
    }
	
	//output session storage
	$("#conOutputF").text("Conversion Fahrenheit = " + sessionStorage.getItem("fahrenheit"));
	$("#conOutputC").text("Conversion Celcius = " + sessionStorage.getItem("celcius"));
	
	//creates date and time
	var dateTime = String(new Date()).substring(4,24);
	
	//input local storage
	localStorage.setItem(dateTime, sessionStorage.getItem("fahrenheit"));
	localStorage.setItem(dateTime, sessionStorage.getItem("celcius"));
}

//function for outputting local storage
function showConHistory(){
	var getDate = "";
	
	//$("#output").text("");
	
	for (var i = 0; i < localStorage.length; i++){
		getDate = getDate + "\n DATE: " + localStorage.key(i) + 
		" Celcius = " + localStorage.getItem(localStorage.key(i)) + " \n";
	}
	//outputs local storage + Date and time
	$("#textareaOutput").text(getDate);
	
}


//LOCATOR
//gets location by running gpsSuccess function
function getPosition() {
  navigator.geolocation.getCurrentPosition(gpsSuccess, onError);
}
//obtains location
function gpsSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
		
		$("#textareaLocator").text('Latitude: '          + position.coords.latitude          + '\n' +
									'Longitude: '         + position.coords.longitude         + '\n' +
									'Altitude: '          + position.coords.altitude          + '\n' +
									'Accuracy: '          + position.coords.accuracy          + '\n' +
									'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
									'Heading: '           + position.coords.heading           + '\n' +
									'Speed: '             + position.coords.speed             + '\n' +
									'Timestamp: '         + position.timestamp                + '\n');
		
}

// onError Callback receives a PositionError object
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


//CAMERA

//Adds event listener
document.addEventListener("deviceready", onDeviceReady, false);

//open camera function
function openCamera() {
  navigator.camera.getPicture(onSuccess, onFail, {});
}// open Camera

function onSuccess(cameraImage){
	//Gets camera image
	var image = document.getElementById('myImage');
	image.src = cameraImage;
}//onSuccess

//if camera fails
function onFail(message){
	alert('Failed because: ' + message);
}//onFail

//Sets image options - doesnt work
function setOptions(srcType) {
    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      correctOrientation:true
    }
    return options;
}

//gets image from photo gallery
function getPictureFromPhotoLibrary() {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onSuccess, onFail, { 
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    targetWidth: 400,
    targetHeight: 400});
}
