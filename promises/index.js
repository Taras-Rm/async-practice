const fs = require("fs/promises");

const INPUT_PATH = "./data.json";
const OUTPUT_PATH = "./final_data.json";

// Function for data modifying
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
function run() {
  fs.readFile(INPUT_PATH, { encoding: "utf8" })
    .then((data) => {
      return JSON.parse(data);
    })
    .then((data) => {
      return modifyData(data);
    })
    .then((data) => {
      return JSON.stringify(data);
    })
    .then((data) => {
      return fs.writeFile(OUTPUT_PATH, data);
    })
    .catch((error) => {
      console.log("Error: ", error.message);
    });
}

// run
run();
