console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been sent sucessfully')
}


const pictureCompliment = (evt) => {
	evt.preventDefault()

	alert('You look great!')
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let pictureHover = document.querySelector('img#theimage')

pictureHover.addEventListener('mouseover', pictureCompliment)