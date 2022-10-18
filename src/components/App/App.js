import './App.css';
import SaludoHijo from '../SaludoHijo';

function App() {
  //queremos un metodo en el parent que sea
  //llamado desde el hijo
  const metodoPadre = (descripcion) => {
    console.log("soy" + descripcion);
  }
  return (
    <div className="App">
        <h1>Componente App</h1>
        {/*enviamos el metodo del padre a hijo con un nombre de 
        props*/}
        <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/>
    </div>
  );
}

export default App;
