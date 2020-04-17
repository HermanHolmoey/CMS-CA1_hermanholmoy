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
    console.dir(json);
    const container = document.querySelector(".displayJson");
    let html = "";
    
    for (let index = 0; index < product.length; index++) {
        html += `<div class="displayJson">
                        <img class="image" src="${product[index].images[0].src}" alt="${product[index].images.name}">
                        <div class="container">
                            <h3>${product[index].name}</h3>
                            <p>${product[index].prices.price}</p>
                            <a class="button">Add to cart</a>
                        </div>
                </div>`;
    }
    container.innerHTML = html;
}

productInfo(baseUrl);

