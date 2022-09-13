const menuEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
const hamMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopIcon = document.querySelector('.navbar-shopping-cart');
const productDatail = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');


function toggleMenu(element){
    element.classList.toggle('inactive');
}

menuEmail.addEventListener('click', function(){
    const isProductDatailsClosed = productDatail.classList.contains('inactive');
    if(!isProductDatailsClosed){
        productDatail.classList.add('inactive');
    }
    toggleMenu(deskMenu);
});
hamMenuIcon.addEventListener('click', function(){
    const isProductDatailClosed = productDatail.classList.contains('inactive');
    if(!isProductDatailClosed){
        productDatail.classList.add('inactive');
    }
    toggleMenu(mobileMenu);
})
shopIcon.addEventListener('click', function(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');
    const isDeskMenuClosed = deskMenu.classList.contains('inactive');
    if(!isMobilMenuClosed || !isDeskMenuClosed){
        mobileMenu.classList.add('inactive');
        deskMenu.classList.add('inactive');
    }
    toggleMenu(productDatail);
})

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/2585916/pexels-photo-2585916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/2569997/pexels-photo-2569997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

function renderProducts(array) {
    for(product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        // productDiv.appendChild(productPrice);
        // productDiv.appendChild(productName);
        productDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCart);
    
        // productInfo.appendChild(productDiv);
        // productInfo.appendChild(productInfoFigure)
        productInfo.append(productDiv, productInfoFigure);
    
        // productCard.appendChild(productImg);
        // productCard.appendChild(productInfo);
        productCard.append(productImg, productInfo);
    
        cardContainer.append(productCard);
    }
}

renderProducts(productList);

// showMenu(menuEmail, deskMenu);
// showMenu(hamMenuIcon, mobileMenu);
// showMenu(shopIcon, productDatail);

// function showMenu(menu, type) {
//     menu.addEventListener('click', function(){
//         type.classList.toggle('inactive');
//     }); 
// }



// function showMenu(menu, type) {
//     menu.addEventListener('click', function(){
//         type.classList.toggle('inactive')
//     }); 
// }

// llamarMenus(showMenu, menuEmail, deskMenu)


//     function llamarMenus(callback, menu, type) {
        
//         callback(menu, type);
//     }
