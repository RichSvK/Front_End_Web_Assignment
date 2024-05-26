// If the website will be run on github pages
let root = 'https://richsvk.github.io/Front_End_Web_Assignment'

// If the website will be run on localhost
// let root = window.origin

document.getElementById('navbar').innerHTML = `
    <div id="name-website">WatcHGoods</div>
    <a class="burger-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
    <div class="navbar-link">
        <ul>
            <li><a href="${root}/index.html">Home</a></li>
            <li><a href="${root}/HTML/product.html">Product</a></li>
            <li><a href="${root}/HTML/about.html">About</a></li>
            <li><a href="${root}/HTML/location.html">Location</a></li>
            <li><a href="${root}/HTML/contact.html">Contact</a></li>
        </ul>            
    </div>`

document.getElementById('footer-container').innerHTML = `
    <div id="footer-1">
    <div class="footer-part" id="footer">
        <div id="logo">
            <img src="${root}/Assets/logo.png" alt="Logo">
        </div>
    </div>
    <div class="footer-part" class="company-link">
        <div class="footer-part-title">
            Company
        </div>
        <div class="footer-link">
            <ul>
                <li><a href="${root}/HTML/about.html">About Us</a></li>
                <li><a href="${root}/HTML/product.html">Product</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
    </div>

    <div class="footer-part" class="company-link">
        <div class="footer-part-title">
            Help
        </div>
        <div class="footer-link">
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="${root}/HTML/contact.html">Contact Us</a></li>
            </ul>
        </div>
    </div>

    <div class="footer-part" class="company-link">
        <div class="footer-part-title">
            Our Partner
        </div>
        <div class="footer-link">
            <ul>
                <li><a href="https://www.rolex.com/id" target="_blank">Rolex</a></li>
                <li><a href="https://www.omegawatches.com/" target="_blank">Omega</a></li>
                <li><a href="https://www.richardmille.com/" target="_blank">Richard Mille</a></li>
            </ul>
        </div>
    </div>

    <div class="footer-part">
        <div class="footer-part-title">
            Follow Us
        </div>
        <div id="container-icon">
            <img src="${root}/Assets/instagram.png" alt="instagram">
            <img src="${root}/Assets/twitter.png" alt="Twitter">
            <img src="${root}/Assets/linkedin.png" alt="LinkedIn">
            <img src="${root}/Assets/gmail.png" alt="Gmail">
        </div>
    </div>
    </div>
    <div id="copyright">&copy 2023 WatcHGoods</div>`

const burgerMenu = document.getElementsByClassName("burger-menu")[0]
const navbarLink = document.getElementsByClassName("navbar-link")[0]
burgerMenu.addEventListener("click", () => {
    navbarLink.classList.toggle("active")
})