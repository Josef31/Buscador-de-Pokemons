import React, {useState, useEffect} from 'react'
import './Input.css';

export const Input = () => {
    const [pikachu, setPikachu] = useState();  //variable que contendra la informacion del pokemon buscado
    const [search, setSearch] = useState("gible"); //variable que guarda el texto escrito en el input
    useEffect(() => {
        Data();
    },[]);

    //Cargar datos de la API
    const Data = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + search)
        const gible = await data.json();
        setPikachu(gible);
        console.log(search);
    }

    //Actualizar los datos del pokemon mostrados en pantalla
    const Refresh = () => {
        document.getElementById("Name").textContent = "Nombre:  ";
        document.getElementById("Pokemon Name").textContent = pikachu.name;

        document.getElementById("Experience").textContent = "Experiencia Base: ";
        document.getElementById("Pokemon Experience").textContent = pikachu.base_experience;

        document.getElementById("Hp").textContent = "Hp: ";
        document.getElementById("Pokemon Hp").textContent = pikachu.stats[0].base_stat;

        document.getElementById("Atk").textContent = "Atk: ";
        document.getElementById("Pokemon Atk").textContent = pikachu.stats[1].base_stat;

        document.getElementById("Def").textContent = "Def: ";
        document.getElementById("Pokemon Def").textContent = pikachu.stats[2].base_stat;

        document.getElementById("S.Atk").textContent = "S.Atk: ";
        document.getElementById("Pokemon S.Atk").textContent = pikachu.stats[3].base_stat;

        document.getElementById("S.Def").textContent = "S.Def: ";
        document.getElementById("Pokemon S.Def").textContent = pikachu.stats[4].base_stat;

        document.getElementById("Speed").textContent = "Speed: ";
        document.getElementById("Pokemon Speed").textContent = pikachu.stats[5].base_stat;

        document.getElementById("Sprite").textContent = "Sprite: ";
        document.getElementById("PokemonSprite").src = pikachu.sprites.front_default;
    }
  return (
    <div>
        {/* Input para buscar el pokemon */}
        <input id='Input' placeholder='Nombre del pokemon' type='text'></input>

        <button id='Btn' onClick={() => {           

            var poke = document.getElementById("Input").value;
            setSearch(poke);
            Data();
            Refresh();
            

            console.log(poke);

        }}>Buscar</button>

        <br></br>

        {/* Datos del Pokemon */}
        <div>
        <h3 id='Name' className='Name'></h3>
        <h3 id='Pokemon Name' className='PokemonN'></h3>
        </div>
        
        <div>
        <h3 id='Experience' className='Experience'></h3>
        <h3 id='Pokemon Experience' className='PokemonE'></h3>
        </div>

        <div>
        <h3 id='Hp' className='Hp'></h3>
        <h3 id='Pokemon Hp' className='PokemonH'></h3>
        </div>

        <div>
        <h3 id='Atk' className='Atk'></h3>
        <h3 id='Pokemon Atk' className='PokemonA'></h3>
        </div>

        <div>
        <h3 id='Def' className='Def'></h3>
        <h3 id='Pokemon Def' className='PokemonD'></h3>
        </div>

        <div>
        <h3 id='S.Atk' className='SAtk'></h3>
        <h3 id='Pokemon S.Atk' className='PokemonSA'></h3>
        </div>

        <div>
        <h3 id='S.Def' className='SDef'></h3>
        <h3 id='Pokemon S.Def' className='PokemonSD'></h3>
        </div>

        <div>
        <h3 id='Speed' className='Speed'></h3>
        <h3 id='Pokemon Speed' className='PokemonSpe'></h3>
        </div>

        <div>
        <h3 id='Sprite' className='Sprite'></h3>
        <img id='PokemonSprite' className='PokemonSpri'></img>
        </div>

        </div>

        
  )
}
