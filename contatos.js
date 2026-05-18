'use strict'
"A única pessoa que nunca erra é a pessoa que não faz nada"

const url = 'https://bakcend-fecaf-render.onrender.com/contatos'

export async function getContatos() {
    const response = await fetch(url)

    if(!response.ok) throw new Error('Erro ao listar um novo contato!')
        return response.json()
}

export async function getContato(id){
    const response = await fetch(`${url}/${id}`)

    if(!response.ok) throw new Error(`Erro ao listar o contato ${id}`)
        return response.json()
}

// Aqui aprendemos sobre criar um post
export async function postContato(contato){
    // aqui fizemos isso para indicar o fetch oq estamos fazendo
    const options ={
        method: 'POST',
        headers:{
            "Content-Type":'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    if(!response.ok) throw new Error('Erro ao criar um novo contato')
        return response.json()
}