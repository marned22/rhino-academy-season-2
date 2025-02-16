export type Card = {
    id: number;
    value: string;
    isFlipped: boolean;
    matched: boolean;
}

export type GameElements = {
    board: HTMLElement,
    newGameButton: HTMLElement | null;
}

export type FlippedCards = [Card, Card] 