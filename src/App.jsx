
import './App.css'
import cardItems from './components/cardItems';
import CardList from './components/CardList';

function App() {

  return (
  <body>
    <header>
      <h1>La beauté au quotidien selon l'intelligence artificielle</h1>
      <p>"ChatGPT, quels objets faudrait-il créer pour rendre le quotidien des humains plus beau ?"</p>
    </header>

    <CardList cardItems={cardItems}/>
  </body>
  )
}

export default App
