import { data } from "./data.js";
import { shuffleArray } from "./helpers.js";
import { Card, FlippedCards, GameElements } from "./types.js";

export class MemoryGame{
    private cards: Card[];
    private gameElements: GameElements;
    private flippedCards: FlippedCards

    constructor(gameElements: GameElements){
        this.cards = [];
        this.gameElements = gameElements
        this.flippedCards = [] as unknown as FlippedCards
    }

    init(){
        if(this.gameElements.newGameButton) this.gameElements.newGameButton.addEventListener('click',() => this.startGame())
    }
    
    private startGame(){
        this.cards = shuffleArray([...data, ...data].map((c) => ({ id: c.id, value: c.value, isFlipped: false, matched: false})))
        console.log(this.cards);
        this.createBoard()
    }

    private createBoard(){
        this.gameElements.board.innerHTML = ''
        for(const card of this.cards){
            const cardElement = document.createElement('div');
            const cardFrontElement = document.createElement('div');
            const cardBackElement = document.createElement('div');

            cardElement.classList.add('card')
            cardFrontElement.classList.add('front')
            cardBackElement.classList.add('back','bi', 'bi-question-circle')

            cardElement.appendChild(cardFrontElement)
            cardElement.appendChild(cardBackElement)
            cardElement.addEventListener('click', (e) => this.handleCardClick(card, e))

            this.gameElements.board.appendChild(cardElement)
        }
    }

    private handleCardClick(card: Card, event: MouseEvent){
        const cardElement = event.currentTarget as HTMLElement
        cardElement.classList.add('flipped');
        cardElement.querySelector('.front')?.classList.add('bi', card.value)

        this.flippedCards.push(card)

        if(this.flippedCards.length === 2) this.check()
    }

    private check(){
        const [card1, card2] = this.flippedCards;

        //logic to compare the values
        if(card1.value === card2.value){
            console.log('they match');
            //set the propery matched to true on both of the cards
        } else {
            //reset the classes , remove flipped clas
        }
    }

    private gameOver() {
        //implement thec if all cards have the match: true value
    }
}