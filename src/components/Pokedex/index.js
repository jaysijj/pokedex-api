import './Pokedex.css'

const Pokedex = ({todosPokemonsIniciais, sprit}) => {
  const x = `valor.sprites.other["official-artwork"].${sprit}`
  // const x = `valor.sprites.${sprit}`
  // const y = `valor.sprites.versions.["generation-i"].["red-blue"].${sprit}`
  // const coresPokemon = {"electric": "yellow","normal": "rgb: 168"}
  // const z = `(valor.types).length>1 ? "blue": "red"`
  return(
    <div className="pkmContainer__father">
      {todosPokemonsIniciais.map((valor, index) => (
        <div key={index} className='pkmContainer__children' id={valor.types[0].type.name}>
          <div># {valor.id}</div>
          {/* <div>{valor.types[0].type.name}</div> */}
          <div>{valor.name}</div>
          <img
            src={eval(x)}
            alt=''
            className='pkmImg'
          />
        </div>
      ))}
    </div>
  )
}

export default Pokedex