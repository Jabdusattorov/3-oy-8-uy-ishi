let total = document.querySelector(".total")
let a = 2
total.textContent = `Total: ${a} $`

const bread_plus = document.querySelector(".bread-plus")
const bread_minus = document.querySelector(".bread-minus")
bread_plus.addEventListener("click", ()=>{
    a += 2
    total.textContent = `Total: ${a} $`;
    bread_minus.style.display = "block"
    bread_plus.style.display = "none"
})
bread_minus.addEventListener("click", ()=>{
    a -= 2
    total.textContent = `Total: ${a} $`;
    bread_plus.style.display = "block"
   bread_minus.style.display = "none"
})

const kal_plus = document.querySelector(".kal-plus")
const kal_minus = document.querySelector(".kal-minus")
const kal = document.querySelector(".kal")
kal_plus.addEventListener("click", ()=>{
    kal.style.display = "inline-block"
    a += 4
    total.textContent = `Total: ${a} $`;
    kal_minus.style.display = "block"
    kal_plus.style.display = "none"
})
kal_minus.addEventListener("click", ()=>{
    kal.style.display = "none"
    a -= 4
    total.textContent = `Total: ${a} $`;
    kal_plus.style.display = "block"
    kal_minus.style.display = "none"
})

const qoz_plus = document.querySelector(".qoz-plus")
const qoz_minus = document.querySelector(".qoz-minus")
const qoz = document.querySelector(".qoz")
qoz_plus.addEventListener("click", ()=>{
    qoz.style.display = "inline-block"
    a += 3
    total.textContent = `Total: ${a} $`;
    qoz_minus.style.display = "block"
    qoz_plus.style.display = "none"
})
qoz_minus.addEventListener("click", ()=>{
    qoz.style.display = "none"
    a -= 3
    total.textContent = `Total: ${a} $`;
    qoz_plus.style.display = "block"
    qoz_minus.style.display = "none"
})

const tomato_plus = document.querySelector(".tomato-plus")
const tomato_minus = document.querySelector(".tomato-minus")
const tomato = document.querySelector(".tomato")
tomato_plus.addEventListener("click", ()=>{
    tomato.style.display = "inline-block"
    a += 2
    total.textContent = `Total: ${a} $`;
    tomato_minus.style.display = "block"
    tomato_plus.style.display = "none"
})
tomato_minus.addEventListener("click", ()=>{
    tomato.style.display = "none"
    a -= 2
    total.textContent = `Total: ${a} $`;
    tomato_plus.style.display = "block"
    tomato_minus.style.display = "none"
})

const olivies_plus = document.querySelector(".oliv-plus")
const olivies_minus = document.querySelector(".oliv-minus")
const olivies = document.querySelector(".oliv")
olivies_plus.addEventListener("click", ()=>{
   olivies.style.display = "inline-block"
    a += 3
    total.textContent = `Total: ${a} $`;
    olivies_minus.style.display = "block"
    olivies_plus.style.display = "none"
})
olivies_minus.addEventListener("click", ()=>{
    olivies.style.display = "none"
    a -= 3
    total.textContent = `Total: ${a} $`;
    olivies_plus.style.display = "block"
    olivies_minus.style.display = "none"
})

const ball_plus = document.querySelector(".ball-plus")
const ball_minus = document.querySelector(".ball-minus")
const ball = document.querySelector(".ball")
ball_plus.addEventListener("click", ()=>{
   ball.style.display = "inline-block"
    a += 1
    total.textContent = `Total: ${a} $`;
  ball_minus.style.display = "block"
    ball_plus.style.display = "none"
})
ball_minus.addEventListener("click", ()=>{
    ball.style.display = "none"
    a -= 1
    total.textContent = `Total: ${a} $`;
    ball_plus.style.display = "block"
    ball_minus.style.display = "none"
})

let submit = document.querySelector(".submit")
submit.addEventListener("click", ()=>{
    if(a<=2){
        alert("Please select the ingredients first")
    }else{
        alert("Order received! (Buyurtma qabul qilindi!)")
    }
})