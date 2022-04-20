import React from 'react';
import CardContainer from './Components/CardContainer/CardContainer'
import './style.css'

function App() {
  return (
    <React.Fragment>
      <header>
          <h1>Mode OFF</h1>
 
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
