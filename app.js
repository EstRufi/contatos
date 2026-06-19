'use strict'

import { getContatos, getContato,postContato,putContato, deleteContato } from "./contatos.js"

const novoContato ={
    "nome": "irmão mais velho",
    "celular": "11 9 7171-1264",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "irmãomaisvelho@gmail.com",
    "endereco": "A única pessoa que nunca erra é a pessoa que não faz nada",
    "cidade": "Pense"
}

async function inserirContato(){
    const nome = document.getElementById('nome').value
    const celular = document.getElementById('celular').value
    const foto = document.getElementById('foto').value
    const email = document.getElementById('email').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value

    const contato ={
        nome,
        celular,
        foto,
        email,
        endereco,
        cidade
    }
   
    const contatoPost = await postContato(contato)
    adicionaTabela(contatoPost)
    return contatoPost
}


function adicionaTabela(contato){
    const tbody = document.getElementById('tabela')
    const tr = document.createElement('tr')

    let tdNome = document.createElement('td')
    tdNome.textContent = contato.inputNome

    tr.appendChild(tdNome)
    tbody.appendChild(tr)
}
document.getElementById('bt_cadastro').addEventListener('click',inserirContato)