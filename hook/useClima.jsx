import { useContext } from 'react';
import Contenido from '../context/ClimaProvider';

import React from 'react'

function useClima() {

  return useContext(Contenido)
}

export default useClima