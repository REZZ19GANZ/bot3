let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
imeg = await conn.getProfilePicture(conn.user.jid).catch(() => 'https://storage.caliph71.xyz/img/itsuki.jpg')

listMessage = {
    "listMessage": {
      "title": "SEWA BOT",
      "description": "LIST HARGA SEWA BOT",
      "buttonText": "Amel",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "sewa bot",
            "products": [
              {
                "productId": "4437769029651145"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4437769029651145",
          "jpegThumbnail": await getBuffer(imeg)
             },
        "businessOwnerJid": "6287755080455@s.whatsapp.net"
      },
      "footerText": "Bot-weah",
    }
  }
  
  h = await conn.prepareMessageFromContent(m.chat, listMessage, { quoted: m })
  conn.relayWAMessage(h)
}
handler.command = ['sewa', 'sewabot']
module.exports = handler