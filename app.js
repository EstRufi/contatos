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

async function carregarContatos() {
    const tbody = document.getElementById('tabela')
    tbody.innerHTML = ''
    const listarContato = await getContatos()

    listarContato.forEach(dadosContato => {
        adicionaTabela(dadosContato)
    });
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

    let tdId = document.createElement('td')
    tdId.textContent = contato.id

    let tdNome = document.createElement('td')
    tdNome.textContent = contato.nome

    let tdCelular = document.createElement('td')
    tdCelular.textContent = contato.celular

    let tdFoto = document.createElement('td')
    tdFoto.textContent = contato.foto

    let tdEmail = document.createElement('td')
    tdEmail.textContent = contato.email

    let tdEndereco= document.createElement('td')
    tdEndereco.textContent = contato.endereco

    let tdCidade = document.createElement('td')
    tdCidade.textContent = contato.cidade

    let tdBnt = document.createElement('td')
    let buttonDelete = document.createElement('button')
    buttonDelete.textContent = "deletar"

    buttonDelete.addEventListener('click',async () =>{
        await deleteContato(contato.id)

        await carregarContatos()
    })

    let buttonAtualizar = document.createElement('button')
    buttonAtualizar.textContent = "atualizar"
    

    

    tdBnt.append(buttonDelete,buttonAtualizar)

    tr.append(tdId,tdNome,tdCelular,tdFoto,tdEmail,tdEndereco,tdCidade,tdBnt)
    tbody.appendChild(tr)

    return tbody
}
document.addEventListener('DOMContentLoaded', carregarContatos)
document.getElementById('bt_cadastro').addEventListener('click',inserirContato)