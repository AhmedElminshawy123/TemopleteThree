// Start header btn bar
var btnBar = document.getElementById('bar');
var navigation = document.querySelector('.nav');

var navigationLink = document.querySelector('.header .nav li a')

btnBar.onclick = function() {
    navigation.classList.toggle('active1');
    btnBar.classList.toggle('fa-xmark')
}
window.onscroll = function() {
        navigation.classList.remove('active1');
        btnBar.classList.remove('fa-xmark');
        searchForm.classList.remove('active2')
    }
    // End header btn bar

// Start Search form
var searchForm = document.getElementById('search-form');
var searchBtn = document.querySelector('.search-btn');
var i = document.getElementById('close');
searchBtn.onclick = function() {
    searchForm.classList.toggle('active2')
}
i.onclick = function() {
    searchForm.classList.remove('active2')
}


// End Search form

// Start swiper
const swiper = new Swiper(".swiper", {
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    autoplay: {
        enabled: true,
        delay: 3000
    },
    breakpoints: {
        518: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
    }
});
// End Swiper

// Start loaderImg
function loader() {
    document.querySelector('.loader').classList.add('activeLoader');
}

function activeLoader() {
    setInterval(loader, 800)
}
window.onload = activeLoader;
// End loaderImg

// Start When scroll reload element in the page

window.addEventListener('scroll', reveals);

function reveals() {
    var reveal = document.querySelectorAll('.reveal')
    for (i = 0; i < reveal.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top;
        var revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active')
        }
    }
}

// End When scroll reload element in the page

// Start cart Shopping
var btnShopCart = document.querySelector('.shopping');
var cartShoppingBox = document.querySelector('.cartShopping');
var cancelCartBox = document.querySelector('.cartShopping .cartHead i');
btnShopCart.onclick = () => {
    cartShoppingBox.classList.toggle('active')
}
cancelCartBox.onclick = () => {
    cartShoppingBox.classList.remove('active')
}
window.onscroll = () => {
    cartShoppingBox.classList.remove('active')

}

//  Start when the document is ready
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}

function start() {
    addEvent();
}

function update() {
    addEvent();
    updateToTotal()

}

function addEvent() {
    // Remove items from cart
    var btnRemoveFromCart = document.querySelectorAll('.remove');
    btnRemoveFromCart.forEach(el => {
        el.addEventListener('click', handle_removeCartItem)
    })

    // Change Item quantity
    var quantityCounter = document.querySelectorAll('.quantity');
    quantityCounter.forEach(tar => {
        tar.addEventListener('change', handle_Change)
    })

    // Add to Cart
    var btnAddToCart = document.querySelectorAll('.add')
    btnAddToCart.forEach(btn => {
        btn.addEventListener('click', handle_AddToCart)
    })
}

function handle_AddToCart() {
    let product = this.parentElement.parentElement;
    let image = product.querySelectorAll('.image').src
    let title = product.querySelectorAll('.titleBox').innerHTML
    let price = product.querySelectorAll('.price').innerHTML
    console.log(image, title, price)
}


function handle_Change() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value);
    update();
}

function handle_removeCartItem() {
    this.parentElement.remove();
    update()
}

function updateToTotal() {
    var productsInCart = document.querySelectorAll('.product');
    var totalPrice = document.querySelector('.price2');
    var total = 0;
    productsInCart.forEach(product => {
        var childPrice = product.querySelector('.price1');
        var price = parseFloat(childPrice.innerHtml.replace("$", ""));
        var quantity = product.querySelector('.quantity');
        total += price * quantity;
    })
    total = total.toFixed(2);
    totalPrice.innerHTML = "$" + total
}




// End cart Shopping