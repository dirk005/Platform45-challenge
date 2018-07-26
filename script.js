//function to display slide
const SlideContent = () => {
	let contentElement = document.getElementById('SlideDisplay');//get the slide content to show slide
	let buttonElement = document.getElementById('displaySlide');//get the button to rotate
	contentElement.classList.toggle('showSlide'); //adds and removes content
	buttonElement.classList.toggle('dispalyButtonRotate'); //rotates button
	
	let screenSize = window.document.body.clientWidth; // gets the width of the screen 

	// only scroll when on tablets or mobile and slide is not displayed 
	if (screenSize < 1024 && contentElement.classList.contains('showSlide')){ 
		contentElement.scrollIntoView();
	}
}

// validate email
const validateEmail = (email) => {
  let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}
//validate date 
const validateDate = (date) => {
  let reg = /^\d{2}\/\d{2}\/\d{4}$/;
  return reg.test(date);
}
//validate Mobile
const validateMobile = (mobile) => {
  let reg = /^\+[0-9 ]+/; 
  return reg.test(mobile);
}
//validate Mobile
const validateCustomerID = (customer) => {
  let reg = /^\d{6}/; // only checked if starts with 6 numbers
  return reg.test(customer);
}
// validate email address
const validate = () => {
	//get elements to change
	let emailElement =document.getElementById('emailInput');
	let emailLabelElement =document.getElementById('emailLabel');
	let dateElement = document.getElementById('dateInput');
	let mobileElement = document.getElementById('MobileInput');
	let customerElement = document.getElementById('customerInput');
	let RequiredTextElement = document.getElementById('requiredText');
	//add variable to check if valid
	let email = emailElement.value;	
	let date = dateElement.value;
	let mobile = mobileElement.value;
	let customer = customerElement.value
	//check if email is valid
	if (validateEmail(email) || email === '') { 
		RequiredTextElement.classList.remove('showRequired');
	   	emailElement.classList.remove('error','showRequired');
	   	emailLabelElement.classList.remove('showRequired','requiredIndicatorError');
	} else {		
		RequiredTextElement.classList.add('showRequired'); 
		emailElement.classList.add('error','showRequired'); 
		emailLabelElement.classList.add('showRequired','requiredIndicatorError'); 		
	}
	//check if date is valid
	if(validateDate(date) || date === ''){
		dateElement.classList.remove('error');
	}else{
		dateElement.classList.add('error');
	}
	//check if mobile is valid	
	if(validateMobile(mobile) || mobile === ''){
		mobileElement.classList.remove('error');
	}else{
		mobileElement.classList.add('error');
	}
	//check if customer id is valid	
	if(validateCustomerID(customer) || customer === ''){
		customerElement.classList.remove('error');
	}else{
		customerElement.classList.add('error');
	}
}

//create event listeners 
document.getElementById('displaySlide').addEventListener('click', SlideContent);
document.getElementById('emailInput').addEventListener('focusout', validate);
document.getElementById('dateInput').addEventListener('focusout', validate);
document.getElementById('MobileInput').addEventListener('focusout', validate);
document.getElementById('customerInput').addEventListener('focusout', validate);
document.getElementById('cancelButton').addEventListener('mouseup',validate);
