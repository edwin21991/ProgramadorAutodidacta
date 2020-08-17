import {useState, useEffect} from 'react'

const useIntialState = (API) =>{

  const [certificados, setCertificados] = useState({
    Favorite: [],
    Universidad: [],
    DiplomadoJavaScript: [],
    DiplomadoReactJS: [],
    DiplomadoReactNative: [],
    Cursos: []
  })
  
  useEffect (()=>{
  fetch(API)
    .then(response => response.json())
    .then(data => setCertificados(data))
  }, [])

  return certificados

}

export default useIntialState