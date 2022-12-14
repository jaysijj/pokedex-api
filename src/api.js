export const getPokemons = async (inicio, final) => {
  const pokemons = fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${final}&offset=${inicio}`,
    {
      method: 'GET'
    }
  ).then(resp => resp.json())
  return pokemons
}

// export const getPokemons = async (inicio, final) => {
//   const pokemons = fetch(
//     `https://pokeapi.co/api/v2/pokemon?limit=${890}&offset=${0}`,
//     {
//       method: 'GET'
//     }
//   ).then(resp => resp.json())
//   return pokemons
// }

export const getPokemonsByLink = async link => {
  let pokemons = await fetch(`${link}`, {
    method: 'GET'
  }).then(resp => resp.json())
  return pokemons
}

export const getPokemonsDados = async (inicio, final) => {
  let allPokemons = []
  for (let i = inicio; i <= final; i++) {
    let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
      method: 'GET'
    }).then(resp => resp.json())
    allPokemons.push(pokemons)
  }
  return allPokemons
}
export const getEvolutionChain = async name => {
  console.log(name)
  let pkmEvolution = []
  let pokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`,
    {
      method: 'GET'
    }
  ).then(resp => resp.json())

  console.log(pokemons.evolution_chain)
  pkmEvolution = await getPokemonsByLink(pokemons.evolution_chain.url)
  console.log(pkmEvolution.chain.species.name)
  console.log(pkmEvolution.chain.evolves_to[0] === undefined)
  // console.log(pkmEvolution.chain.evolves_to[0].evolves_to[0] === undefined)
  // return {
  //   firstForm: pkmEvolution.chain.species.name,
  //   secondForm: pkmEvolution.chain.evolves_to[0].species.name,
  //   thirdForm: pkmEvolution.chain.evolves_to[0].evolves_to[0].species.name
  // }
  return {
    firstForm: pkmEvolution.chain.species.name,
    secondForm:
      pkmEvolution.chain.evolves_to[0] !== undefined
        ? pkmEvolution.chain.evolves_to[0].species.name
        : null,
    thirdForm:
      pkmEvolution.chain.evolves_to[0] !== undefined
        ? (pkmEvolution.chain.evolves_to[0].evolves_to[0] !== undefined
          ? pkmEvolution.chain.evolves_to[0].evolves_to[0].species.name
          : null)
        : null
  }
  // allPokemons.push(pokemons)
  // return allPokemons
}
// export const getPokemonsDados = async (final) => {
//   let allPokemons = []
//   for (let i = 1; i <= final; i++) {
//     let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
//       method: 'GET'
//     }).then(resp => resp.json())
//     allPokemons.push(pokemons)
//   }
//   return allPokemons
// }

// export const getPokemonsDados = async () => {
//   try {
//     let allPokemons = []
//     for (let i = 1; i <= 151; i++) {
//       let pokemons = await fetch(
//         `https://pokeapi.co/api/v2/pokemon-form/${i}`,
//         {
//           method: 'GET'
//         }
//       ).then(resp => resp.json())
//       allPokemons.push(pokemons)
//     }
//     return allPokemons
//   } catch (error) {
//     console.log('Ocorreu um erro: ', error)
//   }
// }

// export const getPokemonsDados = async (limit = 50, offset = 0) => {
//   var lista = []
//   try {
//     for (let i = 1; i <= 151; i++) {
//       let url = `https://pokeapi.co/api/v2/pokemon/${i}`
//       let response2 = await fetch(url)
//       let response3 = await response2.json()
//       lista.push(response3)
//     }
//     return lista
//   } catch (error) {
//     console.log('error: ', error)
//   }
// }
