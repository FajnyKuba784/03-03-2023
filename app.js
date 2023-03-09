var json

async function dodawanie(){
    const nazwa = document.getElementById("nazwa").value
    const dni = document.getElementById("Dni").value
    const json = fetch("http://localhost:3000/todo/"+nazwa+"/0/"+dni)
    divy()
}
async function usuwanie(id){
    const idu = document.getElementById("id")
    await fetch("http://localhost:3000/delete/"+id)
    divy()
}
async function zmiana(id){
    const idz = document.getElementById("id")
    await fetch("http://localhost:3000/change/"+id)
    divy()
} 
async function zmiana1(id){
    const idz = document.getElementById("id")
    await fetch("http://localhost:3000/change1/"+id)
    divy()
}

async function divy(){
    document.getElementById("reszta").innerHTML= ""
    const data = await fetch("http://localhost:3000/select")
    json = await data.json()
    for(var i =0;i<=json.length-1;i++){
        const h1 = document.createElement("h1")
        const div = document.createElement("div")
        const p = document.createElement("p")
        const h2 = document.createElement("h2")
        const body = document.getElementById("reszta")
        const button = document.createElement("button")
        const button1 = document.createElement("button")

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
        if(json[i].czy_wykonane==0){
            div.appendChild(button1)
            button1.innerHTML = "Zmień"
            button1.setAttribute("id","i+1")
            button1.setAttribute("onclick",`zmiana(${json[i].id})`)
            div.style.backgroundColor = "red";
            div.setAttribute("class","divy0")
        }
        if(json[i].czy_wykonane==1){
            div.appendChild(button1)
            button1.innerHTML = "Zmień"
            button1.setAttribute("id","i+1")
            button1.setAttribute("onclick",`zmiana1(${json[i].id})`)
            div.setAttribute("class","divy1")
        }
        button.innerHTML = "X"
        button.setAttribute("id",i+1)
        button.setAttribute("onclick",`usuwanie(${json[i].id})`)
        
        
        
    }
    getData()
}

divy()
