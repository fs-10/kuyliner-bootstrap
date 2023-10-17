const labelRating = document.querySelector('label[for="rating"]');
const getStarsRating = labelRating.getElementsByTagName('i');


// ratings.forEach(e => {
//   e.addEventListener('click', (getValue) => {
//     console.log(getValue);
//   });
// });

for (let i = 0; i < getStarsRating.length; i++) {
  getStarsRating[i].addEventListener('click', () => {

    getStarsRating[i].classList.replace('bi-star', 'bi-star-fill');
    getStarsRating[i].classList.add('checked');

  });
}