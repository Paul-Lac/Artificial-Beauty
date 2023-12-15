import { useState } from "react";
import "./CardList.css"
import Card from "./Card";

function CardList({ cardItems }) {

const [isBack, setBack] = useState(null);
    
const handleClick = (index) => {
    if (isBack === null) {
        setBack(index)
    } else if (isBack === index) {
        setBack(null)
    } else {
        setBack(index)
    }
  };
    
    return (
        <section className="card-container">
            {cardItems.map((item, index) => (
                <Card card={item} handleClick={() => handleClick(index)} isBack={isBack === index}/>
                ))}
        </section>
    )
}

export default CardList;