import { Component } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Activar from "./componentes/ActivarUser";
import Login from "./componentes/Login";
import Mostrar from "./componentes/Mostrar_datos";
import Recuperar from './componentes/CorreoRecuperar';
import Nueva from "./componentes/NuevaContraseña";

const App = () => {
  return (
    <div className="App">
      <Formulario />
      <Activar />
      <Login />
      <Mostrar />
      <Recuperar />
      <Nueva />
    </div>
  );
}

export default App;
