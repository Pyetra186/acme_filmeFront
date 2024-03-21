'use strict'

import  {getFilmes, getFilme, postfilme, deletefilme} from "./filmes.js"

function criarCard (filme) {
    const card = document.createElement('div')
    const contanierFilme = document.getElementById('contanierFilme')
    contanierFilme.classList.add(
        'flex',
        'gap-10',
        'content-center'
        
    )


    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    titulo.classList.add(
        'text-xl',
        'text-white',
        'font-bold',
        'font-sans',
        
    )



    const capaFilme = document.createElement('img')
    capaFilme.src = filme.foto_capa
    capaFilme.classList.add(
        'border-violet',
        'border-2',
        'h-60',
        'w-100',
    )


    const texto = document.createElement('p')
    texto.textContent = filme.sinopse
    texto.classList.add(
        'text-xs',
        'text-white',
        'font-sans',
        
        
        

    )

  


    card.append(capaFilme,titulo, texto)
    contanierFilme.appendChild(card)

    return card, contanierFilme
        
    }


    async function preencherContainer () {
        const container = document.querySelector('body')

        const filmes = await getFilmes()

        filmes.forEach(filme =>{
            const card = criarCard(filme)
            container.appendChild(card)
            console.log(card)

        })
            
        };
        preencherContainer ()
    
/*const filme = {
           "id": "2",
           "nome": "Velozes & Furiosos 7",
            "sinopse": "Velozes e Furiosos 7 acompanha Dom (Vin Diesel), Brian (Paul Walker), Letty (Michelle Rodriguez) e o resto da equipe após os acontecimentos em Londres.",
           "duracao": "02:17:00",
           "data_lancamento": "2015-04-2",
           "data_relancamento": null,
           "foto_capa": "https://br.web.img3.acsta.net/c_310_420/pictures/15/03/30/21/19/054397.jpg",
            "valor_unitario": 20
        
      
}*/

deletefilme(5)
//postfilme (filme)
