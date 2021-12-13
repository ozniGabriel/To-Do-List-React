import React, { useState } from 'react'
import Tarefas from './Tarefas'
import objetivos from './objetivos.js'


const TodoList = () => {

  function mostrarLista(){
    return objetivos.map((item, index) => {
      return <Tarefas item={item} index={index} />
    })
  }

  const addTarefa = ()=> {
    let novaTarefa = prompt('Digite a nova Tarefa:')
    objetivos.push(novaTarefa)
    return mostrarLista()
  }

  const [arr, setArr] = useState(objetivos)
  
  return (
    <>
      <ul>{mostrarLista()}</ul>
      <button onClick={()=> setArr(addTarefa)} className='btn btn-success'>Nova Tarefa</button>
    </>
  )

}

export default TodoList
