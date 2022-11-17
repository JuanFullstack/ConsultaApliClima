import {createContext} from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Contenido = createContext();



function ClimaProvider({children}) {

    const [busqueda, setbusqueda] = useState({
        ciudad: '',
        pais: '',
    });

    const [resultado , setresultado ]= useState({})
    const [cargando , setcargando ]= useState(false)
    const [sinresultado , setsinresultado ] = useState(false)

    const datosBusqueda = e => {
            setbusqueda ( {
             ...busqueda , 
             [e.target.name]:e.target.value

            } )

    }

    const consultarClima = async datos => {
    setcargando(true)
    setsinresultado (false)
        try {
            const { ciudad , pais } = datos
            const appId = import.meta.env.VITE_API_KEY

            // consulta para sacar latitud , altitud
            const url = ` http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
            const { data  } = await axios (url)
            const { lat , lon } = data[0]
           

           // consulta aplicar altitud y latitud a la abusqueda 
            const urlClima =` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId} `
            const {data : resultado } = await axios (urlClima)
             
             
            setresultado(resultado)
           
            
            
        } catch (error) {

            setsinresultado ('no hay resultado')
        }finally {
            setcargando(false)
        }
       

    }


    return (
        <Contenido.Provider
            value={{
                busqueda ,
                datosBusqueda,
                consultarClima,
                resultado,
                cargando,
                sinresultado
            }}>
            {children}
        </Contenido.Provider>
    );}
 
export {ClimaProvider};
export default Contenido;


