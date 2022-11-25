import { useEffect, useState } from 'react'
import { getPokemons, getPokemonsByLink, getPokemonsDados } from './api'
import './App.css'
import NavBar from './components/NavBar'
import Pokedex from './components/Pokedex'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokedexAll from './components/PokedexAll'
import Loading from './components/Loading'
import Paginacao from './components/Paginacao'
import PokemonsAcumulados from './components/PokemonsAcumulados'

function App() {
  const pokemonInicial = 0
  const pokemonFinal = 905
  const [currentGeneration, setCurrentGeneration] = useState("1")
  const [pokemonsByLink, setPokemonsByLink] = useState([])
  const [pokemonsAcumulados, setPokemonsAcumulados] = useState(pokemonsByLink)
  const [sprit, setSprit] = useState("front_default")
  const [buscadorPkm, setBuscadorPkm] = useState()
  const [loading, setLoading] = useState(false)
  const [loadingPkm, setLoadingPkm] = useState(false)
  const generationName = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]
  const generation = {"1": [1,151], "2": [152,251], "3": [252,386], "4": [387,494], "5": [495,649], "6": [650,721], "7": [722,809], "8": [810,905], "all": [0,905]}
  const [paginacao, setPaginacao] = useState(generation[currentGeneration][0])
  // var temp = []
  // const [temp, setTemp] = useState([])

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
        setLoadingPkm(false)
        // let temp = [...pokemonsAcumulados]
        let temp = []
        // console.log(temp)
        const dados = await getPokemonsDados(paginacao, paginacao+29)
        // console.log(dados[dados.length-1].id)
        // console.log(temp.length>0 && temp[temp.length-1].id)
        // // console.log((dados[dados.length-1].id) === (temp[temp.length-1].id))
        // if (temp.length<=0){
        //   temp = [...pokemonsByLink]
        // } else if (((dados[dados.length-1].id) !== (temp[temp.length-1].id))){
          if (dados[0].id === generation[currentGeneration][0]){
            temp = [...dados]
            setPokemonsAcumulados([...dados])
          }else{
            if (pokemonsAcumulados.length<=0){
              setPokemonsAcumulados(dados)
            }else{
              temp.push(...pokemonsAcumulados,...dados)
              setPokemonsAcumulados(temp)
            }
          }
          
          // setPokemonsAcumulados(temp)
        // // }
        // console.log(dados)
        console.log(temp)
        setPokemonsByLink(dados)
        // setPokemonsByLink(prevPokemonByLink => [...prevPokemonByLink, dados])
        setLoading(true)
        setLoadingPkm(true)

        }
        catch (error){
          console.log("Ocorreu um erro ao carregar getchPokemons link: ",error)
        }
      } 
    fetchPokemons()
  }, [currentGeneration, paginacao])
  // useEffect(() => {
  //   const fetchPokemons = async () => {
  //     try{
  //       const dados = await getPokemonsDados(pokemonFinal)
  //       setPokemonsByLink(dados)
  //       setLoading(true)
  //       console.log(dados)
  //       }
  //       catch (error){
  //         console.log("Ocorreu um erro ao carregar getchPokemons link: ",error)
  //       }
  //     } 
  //   fetchPokemons()
  // }, [generation])

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
      <NavBar setSprit={setSprit} sprit={sprit} setBuscadorPkm={setBuscadorPkm} setCurrentGeneration={setCurrentGeneration} setPaginacao={setPaginacao} currentGeneration={currentGeneration} generation={generation} setPokemonsAcumulados={setPokemonsAcumulados}/>
      {/* <h1>{generationName[Number(currentGeneration)]} - {currentGeneration}ª Geração</h1> */}
      </>
      }
      {/* <Pokedex todosPokemonsIniciais={todosPokemonsIniciais} sprit={sprit}/> */}
      {/* <PokemonsAcumulados pokemonsAcumulados={pokemonsAcumulados}/> */}
      <PokedexAll pokemonsByLink={pokemonsByLink} buscadorPkm={buscadorPkm} sprit={sprit} loadingPkm={loadingPkm} currentGeneration={currentGeneration} generation={generation} pokemonsAcumulados={pokemonsAcumulados} generationName={generationName}/>

      {loading && <Paginacao setPaginacao={setPaginacao} paginacao={paginacao} currentGeneration={currentGeneration} generation={generation} loadingPkm={loadingPkm} pokemonsAcumulados={pokemonsAcumulados}/>}      
    </div>
  )
}
export default App
