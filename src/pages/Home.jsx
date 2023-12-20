import cardItems from "../components/CardItems";
import CardList from '../components/CardList';

import "./Home.css"

function Home() {
  return (
    <>
      <section className="top">
        <h1>La beauté au quotidien selon l'intelligence artificielle</h1>
        <p>"ChatGPT, quels objets faudrait-il créer pour rendre le quotidien des humains plus beau ?"</p>
      </section>
      <CardList cardItems={cardItems}/>
    </>
  )
};

export default Home;