const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukkan produk', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[BUY OI]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('6281313726400@s.whatsapp.net', teks1, MessageType.text)
     conn.sendMessage('6287755080455@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, 'Own Saia Akan Chat kamu.', m)
}
handler.help = ['buy <produk>']
handler.tags = ['mgntd']
handler.command = /^(beli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler