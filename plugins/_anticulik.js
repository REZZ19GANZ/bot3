let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `main Culik aja anak ngentot
Kontak Owner Saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6287755080455', 'Mel-bot', idnya)
  }
  return true
}

module.exports = handler