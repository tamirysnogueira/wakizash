let allProducts = [
    {
        name: 'Hot Holl',
        price: '20',
        image: '../../img/img-produtos/hot-holl.svg'
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
        name: 'Sashimis',
        price: '30',
        image: '../../img/img-produtos/sashimi.svg'
    },
    {
        name: 'Spring',
        price: '40',
        image: '../../img/img-produtos/spring-rolls.svg'
    },
    {
        name: 'Sushi',
        price: '25',
        image: '../../img/img-produtos/sushi.svg'
    }

]

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
                let arrayId = JSON.parse(localStorage.getItem('id')) || []
                arrayId.push(products.name)

                localStorage.setItem('id', JSON.stringify(arrayId))

                return parseInt(products.price) 
            }
        }
    }

    let arrayPrices = JSON.parse(localStorage.getItem('price')) || []
    

    arrayPrices.push(price())

    localStorage.setItem('price', JSON.stringify(arrayPrices))

    calc()
}

function calc(){
    let soma = 0
    for(let price of JSON.parse(localStorage.getItem('price'))){
        soma += price
    }

    localStorage.setItem('soma', soma)

    alert('Produto adicionado ao carrinho!')
}