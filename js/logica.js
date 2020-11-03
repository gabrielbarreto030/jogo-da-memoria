

let game = {
    lockMode:false,
    firstCard:null,
    secondCard:null,
    techs: ["bootstrap", "css", "firebase", "flutter", "html", "jquery", "js", "mongodb", "node", "react"],
    cards: null,
    setCard:function(id){
        var cardSelect= this.cards.filter(c=>c.id==id)[0]        
        if(this.lockMode || cardSelect.flipped){
          
            return false;
        }
        if(!this.firstCard){        
            this.firstCard=cardSelect
            this.firstCard.flipped=true          
            return true;
        }else{
       
            this.secondCard=cardSelect
            this.lockMode=true
            this.secondCard.flipped=true           
            return true
        }

    },
    gameOver:function(){
        return this.cards.filter(card=> card.flipped==false).length==0
    }
    ,
    checkEquals:function(){
        return this.firstCard.card===this.secondCard.card
    },
    untapCard:function(){
       this.firstCard.flipped=false
       this.secondCard.flipped=false
       this.clearCards()
    },
    clearCards: function(){   
       this.firstCard=null
       this.secondCard=null
       this.lockMode=null
    },
    createID: function (tech) {
        return tech + parseInt(Math.random() * 100)
    },
    createCard: function (tech) {
        return [{
            id: this.createID(tech),
            card: tech,
            flipped: false
        },
        {
            id: this.createID(tech),
            card: tech,
            flipped: false
        },
        ]
    },
    createCards: function () {
        this.cards = []
        this.techs.forEach((tech) => {
            this.cards.push(this.createCard(tech))
        });
        this.cards= this.cards.flatMap((flat) => flat)
        this.muddleCards()
        return this.cards
    },
    muddleCards:function (){
        let currentIndex= this.cards.length
        let randomIndex=0
        while(currentIndex!==0){
            randomIndex=Math.floor(Math.random()*currentIndex)
            currentIndex--
            [this.cards[randomIndex],this.cards[currentIndex]]=[this.cards[currentIndex],this.cards[randomIndex]]
        }
   }
   



}