const fs = require("fs/promises");

const modifyData = require("../modifyData");

const INPUT_PATH = "./data.json";
const OUTPUT_PATH = "./modified_data.json";

// main function
async function run() {
  try {
    const data = await fs.readFile(INPUT_PATH, { encoding: "utf8" });

    const changedData = modifyData(JSON.parse(data));

    await fs.writeFile(OUTPUT_PATH, JSON.stringify(changedData));
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

// run
(async () => {
  await run();
})();
