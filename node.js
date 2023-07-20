let userName = prompt('What is your name?');
while (parseInt(userName) || !userName) {
    userName = prompt('Name should not include NUMBERS, Please Enter your name.');
}
let deposit = prompt(`Welcome ${userName.toUpperCase()}, how much would you like to Deposit?`);
while (deposit < 100 || !parseInt(deposit)) {
    if (parseInt(deposit) < 100) {
        deposit = prompt('Sorry ${userName.toUpperCase()}, You have to deposit amount higer than a $100');
    } else {
        deposit = prompt('You entered an INVALID AMOUNT, Please enter a valid Amount.')
    }
}
let stake = prompt('How much would you like to stake?');
console.log(stake)
while (!parseInt(stake) || !(stake > 20)) {
    if (!parseInt(stake)) {
        stake = prompt('You entered an INVALID AMOUNT, Please enter a valid Amount.')
    } else {
        stake = prompt('You CANNOT stake less than $20, Please enter Amount greater than $20.')
    }
}
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")  
let cardsEl = document.querySelector("#cards-el")
let welcomeEl = document.getElementById("welcome-el")
let chipsEl = document.querySelector(".chips-el")
let sum = 0
welcomeEl.textContent = "Welcome, " + userName + "."
chipsEl.textContent = `BALANCE; $${deposit - stake}`
let button = document.querySelector("#button")

if (deposit - stake > 0) {
    button.setAttribute('onclick', 'startGame()')
    button.textContent = 'STARTGAME'
} else {
    stake = prompt('Your stake is more than you deposited amount, Please Stake a lesser am0unt');
}
while (!(sum === 21)) {
    if (sum < 21) {
        button.setAttribute('onclick', 'newGame()')
        button.textContent = 'NEWGAME'
    }

}


deposit -= stake
function startGame() {
    // isAlive = true
    // hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    sumEl.textContent = `Sum; ${sum}`
    renderGame()
    console.log(`${firstCard}, ${secondCard}`)
}
function getRandomCard () {
    let returnNumber = Math.floor(Math.random() * 13 + 1)
    if (returnNumber > 10) {
        return 10
    } else if (returnNumber === 1) {
        return 11
    } else {
        return returnNumber
    }
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}
function newCard () {
    // console.log("drawing a new card from the deck")
    let extraCard = getRandonCard ()
    console.log(extraCard)
    cards.push(extraCard) // to add extraCard to te cards array
    sum += extraCard
    renderGame()
}