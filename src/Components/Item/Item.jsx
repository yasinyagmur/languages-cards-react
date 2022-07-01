import "./Item.css";
import { useState } from "react";

const Item = ({ card }) => {
  const [isCard, setIscard] = useState(true);

  const { name, img, options } = card;

  const handleClick = () => {
    setIscard(!isCard);
    setTimeout(showTıme, 3000);
  };
  const showTıme = () => {
    setIscard(true);
  };

  return (
    <div className="card" onClick={handleClick}>
      {isCard ? (
        <div>
          <img className="card-logo" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
