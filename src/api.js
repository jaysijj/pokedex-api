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

export const getPokemonsByLink = async (link) => {
    let pokemons = await fetch(`${link}`, {
      method: 'GET'
    }).then(resp => resp.json())
  return pokemons
}
export const getPokemonsDados = async () => {
  let allPokemons = []
  for (let i = 1; i <= 151; i++) {
    let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
      method: 'GET'
    }).then(resp => resp.json())
    allPokemons.push(pokemons)
  }
  // console.log(allPokemons)
  return allPokemons
}



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
