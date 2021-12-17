import React, { useState } from 'react'
import Tarefas from './Tarefas'

let objetivos = []

// BUSCA NO LOCAL STORAGE AS TAREFAS JÁ SALVAS
function buscarTarefas() {
  let objetivosAtualizados = JSON.parse(localStorage.getItem('tarefas'))
  if(objetivosAtualizados !== null){
    return objetivosAtualizados.map((item, index) => {
      return <Tarefas item={item} index={index} key={index}/>
    })
  } else {
    return (<h3>Lista Vazia</h3>)
  }
}

// ATUALIZA A LISTA DA LOCAL STORAGE
function atualizarTarefas(listaAtualizada) {
  localStorage.setItem('tarefas', JSON.stringify(listaAtualizada))
}

const TodoList = () => {
  const [arr, setArr] = useState(objetivos)
  
  const addTarefa = () => {
    let novaTarefa = prompt('Digite a nova Tarefa:')
    objetivos.push(novaTarefa)
    atualizarTarefas(objetivos)
    return setArr(buscarTarefas)
  }

  const resetarLista = ()=>{
    localStorage.removeItem('tarefas')
    objetivos.splice(0, objetivos.length)
    return setArr(buscarTarefas)
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
