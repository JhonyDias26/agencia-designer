import './App.css';
import Topo from './componentes/Topo/Topo'
import Banner from './componentes/Banner/Banner';
import Experiencias from './componentes/Experiencias/Experiencias';
import Cards from './componentes/Cards/Cards';
import Rodape from './componentes/Rodape/Rodape';

function App() {
  return (
    <div className="App">
      <Topo />
      <Banner />
      <Experiencias />
      <Cards />
      <Rodape />
    </div>
  );
}

export default App;
