import { useState } from "react";
import FilterButton from "../components/FilterButton"
import cardItems from "../data";
import CardList from '../components/CardList';

import "./Home.css"

function Home() {

const [filteredList, setFilteredList] = useState(cardItems);

const handleFilterClick = (event) => {
  const filtered = cardItems.filter(item => item.scope.includes(event.target.value));
  setFilteredList(filtered);
}

  return (
    <>
      <section className="top">
        <h1>Beautés artificielles</h1>
        <p>"ChatGPT, quels objets faudrait-il créer pour embellir ... ?"</p>
        <FilterButton handleFilterClick={handleFilterClick} />
      </section>
      <CardList cardItems={filteredList}/>
    </>
  )
};

export default Home;