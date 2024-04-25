const fs = require("fs/promises");

const INPUT_PATH = "./data.json";
const OUTPUT_PATH = "./modified_data.json";

// Function for data changes
const modifyData = (data) => {
  // change user
  const users = data.users.map((user) => {
    const [name, surname] = user.name.split(" ");

    const changedUser = {
      ...user,
    };

    changedUser.name = name && surname ? name : user.name;
    changedUser.surname = surname || "";

    return changedUser;
  });

  // change products
  const products = data.products.map((product) => {
    return {
      ...product,
      count: 10,
    };
  });

  return {
    users,
    products,
  };
};

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
