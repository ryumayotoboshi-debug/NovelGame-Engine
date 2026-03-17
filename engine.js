let index = 0

const bg = document.getElementById("bg")
const text = document.getElementById("text")
const choices = document.getElementById("choices")
const next = document.getElementById("next")

function showScene(){

const scene = scenario[index]

choices.innerHTML=""

if(scene.bg){
bg.src = scene.bg
}

if(scene.text){
text.innerText = scene.text
}

if(scene.choice){

next.style.display="none"

scene.choice.forEach(c=>{

const button = document.createElement("button")

button.className="choice"
button.innerText=c.text

button.onclick=()=>{
index=c.next
showScene()
}

choices.appendChild(button)

})

}else{

next.style.display="block"

}

}

document.body.onclick = function(){

const scene = scenario[index]

if(scene.choice) return

if(scene.next !== undefined){
index = scene.next
}else{
index++
}

if(index >= scenario.length) return

showScene()

}

showScene()