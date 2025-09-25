import { MemoryGame } from "./game.js"
import { GameElements } from "./types.js"

const gameElements: GameElements = {
    board: document.querySelector('.board') as HTMLElement,
    newGameButton: document.querySelector('.new-game-button')
}


const game = new MemoryGame(gameElements)
game.init()