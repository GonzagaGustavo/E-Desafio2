const ola = document.querySelector('h1')
let id = 0

function aparecer() {
    if(id === 0) {
        id++
       ola.style.display = "block" 
    } else {
        id = 0
        ola.style.display = "none"
    }
}