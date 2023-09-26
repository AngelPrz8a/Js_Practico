const navbar_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu"); 

const mobile_menu = document.querySelector(".mobile-menu"); 
const menu = document.querySelector(".menu"); 

const shopping_cart = document.querySelector(".navbar-shopping-cart");
const shopping_card__container = document.querySelector("#shopping-card__container");

const cards_container = document.querySelector(".cards-container")
const product_detail = document.querySelector("#product-detail")
const close_product_detail = document.querySelector(".product-detail-close")

navbar_email.addEventListener("click",toggleDesktopMenu);
menu.addEventListener("click",toggleMobileMenu);
shopping_cart.addEventListener("click",toggleProductDetails)

function toggleDesktopMenu(){
    desktop_menu.classList.toggle("inactive");
    closeProductDetail()
}

function toggleMobileMenu(){
    mobile_menu.classList.toggle("inactive");
    shopping_card__container.classList.add("inactive");
    product_detail.classList.add("inactive")
}

function toggleProductDetails(){
    shopping_card__container.classList.toggle("inactive");
    mobile_menu.classList.add("inactive")
    desktop_menu.classList.add("inactive")
    product_detail.classList.add("inactive")
}


let closeProductDetail = ()=>{
    product_detail.classList.add("inactive")
}

function openProductDetail(){
    shopping_card__container.classList.add("inactive")
    product_detail.classList.remove("inactive");
}

close_product_detail.addEventListener("click",closeProductDetail)



const product_list = [];
product_list.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg"
});
product_list.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg"
});
product_list.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg"
});
product_list.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg"
});
product_list.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg"
});
product_list.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg"
});
product_list.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg"
});
product_list.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg"
});

product_list.forEach(product => {
    const product_card = document.createElement("div");
    product_card.classList.add("product-card");

    product_card.addEventListener("click",openProductDetail)

    const product_img = document.createElement("img");
    product_img.setAttribute("src",product.image)

    const product_info = document.createElement("div")
    product_info.classList.add("product-info")

    const product_info_div = document.createElement("div")
    
    const product_price = document.createElement("p")
    product_price.innerText = "$"+product.price

    product_info_div.appendChild(product_price)

    const product_name = document.createElement("p")
    product_name.innerText = product.name

    product_info_div.appendChild(product_name)

    const product_info_figure = document.createElement("figure")
    const product_img_card = document.createElement("img")
    product_img_card.setAttribute("src","./Views/icons/bt_add_to_cart.svg")

    product_info_figure.appendChild(product_img_card)
    product_info.appendChild(product_info_div)
    product_info.appendChild(product_info_figure)

    product_card.appendChild(product_img)
    product_card.appendChild(product_info)

    cards_container.appendChild(product_card)
});