const PokemonsAcumulados = ({pokemonsAcumulados}) => {
  return (
    <div>
      {pokemonsAcumulados.map(valor => (
        <div>
          <div>
            {valor.id}
          </div>
          <div>
            {valor.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PokemonsAcumulados