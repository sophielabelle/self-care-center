// Variables
var radioBtns = document.querySelector('.radio-button')
var affirmBtn = document.querySelector('#radio1');
var mantraBtn = document.querySelector('#radio2');
var recieveMessageBtn = document.querySelector('#recieve-btn');
var meditateImg = document.querySelector('.meditate-img')

var message = document.querySelector('#view-message');
// Event Listener

recieveMessageBtn.addEventListener('click', displayMessage());


// Functions----------------------------------
// show message in 2nd box when button is clicked and removes the meditation image from box
function displayMessage() {
    show(message);
    hide(meditateImg);
    if (affirmBtn.checked == true){
        message.innerText = randomMessage(affirmations);
    } else if (mantraBtn.checked == true) {
        message.innerText = randomMessage(mantras);
    };
};

function show(element) {
    element.classList.remove('hidden')
};

function hide(element) {
    element.classList.add('hidden')
};

function randomMessage(array) {
    return Math.floor(math.random() * array.length);
};