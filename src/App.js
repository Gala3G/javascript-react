
import './App.css';
import './componentes/Contador';
import Contador from './componentes/Contador';
import Divcontador from './componentes/Divcontador';
import { useState } from 'react';


function App() {
  const [contador, numerocontador] = useState(0);
  const sumarcontador = () => {
    numerocontador(contador + 1);
  }

  const reiniciarcontador = () => {
    numerocontador(0);
  }
  return (
    <div className="App">
      <Contador
        texto='Aumentar'
        isAumentar={true}
        metodo={sumarcontador} />
      <Contador
        texto='Reiniciar'
        isAumentar={false}
        metodo={reiniciarcontador}/>
      
      <Divcontador
      numero={contador}/>
    </div>
  );
}

export default App;
