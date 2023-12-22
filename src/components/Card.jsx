import "./Card.css"

function Card({ card, handleFlipClick, isBackCard }) {

    return (
      <>
        <div onClick={handleFlipClick} className={isBackCard? "card-back" : "card-front"} > 
          <img className={isBackCard? "img-back" : "img-front"} src={card.image} alt={card.title} />
          <h2 className={isBackCard? "h2-back" : "h2-front"} >{card.title}</h2>
          <p className={isBackCard? "p-back" : "p-front"}>{card.content}</p>
        </div>
      </>
    )
}

export default Card;