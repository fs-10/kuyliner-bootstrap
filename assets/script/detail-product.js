const labelRating = document.querySelector('label[for="rating"]');
const getStarsRating = labelRating.getElementsByTagName('i');

for (let i = 0; i < getStarsRating.length; i++) {
  getStarsRating[i].addEventListener('click', () => {

    getStarsRating[i].classList.replace('bi-star', 'bi-star-fill');
    getStarsRating[i].classList.add('checked');

  });
}

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

// console.log(handleDomId().rating);


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