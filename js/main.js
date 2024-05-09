'use strict'

import  {getFilmes, getFilme, postfilme, deletefilme} from "./filmes.js"

function criarCard (filme) {
    const card = document.createElement('div')
    const contanierFilme = document.getElementById('contanierFilme')
    contanierFilme.classList.add(
        'flex',
        'gap-2',
        'p-8',
        'cursor-pointer',
        'mb-16',
        

        
    )


    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    titulo.classList.add(
        'text-xl',
        'text-white',
        'font-bold',
        'font-sans',
        'bg-purple-950',
        'font-light',
        'text-justify',
        'border-b-8',
        'border-purple-950',
        'border-l-8',
        
       
        
        
        
    )



    const capaFilme = document.createElement('img')
    capaFilme.src = filme.foto_capa
    capaFilme.classList.add(
        'h-60',
        'w-96',
        'border-b-4',
        'border-purple-950',
        'hover:scale-96'
    )


    const texto = document.createElement('p')
    texto.textContent = filme.sinopse
    texto.classList.add(
        'text-xs',
        'text-white',
        'font-sans',
        'w-96',
        'bg-purple-950',
        'rounded-b-lg',
        'font-light',
        'border-l-8',
        'border-purple-950',
        'border-b-8'        
        
        
        

    )

  


    card.append(capaFilme,titulo, texto)
    contanierFilme.appendChild(card)
    card.addEventListener('click',()=> {
        window.location.href='./info.html?id='+filme.id
    })

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

//deletefilme(5)
//postfilme (filme)
