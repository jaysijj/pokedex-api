import './PokedexAll.css'
// import Tilt from 'react-vanilla-tilt'
// import './../../vanilla-tilt.js'
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';


const PokedexAll = ({pokemonsByLink, buscadorPkm, sprit, loadingPkm, currentGeneration, generation, pokemonsAcumulados, generationName}) => {
  const [noLocationSoma, setNoLocationSoma] = useState(0)
  var locationSoma = 0
  const audio_cardReveal = document.querySelector(".audio_cardReveal")
  function cardReveal(){
    // audio_cardReveal.currentTime = 0
    // audio_cardReveal.play()
    // console.log("aa")
  }

  const spritPkm = `valor.sprites.other["official-artwork"].${sprit}`
  // const generation = {"1": [0,151], "2": [152,251], "3": [252,386], "4": [387,494], "5": [495,649], "6": [650,721], "7": [722,809], "8": [810,905], "all": [0,905]}


  // const spritPkm = `valor.sprites.${sprit}`

  return (
    <div>
        {loadingPkm ? 
        <h1>{generationName[Number(currentGeneration)]} - {currentGeneration}ª Geração</h1> 
        : 
        <h1>Carregando</h1> }
    <div className="pkmContainer__father ">
        {pokemonsAcumulados.length>0 && pokemonsAcumulados.map((valor, index) => ( (buscadorPkm==="" || buscadorPkm===undefined) && (valor.id>=generation[currentGeneration][0] && valor.id<=generation[currentGeneration][1])? 
      (
        <Tilt key={valor.id} glareEnable={true} perspective={500}
        glareMaxOpacity={0.45} scale={1.02} >
              <div className='pkmContainer__children parallax-effect-glare-scale' onMouseOver={cardReveal} id={valor.types[0].type.name}>
                <span className='pkmId'>#{valor.id}</span>
                <div className='pkmName'>{valor.name}</div>                
                <img className='pkmImg' src={eval(spritPkm)}/>
                <div className='types'>
                {pokemonsAcumulados.length>0 && (
                  <>
                    <span className='type'id={valor.types[0].type.name}>{valor.types[0].type.name}</span>
                    {valor.types.length>1 && <span className='type' id={valor.types[1].type.name}>{valor.types[1].type.name}</span>}
                  </>
                )}
                </div>
              </div>
        </Tilt>
                ) : 
        (
          (valor.name.indexOf(buscadorPkm)!==-1)&&(valor.id>=generation[currentGeneration][0] && valor.id<=generation[currentGeneration][1]) ? 
          (        
            <Tilt key={valor.id} glareEnable={true} perspective={500}
            glareMaxOpacity={0.45} scale={1.02}>
                  <div  className='pkmContainer__children parallax-effect-glare-scale' id={valor.types[0].type.name}>
                    <span className='pkmId'>#{valor.id}</span>
                    <div className='pkmName'>{valor.name}</div>                
                    <img className='pkmImg' src={eval(spritPkm)}/>
                    <div className='types'>
                    {pokemonsAcumulados.length>0 && (
                      <>
                        <span className='type'id={valor.types[0].type.name}>{valor.types[0].type.name}</span>
                        {valor.types.length>1 && <span className='type' id={valor.types[1].type.name}>{valor.types[1].type.name}</span>}
                      </>
                    )}
                    </div>
                  </div>
            </Tilt>
                  ) : null

              )
      ))}
      {(noLocationSoma===generation[currentGeneration][1]) && <h1>Não foram encontrados resultados</h1>}

{/* {pokemonsByLink.length>0 && pokemonsByLink.map((valor, index) => ( buscadorPkm==="" || buscadorPkm===undefined? 
      (
        valor.id>=generation[currentGeneration][0] && valor.id<=generation[currentGeneration][1] ? (
          <div key={index} className='pkmContainer__children' id={valor.types[0].type.name}>
          <div>{valor.name}</div>
          <div>{valor.id}</div>
          <img className='pkmImg' src={eval(spritPkm)}/>
        </div>
          ) : 
  (
    valor.name.indexOf(buscadorPkm)!==-1 ? 
    (        <div key={index}  className='pkmContainer__children'>
              <div>{valor.name}</div>
              <img className='pkmImg' src={eval(spritPkm)}/>
            </div>) : ""

        )
        ) : ""

      ))} */}
      {/* {!loading && <Loading/>} */}
    </div>
    </div>
  )
}

export default PokedexAll