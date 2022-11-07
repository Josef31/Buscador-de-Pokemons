import React, {useState, useEffect} from 'react'

export const Garchomp = () => {
    const [garchomp, setGarchomp] = useState();
    useEffect(() => {
      Data();
    },[]);

    const Data = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/garchomp")
      const gible = await data.json();
      setGarchomp(gible);
  }

  return (
    <div>
      <img id='garchomp' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"></img>
      
      <h4>Escribe el nombre del pokemon que desea buscar en minusculas</h4>
    </div>

  )
}
