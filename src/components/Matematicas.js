import {useState} from "react";
function Matematicas(props) {
    const { num, metodoTriple } = props;
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
            <h1>Trimple : {num} </h1>
            <button onClick={() => metodoTriple(num)}>Padre</button>

        </div>
    )
}

export default Matematicas;