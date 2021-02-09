const fs = require("fs");

let bookData = {
  book: "Ego is the enemy",
  author: "Ryan Holiday",
};

const dataJSON = JSON.stringify(bookData);

fs.writeFileSync("BookData.json", dataJSON);
