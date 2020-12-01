var FRONT = "front-card"
var BACK = "back-card"
start()
function start() {
    initBoard(game.createCards())
}

function initBoard(cards) {
    var Board = document.getElementById("tabuleiro")
    Board.innerHTML=""
    cards.forEach((card) => {
        var cardElement = document.createElement("div")
        cardElement.id = card.id
        cardElement.dataset.id = card.card
        cardElement.classList.add("card")
        createContentCard(card, cardElement)
        cardElement.addEventListener("click", flipCard)
        Board.appendChild(cardElement)
    })
}


function createContentCard(card, cardElement) {
    createContent(FRONT, card, cardElement)
    createContent(BACK, card, cardElement)
}

function createContent(face, card, cardElement) {
    var faceElemet = document.createElement("div")
    faceElemet.classList.add(face)
    if (face === FRONT) {
        
        var img = document.createElement("img")
        img.src = "./assets/" + card.card + ".png"
        faceElemet.appendChild(img)
        
    } else {       
      
          faceElemet.innerHTML= "&lt/&gt;"
    }
    cardElement.appendChild(faceElemet)
}
function flipCard(e) {
    if (game.setCard(this.id)) {
        this.classList.add("flip")
        if(game.secondCard!=null){
        if(game.checkEquals()){           
            game.clearCards()
            if(game.gameOver()){
                let tela=document.getElementById("Gameover")
                tela.style.display="flex"
            }
        }else{           
            setTimeout(()=>{
                let firstCardElement=document.getElementById(game.firstCard.id)
                let secondCardElement=document.getElementById(game.secondCard.id)
                firstCardElement.classList.remove("flip")
                secondCardElement.classList.remove("flip")
                game.untapCard()
            },1000)
           
        }
    }
    }

}
function restart(){
    game.clearCards()
    start()
    let tela=document.getElementById("Gameover")
    tela.style.display="none"

}