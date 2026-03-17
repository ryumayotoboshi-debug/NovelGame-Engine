let index = 0

const text = document.getElementById("text")
const choices = document.getElementById("choices")
const symbol = document.getElementById("symbol")
const log = document.getElementById("log")

function showScene(){

const scene = scenario[index]

choices.innerHTML=""

/* テキスト */
if(scene.text){
typeText(scene.text)
}else{
text.innerText=""
}

/* 記号 */
if(scene.symbol){
symbol.innerText = scene.symbol
symbol.style.opacity = 1
}else{
symbol.style.opacity = 0
}

/* 色 */
if(scene.color){
document.body.style.background = scene.color
}

/* ログ */
if(scene.log){
addLog(scene.log)
}

/* グリッチ */
if(scene.glitch){
document.body.classList.add("glitch")
setTimeout(()=>document.body.classList.remove("glitch"),300)
}

/* 選択肢 */
if(scene.choice){

scene.choice.forEach(c=>{
const btn = document.createElement("button")
btn.className="choice"
btn.innerText = c.text

btn.onclick=()=>{
index = c.next
showScene()
}

choices.appendChild(btn)
})

}

}

/* 文字送り */
function typeText(str){

text.innerText=""
let i=0

let interval = setInterval(()=>{
text.innerText += str[i]
i++
if(i>=str.length) clearInterval(interval)
},30)

}

/* ログ追加 */
function addLog(msg){
log.innerText += "\n> " + msg
}

/* クリックで進行 */
document.body.onclick = function(){

const scene = scenario[index]

if(scene.choice) return

if(scene.wait){
setTimeout(()=>{
nextScene()
},scene.wait)
return
}

nextScene()

}

function nextScene(){

if(scenario[index].next !== undefined){
index = scenario[index].next
}else{
index++
}

if(index >= scenario.length) return

showScene()

}

showScene()