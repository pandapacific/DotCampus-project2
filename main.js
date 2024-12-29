const navToggle = document.getElementById("navToggle");
const navClose = document.getElementById("navClose");
const sidebar = document.getElementById("mobilenav");
const backdrop = document.getElementById("backdrop");

// Open Sidebar by Clicking NavToggle
navToggle.addEventListener("click", () => {

    // Toggle sidebar
    sidebar.classList.toggle("-translate-x-full");

    //    Toggle backdrop and blur

    backdrop.classList.toggle("hidden");

})

// Close Sidebar by Clicking NavClose
navClose.addEventListener("click", () => {

    // Toggle sidebar
   sidebar.classList.toggle("-translate-x-full");

    //    Close backdrop and blur
    backdrop.classList.add("hidden");

});

// Close Sidebar by Clicking Backdrop
backdrop.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    backdrop.classList.add("hidden");
});

// Change big product image when small product image is clicked
function changeImage(newSrc, button) {

    // select the main image
    const productImages = document.querySelectorAll(".productImage");

    // change the src of the old image to the new src
    productImages.forEach(productImage => {
        productImage.src = newSrc;
    })

    // remove hidden class from the button and turn on the hidden class for all the other buttons

    const thumbnails = document.querySelectorAll(".thumbnail"); // select all the thumbnails

    thumbnails.forEach((thumbnail) => {
        if(thumbnail !== button) {
            thumbnail.querySelector("div").classList.add("hidden");
        }
        else{
            thumbnail.querySelector("div").classList.remove("hidden");
        }
    })
}

// get src of all product images
const srcs = ['/images/image-product-1.jpg', '/images/image-product-2.jpg', '/images/image-product-3.jpg', '/images/image-product-4.jpg'];

// convert the srcs to full urls
const newsrcs = srcs.map((src) => {
    return window.location.origin + src;
})

const thumbNails = Array.from(document.getElementById("lightthumb").children);

// const thumbsrcs = Array.from(thumbNails).map(thumb => thumb.querySelector("img").src);
// console.log(thumbsrcs);

// const oldThumbs = Array.from(thumbNails).map(thumbs => thumbs.querySelector("div").classList.contains("hidden"));
    //  console.log(oldThumbs);


// trigger lightbox layer by clicking big product image in desktop view
const lightboxLayer = document.getElementById("lightboxLayer"); // select the lightbox layer

function lightBox() {
    if(window.innerWidth >= 1024) {
        lightboxLayer.classList.toggle("hidden"); //toggle hidden class of the lightbox layer
        lightboxLayer.classList.toggle("grid"); //toggle grid class of the lightbox layer
    }
}

// close lightbox layer when close button is clicked
const lightboxClose = document.getElementById("lightboxClose");
lightboxClose.addEventListener("click", () => {
    lightboxLayer.classList.toggle("hidden");
    lightboxLayer.classList.toggle("grid");
    console.log(lightboxLayer.classList);
})



// Change big product image when next arrow is clicked in lightbox
function nextImage() {    

    // get the current src of the product image
    let oldsrc = document.querySelector(".productImage").src;

    // get the index of the current src
    const index = newsrcs.indexOf(oldsrc);

    // get the next index
    let newIndex;
    if(index === 3) {
        newIndex = 0;
    }
    else{
        newIndex = index + 1;
    }

    // get the src of the new image index
    newsrc = newsrcs[newIndex];

    // select the main image
    const productImages = document.querySelectorAll(".productImage");

    // change the src of the old image to the new src
    productImages.forEach(productImage => {
        productImage.src = newsrc;
    })

    // turn on the hidden class of the thumbnails
    thumbNails.forEach(thumbNail => {

        // Correctly access classList on the thumbNail itself
        if(thumbNail.classList.contains("hidden") === false) {
            thumbNail.querySelector("div").classList.add("hidden");
        }        
    })
}

// Change big product image when previous arrow is clicked in lightbox
function previousImage() {

    // // toggle the hidden class of the thumbnails
    // const thumbnails = document.querySelectorAll(".thumbnail"); // select all the thumbnails
        
    // thumbnails.forEach((thumbnail) => {
    //     if(thumbnail.querySelector("div").classList.contains("hidden")) {}
    //     else{
    //         thumbnail.querySelector("div").classList.add("hidden");
    //     }
    // })

    // get the current src of the product image
    let oldsrc = document.querySelector(".productImage").src;

    // get the index of the current src
    const index = newsrcs.indexOf(oldsrc);

    // get the previous index
    let newIndex;
    if(index === 0) {
        newIndex = 3;
    }
    else{
        newIndex = index - 1;
    }

    newsrc = newsrcs[newIndex];

    // select the main image
    const productImages = document.querySelectorAll(".productImage");

    // change the src of the old image to the new src
    productImages.forEach(productImage => {
        productImage.src = newsrc;
    })

    // turn on the hidden class of the thumbnails
    thumbNails.forEach(thumbNail => {

        // Correctly access classList on the thumbNail itself
        if(thumbNail.classList.contains("hidden") === false) {
            thumbNail.querySelector("div").classList.add("hidden");
        }        
    })
}

// Cart Functionality
const orderQuantity = document.getElementById("orderQuantity"); // select the order quantity
const deleteCart = document.getElementById('deleteCart'); //get cart delete icon 
const cartEmpty = document.getElementById('cartEmpty'); //get cart empty 
const cartLoaded = document.getElementById('cartLoaded'); //get cart loaded 
const cartIcon = document.getElementById('cartIcon'); //get cartIcon
const cart = document.getElementById('cart'); //get cart wrap
const Cart = document.getElementById('Cart'); //get cart content

// cartIcon click functionality
cart.addEventListener('click', () => {
    Cart.classList.toggle('hidden');
    console.log(cart);
})

function minus() {

    let quantity = parseInt(orderQuantity.innerText); // get the order quantity in integer

    if(quantity <= 0) {
        orderQuantity.innerText = 0; // set the minimum value of the order quantity to 0
    }
    else{
        orderQuantity.innerText = quantity - 1;  // decrement the order quantity
    }
    
}

function plus() {

    let quantity = parseInt(orderQuantity.innerText); // get the order quantity in integer

    orderQuantity.innerText = quantity + 1;  // increment the order quantity

}

function addtoCart() {

    // make cartloaded visible
    cartEmpty.classList.add('hidden');
    cartLoaded.classList.remove('hidden');
    cartLoaded.classList.add('grid');
    
    let OrderNo = document.getElementById('OrderNo'); //get OrderNo 
    //get unitCost in integer format 
    let unitCost = parseInt(document.getElementById('unitCost').innerText); 
    // get the order quantity in integer format
    let quantity = parseInt(orderQuantity.innerText); 

    // make cartIcon visible when there's an order
    if(quantity > 0) {
            if(cartIcon.classList.contains('hidden')) {cartIcon.classList.remove('hidden');}
    }
    else{cartIcon.classList.add('hidden')}

    cartIcon.innerText = orderQuantity.innerText;
    OrderNo.innerText = orderQuantity.innerText;

    orderQuantity.innerText = 0;

    // calculate orderTotal
    const orderTotal = unitCost * parseInt(OrderNo.innerText);
    document.getElementById('orderTotal').innerText = orderTotal;
}

// cart delete functionality
deleteCart.addEventListener('click', () => {
    cartLoaded.classList.remove('grid');
    cartLoaded.classList.add('hidden');
    cartEmpty.classList.remove('hidden');
})


function checkOut() {

}




