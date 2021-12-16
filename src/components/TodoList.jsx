import React, { useState } from 'react'
import Tarefas from './Tarefas'
import objetivos from './objetivos.js'

// BUSCA NO LOCAL STORAGE AS TAREFAS JÁ SALVAS
function buscarTarefas() {
  let objetivosAtualizados = JSON.parse(localStorage.getItem('tarefas'))
  return objetivosAtualizados.map((item, index) => {
    return <Tarefas item={item} index={index} />
  })
}

// ATUALIZA A LISTA DA LOCAL STORAGE
function atualizarTarefas(listaAtualizada) {
  localStorage.setItem('tarefas', JSON.stringify(listaAtualizada))
}

// RESETA A LISTA DE TAREFAS ENVIANDO PARA A LOCAL STORAGE AS TAREFAS PADRÃO
function resetarLista(){
  localStorage.setItem("tarefas", JSON.stringify(objetivos))
}

const TodoList = () => {
  const [arr, setArr] = useState(objetivos)
  
  const addTarefa = () => {
    let novaTarefa = prompt('Digite a nova Tarefa:')
    objetivos.push(novaTarefa)
    atualizarTarefas(objetivos)
    return setArr(buscarTarefas)
  }

  return (
    <>
      <ul>{buscarTarefas()}</ul>
      <button onClick={addTarefa} className="btn btn-success">
        Nova Tarefa
      </button>
      <button onClick={()=> setArr(resetarLista)} className="btn btn-success">Reiniciar Lista</button>
    </>
  )
}


export default TodoList
