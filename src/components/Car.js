import {useState} from 'react';
function Car(props){
    //tendremos una variable para averiguar si el coche está arrancado o no
    const [estado,setEstado] = useState(false);
    //tendremos otra variable para visualizar la velocidad
    //del vehiculo
    const [velocidad , setVelocidad] = useState(0);



    //vamos a crear un objeto que tenga las props que hemos recibido

    var coche = {
        marca:props.Marca,
        modelo:props.modelo,
        aceleracion:parseInt(props.Aceleracion),
        velocidadMaxima:parseInt(props.VelocidadMaxima)
    };

    //creamos un metodo para devolver el estado del coche 
    //con un dibujo html
    const comprobarEstado = () =>{
        if (estado == true){
            return(
                <h1 style={{color:"green"}}>Arrancado</h1>
            )
        }else {
            return <h1 style={{color:"red"}}>Detenido</h1>
        }
    }
    //vamos a realizar un metodo para acelerar el vehiculo
    const acelerarCoche = () =>{
        if (estado == false){
            alert("el coche está detenido");
            setVelocidad(0);
        }else{
            if(velocidad >= coche.velocidadMaxima){
                setVelocidad(coche.velocidadMaxima);
            }else{
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }
return(
    <div>
        <h1 style={{color:"fuchsia"}}>Component Car {coche.marca}, {coche.modelo}</h1>
        <div>
            {comprobarEstado()}
        </div>
        <h1>Velocidad actual {velocidad} km/hora</h1>
        <button onClick={ ()=>{
            setEstado(!estado);
        }}>Arrancar/Detener</button>
        <button onClick={ () => acelerarCoche()}>
            Acelerar coche
        </button>
    </div>
)

}
export default Car;