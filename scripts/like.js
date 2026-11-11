// These class names also connect the markup to the heart animation styles.
const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index], iconButton);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button, iconButtonArray[index]);
});

function toggleIsLiked(heart, button, iconButton) {
  const isLiked = heart.classList.toggle('is-liked');
  button.setAttribute('aria-pressed', String(isLiked));
  iconButton.setAttribute('aria-pressed', String(isLiked));
  // Update immediately so repeated clicks cannot leave stale delayed labels.
  button.querySelector('.button__text').textContent = isLiked ? 'Unlike' : 'Like';
}
