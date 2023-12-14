import "./Card.css"

function Card({ card }) {
    console.log(card);
    return (
        <div className="card"> 
        <img src={card.image} alt={card.title} />
        <h2>{card.title}</h2>
      </div>
    )
}

export default Card