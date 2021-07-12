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
		popup.classList.add('popup_hide');
		popup.classList.remove('popup_show');
		document.body.style.overflow = '';
	}

	function openPopup() {
		popup.classList.add('popup_show');
		popup.classList.remove('popup_hide');
		document.body.style.overflow = 'hidden';
	}

	popup.addEventListener('click', (e) => {
		if (e.target === popup) {
			closePopup();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && popup.classList.contains('popup_show')) {
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