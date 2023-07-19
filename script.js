// const inputName = prompt('What is your Name?')
let player = {
    names: prompt('What is your Name?'),
    chips: 2519 
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")  
let cardsEl = document.querySelector("#cards-el")
let welcomeEl = document.getElementById("welcome-el")
let chipsEl = document.querySelector(".chips-el")

welcomeEl.textContent = "Welcome, " + player.names + "."
chipsEl.textContent = "Amount; $" + player.chips
console.log(chipsEl)
// console.log(cardsEl)

 function getRandonCard () {
    let returnNumber = Math.floor(Math.random() * 13 + 1)
    if (returnNumber > 10) {
        return 10
    } else if (returnNumber === 1) {
        return 11
    } else {
        return returnNumber
    }
 }

// for (let count = 10; count <= 100; count += 10) {
//     console.log(count)
// }

function startGame() {

    isAlive = true
    hasBlackJack = false
    let firstCard = getRandonCard ()
    let secondCard = getRandonCard ()

    cards = [firstCard, secondCard] // arrays

    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    // cardsEl.textContent = "Card: " + firstCard + ", " + secondCard
        
        cardsEl.textContent = "Cards: "

        for (let i = 0; i < cards.length; i++) {

            cardsEl.textContent += cards[i] + " "
        }





        sumEl.textContent = "Sum: " + sum
        // if (sum < 20) >>>>>> comparison operator {
        //     message = "Do you want to draw a new card?"
        // } else  if (sum > 21) {
        //     message = "Ooops!!, You're out of the game, Click START GAME try again"
        //     isAlive = false
        // }  else  if (sum === 20) {
        //     message = "Ooops!!, You're out of the game, Click START GAME try again"
        //     isAlive = false
        // } else {
        //     message = "Wohoo, You've got Blackjack"
        //     hasBlackJack = true
        // }
        if (sum < 20) {
            message = "Do you want to draw a new card?"
            isAlive = true
        } else  if (sum > 21 || sum === 20) {
            message = "Ooops!!, You're out of the game, Click START GAME try again"
            isAlive = false
        }  else {
            message = "Wohoo, You've got Blackjack"
            hasBlackJack = true
            isAlive = false
        }
        
    messageEl.textContent = message
}

// || >>>> for either or
//  && >>>>> for and

function newCard () {
    // console.log("drawing a new card from the deck")

    if (isAlive === true && hasBlackJack === false) {
        let extraCard = getRandonCard ()
        console.log(extraCard)
        cards.push(extraCard) // to add extraCard to te cards array
        sum += extraCard
        renderGame()
    }
    
}
// Math.random() gives random numbers between 0 and 1

let randomNumber1 = Math.random()
console.log(randomNumber1)

let randomNumber2 = Math.random() * 6
console.log(randomNumber2)

// Math.floor removes decimal from numbers

let flooredNumber1 = Math.floor(3.45637)
console.log(flooredNumber1)

// let flooredNumber2 = Math.floor(7.856)
// console.log(flooredNumber2)

let randomNumber3 =  Math.floor(Math.random() * 6 + 1)
console.log(randomNumber3)

// console.log(firstCard)
// console.log(secondCard)
// console.log(extraCard) >>>>>>> it won't log out cos extraCard is enclosed in a function
// for (let n = 0; n < 10; n++) {

//     console.log(n)
// }  for loop>>> used to list out all elements in an array
