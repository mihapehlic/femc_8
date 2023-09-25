const socials = document.querySelector('.share-option');
const shareBtn = document.querySelector('.share-icon');

shareBtn.addEventListener('click', () => {
  socials.classList.toggle('hidden');
});
