import './App.css';
import Testimony from "./components/Testimony.jsx"
//import {Testimony} from "./components/Testimony.jsx" //exportacion nombrada

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Esto es lo que dicen nuestros alumnos del curso:</h1>
        <Testimony //aqui se indican los props (propiedades) del componente
          img="adame"
          name="Alfredo Adame"
          country="Mexico"
          position="Arma letal"
          description="Acercate y te trueno carnal."/>
        
        <Testimony 
          img="trejo"
          name="Carlos Trejo"
          country="Mexico"
          position="Cazafantasmas experimentado"
          description="Se que me tienes miedo Adame y donde te encuentre te aniquilo."/>
        
        <Testimony 
          img="bozzo"
          name="Laura Bozzo"
          country="Peru"
          position="Profuga de la justicia"
          description="Ya callense par de desgraciados canallas."/>
      </div>
    </div>
  );
}

export default App;