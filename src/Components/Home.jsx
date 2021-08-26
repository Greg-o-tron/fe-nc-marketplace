import { useEffect } from "react";
import { getAllItems } from "../Utils/api";

const Home = ({ items, setItems }) => {
  useEffect(() => {
    getAllItems().then((allItems) => {
      setItems(allItems);
    });
  }, []);

//   useEffect(() => {

//   }, [items]);

  return (
    <div className="Home">
      <button>All</button>
      <button>Clothing</button>
      <button>Electronics</button>
      <button>Household</button>
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
