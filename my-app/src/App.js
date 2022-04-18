import React from 'react';
import CardContainer from './Components/CardContainer/CardContainer'
import './style.css'

function App() {
  return (
    <React.Fragment>
      <header>
          <h1>Título/ Nombre de la app</h1>
          <form action="">
              <input type="text" name="search" id="" placeholder="Search" />
              <button type="submit"><i className="fas fa-search"></i></button>
          </form>
      </header>
      <main>
        <CardContainer />
      </main>
      <footer>
        <ul className="team">
            <li>Abril Niell</li>
            <li>Consuelo Perrone</li>
            <li>Nicolás Araujo</li>
        </ul>
      </footer>
    </React.Fragment>
  );
}

export default App;
