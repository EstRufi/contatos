'use strict'

import { getContatos, getContato,postContato } from "./contatos.js"

const novoContato ={
    "nome": "Estela",
    "celular": "11 9 7171-1264",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "estela@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Itapevi"
}

console.table(await postContato(novoContato))
