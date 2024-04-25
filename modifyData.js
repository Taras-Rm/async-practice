// Function for data modifying
const modifyData = (data) => {
  // change user
  const users = data.users.map((user) => {
    const [name, surname] = user.name.split(" ");

    return {
      ...user,
      name: name && surname ? name : user.name,
      surname: surname || "",
    };
  });

  // change products
  const products = data.products.map((product) => ({
    ...product,
    count: 10,
  }));

  return {
    users,
    products,
  };
};

module.exports = modifyData;
