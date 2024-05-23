function checkSelected(){
    var textbox = document.getElementById("country-textbox")
    var selectionList = document.getElementById('country')
    
    // If user select "Other" option in the country dropdown show the textbox to input the name of the country
    if(selectionList.value == "Other") textbox.style.display = 'block'

    // If user select other than "Other" option in the country dropdown, the textbox will display none
    else if(selectionList.value == "0" || selectionList.value != "Other")
        textbox.style.display = 'none'
}

document.getElementById('contact-us').addEventListener('submit', (event) =>{
    event.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const male = document.getElementById('male').checked
    const female = document.getElementById('female').checked
    const country = document.getElementById('country').value
    const message = document.getElementById('message').value
    const confirm = document.getElementById('confirm').checked

    // Name must not be empty
    if(name.length == 0){
        alert('Name must be inputted')
        return       
    }

    // Name can't be 1 character
    else if (name.length < 2){
        alert("Name can't be 1 character")
        return
    }

    // Check for the character in name
    else{
        for (let i = 0; i < name.length; i++) {
            if((name[i] < 'a' || name[i] > 'z') && (name[i] < 'A' || name[i] > 'Z') && name[i] != ' '){
                alert("Name must not contain numerical or special character")
                return
            }
        }
    }

    // Email must not be empty
    if(email.length == 0){
        alert("You must enter your email")
        return
    }
    // Email must end with "@gmail.com" and have more than 10 character (length of "@gmail.com")
    else if(!email.endsWith('@gmail.com') || email.length <= 10){
        alert("Your email must be valid and ends with @gmail.com")
        return
    }
    else{
        // Check for the character before the "@gmail.com"
        // Length of email - length of "@gmail.com"
        for (let i = 0; i < (email.length - 10); i++) {
            if((email[i] < 'A' && email[i] > 'Z') && (email[i] < 'a' && email[i] > 'z') && (email[i] < '0' && email[i] > '9') && (email[i] != '.')){
                alert("You must enter your correct email")
                return
            }
        }
    }

    // Gender must be chosen
    if(!male && !female){
        alert("You must choose your gender")
        return
    }
    
    // Country must be selected
    if(country == 0){
        alert("You must select country")
        return
    }
    // If the country is not on list and user select "Other"
    else if(country == "Other"){
        var country_other = document.getElementById('country-textbox').value

        // Country must not be empty
        if(country_other.length == 0){
            alert("You must input the country")
            return
        }
        // Check for the character in the typed country name
        else{
            for (let i = 0; i < country_other.length; i++) {
                if((country_other[i] < 'a' || country_other[i] > 'z') && (country_other[i] < 'A' || country_other[i] > 'Z') && country_other[i] != ' '){
                    alert("Country name must not contain numerical or special character")
                    return
                }               
            }
        }
    }

    // Message must not empty
    if(message.length == 0){
        alert("Message must be inputted")
        return
    }
    // Message can't be 1 character
    else if(message.length < 2){
        alert("Message can't be 1 character")
        return
    }

    // You must confirm the box "Send a copy of message"
    if(!confirm){
        alert("You must checked the box")
        return
    }

    alert('Contact Success Please Wait for Further Response')
    location.reload()
})