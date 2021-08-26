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
