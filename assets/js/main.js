const bookUrl = "https://striveschool-api.herokuapp.com/books";

const getData = () => {
  fetch(bookUrl)
    .then((response) => {
      console.log("Response success", response);
      return response.json();
    })
    .then((books) => {
      console.log("Libri ricevuti:", books);

      const booksRow = document.getElementById("book");
      booksRow.innerHTML = "";

      books.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col", "d-flex", "justify-content-center");

        col.innerHTML = `
          <div class="card h-100" style="height: 18rem;">
            <img src="${book.img}" class="card-img-top" alt="${book.title}" style="height: 35rem; object-fit: cover;"/>
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Prezzo: ${book.price} €</p>
              </div>
              <div>
                <button class="btn btn-danger btn-sm me-2" onclick="scartaCard(this)">Scarta</button>
                <button class="btn btn-success btn-sm">Compra ora</button>
              </div>
            </div>
          </div>
        `;

        booksRow.appendChild(col);
      });
    })
    .catch((error) => {
      console.log("Errore request", error);
    });
};

const scartaCard = (btn) => {
  btn.closest(".col").remove();
};

getData();
