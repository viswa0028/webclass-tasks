let books = [
    { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", cost: 450 },
    { title: "The Story of My Experiments with Truth", author: "Mahatma Gandhi", cost: 600 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", cost: 550 },
    { title: "The Alchemist", author: "Paulo Coelho", cost: 400 }
];
// a. Display books whose cost is > 500
console.log("Books with cost greater than 500:");
books.forEach(book => {
    if (book.cost > 500) {
        console.log(book.title, "- Rs.", book.cost);
    }
});
// b. Display the book whose author is “Mahatma Gandhi”
let gandhiBook = books.find(book => book.author === "Mahatma Gandhi");
if (gandhiBook) {
    console.log("\nBook written by Mahatma Gandhi:", gandhiBook.title);
} else {
    console.log("\nNo book found by Mahatma Gandhi");
}
