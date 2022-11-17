import Formulario from "./Formulario"
import Resultado from "./Resultado";
import useClima from "../hook/useClima"
import Loading from "./Loading";




function AppClima() {

    
     const { resultado , cargando , sinresultado} = useClima()
    console.log(resultado)
    
 

   
    return (
        <main className='dos-columnas'>
           
            <Formulario />

            { cargando? <Loading/> :
            resultado?.name ? <Resultado /> : 
            sinresultado ? <p>{sinresultado}</p> 
            : <p> el clima se va a mostrar aqui </p> }

        </main>
    );
}

export default AppClima