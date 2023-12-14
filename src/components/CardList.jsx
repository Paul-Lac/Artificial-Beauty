import "./CardList.css"
import Card from "./Card";

function CardList({ cardItems }) {
    return (
        <section className="card-container">
            {cardItems.map((item) => (
                <Card card={item} />
                ))}
        </section>
    )
}

export default CardList;