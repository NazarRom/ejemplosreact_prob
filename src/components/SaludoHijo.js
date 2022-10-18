function SaludoHijo(props) {
    //inventamos un nombre de variable para el metodo de parent
    //y para la recepcion de hjio
    const {idhijo, metodoPadre} = props;
    return (
        <div>
            <h1>Eventos Hijo -- Padre{idhijo}</h1>
            <button onClick={ ()=> metodoPadre("soy el hijo" + idhijo) }>Llamar método Padre</button>
        </div>
    );
}
export default SaludoHijo;