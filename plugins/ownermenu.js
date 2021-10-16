let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
imeg = await conn.getProfilePicture(conn.user.jid).catch(() => 'https://storage.caliph71.xyz/img/itsuki.jpg')

listMessage = {
    "listMessage": {
      "title": "owner menu",
      "description": "owner menu",
      "buttonText": "Amel",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "owner menu",
            "products": [
              {
                "productId":"4515467955159213"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4515467955159213",
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
handler.command = ['ownermenu']
module.exports = handler