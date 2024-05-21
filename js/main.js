const API = "https://rickandmortyapi.com/api/character";
const API2 = "http://localhost:8000/characters";

function readTaskNames() {
  let list = $(".list");
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((elem) => {
        list.append(`<li>${elem.name}</li>`);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// readTaskNames();

function readTaskNamesAndImages() {
  let list = $(".list");
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((elem) => {
        list.append(
          `<li>${elem.name}<br><img src="${elem.image}" alt="${elem.name}" width="100"></li>`
        );
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
readTaskNamesAndImages();

// Стянуть данные на свой локальный сервер API2.
function readTaskFromDb() {
  let list2 = $(".list2");
  fetch(API2)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        list2.append(
          `<li>${elem.name}<br><img src="${elem.image}" alt="${elem.name}" width="100"></li>`
        );
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
readTaskFromDb();
