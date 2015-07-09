// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
var h1 = document.createElement('h1');
h1.innerText = "My Book List";

var body = document.getElementsByTagName('body')[0];
body.appendChild(h1);

// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
var Book = function(title, author, alreadyRead, image) {
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
  this.image = image;
}

books = [
  new Book("1984", "George Orwell", true, "https://flavorwire.files.wordpress.com/2011/06/georgeorwellxobeygiantprintset-1984coverbyshepardfairey.jpeg"),
  new Book("To Kill a Mockingbird", "Harper Lee", false, "http://ecx.images-amazon.com/images/I/51grMGCKivL._SY344_BO1,204,203,200_.jpg"),
  new Book("Lord of the Flies", "William Golding", false, "https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg"),
  new Book("Of Mice and Men", "John Steinbeck", true, "https://whatwillib.files.wordpress.com/2014/09/bookcover2.jpg"),
  new Book("Crime and Punishment", "Fyodor Dostoyevsky", false, "https://kinshipcircle.files.wordpress.com/2009/02/crime-and-punishment-bookcover.jpg"),
];
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
var paragraph;
for (var i = 0; i < books.length; i++) {
  paragraph = document.createElement('p');
  paragraph.innerText = "Title: " + books[i].title;
  paragraph.innerHTML += "<br>";
  paragraph.innerText += "Author: " + books[i].author;
  body.appendChild(paragraph);
}

// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
var booksList = document.createElement("ul");
booksList.className = "books";

var listItem, image;
for (var counter = 0; counter < books.length; counter++) {
  image = document.createElement("img");
  image.src = books[counter].image;

  listItem = document.createElement("li");
  listItem.innerText =  "Title: " + books[counter].title;
  listItem.innerHTML += "<br>";
  listItem.innerText += "Author: " + books[counter].author;
  // Bonus: Change the style of the book depending on whether you have read it or not.
  if (!books[counter].alreadyRead) {
    listItem.style.backgroundColor = "#dfdfdf";
  }
  listItem.insertBefore(image, listItem.firstChild);
  booksList.appendChild(listItem);
}
body.appendChild(booksList);



// Bonus: Try this out, Kevin!
var kevin = document.getElementById('kevinify');
kevin.onclick = function() {
  body.className = "kevin";
  h1.innerText = "Hi Kevin !!!";
  h1.style.fontSize = "5em";
  h1.style.backgroundColor = "black";
  window.scrollTo(500, 0);
}