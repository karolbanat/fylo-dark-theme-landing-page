const signUpInput = document.querySelector('#sign-up-input');
const submitBtn = document.querySelector('#sign-up-submit');
const errorMsg = document.querySelector('#email-error');

const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email) => {
	return EMAIL_REGEX.test(email);
};

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const inputValue = signUpInput.value;
	if (validateEmail(inputValue)) {
		signUpInput.value = '';
		errorMsg.classList.remove('visible');
	} else {
		errorMsg.classList.add('visible');
	}
});
