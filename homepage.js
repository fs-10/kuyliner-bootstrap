let listProducts = document.getElementById("cards");

async function getDataProducts() {
  try {
    let respons = await fetch(
      "https://6525feea67cfb1e59ce7cd5b.mockapi.io/products"
    );
    let products = await respons.json();

    console.log(products);

    products.map((values) => {
      console.log(values);
      let cardProducts = `<div id="cards" class="cards col-md-4">
      <div class="card bg-light">
        <img
          src=${values.imageProduct}
          class="card-img-top"
          alt="..."
        />
        <div
          class="card-body d-flex justify-content-between mb-2 py-3 align-items-center"
        >
          <div class="card-content bg-light d-flex flex-column g-1">
            <div class="d-flex bg-light justify-content-around">
              <h5 class="tittleCard card-title">${values.nameCompany}</h5>
            </div>
            <h2 class="menuCard card-menu mt-3">${values.nameProduct}</h2>
            <p class="textCard card-text">Jakarta Timur</p>
          </div>
          <div class="card-rating">
            <h6 class="card-value text-warning">
              <i class="bi bi-star-fill"></i> 4.8/5.0
            </h6>
          </div>
        </div>
      </div>
    </div>`;
      listProducts.innerHTML += cardProducts;
    });
  } catch (error) {
    console.log(error);
  }
}

getDataProducts();
