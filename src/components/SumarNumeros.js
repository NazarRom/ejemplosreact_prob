import miata from '../assets/images/miata.jpg';
function SumarNumeros() {
    const sumarNumeros = (num1, num2) => {
        var suma = num1 + num2;
        console.log("La suma es " + suma);
    }

    var imageSize = {
        width: "150px", height: "150px"
    }
    return (
        <div>
            <h1>Component SumarNumeros</h1>
            <button onClick={ () => sumarNumeros(7,9) }>
                Sumar 7 + 9
            </button>
            <button onClick={ () => sumarNumeros(6,5) }>
                Sumar 6 + 5
            </button>            
            <img src={miata} style={imageSize}/>
        </div>
    );
}

export default SumarNumeros;