import { data } from "./data.js";
import { shuffleArray, sleep } from "./helpers.js";
import { Card, FlippedCards, GameElements, GameState } from "./types.js";

export class MemoryGame {
  private cards: Card[];
  private gameElements: GameElements;
  private flippedCards: FlippedCards;
  private gameState: GameState;

  constructor(gameElements: GameElements) {
    this.cards = [];
    this.gameElements = gameElements;
    this.flippedCards = [] as unknown as FlippedCards;
    this.gameState = GameState.NotStarted;
  }

  init() {
    if (this.gameElements.newGameButton !== null)
      this.gameElements.newGameButton.addEventListener("click", () =>
        this.startGame()
      );
  }

  private startGame() {
    this.gameState = GameState.Playing;
    this.cards = shuffleArray(
      [...data, ...data].map((c) => ({
        id: c.id,
        value: c.value,
        isFlipped: false,
        matched: false,
      }))
    );
    console.log(this.cards);
    this.createBoard();
  }

  private createBoard() {
    this.gameElements.board.innerHTML = "";
    this.cards.forEach((card) => {
      const cardElement = document.createElement("div");
      const cardFrontElement = document.createElement("div");
      const cardBackElement = document.createElement("div");

      cardElement.classList.add("card");
      cardFrontElement.classList.add("front");
      cardBackElement.classList.add("back", "bi", "bi-question-circle");

      cardElement.appendChild(cardFrontElement);
      cardElement.appendChild(cardBackElement);
      cardElement.addEventListener("click", (e) =>
        this.handleCardClick(card, e)
      );

      this.gameElements.board.appendChild(cardElement);
    });
  }

  private handleCardClick(card: Card, event: MouseEvent) {
    const cardElement = event.currentTarget as HTMLElement;
    cardElement.classList.add("flipped");
    cardElement.querySelector(".front")?.classList.add("bi", card.value);
    card.isFlipped = true

    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.check();
    }
    console.log(this.check())
  }

  private async check() {
    this.gameState = GameState.Pending;
    const [card1, card2] = this.flippedCards;

    //logic to compare the values
    if (card1.value === card2.value) {
      card1.matched = true;
      card2.matched = true;
    } else {
      await sleep(1000);
      const cardElements = this.gameElements.board.querySelectorAll(".card");
      cardElements.forEach((element) => {
        if (element.classList.contains("flipped")) {
          element.classList.remove("flipped");
          element
            .querySelector(".front")
            ?.classList.remove("bi", card1.value, card2.value);
        }
      });
    }

    this.flippedCards = [
      { id: 0, value: "", isFlipped: false, matched: false },
      { id: 0, value: "", isFlipped: false, matched: false },
    ];

    this.gameState = GameState.Playing;

    this.gameOver();
  }

  private gameOver() {
    if (this.cards.every((card) => card.matched === true)) {
      this.gameState = GameState.Won;
      console.log("You won");
    }
  }
}
