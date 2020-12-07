import { Message, Wechaty } from 'wechaty'
import { ScanStatus } from 'wechaty-puppet'
import * as QrcodeTerminal from 'qrcode-terminal';

const token = process.env.Donut_Bot_Token

const bot = new Wechaty({
  puppet: 'wechaty-puppet-hostie',
  puppetOptions: {
    token,
  }
});

bot
  .on('scan', (qrcode, status) => {
    if (status === ScanStatus.Waiting) {
      QrcodeTerminal.generate(qrcode, {
        small: true
      })
    }
  })
  .on('login', async user => {
    console.log(`user: ${JSON.stringify(user)}`)
  })
  .on('message', async (message: Message) => {
    console.log(`message: ${JSON.stringify(message)}`)
    if(message.type() !== bot.Message.Type.Text) {
        return
    }
    if(message.self()) {
        return
    }
    await message.say('你好我是SosoBot，现在我还没有理解能力，但是我已经活了')
  })
  .start()