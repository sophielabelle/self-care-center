// Variables
var mainView = document.querySelector('#main-page')
var message = document.querySelector('#message-view')
var meditateImg = document.querySelector('.meditate-img')

var savedView = document.querySelector('#saved-page')
var showAllSaved = document.querySelector('#saved-favs')
var favoriteMessages = []

var affirmBtn = document.querySelector('#radio1')
var mantraBtn = document.querySelector('#radio2')
var receiveMessageBtn = document.querySelector('#receive-btn')
var addFavorieBtn = document.querySelector('#favorite-btn')
var favesViewBtn = document.querySelector('#fave-view-btn')
var homeBtn = document.querySelector('#home-button')

// Event Listener-----------------------------
receiveMessageBtn.addEventListener('click', displayMessage)
addFavorieBtn.addEventListener('click', addToFavorites)
favesViewBtn.addEventListener('click', showSavedView)
homeBtn.addEventListener('click', showHomeView)
savedView.addEventListener('click', deleteSavedMessage)

// Functions----------------------------------
function displayMessage() {
    if(affirmBtn.checked) {
        message.innerText = `${affirmations[randomMessage(affirmations)]}`
        show(addFavorieBtn)
        hide(meditateImg)
    } else if (mantraBtn.checked) {
        message.innerText = `${mantras[randomMessage(mantras)]}`
        show(addFavorieBtn)
        hide(meditateImg)
    } else {
        alert('✨Please select Affirmation or Mantra✨')
    }
}

function addToFavorites() {
    if(!favoriteMessages.includes(message.innerText)) {
        favoriteMessages.push(message.innerText)
        hide(addFavorieBtn)
    } else {
        alert('This message has already been saved!')
    }
}

function showSavedView() {
    show(savedView)
    hide(mainView)
    for (var i = 0; i < favoriteMessages.length; i++) {
        showAllSaved.innerHTML += `<div class="faves">
        <p id="${i}">${favoriteMessages[i]}</p>
        <button class="delete-btn" id="${i}">💙</button></div>`
    }
}
 
function deleteSavedMessage(e) {
    if(e.target.className === 'delete-btn' ) {
        favoriteMessages.splice(this.id, 1)
        e.target.parentNode.remove()
    }
}

function showHomeView() {
    show(mainView)
    hide(savedView)
    showAllSaved.innerHTML = ""
}

// Helper Functions ------------------------------------------
function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}

function randomMessage(array) {
    return Math.floor(Math.random() * array.length)
}