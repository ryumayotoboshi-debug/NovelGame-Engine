const log = document.getElementById("log")
const command = document.getElementById("command")
const status = document.getElementById("status")

let current = "start"

/* 時刻 */
function updateTime(){
  const now = new Date()
  const t = now.toTimeString().split(" ")[0]
  status.innerText = `[ ${t} ] CONNECTED`
}
setInterval(updateTime,1000)

/* ログ */
function addLog(text){
  const line = document.createElement("div")
  line.innerText = "> " + text
  log.appendChild(line)
  log.scrollTop = log.scrollHeight
}

/* グリッチ */
function glitch(){
  document.body.classList.add("glitch")
  setTimeout(()=>document.body.classList.remove("glitch"),200)
}

/* 文字破壊 */
function corrupt(text){
  return text.split("").map(c=>{
    return Math.random()<0.2 ? "#" : c
  }).join("")
}

/* コマンド */
function showCommands(list){
  command.innerHTML=""
  list.forEach(c=>{
    const btn = document.createElement("button")
    btn.className="cmd"
    btn.innerText = "[ " + c.text + " ]"

    btn.onclick = ()=>{
      current = c.next
      runScene()
    }

    command.appendChild(btn)
  })
}

/* シーン */
function runScene(){

  const scene = system[current]
  command.innerHTML=""

  if(!scene) return

  scene.logs.forEach((entry, i)=>{
    setTimeout(()=>{
      let text = entry.text

      if(entry.corrupt){
        text = corrupt(text)
      }

      addLog(text)

      if(entry.glitch){
        glitch()
      }

    }, entry.delay || i*800)
  })

  if(scene.commands){
    setTimeout(()=>{
      showCommands(scene.commands)
    }, scene.commandsDelay || 2000)
  }

}

/* 開始 */
runScene()
