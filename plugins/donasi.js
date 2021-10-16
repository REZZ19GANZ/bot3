let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
imeg = await conn.getProfilePicture(conn.user.jid).catch(() => 'https://storage.caliph71.xyz/img/itsuki.jpg')

listMessage = {
    "listMessage": {
      "title": "DONASI",
      "description": "yey ada yg donasi",
      "buttonText": "Amel",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "DONASI",
            "products": [
              {
                "productId": "7169955379685014"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "7169955379685014",
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
handler.command = ['donasi']
module.exports = handler