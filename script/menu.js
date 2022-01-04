let allProducts = [
    {
        name: 'Hot Holl',
        price: '20',
        image: '../../img/img-produtos/hot-roll.svg'
    },
    {
        name: 'California',
        price: '30',
        image: '../../img/img-produtos/california.svg'
    },
    {
        name: 'Makis',
        price: '10',
        image: '../../img/img-produtos/makis.svg'
    },
    {
        name: 'Oshizushi',
        price: '10',
        image: '../../img/img-produtos/oshizushi.svg'
    },
    {
        name: 'Rainbow Rolls',
        price: '20',
        image: '../../img/img-produtos/rainbow-rolls.svg'
    },
    {
        name: 'Sashimi',
        price: '30',
        image: '../../img/img-produtos/sashimi.svg'
    },
    {
        name: 'Spring Rolls',
        price: '40',
        image: '../../img/img-produtos/spring-rolls.svg'
    },
    {
        name: 'Sushi',
        price: '25',
        image: '../../img/img-produtos/california.svg'
    }
]

onload = function() {
    let pegar = localStorage.getItem('soma')
    let teste = document.getElementById('teste')

    if (pegar == null){
        return teste.innerHTML = '0'
    }

    if (pegar != null){
        return teste.innerHTML = localStorage.getItem('soma')
    }
}

let foods = document.querySelector('.foodsMenu')
for(let products of allProducts){
    foods.innerHTML += `
        <div class="containerFoods" id="${products.name}">
            <h3>${products.name}</h3>
            <p>10 unidades</p>

            <p>R$ ${products.price},00 </p>
            <button onclick="adicionar(this)">
                <span>Adicionar ao carrinho</span>
            </button>
        </div>
    
    `

    let changeImageFood = document.getElementById(`${products.name}`)

    changeImageFood.style.backgroundImage = `url(${products.image})`
}

function adicionar(produto){
    let pai = produto.parentNode

    let id = pai.id

    let price = ()=> {
        for(let products of allProducts){
            if(id == products.name){
                return parseInt(products.price) 
            }
        }
    }

    calc(price())
}

function calc(price){
    let teste = document.getElementById('teste')

    let value = parseInt(teste.innerHTML) 

    let persistir = value + price

    localStorage.setItem('soma', persistir)

    teste.innerHTML = localStorage.getItem('soma')

}