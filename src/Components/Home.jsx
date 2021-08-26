import { useEffect } from "react";
import { getAllItems, getItemsByCategory } from "../Utils/api";

const Home = ({ items, setItems, user }) => {
  
  const resetAllItems = () => {
    getAllItems().then((allItems) => {
      setItems(allItems);
    });
  };

  useEffect(() => {
    resetAllItems();
  }, []);

  const displayItemsByCategory = (category) => {
    getItemsByCategory(category).then((filteredItems) => {
      setItems(filteredItems);
    });
  };

  return (
    <div className="Home">
      <h2>Welcome {user}</h2>
      <button className="category_buttons" onClick={() => resetAllItems()}>All</button>
      <button className="category_buttons" onClick={() => displayItemsByCategory("Clothing")}>
        Clothing
      </button>
      <button className="category_buttons" onClick={() => displayItemsByCategory("Electronics")}>
        Electronics
      </button>
      <button className="category_buttons" onClick={() => displayItemsByCategory("Household")}>
        Household
      </button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.item_id}>
              <div className="item-card">
                <img
                  src={item.img_url}
                  alt={`item_image_${item.item_id}`}
                ></img>
                <div>
                  <h3>{item.item_name}</h3>
                  <h4>{`£${(item.price / 100).toFixed(2)}`}</h4>
                  <h5>{item.category_name}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
