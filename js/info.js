'use strict'

import { getFilme } from "./filmes.js";
const idFilme = new URLSearchParams(window.location.search).get('id');
    const filmeAtual = await getFilme(idFilme);

async function fetchFilme(filme) {
    

    console.log(filme);
    const nome = document.getElementById('nome');
    nome.textContent = filmeAtual.nome;

    const sinopse = document.getElementById('sinopse');
    sinopse.textContent = filmeAtual.sinopse;

    const duracao = document.getElementById('duracao');
    duracao.textContent = "Duração: " + filmeAtual.duracao.slice(11,19); // Apenas a duração crua

    const data_lancamento = document.getElementById('data_lancamento');
    const dataLancamento = new Date(filmeAtual.data_lancamento);
    data_lancamento.textContent ="Data de Lançamento: " + dataLancamento.toLocaleDateString(); // Apenas a data crua

    const foto_capa = document.getElementById('foto_capa');
    foto_capa.src = filmeAtual.foto_capa;

    const preco = document.getElementById('preco');
    preco.textContent = "Preço: R$ " + filmeAtual.valor_unitario.toFixed(2); // Formatando o preço para 2 casas decimais

    console.log(filmeAtual);
}

fetchFilme(filmeAtual);
