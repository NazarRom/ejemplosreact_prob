import './App.css';
import SaludoHijo from '../SaludoHijo';
import Matematicas from '../Matematicas';
import Contador from '../Contador';
function App() {
  //queremos un metodo en el parent que sea
  //llamado desde el hijo
  const metodoPadre = (descripcion) => {
    console.log("soy" + descripcion);
  }
  const metodoTriple = (parametro) => {
    console.log(parametro);
  }
  return (
    <div className="App">
        <h1>Componente App</h1>
        {/*enviamos el metodo del padre a hijo con un nombre de 
        props*/}
        <Contador inicio="22"></Contador>
        {<Matematicas num="7" metodoTriple={metodoTriple}></Matematicas>
       /* <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/> */}
    </div>
  );
}

export default App;
