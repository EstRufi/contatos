'use strict'

const url = 'https://bakcend-fecaf-render.onrender.com/contatos'

export async function getContato() {
    const response = await fetch(url)

    if(response.ok){
        return response.json
    }
    else{
        throw new Error('Erro ao criar um novo contato!')
    }
}