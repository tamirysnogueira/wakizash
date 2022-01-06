let empty = document.getElementById('empty')
let deleteButton = document.getElementById('delete')

if(localStorage.getItem('id') == null){
    deleteButton.style.display = 'none'
    empty.style.display = 'block'

} else {
    empty.style.display = 'none'
    deleteButton.style.display = 'flex'


    let arrayId = JSON.parse(localStorage.getItem('id'))
    let containerList = document.getElementById('list')
    
    for(let id of arrayId){
        for(let product of allProducts){
            if(id == product.name){
                containerList.innerHTML += `
                    <li>
                        <img src="${product.image}" alt="">
                        <p>${product.name}</p>
                        <span>R$ ${product.price},00</span>
                    </li>
                `
            }
        }
        
    }

    let totalSpan = document.getElementById('totalSpan')


    totalSpan.innerHTML = localStorage.getItem('soma')
}

deleteButton.addEventListener('click', ()=> {
    let escolha = window.confirm('Remover todos os itens?')

    if (escolha != true){
        return false
    }
    
    if (escolha == true){
        localStorage.clear()

        alert('Itens Removidos!')

        location.reload()
    }
})
