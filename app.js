var json
async function dodawanie(){
    const nazwa = document.getElementById("nazwa").value
    const dni = document.getElementById("Dni").value
    const json = fetch("http://localhost:3000/todo/"+nazwa+"/0/"+dni)
}
async function usuwanie(){
    const nazwa = document.getElementById("nazwa").value
    const json = fetch("http://localhost:3000/delete/"+nazwa)
}
async function divy(){
    const data = await fetch("http://localhost:3000/select")
    json = await data.json()
    for(var i =0;i<=json.length-1;i++){
        const h1 = document.createElement("h1")
        const div = document.createElement("div")
        const p = document.createElement("p")
        const h2 = document.createElement("h2")
        const body = document.getElementById("reszta")
        const button = document.createElement("button")

        body.appendChild(div)
        h1.innerHTML = json[i].nazwa
        div.appendChild(h1)
        h2.innerHTML = json[i].czy_wykonane
        div.appendChild(h2)
        p.innerHTML = json[i].termin
        div.appendChild(p)
        div.appendChild(button)
        button.innerHTML = "Zmień"
        div.appendChild(button)
        button.innerHTML = "X"
        button.setAttribute("id",json[i],"Id")

    }
}
divy()