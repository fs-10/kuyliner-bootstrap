


function handleStarReviews() {
  const labelRating = document.querySelector('label[for="rating"]');
  const getStarsRating = labelRating.getElementsByTagName('i');
  const rating = document.getElementById('rating-star');


  for (let i = 0; i < getStarsRating.length; i++) {
    getStarsRating[i].addEventListener('click', () => {

      switch (i) {
        case 0:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[2].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[3].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[4].classList.replace('bi-star-fill', 'bi-star');
          rating.value = 1;
          break;

        case 1:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[2].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[3].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[4].classList.replace('bi-star-fill', 'bi-star');
          rating.value = 2;
          break;

        case 2:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[2].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[3].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[4].classList.replace('bi-star-fill', 'bi-star');
          rating.value = 3;
          break;

        case 3:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[2].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[3].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[4].classList.replace('bi-star-fill', 'bi-star');
          rating.value = 4;
          break;

        case 4:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[2].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[3].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[4].classList.replace('bi-star', 'bi-star-fill');
          rating.value = 5;
          break;


        default:
          rating.value = 1;
          break;
      }

      console.log(rating.value);
    });
  }
}

handleStarReviews();


const { search } = window.location;

function handleDomId() {
  return {
    imageProduct: document.getElementById('img-product'),
    nameProduct: document.getElementById('name-product'),
    nameCompany: document.getElementById('name-company'),
    locationCompany: document.getElementById('company-location'),
    openHoursCompany: document.getElementById('open-hour-company'),
    priceProduct: document.getElementById('price-product'),
    openDayCompany: document.getElementById('open-day-company'),
    phoneCompany: document.getElementById('number-phone-company'),
    rating: document.getElementById('rating'),
    gmaps: document.getElementById('gmaps')
  }
}


async function dataApi() {
  try {
    const response = await fetch(`https://6525feea67cfb1e59ce7cd5b.mockapi.io/products/${search}`);
    const product = await response.json();
    const {
      imageProduct,
      nameProduct,
      nameCompany,
      locationCompany,
      openHoursCompany,
      openDayCompany,
      price,
      phoneCompany,
      rating,
      gmaps
    } = product[0];

    // const parseStringPrice = priceProduct.toString();
    console.log(price)

    console.log(product[0])

    handleDomId().imageProduct.src = `.${imageProduct}`;
    handleDomId().nameProduct.innerHTML = nameProduct;
    handleDomId().nameCompany.innerHTML = nameCompany;
    handleDomId().locationCompany.innerHTML = locationCompany;

    handleDomId().openDayCompany.innerHTML = openDayCompany;
    handleDomId().openHoursCompany.innerHTML = openHoursCompany;
    handleDomId().priceProduct.innerHTML = `${price}.000`;
    handleDomId().phoneCompany.innerHTML = phoneCompany;
    handleDomId().gmaps.src = `${gmaps}`;
    handleDomId().rating.innerHTML = rating;

  } catch (err) {
    console.log(`Error ${err}`);
  }
}

dataApi();