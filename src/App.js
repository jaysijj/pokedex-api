import { useEffect, useState } from 'react'
import { getPokemons, getPokemonsByLink, getPokemonsDados } from './api'
import './App.css'
import NavBar from './components/NavBar'
import Pokedex from './components/Pokedex'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokedexAll from './components/PokedexAll'
import Loading from './components/Loading'

function App() {
  const pokemonInicial = 0
  const pokemonFinal = 905
  const [currentGeneration, setCurrentGeneration] = useState("1")
  const [pokemonsByLink, setPokemonsByLink] = useState([])
  const [sprit, setSprit] = useState("front_default")
  const [buscadorPkm, setBuscadorPkm] = useState()
  const [loading, setLoading] = useState(false)
  const generationName = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]

  // useEffect(() => {
  //   const fetchPokemons = async () => {
  //     try{
  //       const dados = await getPokemons(pokemonInicial, pokemonFinal)
  //       const pokedex = dados.results
  //       let allPkm = []
  //       if (pokedex.length>0){
  //         for (let i=0; i<pokedex.length; i++){
  //           let dados = await getPokemonsByLink(pokedex[i].url)
  //           allPkm.push(dados)
  //         }
  //         setLoading(true)
  //         setPokemonsByLink(allPkm)
  //       }

  //     } catch (error){
  //       console.log("Ocorreu um erro ao carregar getchPokemons link: ",error)
  //     }
  //   }
  //   fetchPokemons()
  // }, [])

  useEffect(() => {
    const fetchPokemons = async () => {
      try{
        const dados = await getPokemonsDados(pokemonFinal)
        setPokemonsByLink(dados)
        setLoading(true)
        }
        catch (error){
          console.log("Ocorreu um erro ao carregar getchPokemons link: ",error)
        }
      } 
    fetchPokemons()
  }, [])

  // useEffect(() => {
  //   const fetchPokemons = async () => {
  //     try{
  //       const data = await getPokemons()
  //       const promises = data.results.map(async pokemon => {
  //         return await getPokemonsByLink(pokemon.url)
  //       })
  //       const results = await Promise.all(promises)
  //       setPokemonsByLink(results)
  //       setLoading(true)
  //       }

  //     catch (error){
  //       console.log("Ocorreu um erro ao carregar getchPokemons link: ",error)
  //     }}
  //   fetchPokemons()
  // }, [])

  // useEffect(() => {
  //   const fetchPokemons = async () => {
  //     const data = await getPokemonsDados(pokemonFinal)
  //     setPokemonsByLink(data)
  //     setLoading(true)
  //   }
  //   fetchPokemons()
  // }, [])
  return (
    <div className="App">
      {!loading && <Loading/>}
      {loading && 
      <>
      <NavBar setSprit={setSprit} sprit={sprit} setBuscadorPkm={setBuscadorPkm} setCurrentGeneration={setCurrentGeneration}/>
      <h1>{generationName[Number(currentGeneration)]} - {currentGeneration}ª Geração</h1>
      </>
      }
      {/* <Pokedex todosPokemonsIniciais={todosPokemonsIniciais} sprit={sprit}/> */}
      <PokedexAll pokemonsByLink={pokemonsByLink} buscadorPkm={buscadorPkm} sprit={sprit} loading={loading} currentGeneration={currentGeneration}/>
    </div>
  )
}
export default App
