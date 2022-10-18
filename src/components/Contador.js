//para poder utilizar state nevesitamos
//imnportar usestate de la libreria
import { useState } from "react";

function Contador(props){
    const {inicio} = props;
//necesitamos una variable state donde
//vamos a indicar su creacion y su tipo de dato tambien
//setNombre variable es un metodo
const [numero, setNumero] = useState(parseInt(inicio));
//vamos a tener un metodo para ir encrementando
//una variable state contador
const sumarContador = () =>{
    //utilizamos el metodo set para modificar el valor
setNumero(numero+1)
}

return (
    <div>
        <h1>Ejemplo State de React</h1>
        <h2 style={{color:"blue"}}>Contador: {numero}</h2>
        <button onClick={ () => sumarContador()}>
            Sumar
        </button>
        <button onClick={() => {
            setNumero(numero - 1);
        }}>Restar</button>
    </div>
)

}
export default Contador;