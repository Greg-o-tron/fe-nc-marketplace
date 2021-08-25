import { useEffect } from "react";

const Home = ({ allItems, setAllItems }) => {
  useEffect(() => {
    fetch("https://nc-marketplace.herokuapp.com/api/items")
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data.items);
    });
  }, []);

  return (
    <div>
      <p>Home page</p>
      <ul>
        {allItems.map((item) => {
          return (
            <li key={item.item_id}>
              <div className='item-card'>
                <img src={item.img_url} alt={`item_image_${item.item_id}`}></img>
                <div>
                    <h3>{item.item_name}</h3>
                    <h4>{`£${item.price / 100}`}</h4>
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
