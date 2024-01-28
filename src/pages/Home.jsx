import { useState } from "react";
import FilterButton from "../components/FilterButton";
import cardItems from "../data";
import CardList from "../components/CardList";
import Loupe from "../../public/loupe.png";

import "./Home.css";

function Home() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearchChange = (event) => {
    const searchedTerm = event.target.value.toLowerCase();
    setSearchedTerm(searchedTerm);
  };

  const handleFilterClick = (event) => {
    const filter = event.target.value;
    setFilter(filter);
  };

  const selectedItems = (item) =>
    item.title.toLowerCase().includes(searchedTerm) &&
    (filter === "" || item.scope.includes(filter));

  return (
    <>
      <section className="home-top">
        <h1>Beautés artificielles</h1>
        <p>"ChatGPT, quels objets faudrait-il créer pour embellir ... ?"</p>
        <FilterButton handleFilterClick={handleFilterClick} />
      </section>
      <section className="home-bottom">
        <div className="search-bar">
          <input placeholder="Rechercher" onChange={handleSearchChange} />
          <img src="../../public/loupe.png" />
        </div>
        <CardList cardItems={cardItems.filter(selectedItems)} />
      </section>
    </>
  );
}

export default Home;
