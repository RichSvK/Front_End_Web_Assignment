var companyLocation = [
    {photo: "../Assets/manufacturer_1.jpg", name: "WatcHGoods Indonesia", email: "watchgoods.indonesia@gmail.com", phone: "+62 25183284067", region: "Jakarta, Indonesia"},
    {photo: "../Assets/manufacturer_2.jpg", name: "WatcHGoods China", email: "watchgoods.china@gmail.com", phone: "+86 81231506069", region: "Beijing, China"},
    {photo: "../Assets/manufacturer_3.jpg", name: "WatcHGoods USA", email: "watchgoods.america@gmail.com", phone: "+1 54177070072", region: "New York, United States of America"},
    {photo: "../Assets/manufacturer_4.jpg", name: "WatcHGoods Japan", email: "watchgoods.japan@gmail.com", phone: "+81 54170737045", region: "Tokyo, Japan"},
    {photo: "../Assets/manufacturer_5.jpg", name: "WatcHGoods Russia", email: "watchgoods.russia@gmail.com", phone: "+7 86173612267", region: "Moscow, Russia "},
    {photo: "../Assets/manufacturer_6.jpg", name: "WatcHGoods Australia ", email: "watchgoods.australia@gmail.com", phone: "+61 86173612267", region: "Sydney, Australia"}
]

var page = document.getElementById('location-container')

function showLocation(){
    for (let i = 0; i < companyLocation.length; i++) {
        page.innerHTML += `<div class="location">
            <div class="photo-location">
                <img src="${companyLocation[i].photo}" alt="Company Photo">
            </div>
            <div class="information-n">
                <div class="store-name">
                    <div class="store">
                        ${companyLocation[i].name}
                    </div>
                </div>
                <div class="information">
                    <img src="../Assets/gmail.png" alt="Email">
                    <div class="information-text">
                        ${companyLocation[i].email}
                    </div>
                </div>
                <div class="information">
                    <img src="../Assets/phone.png" alt="Phone">
                    <div class="information-text">
                        ${companyLocation[i].phone}
                    </div>
                </div>
                <div class="information">
                    <img src="../Assets/address.png" alt="Address">
                    <div class="information-text">
                        ${companyLocation[i].region}
                    </div>
                </div>
            </div>
        </div>`
    }
    return
}

showLocation()