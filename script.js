document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChosen = []
    var cardChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        // a for loop 
        for (let i = 0; i < cardArray.length; i++) {
            //creating img tag to insert image
            var card = document.createElement('img')
                //selecting the image 
            card.setAttribute('src', 'images/blank.png')
                //creating a unique id for each image using the loops position 
            card.setAttribute('data-id', i)
                //listening to a click
            card.addEventListener('click', flipCard)
                //adding the image to the div grid
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        //attaching the image tag to a variable
        var cards = document.querySelectorAll('img')
            //assigning cardchosenid to options constant
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if (optionOneId == optionTwoId) {
            //reflipping the open cards
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }
        //if cardChosen0 = cardchosen1 
        else if (cardChosen[0] === cardChosen[1]) {
            //window alert
            alert('You found a match')
                //changing the open cards to white images
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
                //removing flipcard event
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
                //adding the open cards to cardswon
            cardsWon.push(cardChosen)
        } else {
            //reflipping the open cards
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
                //window alert
            alert('sorry, try again')
        }
        //return cardchosen and cardchosenid to null
        cardChosen = []
        cardChosenId = []
            //adding the number of cards won to page
        resultDisplay.textContent = cardsWon.length
            //if length of cardds won = half of card array,
        if (cardsWon.length === cardArray.length / 2) {
            //display text 
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    //flip your card
    function flipCard() {
        //creating a card id using data-id created before 
        var cardId = this.getAttribute('data-id')
            //adding the name of the image from the cardarray using its card id to cardchosen list
        cardChosen.push(cardArray[cardId].name)
            //adding the card id to cardchosenid list
        cardChosenId.push(cardId)
            //selecting the corresponding image from card array
        this.setAttribute('src', cardArray[cardId].img)
            //if number of cards chosen = 2
        if (cardChosen.length === 2) {
            //check for match with a timeout
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})