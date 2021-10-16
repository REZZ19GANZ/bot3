let handler  = async (m, { conn, args }) => {
   m.reply(`
*Tutor Install Bot-weah*
*$ pkg update && pkg upgrade -y*
*$ pkg install nodejs -y*
*$ pkg install ffmpeg -y*
*$ pkg install imagemagick -Y*
*$ pkg install git -y*
*$ git clone https://github.com/Xmell91/Bot-weah*
*$ cd Bot-weah*
*$ npm i*`)
}
handler.command = ['sc', 'script']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler