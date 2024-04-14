
const menuIcon = document.querySelector('#menu-icon')
const menuActive = document.querySelector('.menu-active')
let menuItem = [...document.querySelectorAll('.menu-item')]

menuIcon.addEventListener('click', function () {
    menuActive.classList.toggle('display-none')
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-times')
    } else if (menuIcon.classList.contains('fa-times')) {
        menuIcon.classList.replace('fa-times', 'fa-bars')
    }
})



for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function () {
        for (let j = 0; j < menuItem.length; j++) {
            menuItem[j].classList.remove('active-item')
        }
        menuItem[i].classList.add('active-item')
    })
}

// console.log(menuIcon.classList.replace('fa-bars', 'fa-times'))







// Main-section JS

sneakers = {
    price: 125.00,
    realPrice: 250.00,
    amount: 0,
    get calcSum() {
        return this.amount * this.price
    }
}

console.log(sneakers.amount)

let costBoxNewPrice = document.querySelector('.cost-box-newPrice')
let costBoxOldPrice = document.querySelector('.cost-box-oldPrice')

costBoxNewPrice.innerHTML = `$${sneakers.price}.00`
costBoxOldPrice.innerHTML = `$${sneakers.realPrice}.00`

const cartBtnText = document.querySelector('.add-cart__btn');
let headerIconCount = document.querySelector('.header-icon__count')

cartBtnText.addEventListener('click', function () {
    headerIconCount.style.display = "unset";
})

const headerIcon = document.querySelector('.header-icon')
let cartBox = document.querySelector('.cart-box')

headerIcon.addEventListener('click', function () {

    // alert('salom')

    cartBox.style.display = "block"

    cartBox.style.opacity = "1"

    // if (cartBox.style.display == "block") {
    //     location.reload()
    // }

})

// headerIcon.addEventListener('click', function(event) {
//     // console.log(event.currentTarget);

//     if (event.target == event.currentTarget) {
//         // cartBox.style.display = "none"
//         location.reload()
//     }
// })

let countBoxItem = [...document.querySelectorAll('.count-box__item')]
let countNum = document.querySelector('.count-num')


// countNum.innerHTML++
// console.log(countNum.innerHTML--);
let count = sneakers.amount
for (let i = 0; i < countBoxItem.length; i++) {
    sym = countBoxItem[i].getAttribute('data-symbol')
    // console.log(sym);   
    countBoxItem[i].addEventListener('click', function () {

        // alert('hello')       
        if (countBoxItem[i].getAttribute('data-symbol') == 'plus') {
            count++

        } else if (countBoxItem[i].getAttribute('data-symbol') == 'minus' && count > 0) {
            count--
        }


        countNum.innerHTML = count
        console.log(sneakers.amount)
        headerIconCount.innerHTML = count
        sneakers.amount = count
    })

}
console.log(count)
console.log(sneakers.amount);

let cartBoxBody = document.querySelector('.cart-box__body')
let cartBoxBodyCheck = "Fall Limited Edition Sneakers \n"
if (sneakers.amount > 0) {
    cartBoxBodyCheck += `${costBoxNewPrice.innerHTML} x ${count} = $${sneakers.calcSum}.00`
}

cartBoxBody.innerHTML = `${cartBoxBodyCheck}`




// Images

let imageBoxItem = [...document.querySelectorAll('.image-box__item')]

// console.log(imageBoxItem)

for (let i = 0; i < imageBoxItem.length; i++) {

    imageBoxItem[i].addEventListener('click', function () {
        // alert('salom')

        for (let j = 0; j < imageBoxItem.length; j++) {
            imageBoxItem[j].classList.remove('image-item__active')
        }
        imageBoxItem[i].classList.add('image-item__active')
    })

    imageBoxItem[i].addEventListener('mouseover', function () {
        // alert('salom')

        for (let j = 0; j < imageBoxItem.length; j++) {
            imageBoxItem[j].style.opacity = "1"
        }
        imageBoxItem[i].style.opacity = "0.7"
    })

    imageBoxItem[i].addEventListener('mouseout', function () {
        // alert('salom')

        for (let j = 0; j < imageBoxItem.length; j++) {
            imageBoxItem[j].style.opacity = "1"
        }
        imageBoxItem[i].style.opacity = "1"
    })
}


let siteImageImg = document.querySelector('.site-image__img')
let srcImg = siteImageImg.getAttribute('src')
console.log(srcImg)
for (let i = 0; i < imageBoxItem.length; i++) {
    imageBoxItem[i].addEventListener('click', function () {
        // alert('salom')

        let srcItem = imageBoxItem[i].getAttribute('src')
        console.log(srcItem)

        siteImageImg.setAttribute('src', srcItem)

    })
}




// Abosolute__image

const imageAbsolute = document.querySelector('.image__absolute')
let imageAbsoluteBox = document.querySelector('.image__absolute-box')
const imageAbsoluteIcon = document.querySelector('.image__absolute-icon')

siteImageImg.addEventListener('click', function () {

    // alert('sdadsa')

    setTimeout(() => {
        imageAbsoluteBox.style.display = "block"
        imageAbsoluteBox.style.opacity = ".75"
        imageAbsolute.style.top = "unset"
    }, 600);

})

imageAbsoluteIcon.onclick = () => {
    // alert('salom')
    location.reload()
}


// Slider

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let siteImageAbsolute = document.querySelector('.site-image__absolute')

let k = 0;

next.onclick = () => {
    // alert('salom')

    // console.log(imageBoxItem[k])
    let imgSrc = imageBoxItem[k].getAttribute('src')
    console.log(imgSrc);
    siteImageAbsolute.setAttribute('src', imgSrc)
    k++

    if (k >= imageBoxItem.length) {
        k = 0
    }  
}

prev.onclick = () => {
    // alert('salom')

    // console.log(imageBoxItem[k])
    let imgSrc = imageBoxItem[k].getAttribute('src')
    console.log(imgSrc);
    siteImageAbsolute.setAttribute('src', imgSrc)
    k--

    if (k < 0) {
        k = imageBoxItem.length-1
    }  
}


