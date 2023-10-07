let narx = document.querySelector('#h2')

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')

let white = document.querySelector('.white')
let Silver = document.querySelector('.Silver')
let boxImg = document.querySelector('.img2')

let imgTeg = document.querySelector('.imgTeg')

let imgWhite = "https://i5.walmartimages.com/asr/f42228f4-9aca-4d63-81f7-d82aaf4be2a9_1.4a1abae4b05e9f83293020352e43e44b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"

let imgSil = "https://www.wearesync.co.uk/wp-content/uploads/2020/05/mackbook-pro-13-inch-5th-gen-touch-space-grey.jpg"

let p1 = document.querySelector('#p1')


white.addEventListener('click', () => {
    imgTeg.setAttribute('src',imgWhite)
    p1.textContent = 'White'
    
})

Silver.addEventListener('click', () => {
    imgTeg.setAttribute('src',imgSil)
    p1.textContent = 'Space Grey'
    // Silver.classList('active')
})

let ObshiShot = '$1.999'

btn1.addEventListener('click', () => {
    narx.textContent = '$1,999'
})
btn2.addEventListener('click', () => {
    narx.textContent = '$2.199'
    btn2.classList()
})
btn3.addEventListener('click', () => {
    narx.textContent = '$2.599'
})
btn4.addEventListener('click', () => {
    narx.textContent = '$3.199'
})
