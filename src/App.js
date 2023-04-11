import './App.css';
import logoDart from './images/logo.jpg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics (0);
  }


  return (
    <div className="App">
      <div className='dart-logo-contenedor'>
        <img
          className='dart-logo'
          src={logoDart}
          alt='Logo dart'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics = {numClics} />
        <Boton
        texto = 'Clic'
        esBotonDeClic = {true}
        manejarClic = {manejarClic} />
        <Boton
        texto = 'Reiniciar'
        esBotonDeClic = {false}
        manejarClic = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
