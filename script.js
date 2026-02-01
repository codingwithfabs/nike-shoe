const container = document.getElementById("container")
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("close-btn")
const increment = document.getElementById("iterate-up")
const decrement = document.getElementById("iterate-down")
const value = document.getElementById("value")
const orderBtn = document.getElementById("order-btn")
const orderStatusContainer = document.getElementById("order-status-container")

container.addEventListener("click", function() {
    modal.style.display = "inline"
})

closeBtn.addEventListener("click", function(e) {
    e.stopPropagation()
    modal.style.display = "none"
})

let index = 0

decrement.addEventListener("click", function() {
    if (index === 0){
        decrement.disabled = true
        orderBtn.disabled = true
    }

    index -= 1
    value.innerText = index
})

increment.addEventListener("click", function() {
    decrement.disabled = false
    orderBtn.disabled = false

    index += 1
    value.innerText = index
})

orderBtn.addEventListener("click", function(e) {
    e.stopPropagation()
    orderStatusContainer.style.display = "flex"
    modal.style.display = "none"
})

setTimeout(function(){
    orderStatusContainer.style.display = "none"
}, 3000)