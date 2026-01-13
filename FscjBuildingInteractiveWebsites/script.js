// Click handler for search button
const captureSearchValue = () => {
  // The `captureSearchValue` function captures the search bar input value and returns it.
  return document.getElementById("search-bar").value;
};

// Filter books based on search input
const filterBooks = (searchValue, books) => {
  // The `filterBooks()` function takes in a search string and a list of books as parameters and returns all of the books that contain an exact match of the search input as an array of objects. 
  // Objects in this array should be formatted as `books` with `title`, `author`, and `tags` properties, similar to the original `books` array. 
  // It should use the `flattenObjectValuesIntoArray()` function to search all fields within a book object easily.
  const booksToArray = flattenObjectValuesIntoArray(books);
  const resultBook = [];

  for (let i = 0; i < booksToArray.length; i++) {
    if (booksToArray[i].includes(searchValue)) {
      resultBook.push(books[i]);
    }
  }

  return resultBook;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = () => {

};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {

}

// Grab search button from the DOM


// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });