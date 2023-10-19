const labelRating = document.querySelector('label[for="rating"]');
const getStarsRating = labelRating.getElementsByTagName('i');

for (let i = 0; i < getStarsRating.length; i++) {
  getStarsRating[i].addEventListener('click', () => {

    getStarsRating[i].classList.replace('bi-star', 'bi-star-fill');
    getStarsRating[i].classList.add('checked');

  });
}

