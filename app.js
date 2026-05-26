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
    const inputNome = document.getElementById('nome').value
    const inputCelular = document.getElementById('celular').value
    const inputFoto = document.getElementById('foto').value
    const inputEmail = document.getElementById('email').value
    const inputEndereco = document.getElementById('endereco').value
    const inputCidade = document.getElementById('cidade').value

    const contato ={
        inputNome,
        inputCelular,
        inputFoto,
        inputEmail,
        inputEndereco,
        inputCidade
    }

    document.getElementById('bt_cadastro').addEventListener('click', await inserirContato(await postContato(contato)))
}

inserirContato()