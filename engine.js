/* ===== 要素取得 ===== */
const log = document.getElementById("log")
const command = document.getElementById("command")
const status = document.getElementById("status")

let current = "start"

/* ===== 時刻 ===== */
function updateTime(){
  const now = new Date()
  const t = now.toTimeString().split(" ")[0]
  status.innerText = `[ ${t} ] CONNECTED`
}
setInterval(updateTime,1000)

/* ===== ログ ===== */
function addLog(text){
  const line = document.createElement("div")
  line.innerText = "> " + text
  log.appendChild(line)
  log.scrollTop = log.scrollHeight
}

/* ===== グリッチ ===== */
function glitch(){
  document.body.classList.add("glitch")
  setTimeout(()=>document.body.classList.remove("glitch"),200)
}

/* ===== テキスト破壊 ===== */
function corrupt(text){
  return text.split("").map(c=>{
    return Math.random()<0.2 ? "#" : c
  }).join("")
}

/* ===== コマンド ===== */
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

/* ===== シーン実行 ===== */
function runScene(){

  const scene = scenario[current]
  command.innerHTML=""

  if(!scene) return

  scene.logs.forEach((entry, i)=>{
    setTimeout(()=>{
      if(entry.corrupt){
        addLog(corrupt(entry.text))
      }else{
        addLog(entry.text)
      }

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

/* ===== 開始 ===== */
runScene()