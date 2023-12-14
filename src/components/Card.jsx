import { useState } from "react";
import "./Card.css"

function Card({ card }) {
  const [isBack, setBack] = useState(false);

  const handleClick = () => {
    console.log("current state", isBack)
    setBack(current => !current)
    console.log("New state:", !isBack)
  };

    return (
      <>
        <div onClick={handleClick} className={isBack? "card-back" : "card-front"}> 
          <img className={isBack? "img-back" : "img-front"} src={card.image} alt={card.title} />
          <h2 className={isBack? "h2-back" : "h2-front"} >{card.title}</h2>
          <p className={isBack? "p-back" : "p-front"}>{card.content}</p>
        </div>
      </>
    )
}

export default Card