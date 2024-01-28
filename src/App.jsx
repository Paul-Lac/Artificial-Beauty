import { Link, Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Outlet />
      </main>
    </body>
  );
}

export default App;
