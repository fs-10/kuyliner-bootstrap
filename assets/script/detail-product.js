


function handleStarReviews() {
  const labelRating = document.querySelector('label[for="rating"]');
  const getStarsRating = labelRating.getElementsByTagName('i');
  // const rating = document.getElementById('rating-star');

  for (let i = 0; i < getStarsRating.length; i++) {
    getStarsRating[i].addEventListener('click', () => {

      switch (i) {
        case 0:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[2].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[3].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[4].classList.replace('bi-star-fill', 'bi-star');
          handleDataUsers().ratingStar.value = 1;
          break;

        case 1:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[2].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[3].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[4].classList.replace('bi-star-fill', 'bi-star');
          handleDataUsers().ratingStar.value = 2;
          break;

        case 2:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[2].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[3].classList.replace('bi-star-fill', 'bi-star');
          getStarsRating[4].classList.replace('bi-star-fill', 'bi-star');
          handleDataUsers().ratingStar.value = 3;
          break;

        case 3:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[2].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[3].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[4].classList.replace('bi-star-fill', 'bi-star');
          handleDataUsers().ratingStar.value = 4;
          break;

        case 4:
          getStarsRating[0].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[1].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[2].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[3].classList.replace('bi-star', 'bi-star-fill');
          getStarsRating[4].classList.replace('bi-star', 'bi-star-fill');
          handleDataUsers().ratingStar.value = 5;
          break;


        default:
          handleDataUsers().ratingStar.value = 1;
          break;
      }

      console.log(handleDataUsers().ratingStar.value);
    });
  }
}

handleStarReviews();


const { search } = window.location;

function handleSectionDetail() {
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

async function showingUserProfile() {
  try {

    const responseUser = await fetch(`https://6525feea67cfb1e59ce7cd5b.mockapi.io/users/${localStorage.getItem('id')}`);
    const dataUser = await responseUser.json();
    const { userName, img } = dataUser;

    handleDataUsers().nameUser.innerHTML = userName;
    handleDataUsers().imageUser.src = img;

  } catch (error) {
    console.log(`Error ${error}`);
  }
}

showingUserProfile();

function handleDataUsers() {
  return {
    nameUser: document.getElementById('name-user'),
    imageUser: document.getElementById('image-user'),
    ratingStar: document.getElementById('rating-star'),
    statementUser: document.getElementById('statement-user')
  }
}




// console.log(handleDataUsers().reviewStarUser.value);
const submitReview = document.getElementById('submit-review');

let counter = 1;
submitReview.addEventListener('click', (event) => {
  event.preventDefault();


  console.log(handleDataUsers().statementUser.value);
  console.log(handleDataUsers().ratingStar.value);

  async function handlerFormReview() {

    const { search } = window.location;
    // console.log(search);
    const inputString = search;

    // Ekspresi reguler untuk mencocokkan nomor setelah "?id="
    const regex = /\?id=(\d+)/;

    const match = regex.exec(inputString);
    console.log(match[1]);

    const date = new Date();

    try {

      const responseUser = await fetch(`https://6525feea67cfb1e59ce7cd5b.mockapi.io/users/${localStorage.getItem('id')}`);
      const dataUser = await responseUser.json();
      const { userName, img } = dataUser;

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
        gmaps,
        createdAt,
        emailCompany,
        reviewers
      } = product[0];

      let { id } = reviewers[0];

      const pushProduct = await fetch(`https://6525feea67cfb1e59ce7cd5b.mockapi.io/products/${match[1]}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: `${search}`,
          reviewers: [
            {
              id: (id += 1),
              userName: `${userName}`,
              imgProfile: `${img}`,
              starUser: parseInt([handleDataUsers().ratingStar.value][0]),
              statementUser: `${[handleDataUsers().statementUser.value]}`,
              date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            },
          ],
          "createdAt": createdAt,
          "nameProduct": nameProduct,
          "emailCompany": emailCompany,
          "phoneCompany": phoneCompany,
          "openDayCompany": openDayCompany,
          "locationCompany": locationCompany,
          "nameCompany": nameCompany,
          "imageProduct": imageProduct,
          "price": price,
          "rating": rating,
          "gmaps": gmaps,
          "openHoursCompany": openHoursCompany,
        }),
      });

      if (!pushProduct.ok) {
        throw new Error('Error putting revewiers to the restourant');
      }

      const updatedRestaurant = await pushProduct.json();
      console.log(`Reviewers added to the restourant`, updatedRestaurant);


    } catch (err) {
      console.log(err);
    }
  }

  handlerFormReview();
});



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
      gmaps,
      reviewers
    } = product[0];

    handleSectionDetail().imageProduct.src = `.${imageProduct}`;
    handleSectionDetail().nameProduct.innerHTML = nameProduct;
    handleSectionDetail().nameCompany.innerHTML = nameCompany;
    handleSectionDetail().locationCompany.innerHTML = locationCompany;

    handleSectionDetail().openDayCompany.innerHTML = openDayCompany;
    handleSectionDetail().openHoursCompany.innerHTML = openHoursCompany;
    handleSectionDetail().priceProduct.innerHTML = `${price}.000`;
    handleSectionDetail().phoneCompany.innerHTML = phoneCompany;
    handleSectionDetail().gmaps.src = `${gmaps}`;
    handleSectionDetail().rating.innerHTML = rating;


    let cardReviewers = document.getElementById('card-reviewers');
    reviewers.map(card => {
      const { userName, imgProfile, starUser, statementUser, date } = card;
      let cardReviews = `  <div class="col-12">
      <div class="card mb-3">
        <div class="row g-0">

          <div class="col-5 text-center">
            <div class="card-body px-0">
              <div class="row">
                <div class="col-xl-3 col-12 px-0 ms-xl-5">
                  <img src="${imgProfile}" class="img-fluid rounded-circle size-reviewer" />
                </div>
                <div class="col-xl-auto col-12 mt-xl-4 p-2">
                  <div class="card-body p-0">
                    <h4 class="card-title m-0 text-left fs-4">${userName}</h4>
                  </div>
                </div>
              </div>

              <div class="row my-xl-2 text-center align-self-center ">
                <div class="col-xl-5 ms-xl-4">
                  <i class="bi bi-star-fill fs-4"></i>
                </div>
                <div class="col-xl-auto col-12 p-0 m-0">
                  <p class="m-0 text-left fs-5" style="line-height: 35px;">${starUser}/5</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 my-0 ms-xl-4">
                  <p>${date}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-7">
            <div class="card-body ps-0">
              <p class="card-text">${statementUser}</p>
            </div>
          </div>

        </div>
      </div>
    </div>`;

      cardReviewers.innerHTML += cardReviews;
    });



  } catch (err) {
    console.log(`Error ${err}`);
  }
}

dataApi();

