
const restArr = ['YardHouse', 'Olive Garden', 'Popos', 'Firebirds', 'Famous Daves']

const random = Math.floor(Math.random() * restArr.length)



const restRec = (event) => {
    event.preventDefault()
    alert('Your random restaurant is: ' + restArr[random])
}

const pickRestaurant =  document.getElementById('restaurant')

pickRestaurant.addEventListener('click', restRec)