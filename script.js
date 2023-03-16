const mainContainer = document.querySelector(".container");
const thankContainer = document.querySelector(".thank-you");
const submit = document.querySelector(".btn-submit");
const rating = document.querySelector('#rating')
const rates = document.querySelectorAll('.btn')

submit.addEventListener('click', ()=>{
    mainContainer.style.display = "none"
    thankContainer.classList.remove("hidden")
})

rates.forEach((rate)=>{
    rate.addEventListener('click', ()=>{
        rating.innerHTML = rate.innerHTML
    })
})