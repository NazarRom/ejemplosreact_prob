import {useState} from "react";
function Matematicas({ num, metodoTriple }) {

    const [numero, setNumero] = useState(parseInt(7));

    const doble = () => {
        console.log("el doble es " + numero * 2);
        var result = numero * 2;
        setNumero(result);
    }

    return (
        <div>
            <h1>Doble : {numero} </h1>
            <button onClick={() => doble()}>Hijo</button>
            
            <button onClick={() => metodoTriple("soy triple" + num * 3)}>Padre</button>

        </div>
    )
}

export default Matematicas;