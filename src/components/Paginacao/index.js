import './Paginacao.css'

const Paginacao = ({
  setPaginacao,
  paginacao,
  generation,
  currentGeneration,
  loadingPkm
}) => {
  // function ola(){
  //   console.log(paginacao)
  //   console.log(generation[currentGeneration][1])
  //   console.log(loadingPkm)
  // }
  // ola()

  return (
    <div className="paginacaoFather">
      {/* <button className='paginacaoButton paginacaoButton__left' onClick={() => paginacao>30 && setPaginacao(paginacao-30)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13v7l-8-8 8-8v7h8v2z"/></svg></button>
      <button className='paginacaoButton paginacaoButton__right' onClick={() => paginacao<generation[currentGeneration][1] && setPaginacao(paginacao+30)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13H4v-2h8V4l8 8-8 8z"/></svg></button> */}
      <div className="paginacaoButton">
        {!loadingPkm ? (
          <div className="loadingImg__father">
            <img className="loadingImg" src="./assets/loading-pokemon4.gif" />
          </div>
        ) : (
          paginacao + 29 < generation[currentGeneration][1] && (
            <div
              className="loadingArrow__father"
              onClick={() =>
                paginacao < generation[currentGeneration][1] &&
                setPaginacao(paginacao + 30)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z" />
              </svg>
            </div>
          )
        )}

        {/* <div className='loadingImg__father' id={loadingPkm ? "" : "active"}><img className='loadingImg' src='./assets/loading-pokemon4.gif'/></div>
        <div className='loadingArrow__father' id={(!loadingPkm && (paginacao+29>generation[currentGeneration][1])) ? "" : "active"} onClick={() => paginacao<generation[currentGeneration][1] && setPaginacao(paginacao+30)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"/></svg>
        </div> */}
      </div>
    </div>
  )
}

export default Paginacao
