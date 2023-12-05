const formEl = document.getElementById("best-books-form");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json`;
  const API_KEY = "BLuVnPPyDw7ZCszDeiAoYoGLFzXnPhd9";
  const url = `${BASE_URL}?api-key=${API_KEY}`;
  // console.log(url);
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      // console.log(responseJson);
      let bookList = responseJson.results.books;
      console.log(bookList);
      const booksContainer = document.getElementById("books-container");
      booksContainer.innerHTML = `<h2>Top 5 Bestselling Books on ${month}/ ${date}/ ${year}</h2>`;
      const container = document.createElement("ol");
      booksContainer.append(container);

      bookList.forEach((book) => {
        if (book.rank <= 5) {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<img src="${book.book_image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.description}</p>`;
          container.appendChild(listItem);
        }
      });
    });
});
