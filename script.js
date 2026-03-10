const path = window.location.pathname
const match = path.match(/page(\d+)/)

if(match){

const pageNumber = parseInt(match[1])

/* NAVIGATION CONTAINER */

const nav = document.createElement("div")
nav.className = "nav"

/* BACK BUTTON */

const back = document.createElement("button")
back.innerText = "Back"
back.className = "nav-btn"

back.onclick = () =>{
window.location.href = `page${pageNumber-1}.html`
}

if(pageNumber === 1){
back.style.visibility = "hidden"
}

/* NEXT BUTTON */

const next = document.createElement("button")
next.innerText = "Next"
next.className = "nav-btn"

next.onclick = () =>{
window.location.href = `page${pageNumber+1}.html`
}

/* CHECK LAST PAGE */

fetch(`page${pageNumber+1}.html`)
.then(r=>{
if(!r.ok){

next.innerText = "Finish"

next.onclick = ()=>{
window.location.href = "../index.html"
}

}
})

nav.appendChild(back)
nav.appendChild(next)

document.body.appendChild(nav)

/* PAGE COUNTER */

const counter = document.createElement("div")
counter.className = "page-counter"
counter.innerText = "Page " + pageNumber

document.body.appendChild(counter)

}
