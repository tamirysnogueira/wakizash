let list = document.getElementById('listFoods')

let listLi = list.children

for(let li of listLi){
    li.addEventListener('click', ()=> {
        for(let id of allProducts){
            if(li.innerText == id.name){
                let divAtual = document.getElementById(`${li.innerText}`)
                divAtual.style.display = 'none'
            }
        }
    })
}