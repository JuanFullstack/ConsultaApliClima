import useClima from "../hook/useClima"
import React, { useState } from 'react';






function Formulario() {

    const [alerta , setalerta ] = useState("")

    const {busqueda , datosBusqueda , consultarClima } = useClima()


    const { ciudad , pais } = busqueda 

    const handlesubmit = e => {
        e.preventDefault()
         
        if( Object.values(busqueda).includes('') ){

         setalerta( "Todos los campos son obligatorios ")

        return
        }
        consultarClima(busqueda)
    

    }


  return (
    <div className="contenedor " > 


       <form 
       onSubmit={handlesubmit}
       >
        <div className="campo" >
            <label htmlFor="ciudad">Ciudad</label>
            <input 
            type="text" 
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value= { ciudad }
            
            />
        </div>

        <div className="campo" >
            <label htmlFor="pais">Pais</label>
            <select 
            name="pais" 
            id="pais"
            onChange={datosBusqueda}
        value= {pais}
            >
                <option value="">--Seleccione Pais--</option>
                <option value="US"> Estados unidos </option>
                <option value="MX"> Mexico </option>
                <option value="AR">Argentina </option>
                <option value="CR">Costa Rica  </option>
                <option value="ES">España </option>
                <option value="PE">Peru </option>

            </select>
        </div>
        <input 
        type="submit" 
        value="consultar clima"
        
        />


       </form>


    </div>

    
    


  )
}

export default Formulario