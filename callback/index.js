const fs = require("fs");

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
