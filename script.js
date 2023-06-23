const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
/*
const book = getBook(2);

// const title = book.title;
// const author = book.author;

// Object destructuring

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// console.log(author, title);

// Array destructuring

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// console.log(primaryGenre, secondaryGenre);

// Rest/Spread Operator

// Rest operator:
// To pull out the rest of the Genres from the array into one array

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread Operator:

// Spread operator is more common and is used more, can be used on both objects and arrays.

// Not this:
// const newGenres = [genres, "epic fantasy"]
// returns an array of genres within the array as an element,  and then 'epic fantasy' as an element

// This:
const newGenres = [...genres, "epic fantasy"];
// returns one array, can also put spread operator at the end to be rest operator

// For objects, allows us to add new properties and to update current properties ie change properties. To update properties, spread operator must be first because it takes the old object properties and has them inside a new property which can be updated, as long as spread is first.

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};
updatedBook;

// Template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}.
}. The book has ${hasMovieAdaptation ? "" : "not"}been dapted as a movie`;
summary;

// Ternary operators instead of if/else statements
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000.";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// Arrow functions

// Traditional function aka function declaration

// function getYear(str) {
//   return str.split("-")[0];
// }

// Arrow function aka function expression
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// Short-circuiting and Logical Operators &&, ||, ??

// && operator returns 2nd operand if first is True
console.log(true && "some string"); //returns:  some string
// && operator short-circuits i.e. returns 1st operand if first is False
console.log(false && "some string"); // returns: false

// This also works with truthy and falsy values the same:
// falsey values: 0, '', null, NaN, undefined

// || operator short-circuits when first operand is True,
console.log(true || "some string"); // returns: true
// || operator returns true value, so if 1st is false it returns second operand
console.log(false || "some string"); //returns: some string

// Example
console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "Not translated.";
spanishTranslation; // it short-circuits and gives the 1st value which is the name of a spanish book

// Here is a case where it can give you the opposite of what you want:
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong; // it gives no data for this variable which is not correct because our first value is a just a null i.e. a falsey value.

// To get past this issue, we use the nullish coalescing operator ?? to work with null values when you want to return a 0 and not 'no data'
// It returns first value when it is either null or undefined(not 0 or empty string '')
const count = book.reviews.librarything.reviewsCount ?? "no data";
count; // returns zero

// Optional chaining
// To get total review count of a certain book in our array of objects
// If something comes back as undefined(if you are looking for something which doesn't exist) you will get error, so use ? to ask if it exists, and if it does it will return

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything.reviewsCount;
//   return goodreads + librarything;
// }
// depending on the above book we chose we could get undefined
// console.log(getTotalReviewCount(book));

// So here we use the optional chaining to prevent error, we will get NaN instead, but in React that is better than error which breaks your whole application. Then to fix the NaN, we can use the nullish coalescing operator at the end to let it equal 0, so we can get the other review count plus 0.

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything; // could return undefined based on the book
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

*/

// The Array methods: Map, Filter, Reduce, Sort

// These methods don't mutate the original array, instead they return a new array based on the original array.

// .Map()
// Loops over original array, returns array of same size and applies some operation to all elements of the original array.

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// We will create an array that has only the titles of the books:
const titles = books.map((book) => book.title);
titles;

// We want to get just the title and the author of the data, but have it returned in same format of array of objects:
const essentialData = books.map((book) => {
  return {
    // must use return keyword here so JS recognizes the object{}
    title: book.title,
    author: book.author,
  };
});
essentialData;
// You could write the same code above, but without return keyword by replacing it with () like this ({}) and get rid of opening and closing braces.
const essentialData1 = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData1;

// .filter()
// returns array based on a boolean condition you give

// Create an array of books that have > 500 pages.

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation); // could just put && above to include both conditions as filters
longBooks;

// Create an array that takes(filters) all adventure books

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title); //.includes() is a builtin array method that give a boolean
adventureBooks;

// .reduce()
// The .reduce() method is the most powerful and most used method in all of JS

// Let's get all the books page amounts and add them all together to know how many pages we will have to read.
// We will take the 'pages' properties and add them
// It takes a callback function like the others, but then for 2nd arg it takes a starting value
// It is called "reduce" because it takes the whole array and tries to boil it down to one value i.e. reduce it to one value

// We take an accumulator and keep adding our pages to it, see below.
// Look this up in JS course for more details and use cases
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// .sort()
// pass in function with 2 args, usually a and b, to sort ascending do a - b, then it sorts numbers. It loops and a and b are current value and the next value. So 3 - 7 = -4, sum is negative it goes 1st, if it comes out positive it goes after for ascending. If you want desecending then write b - a.

// .sort() mutates original array, it does not create a new copy, so first you can make a copy using .slice() and then sort it .sort()

const y = [3, 7, 1, 9, 6];
const sorted = y.slice().sort((a, b) => a - b);
sorted;
y;

// Usually we have to sort an array of objects and not just a simple array.
// So to sort our books objects:

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;
