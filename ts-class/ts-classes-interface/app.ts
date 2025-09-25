type color = 'white' | 'black'

interface IPiece {
    move(file: string, rank: number): void
    getPosition(): {file:string, rank: number}
}

class Piece implements IPiece{
    color: color
    protected position: {file: string, rank: number}
    name: string

    constructor(color: color, name: string, file: string, rank: number,){
        this.color = color
        this.name = name
        this.position = {file, rank}
    }

    move(file: string, rank:number): void{
        console.log(`Piece position ${file}${rank}`)
    }

    getPosition(): {file: string, rank: number}{
        return this.position
    }
}

class Pawn extends Piece{
    constructor(color: color, file: string, rank: number){
        super(color, "Pawn", file, rank)
    }
    
    move(file: string, rank: number): this{
        this.position = { file, rank }
        console.log(`Pawn moves forward to ${file}${rank}`)
        return this
    }
}

class Knight extends Piece{
    constructor(color: color, file: string, rank: number){
        super(color, "Knight", file, rank)
    }
    
    move(file: string, rank: number): this{
        this.position = { file, rank }
        console.log(`Knight jumps to ${file}${rank}`)
        return this
    }
}

class Bishop extends Piece{
    constructor(color: color, file: string, rank: number){
        super(color,"Bishop", file, rank)
    }
    
    move(file: string, rank: number): this{
        this.position = { file, rank }
        console.log(`Bishop moves diagonally to ${file}${rank}`)
        return this
    }
}

class Board {
    private piece: Piece[] = []


    addPiece(piece: Piece): void{
        this.piece.push(piece)
        const { file, rank} = piece.getPosition()
        console.log(`${piece.color} ${piece.name} placed at ${file}${rank}`)
    }

    displayPieces(): void{
        this.piece.forEach(piece => {
            const { file, rank } = piece.getPosition()
            console.log(`${piece.color} ${piece.name} is at ${file}${rank}`)
        })
    }
}

const board = new Board()

const whitePawn = new Pawn('white', 'e', 2)
const blackKnight = new Knight('black', 'g', 8)
const whiteBishop = new Bishop('white', 'c', 1)
const blackBishop = new Bishop('black', 'f', 8)

board.addPiece(whitePawn)
board.addPiece(blackKnight)
board.addPiece(whiteBishop)
board.addPiece(blackBishop)

whitePawn.move('e', 4)
blackKnight.move('f', 6)
whiteBishop.move('e', 3)
blackBishop.move('h', 6)

board.displayPieces()