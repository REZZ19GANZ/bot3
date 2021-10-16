let fs = require('fs')
let handler = async function (m) {
const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `owner`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}
	
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: fcon, contextInfo: { externalAdReply :{
mediaUrl: 'https://youtu.be/jsjsbsi',
mediaType: 2,
title: 'SH鑫',
}}})
conn.sendButton(m.chat, '_Nih owner ku kak_'.trim(), '*SH鑫*', 'DONAS', '.donasi', test, 'conversation', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://Instagram.com/melcanz.io',
mediaType: 2,
title: 'OWNER',
thumbnailUrl: 'https://telegra.ph/file/efd304268e9b183c9f8a3.jpg'
}}})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
// crew-bot