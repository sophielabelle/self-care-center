// Variables
var affirmBtn = document.querySelector('#radio1')
var mantraBtn = document.querySelector('#radio2')

var receiveMessageBtn = document.querySelector('#receive-btn');
var meditateImg = document.querySelector('.meditate-img')

var message = document.querySelector('#message-view');


// Event Listener
receiveMessageBtn.addEventListener('click', displayMessage);
// event listener for the fav button pressed 

// Functions----------------------------------

function displayMessage() {
    if(affirmBtn.checked) {
        message.innerHTML = affirmations[randomMessage(affirmations)]
    } else if (mantraBtn.checked) {
        message.innerHTML = mantras[randomMessage(mantras)];
    }
};


function randomMessage(array) {
    return Math.floor(Math.random() * array.length);
};