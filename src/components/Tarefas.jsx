import React from 'react'

const excluir = (alvo)=> {
  let elemento = document.querySelector(`#element${alvo}`)
  if(elemento.style.textDecoration === "line-through"){
    elemento.style.textDecoration = "none"
    elemento.style.color = "black"
    elemento.style.backgroundColor = "aliceblue"
  } else {
    elemento.style.textDecoration = "line-through"
    elemento.style.color = "gray"
    elemento.style.backgroundColor = "rgb(134, 24, 24)"
  }
}

const Tarefas = props => {
  return (
    <>
      <li key={props.index} >
        <button onClick={()=> excluir(props.index)} 
                id={`element${props.index}`} 
                className='btn btn-light'>{props.item}</button>
      </li>
    </>
  )
}

export default Tarefas
