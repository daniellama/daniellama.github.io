function clickFunction(event) {
	event.preventDefault();
	console.log('stop that', this );
	
};


$('a').on('click', clickFunction );