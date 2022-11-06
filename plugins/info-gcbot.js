import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group`))
let botol = global.wm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group 1 :
https://chat.whatsapp.com/DTa2DA0FxsMA4A3o3Nh6J7

🍀 Youtube :
https://youtu.be/pwLZpdjO8AU
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['⋮☰ MENU','.menu']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
