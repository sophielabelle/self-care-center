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
savedView.addEventListener('dblclick', deleteSavedMessage)

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
        alert("✨Please select Affirmation or Mantra✨")
    }
}

function addToFavorites() {
    favoriteMessages.push(message.innerText)
    hide(addFavorieBtn)
}

function showSavedView() {
    show(savedView)
    hide(mainView)
    for (var i = 0; i < favoriteMessages.length; i++) {
        showAllSaved.innerHTML += `<p class="faves" id="${i}">${favoriteMessages[i]}</p>`
    }
}

function deleteSavedMessage() {
    var target = event.target
    for (var i = 0; i < favoriteMessages.length; i++) {
        if(favoriteMessages[i] === target.innerText) {
            favoriteMessages.splice(i, 1)
            target.remove()
        }
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