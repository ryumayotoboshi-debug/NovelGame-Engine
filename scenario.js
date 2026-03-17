const scenario = [

{
text:"……"
},

{
symbol:"●",
text:"存在を検出"
},

{
log:"SIGNAL DETECTED",
text:"微弱な信号がある"
},

{
color:"#001122",
text:"少し空気が変わった"
},

{
glitch:true,
text:"……ノイズ"
},

{
choice:[
{ text:"観測する", next:6 },
{ text:"無視する", next:8 }
]
},

{
text:"あなたは観測を続けた",
next:7
},

{
text:"何も起こらない",
},

{
text:"あなたは目を逸らした"
}

]