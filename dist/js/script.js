'use strict';

window.addEventListener('DOMContentLoaded', () => {

	// Popup

	const popupTrigger = document.querySelectorAll('.works__img'),
		popup = document.querySelector('.popup');

	popupTrigger.forEach((img, index) => {
		img.addEventListener('click', (img) => {
			document.querySelector('.popup__img').src = img.target.src;
		});
		img.addEventListener('click', openPopup);
	});

	function closePopup() {
		popup.classList.add('hide');
		popup.classList.remove('show');
		document.body.style.overflow = '';
	}

	function openPopup() {
		popup.classList.add('show');
		popup.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	}

	popup.addEventListener('click', (e) => {
		if (e.target === popup) {
			closePopup();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && popup.classList.contains('show')) {
			closePopup();
		}
	});

	// Form reset

	const form = document.querySelector('#form');

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		form.reset();
	});
});