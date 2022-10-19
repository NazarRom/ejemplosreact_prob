import './App.css';
import SaludoHijo from '../SaludoHijo';
import Matematicas from '../Matematicas';
import Contador from '../Contador';
import {useState} from "react";
import Car from '../Car';
function App() {
  const [numero, setNumero] = useState(parseInt(7));
  //queremos un metodo en el parent que sea
  //llamado desde el hijo
  const metodoPadre = (descripcion) => {
    console.log("soy" + descripcion);
  }
  const metodoTriple = (parametro) => {
    console.log(parametro);
    var result = parseInt(parametro * 3);
        setNumero(result);
  }
  
  return (
    <div className="App">
        <h1>Componente App</h1>
        <Car Marca="Audi" Modelo="Q4" Aceleracion="20" VelocidadMaxima="240"></Car>
        <Car Marca="Pointiac" Modelo="Firebird" Aceleracion="40" VelocidadMaxima="280"></Car>
        {/*enviamos el metodo del padre a hijo con un nombre de 
        props
        <Contador inicio="22"></Contador>
        <Matematicas num={numero} metodoTriple={metodoTriple}></Matematicas>
       /* <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/> */}
    </div>
  );
}

export default App;
