let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *ALL PAYMENT*: 087755080455
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY MELBOT*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥  SHOP TERPERCAYA 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(PEMBAYARAN)$/i
handler.command = new RegExp

module.exports = handler
 