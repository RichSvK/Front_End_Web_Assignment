var rolex = [
    {name: "Rolex Air-King", photo: "../Assets/rolex_1.png", price: "IDR 112,492,500"},
    {name: "Rolex Submariner", photo: "../Assets/rolex_2.png", price: "IDR 137,843,000"},
    {name: "Rolex Datejust 31", photo: "../Assets/rolex_3.png", price: "IDR 155,271,000"},
    {name: "Rolex Explorer", photo: "../Assets/rolex_4.png", price: "IDR 177,453,000"},
    {name: "Rolex Yacht-Master", photo: "../Assets/rolex_5.png", price: "IDR 212,309,500"},
    {name: "Rolex Cosmograph", photo: "../Assets/rolex_6.png", price: "IDR 228,153,500"},
    {name: "Rolex GMT-Master II", photo: "../Assets/rolex_7.png", price: "IDR 248,751,000"},
    {name: "Rolex Sea-Dweller", photo: "../Assets/rolex_8.png", price: "IDR 272,517,000"},
    {name: "Rolex Sky-Dweller", photo: "../Assets/rolex_9.png", price: "IDR 644,850,500"}
]

var omega = [
    {name: "Omega 8800", photo: "../Assets/omega_1.png", price: "IDR 89,700,000"},
    {name: "Omega 8900", photo: "../Assets/omega_2.png", price: "IDR 100,700,000"},
    {name: "Omega 8912", photo: "../Assets/omega_3.png", price: "IDR 108,100,000"},
    {name: "Omega 3861 Steel", photo: "../Assets/omega_4.png", price: "IDR 111,700,000"},
    {name: "Omega 1869", photo: "../Assets/omega_5.png", price: "IDR 172,200,000"},
    {name: "Omega 9300 Nylon", photo: "../Assets/omega_6.png", price: "IDR 190,500,000"},
    {name: "Omega 8912 Ultra", photo: "../Assets/omega_7.png", price: "IDR 217,900,000"},
    {name: "Omega 9300 Leather", photo: "../Assets/omega_8.png", price: "IDR 399,300,000"},
    {name: "Omega 3861 Gold", photo: "../Assets/omega_9.png", price: "IDR 668,500,000"}
]

var richard = [
    {name: "RM 010", photo: "../Assets/richard_1.png", price: "IDR 2,205,484,838"},
    {name: "RM 030", photo: "../Assets/richard_2.png", price: "IDR 3,261,761,277"},
    {name: "RM 030 Gold", photo: "../Assets/richard_3.png", price: "IDR 3,429,421,904"},
    {name: "RM 035", photo: "../Assets/richard_4.png", price: "IDR 4,081,012,065"},
    {name: "RM 011", photo: "../Assets/richard_5.png", price: "IDR 5,639,493,797"},
    {name: "RM 029", photo: "../Assets/richard_6.png", price: "IDR 5,702,584,522"},
    {name: "RM 027", photo: "../Assets/richard_7.png", price: "IDR 5,784,215,279"}
]

// Initial Index
var brandIndex = -1
var page = document.getElementById("brand-watch-container")

function showBrand(index){
    if(brandIndex == index) return
    
    brandIndex = index
    page.innerHTML = ""
    if(brandIndex == 0){
        page.innerHTML +=
            `<div class="logo-brand-image">
                <img src="../Assets/rolex-logo.png" alt="Rolex Logo">
            </div>
            <div class="brand-container">
                <div id="watch-container">
                </div>
            </div>`
        var temp = document.getElementById('watch-container')
        for (let i = 0; i < rolex.length; i++){
            temp.innerHTML += 
                `<div class="watch">
                    <div class="watch-description-name">
                        ${rolex[i].name}
                    </div>
                    <div class="watch-photo">
                        <img src="${rolex[i].photo}" alt="Rolex Watch">
                    </div>
                    <div class="watch-description-price">
                        ${rolex[i].price}
                    </div>
                </div>`
        }
    } else if(brandIndex == 1){
        page.innerHTML +=
            `<div class="logo-brand-image">
                <img src="../Assets/omega-logo.png" alt="Omega Logo">
            </div>
            <div class="brand-container">
                <div id="watch-container">
                </div>
            </div>`
        var temp = document.getElementById('watch-container')
        for (let i = 0; i < omega.length; i++){
            temp.innerHTML += 
                `<div class="watch">
                    <div class="watch-description-name">
                        ${omega[i].name}
                    </div>
                    <div class="watch-photo">
                        <img src="${omega[i].photo}" alt="Omega Watch">
                    </div>
                    <div class="watch-description-price">
                        ${omega[i].price}
                    </div>
                </div>`
        }
    } else{
        page.innerHTML +=
            `<div class="logo-brand-image">
                <img src="../Assets/richard-logo.png" alt="Richard Mille Logo">
            </div>
            <div class="brand-container">
                <div id="watch-container">
                </div>
            </div>`
        var temp = document.getElementById('watch-container')
        for (let i = 0; i < omega.length; i++){
            temp.innerHTML += 
                `<div class="watch">
                    <div class="watch-description-name">
                        ${richard[i].name}
                    </div>
                    <div class="watch-photo">
                        <img src="${richard[i].photo}" alt="Omega Watch">
                    </div>
                    <div class="watch-description-price">
                        ${richard[i].price}
                    </div>
                </div>`       
        }
    }
}

showBrand(0)