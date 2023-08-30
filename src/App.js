import './App.css';
import Topo from './componentes/Topo/Topo'
import Banner from './componentes/Banner/Banner';
import Experiencias from './componentes/Experiencias/Experiencias';
import Cards from './componentes/Cards/Cards';
import Rodape from './componentes/Rodape/Rodape';
import { useState } from 'react';

function App() {
  const [corTema, setCorTema] = useState(false);
  function alterarCor() {
    setCorTema(!corTema)
  }
  return (
    <div className="App">
      <Topo passandoVar={corTema} passandoFunc={alterarCor} />
      <Banner passandoVar={corTema} />
      <Experiencias passandoVar={corTema} />
      <Cards passandoVar={corTema} />
      <Rodape passandoVar={corTema} />
    </div>
  );
}

export default App;
