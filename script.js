const path = window.location.pathname
const pageNumber = parseInt(path.match(/page(\d+)/)?.[1])

if(pageNumber){

const nav = document.createElement("div")
nav.className = "nav"

const back = document.createElement("button")
back.innerText = "Back"
back.className = "back"

back.onclick = () =>{
window.location.href = `page${pageNumber-1}.html`
}

if(pageNumber === 1){
back.style.visibility = "hidden"
}

const next = document.createElement("button")
next.innerText = "Next"
next.className = "next"

next.onclick = () =>{
window.location.href = `page${pageNumber+1}.html`
}

fetch(`page${pageNumber+1}.html`)
.then(r=>{
if(!r.ok){
next.innerText="Finish"
next.className="finish"
next.onclick = ()=>{
window.location.href = "../index.html"
}
}
})

nav.appendChild(back)
nav.appendChild(next)

document.body.appendChild(nav)

}
