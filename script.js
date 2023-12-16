// // Import the ChatGPT API library
// const chatGPT = require('chatgpt-api');

// // Initialize the ChatGPT API
// const api = new chatGPT.Api('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');

// // Function to handle user input
// function handleInput(input) {
//  // Send the input to the ChatGPT API
//  api.query(input, (response) => {
//      // Display the response in the chatbot interface
//      displayResponse(response);
//  });
// }

// // Function to display the chatbot's response
// function displayResponse(response) {
//  // Get the chat area element
//  const chatArea = document.getElementById('chat-area');

//  // Create a new div for the chatbot's response
//  const chatbotDiv = document.createElement('div');
//  chatbotDiv.classList.add('box');
//  chatbotDiv.classList.add('answer');
//  chatbotDiv.textContent = response;

//  // Append the chatbot's response to the chat area
//  chatArea.appendChild(chatbotDiv);
// }

// // Function to handle the submit button click
// function handleSubmitClick() {
//  // Get the input field
//  const inputField = document.getElementById('input');

//  // Get the user's input
//  const userInput = inputField.value;

//  // Handle the user's input
//  handleInput(userInput);

//  // Clear the input field
//  inputField.value = '';
// }

// // Get the submit button
// const submitButton = document.getElementById('btn');

// // Add an event listener for the submit button click
// submitButton.addEventListener('click', handleSubmitClick);
if(document.getElementById('refreshButton') != null){

    document.getElementById('refreshButton').addEventListener('click', function() {
        var img = document.getElementById('dynamicImage');
        img.src = 'https://thispersondoesnotexist.com/?' + Date.now();
    });
}

   var isChildrenDisplayed = true;

   if(document.getElementById('switchButton') != null){
       document.getElementById('switchButton').addEventListener('click', function() {
         var p4children = document.getElementById('p4children');
         var p4adults = document.getElementById('p4adults');
         var switchButton = document.getElementById('switchButton');
       
         if (isChildrenDisplayed) {
             p4children.style.display = 'none';
             p4adults.style.display = 'block';
             switchButton.textContent = 'Kids Explanation';
         } else {
             p4children.style.display = 'block';
             p4adults.style.display = 'none';
             switchButton.textContent = 'Adults Explanation';
         }
       
         isChildrenDisplayed = !isChildrenDisplayed;
       });
   }
   
 
 //Fadeout when link is clicked

 document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function() {
      document.body.classList.add('fadeOut');
    });
   });
   
//Start button
if (document.getElementById('startButton') != null){
    document.getElementById('startButton').addEventListener('click', function() {
        setTimeout(function() {
            window.scrollTo(0, document.body.scrollHeight);
            document.getElementById('startButton').style.display = "none";
        }, 5000);
    });
}
    
  
  // GEOLOCATION???

  function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
 
    mapLink.href = "";
    mapLink.textContent = "";
 
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
 
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
 
      // Update the map with the user's location
      updateMap(latitude, longitude);
    }
 
    function error() {
      status.textContent = "Unable to retrieve your location";
    }
 
    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
 

  document.querySelector("#find-me").addEventListener("click", geoFindMe);

  function updateMap(latitude, longitude) {
    map.setCenter({ lat: latitude, lng: longitude });
  }
 


  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    updateMap(latitude, longitude);
  }

