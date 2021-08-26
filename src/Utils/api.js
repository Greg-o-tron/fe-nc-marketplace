export const getAllItems = () => {
  return fetch("https://nc-marketplace.herokuapp.com/api/items")
    .then((res) => res.json())
    .then((data) => {
      return data.items;
    });
};

export const getItemsByCategory = (category) => {
  return fetch(`https://nc-marketplace.herokuapp.com/api/items?category_name=${category}`)
    .then((res) => res.json())
    .then((data) => {
      return data.items;
    });
};

export const getAllUsers = () => {
  return fetch("https://nc-marketplace.herokuapp.com/api/users")
    .then((res) => res.json())
    .then((data) => {
      return data.users;
    });
}

export const getSingleUser = (username) => {
  return fetch(`https://nc-marketplace.herokuapp.com/api/users/${username}`)
    .then((res) => res.json())
    .then((data) => {
      return data.user;
    });
}
