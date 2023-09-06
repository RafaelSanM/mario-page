const modal = document.querySelector('.modal');
const trailerButton = document.querySelector('.trailer-btn');
const closeModalButton = document.querySelector('.close-modal');
const video = document.getElementById('video');
const videoLink = video.src;

function alternarModal() {
	modal.classList.toggle('open');
}

trailerButton.addEventListener('click', () => {
	video.setAttribute('src', videoLink);
	alternarModal();
});

closeModalButton.addEventListener('click', () => {
	video.setAttribute('src', '');
	alternarModal();
});


