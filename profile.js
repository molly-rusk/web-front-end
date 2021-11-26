
const favColor = (event) => {
    event.preventDefault()
    alert('My favorite color is blue!')
}

const favPlace = (event) => {
    event.preventDefault()
    alert('My favorite place is somewhere in nature!')
}

const favRitual = (event) => {
    event.preventDefault()
    alert('My favorite ritual is to be determined !')
}


let favColorBtn = document.getElementById('color')
favColorBtn.addEventListener('click', favColor)

let favPlaceBtn = document.getElementById('place')
favPlaceBtn.addEventListener('click', favPlace)

let favRitualBtn = document.getElementById('ritual')
favRitualBtn.addEventListener('click', favRitual)

