let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `Foto tidak ditemukan`
     await conn.updateProfilePicture (bot, img)
    conn.reply(m.chat, 'Sukses Mengganti Foto Profile Bot!', m)
	}
    }
handler.help = ['setbotpp','setppbot']
handler.tags = ['host']
handler.command = /^(setbotpp|setppbot)$/i
handler.owner = true

module.exports = handler