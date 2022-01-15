import React from 'react'

const excluir = alvo => {
  let elemento = document.querySelector(`#element${alvo}`)
  let estiloTexto = JSON.parse(localStorage.getItem('estiloTexto'))
  let estiloFundo = JSON.parse(localStorage.getItem('estiloFundo'))
  
  if (elemento.style.textDecoration === 'line-through') {
    elemento.style.textDecoration = 'none'
    elemento.style.color = 'black'
    elemento.style.backgroundColor = 'aliceblue'

    estiloFundo[alvo] = 'aliceblue'
    estiloTexto[alvo] = 'none'
    localStorage.setItem('estiloFundo', JSON.stringify(estiloFundo))
    localStorage.setItem('estiloTexto', JSON.stringify(estiloTexto))
  } else {
    elemento.style.textDecoration = 'line-through'
    elemento.style.color = 'gray'
    elemento.style.backgroundColor = 'rgb(134, 24, 24)'

    estiloFundo[alvo] = 'rgb(134, 24, 24)'
    estiloTexto[alvo] = 'line-through'
    localStorage.setItem('estiloFundo', JSON.stringify(estiloFundo))
    localStorage.setItem('estiloTexto', JSON.stringify(estiloTexto))
  }
}

const Tarefas = props => {
  return (
    <>
      <li key={props.index}>
        <button
          onClick={() => excluir(props.index)}
          id={`element${props.index}`}
          style={{ textDecoration: props.texto, backgroundColor: props.fundo }}
          className="btn btn-light"
        >
          {props.item}
        </button>
      </li>
    </>
  )
}

export default Tarefas
