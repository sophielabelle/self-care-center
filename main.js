// Variables
var radioBtns = document.querySelectorAll('input[name="radio"]')
var affirmBtn = document.querySelector('#radio1')
var mantraBtn = document.querySelector('#radio2')

var receiveMessageBtn = document.querySelector('#receive-btn');
var meditateImg = document.querySelector('.meditate-img')

var message = document.querySelector('#message-view');
// Event Listener
console.log(radioBtns)
receiveMessageBtn.addEventListener('click', displayMessage);


// Functions----------------------------------
// show message in 2nd box when button is clicked and removes the meditation image from box

function displayMessage() {
    for (var i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked == affirmBtn) {
            message.innerHTML = affirmations[randomMessage(affirmations)];
        } else {
            message.innerHTML = mantras[randomMessage(mantras)];
        };
    };
};

function randomMessage(array) {
    return Math.floor(Math.random() * array.length);
};