let container = document.querySelector("#products-preview");
let productQuantity = document.getElementsByClassName("product-quantity")
let itemCount = document.getElementsByClassName("product-quantity").length
let subTotal = document.getElementById("total");
let tax = document.getElementById("tax");
let ship = document.getElementsByClassName("shipping");
let netTotal = document.getElementById("net-total");
let readdBag = document.getElementById("button_bag");
let readdShoe = document.getElementById("button_shoe");
let readdClock = document.getElementById("button_clock");
let divBag = document.getElementById("bag");
let divShoe = document.getElementById("shoe");
let divClock = document.getElementById("clock");




footerPart()
container.addEventListener("click", e => {
    if (e.target.className == "plus") {
        let productTotal = e.path[3].children[1].lastElementChild;
        let quantity = e.target.parentElement.children[1];
        let price = e.path[3].children[1].children[1].children[0].children[0].innerText
        e.target.parentElement.children[1].innerText = +(e.target.parentElement.children[1].innerText) + 1
        productTotal.innerText = (+quantity.innerText * +price).toFixed(2)
        footerPart()
    }
    
    else if (e.target.className == "minus") {
        let productTotal = e.path[3].children[1].lastElementChild;
        let quantity = e.target.parentElement.children[1];
        let price = e.path[3].children[1].children[1].children[0].children[0].innerText
        e.target.parentElement.children[1].innerText = +(e.target.parentElement.children[1].innerText) - 1;
        if (e.target.parentElement.children[1].innerText == "0") {
            e.path[3].style.display = "none";
            if (e.path[3].id == "bag") readdBag.style.display = "inline";
            else if (e.path[3].id == "shoe") readdShoe.style.display = "inline";
            else readdClock.style.display = "inline";
             

        }   
        productTotal.innerText = (+quantity.innerText * +price).toFixed(2)
        footerPart()
    }
    
    else if (e.target.className == "remove-product") {
        
        let productTotal = e.path[2].lastElementChild;
        productTotal.innerText = "0"
        e.path[2].children[2].children[1].innerText = "0"  //quantity
        e.path[3].style.display = "none"
        if (e.path[3].id == "bag") readdBag.style.display = "inline";
        else if (e.path[3].id == "shoe") readdShoe.style.display = "inline";
        else readdClock.style.display = "inline";
        
        footerPart()
    }
    
})

readdBag.addEventListener("click", () => {
    divBag.style.display = "flex";
    readdBag.style.display = "none";
})
readdShoe.addEventListener("click", () => {
    divShoe.style.display = "flex"
    readdShoe.style.display = "none";
})
readdClock.addEventListener("click", () => {
    divClock.style.display = "flex"
    readdClock.style.display = "none";
})





function footerPart() {
    let sum = 0;
    let productTotal = document.querySelectorAll(".product-line-price")
    productTotal.forEach(fiat => {
        sum += (+fiat.innerText)
    })
    subTotal.innerHTML = (sum).toFixed(2)
    tax.innerHTML = (sum * 18 / 100).toFixed(2);
    ship[0].innerHTML = subTotal.innerHTML !== "0.00" ? 15 : 0
    netTotal.innerHTML = (+subTotal.innerHTML + +tax.innerHTML + +ship[0].innerHTML).toFixed(2);
}

