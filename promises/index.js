const fs = require("fs/promises");
const modifyData = require("../modifyData");

const INPUT_PATH = "../data.json";
const OUTPUT_PATH = "./final_data.json";

// main function
function run() {
  // read data
  fs.readFile(INPUT_PATH, { encoding: "utf8" })
    .then((data) => {
      return JSON.parse(data);
    })
    .then((data) => {
      // modify data
      return modifyData(data);
    })
    .then((data) => {
      return JSON.stringify(data);
    })
    .then((data) => {
      // write data
      return fs.writeFile(OUTPUT_PATH, data);
    })
    .catch((error) => {
      console.log("Error: ", error.message);
    });
}

// run
run();
