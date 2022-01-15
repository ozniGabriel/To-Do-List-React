import React, { useState } from 'react'
import Tarefas from './Tarefas'

let objetivos = []
let fundo = []
let texto = []

// BUSCA NO LOCAL STORAGE AS TAREFAS JÁ SALVAS
function buscarTarefas() {
  let objetivosAtualizados = JSON.parse(localStorage.getItem('tarefas'))

  if(objetivosAtualizados !== null && objetivosAtualizados.length > 0){
    let estiloFundo = JSON.parse(localStorage.getItem("estiloFundo"))
    let estiloTexto = JSON.parse(localStorage.getItem("estiloTexto"))

    return objetivosAtualizados.map((item, index) => {
      return <Tarefas item={item} index={index} key={index} texto={estiloTexto[index]} fundo={estiloFundo[index]}/>
    })

  } else {
    localStorage.setItem("estiloFundo", JSON.stringify([]))
    localStorage.setItem("estiloTexto", JSON.stringify([]))
    return (<h3>Sem nada pra fazer?</h3>)
  }
}

// ATUALIZA A LISTA DA LOCAL STORAGE
function atualizarTarefas(listaAtualizada, fundo, texto) {
  localStorage.setItem('tarefas', JSON.stringify(listaAtualizada))
  localStorage.setItem('estiloFundo', JSON.stringify(fundo))
  localStorage.setItem('estiloTexto', JSON.stringify(texto))
}

const TodoList = () => {
  const [arr, setArr] = useState(objetivos)
  
  const addTarefa = () => {
    let novaTarefa = prompt('Digite a nova Tarefa:')
    objetivos.push(novaTarefa)
    fundo.push("aliceblue")
    texto.push("none")
    atualizarTarefas(objetivos, fundo, texto)
    return setArr(buscarTarefas)
  }

  const resetarLista = ()=>{
    localStorage.removeItem('tarefas')
    localStorage.removeItem('estiloTexto')
    localStorage.removeItem('estiloFundo')
    objetivos = []
    return setArr(atualizarTarefas(objetivos))
  }

  return (
    <>
      <ul>{buscarTarefas()}</ul>
      <button onClick={addTarefa} className="btn btn-success">
        Nova Tarefa
      </button>
      <button onClick={resetarLista} className="btn btn-danger">Reiniciar Lista</button>
    </>
  )
}

export default TodoList
