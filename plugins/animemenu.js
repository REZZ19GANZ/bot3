let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
imeg = await conn.getProfilePicture(conn.user.jid).catch(() => 'https://storage.caliph71.xyz/img/itsuki.jpg')

listMessage = {
    "listMessage": {
      "title": "anime menu",
      "description": "anime menu",
      "buttonText": "Hai",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "anime menu",
            "products": [
              {
                "productId": "4348572731878864"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4348572731878864",
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
handler.command = ['animemenu']
module.exports = handler