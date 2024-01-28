import { useState } from "react";
import "./CardList.css"
import Card from "./Card";

function CardList({ cardItems }) {

const [clickedCard, setClickedCard] = useState(null);
    
const handleFlipClick = (index) => {
    console.log(clickedCard);
    if (clickedCard === null) {
        // there are no cards returned - first click
        setClickedCard(index)
    } else if (clickedCard === index) {
        // if the clicked card is already returned - flip back
        setClickedCard(null)
    } else {
        // if the is already a card its back, which is not the one that it is being clicked on - flip other card
        setClickedCard(index)
    }
  };
    
    return (
        <section className="card-container">
            {cardItems.map((item, index) => (
                <Card card={item} handleFlipClick={() => handleFlipClick(index)} isBackCard={clickedCard === index}/>
                ))}
        </section>
    )
}

export default CardList;