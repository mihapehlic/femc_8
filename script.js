const socials = document.querySelector('.share-option');
const shareIcon = document.querySelector('.share-icon');

shareIcon.addEventListener('click', () => {
  socials.classList.toggle('hidden');
  console.log(socials);
});
