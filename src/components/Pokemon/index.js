import './Pokemon.css'
import Tilt from 'react-parallax-tilt'
import { Col, Container, Row } from 'react-bootstrap'
import { getEvolutionChain } from '../../api'

const Pokemon = ({
  valorName,
  valorId,
  valorType1,
  valorType2,
  valorSprite,
  hpStats,
  attackStats,
  defenseStats,
  especialAttackStats,
  especialDefenseStats,
  speedStats,
  setPokemonCard,
  pokemonCard,
  pokemonsAcumulados,
  firstForm,
  firstFormSprite,
  secondForm,
  secondFormSprite,
  thirdForm,
  thirdFormSprite
}) => {
  // const evolution = async () => {
  //   const evolutions = await getEvolutionChain(valorName)
  //   console.log(evolutions)
  //   {
  //     pokemonsAcumulados.map(
  //       valor =>
  //         valor.name ===
  //         evolutions.firstForm +
  //           (valor.name === evolutions.secondForm &&
  //             console.log(
  //               valor.sprites.other['official-artwork'].front_default
  //             ))
  //     )
  //   }
  // }
  function ola() {
    // console.log(thirdFormSprite)
  }
  ola()
  return (
    // <div className='pokemonUnitario' id={pokemonCard ? "active" : ""}>
    //   <Tilt glareEnable={true} perspective={500}
    // glareMaxOpacity={0.45} scale={1.0} tiltMaxAngleX={0.3} tiltMaxAngleY={0.3} gyroscope={true}>
    //   <div className='pokemon' id={valorType}>
    //   <img src={valorSprite} onClick={() => setPokemonCard(false)}></img>
    //     <span>{valorName}</span>
    //     <span>{valorId}</span>
    //     <span>{valorType}</span>
    //     <p>{hpStats}</p>
    //     <p>{attackStats}</p>
    //     <p>{defenseStats}</p>
    //     <p>{especialAttackStats}</p>
    //     <p>{especialDefenseStats}</p>
    //   </div>
    //</Tilt>
    // </div>

    <Container
      className="pokemonUnitario"
      id={pokemonCard ? 'active' : ''}
      onClick={() => setPokemonCard(false)}
    >
      {/* <Row>
        <h1 className="tituloPkm2">{valorName}</h1>
      </Row> */}
      <Row className="pokemon" id={valorType1}>
        <Col className="colLeft">
          <span className="pkmId">#{valorId}</span>
          <img src={valorSprite}></img>
          <div className="types">
            <span className="type" id={valorType1}>
              {valorType1}
            </span>
            {valorType2 !== null && (
              <span className="type" id={valorType2}>
                {valorType2}
              </span>
            )}
          </div>
        </Col>
        <Col class="text-center">
          <Row class="pkmTitle">
            <h1 class="pkmTitle">{valorName}</h1>
          </Row>
          <Row></Row>
          <Row></Row>
          <Row className="progress-bar__father">
            <dt className="atributeName">HP</dt>
            <dd>
              <progress className="progress-bar" max="120" value={hpStats}>
                {hpStats}%
              </progress>
            </dd>
            <dt className="atributeNumber">{hpStats}</dt>
          </Row>
          <Row className="progress-bar__father">
            <dt className="atributeName">Attack</dt>
            <dd>
              <progress className="progress-bar" max="120" value={attackStats}>
                {attackStats}%
              </progress>
            </dd>
            <dt className="atributeNumber">{attackStats}</dt>
          </Row>
          <Row className="progress-bar__father">
            <dt className="atributeName">Defense</dt>
            <dd>
              <progress className="progress-bar" max="120" value={defenseStats}>
                {defenseStats}%
              </progress>
            </dd>
            <dt className="atributeNumber">{defenseStats}</dt>
          </Row>
          <Row className="progress-bar__father">
            <dt className="atributeName">Sp.Atk</dt>
            <dd>
              <progress
                className="progress-bar"
                max="120"
                value={especialAttackStats}
              >
                {especialAttackStats}%
              </progress>
            </dd>
            <dt className="atributeNumber">{especialAttackStats}</dt>
          </Row>
          <Row className="progress-bar__father">
            <dt className="atributeName">Sp.Def</dt>
            <dd>
              <progress
                className="progress-bar"
                max="120"
                value={especialDefenseStats}
              >
                {especialDefenseStats}%
              </progress>
            </dd>
            <dt className="atributeNumber">{especialDefenseStats}</dt>
          </Row>
          <Row className="progress-bar__father">
            <dt className="atributeName">Speed</dt>
            <dd>
              <progress className="progress-bar" max="120" value={speedStats}>
                {speedStats}%
              </progress>
            </dd>
            <dt className="atributeNumber">{speedStats}</dt>
          </Row>
          <Row className="evolutionPkm__father" >
            <h1>Evolutions</h1>
            <Col className="evolutionPkm bla1" id={firstForm !== null ? "active" : ""}>
              <span>{firstForm}</span>
              <img src={firstFormSprite}></img>
            </Col>
            {/* {secondFormSprite !== null && (
              <Col className="evolutionPkm">
                <span>{secondForm}</span>
                <img src={secondFormSprite}></img>
              </Col>
            )} */}
            <Col className="evolutionPkm" id={secondFormSprite !== null ? "active" : ""}>
              <span>{secondForm}</span>
              <img src={secondFormSprite}></img>
            </Col>

              <Col className="evolutionPkm bla2" id={thirdForm !== null ? "active" : ""}>
                <span>{thirdForm}</span>
                <img src={thirdFormSprite}></img>
              </Col>
              {/* {thirdFormSprite !== null ? (
              <Col className="evolutionPkm" id={thirdForm !== null ? "active" : ""}>
                <span>{thirdForm}</span>
                <img src={thirdFormSprite}></img>
              </Col>
            ) : null} */}
          </Row>
          {/* <Row className="evolutionPkm">
            <img src={secondFormSprite}></img>
            {secondFormSprite}
          </Row> */}
          {/* <Row className="evolutionPkm">
            <img src={thirdFormSprite}></img>
          </Row> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Pokemon
