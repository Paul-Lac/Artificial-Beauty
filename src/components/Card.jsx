import "./Card.css"

function Card({ card, handleClick, isBack }) {

    return (
      <>
        <div onClick={handleClick} className={isBack? "card-back" : "card-front"} > 
          <img className={isBack? "img-back" : "img-front"} src={card.image} alt={card.title} />
          <h2 className={isBack? "h2-back" : "h2-front"} >{card.title}</h2>
          <p className={isBack? "p-back" : "p-front"}>{card.content}</p>
        </div>
      </>
    )
}

export default Card