import Header from './Components/Header/Header'
import CargarMasTarjetas from './Components/CargarMasTarjetas/CargarMasTarjetas'
import CardContainer from './Components/CardContainer/CardContainer'
import './style.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <CargarMasTarjetas />
        <CardContainer />
      </main>
      <footer>
        <ul className="team">
            <li>Abril Niell</li>
            <li>Consuelo Perrone</li>
            <li>Nicolás Araujo</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
