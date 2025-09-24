class Book{
    constructor(title, author, publishYear) {
        this.title = title;
        this.author = author;
        this.publishYear = publishYear
    }

    getDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Published year: ${this.publishYear}`);
    }
}

const Pirej = new Book('Pirej', 'Petre M. Andreevski', 1980)
const Crnila = new Book('Crnila', 'Kole Chashule', 1921)

Pirej.getDetails()
Crnila.getDetails()