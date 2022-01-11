let elList = document.querySelector('.pokemon__list')


for(let pokemon of pokemons){
// CREATE ELEMENT
let newItem = document.createElement('li')
let newImgSection = document.createElement('div')
let newItemImg = document.createElement('img')
let newListSection = document.createElement('div')
let newListLine = document.createElement('img')
let newListHeadingSection = document.createElement('div')
let newCardTitle = document.createElement('h5')
let newListHeart = document.createElement('img')
let newCardText = document.createElement('p')
let newListBottomSection = document.createElement('div')
let newPokemonWeight = document.createElement('p')
let newPokemonHeigh = document.createElement('p')









// SET-ATRIBUTE
newItem.setAttribute('class', 'pokemon__item')
newImgSection.setAttribute('class', 'pokumon__img-section')
newItemImg.setAttribute('class', 'card-img-top')
newItemImg.setAttribute('src', pokemon.img)
newListSection.setAttribute('class', 'card-body pokemon__list-section')
newListLine.setAttribute('class', 'pokemon__list-line')
newListLine.setAttribute('width', '306px')
newListLine.setAttribute('src', './images/line.png')
newListHeadingSection.setAttribute('class', 'd-flex')
newCardTitle.setAttribute('class', 'card-title')
newListHeart.setAttribute('src', './images/heart.png')
newListHeart.setAttribute('width', '30')
newListHeart.setAttribute('height', '30')
newCardText.setAttribute('class', 'card-text pokumon__list-desc')
newListBottomSection.setAttribute('class', 'pokumon__item-section d-flex')
newPokemonWeight.setAttribute('class', 'pokumon__weight')
newPokemonHeigh.setAttribute('class', 'pokumon__age pokumon__weight')





// TEXT-CONTENT
newCardTitle.textContent = pokemon.name
newCardText.textContent = pokemon.candy
newPokemonWeight.textContent = pokemon.weight
newPokemonHeigh.textContent = pokemon.height





// APPENDCHILD
elList.appendChild(newItem)
newItem.appendChild(newImgSection)
newImgSection.appendChild(newItemImg)
newItem.appendChild(newListSection)
newListSection.appendChild(newListLine)
newListSection.appendChild(newListHeadingSection)
newListHeadingSection.appendChild(newCardTitle)
newListHeadingSection.appendChild(newListHeart)
newListSection.appendChild(newCardText)
newListSection.appendChild(newListBottomSection)
newListBottomSection.appendChild(newPokemonWeight)
newListBottomSection.appendChild(newPokemonHeigh)
}