//Objects

//Activity 1: object creation and access
//Task 1:
const book={
    title : "Javascript",
    author : "Harshit",
    year : 2024,
    display : function(){
        return book.author + book.title;
    }
}
console.log(book);

//Task 2:
let author=book.author;
console.log(author);
let title=book["title"];
console.log(title);

//Activity 2: object method 
//Task 3:
console.log(book.display());

//Task 4:
book.updateYear= function(year){
    book.year=year;
}

book.updateYear(2025);
console.log(book);


//Activity 3: Nested objects
//Task 5:
const library={
    name: "programming",
    books: [{
        title: "java",
        author: "harry",
        year: 1999
    },
    {
        title: "Typescript",
        author: "striver",
        year: 2010
    }]
}
console.log(library.books[0].title);
console.log(library.books[1].title);

//Activity 4: this Keyword
//Task 7:
function print(){
    return `the title of the book is ${this.title} publeshed in year ${this.year}`
};

book.print=print;
console.log(book);
console.log(book.print());

library.books[0].print=print;
library.books[1].print=print;
console.log(library);
console.log(library.books[0].print());
console.log(library.books[1].print());

//Activity 5: Object iteration
//Task 8:
for(key in book){
    console.log(`${key} : ${book[key]}`);
}

//Task 9:
console.log(`Keys are ${Object.keys(book)}`);
console.log(`Value are ${Object.values(book)}`);





