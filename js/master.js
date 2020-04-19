const baseUrl = `http://localhost:8888/wp-json/wc/store/`;
const productUrl = `${baseUrl}products`

fetch(productUrl)
    .then(function(response) {
       return response.json(); 
    })
    .then(function(json) {
        productInfo(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function productInfo(json) {
    const product = json;

    const container = document.querySelector(".displayJson");
    let html = "";
    
    for (let index = 0; index < product.length; index++) {
        html += `<div class="displayJson">
                        <img class="image" src="${product[index].images[0].src}" alt="${product[index].images.name}">
                        <div class="container">
                            <h4>${product[index].name}</h4>
                            <p class="price">${product[index].prices.price_prefix}${product[index].prices.regular_price}.00</p>
                            <a class="button">${product[index].add_to_cart.text}</a>
                        </div>
                </div>`;
    }
    container.innerHTML = html;
}

productInfo(baseUrl);

