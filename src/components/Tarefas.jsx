import React from 'react'

const concluirTarefa = alvo => {
    let classesAtuais = JSON.parse(localStorage.getItem('classes'))
    let elemento = document.querySelector(`#element${alvo}`)
    elemento.classList.toggle('tarefaConcluida')
    classesAtuais[alvo] = elemento.className
    localStorage.setItem('classes', JSON.stringify(classesAtuais))
}

const Tarefas = props => {
    let classe = props.classe
    if (props.classe === undefined || props.classe === null) {
        classe = "tarefaInacabada"
    }
    return (
        <>
            <li key={props.index}>
                <button
                    onClick={() => concluirTarefa(props.index)}
                    id={`element${props.index}`}
                    className={classe}
                >
                    {props.item}
                </button>
            </li>
        </>
    )
}

export default Tarefas
