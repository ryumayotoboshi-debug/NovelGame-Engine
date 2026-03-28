const system = {

start:{
  logs:[
    { text:"BOOT SEQUENCE INIT" },
    { text:"LOADING MODULES", delay:800 },
    { text:"SYSTEM ONLINE", delay:1600 },
    { text:"SIGNAL DETECTED", glitch:true, delay:2400 },
    { text:"SOURCE: UNKNOWN", delay:3000 }
  ],
  commands:[
    { text:"SCAN", next:"scan" },
    { text:"IGNORE", next:"ignore" }
  ],
  commandsDelay:3500
},

scan:{
  logs: log01, // ← 外部ログ読み込み
  commands:[
    { text:"ANALYZE", next:"analyze" },
    { text:"DISCONNECT", next:"disconnect" }
  ],
  commandsDelay:2500
},

ignore:{
  logs:[
    { text:"IGNORING SIGNAL" },
    { text:"SYSTEM STABLE", delay:1000 },
    { text:"...", delay:2000 },
    { text:"SIGNAL LOST", delay:3000 }
  ]
},

analyze:{
  logs:[
    { text:"ANALYZING DATA" },
    { text:"DATA CORRUPTED", corrupt:true, glitch:true, delay:1000 },
    { text:"RECONSTRUCTING...", delay:2000 },
    { text:"UNKNOWN ENTITY DETECTED", delay:3000 }
  ]
},

disconnect:{
  logs:[
    { text:"DISCONNECTING" },
    { text:"CONNECTION CLOSED", delay:1000 }
  ]
}

}
