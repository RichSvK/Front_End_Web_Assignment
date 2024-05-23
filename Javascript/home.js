// Initial promotionIndex
var promotionIndex = 0

// Function to show promotion banner
function showPromotion(){
    var slide = document.getElementsByClassName("slide-image")
    var dot = document.getElementsByClassName("dot")

    // // If index is more than number of slide then set the promotionIndex to 0 (back to the first promotion banner)
    if(promotionIndex >= slide.length) promotionIndex = 0

    if(promotionIndex < 0) promotionIndex = slide.length - 1
    
    // Loop and change all the display to none
    for (let i = 0; i < slide.length; i++) slide[i].style.display = "none"

    // Loop and replace " active" to "" of dot[i] class name
    for (let i = 0; i < slide.length; i++) dot[i].className = dot[i].className.replace(" active", "")

    // Set the slide[promotionIndex] display to block
    slide[promotionIndex].style.display = "block"

    // Add " active" to dot[promotionIndex] class name
    dot[promotionIndex].className += " active"
    return
}

showPromotion()

// Function to change to next promotion banner if the next symbol is clicked
function nextPromotion(){
    promotionIndex += 1
    showPromotion()
    return
}

// Function to change to previous promotion banner if the previous symbol is clicked
function prevPromotion(){
    promotionIndex -= 1
    showPromotion()
    return
}

// Automatic change to next promotion banner after 2.5 second
setInterval(nextPromotion, 2500)

// Function to change promotion banner based on clicked dot
function openSlide(index){
    promotionIndex = index
    showPromotion()
    return
}