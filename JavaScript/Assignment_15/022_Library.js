class Book {
constructor(title) {
this.title = title;
}
}
class Member {
issueBook(book) {
console.log("Issued:", book.title);
}
returnBook(book) {
console.log("Returned:", book.title);
}
}

let m = new Member("The Sceret");
m.issueBook();