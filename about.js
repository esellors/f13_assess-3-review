console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Submitted 100%');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


const theImage = document.querySelector('img');

theImage.addEventListener('mouseover', function() {
	alert('You are not so bad at all')
})