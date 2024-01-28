import "./FilterButton.css"

function FilterButton({ handleFilterClick }) {
    return (
    <div className="filter">
        <button value={"quotidien"} onClick={handleFilterClick}>Notre quotidien</button>
        <button value={"ville"} onClick={handleFilterClick}>Nos villes</button>
    </div>
    )
}

export default FilterButton;