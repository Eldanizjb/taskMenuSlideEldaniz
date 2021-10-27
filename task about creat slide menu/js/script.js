let home = document.getElementById('home')
let profile = document.getElementById('profile')
let contact = document.getElementById('contact')
let one = document.getElementsByClassName('start')
let zIndex = 1
home.addEventListener('click', function(e) {
    for (let i = 0; i < one.length; i++) {
        one[i].style.border = "none"
    }
    home.style.border = "3px solid rgb(54, 15, 228)"
    home.style.borderBottomColor = "rgb(54, 15, 228)"
    e.preventDefault()
    document.getElementById('card-1').style.zIndex = `${zIndex}`
    zIndex++
})
profile.addEventListener('click', function(e) {
    for (let i = 0; i < one.length; i++) {
        one[i].style.border = "none"
    }
    profile.style.border = "3px solid rgb(204, 7, 7)"
    profile.style.borderBottomColor = "rgb(204, 7, 7)"
    e.preventDefault()
    document.getElementById('card-2').style.zIndex = `${zIndex}`
    zIndex++
})
contact.addEventListener('click', function(e) {
    for (let i = 0; i < one.length; i++) {
        one[i].style.border = "none"
    }
    contact.style.border = "3px solid rgb(15, 228, 33)"
    contact.style.borderBottomColor = "rgb(15, 228, 33)"
    e.preventDefault()
    document.getElementById('card-3').style.zIndex = `${zIndex}`
    zIndex++
})