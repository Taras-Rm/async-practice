const fs = require("fs");

const modifyData = require("../modifyData");

const INPUT_PATH = "../data.json";
const OUTPUT_PATH = "./modified_data.json";

// main function
function run() {
  // read data
  fs.readFile(INPUT_PATH, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log("Error: ", err.message);
      return;
    }

    // modify data
    const changedData = modifyData(JSON.parse(data));

    // write data
    fs.writeFile(OUTPUT_PATH, JSON.stringify(changedData), (err) => {
      if (err) {
        console.log("Error: ", err.message);
        return;
      }
    });
  });
}

// run
run();
