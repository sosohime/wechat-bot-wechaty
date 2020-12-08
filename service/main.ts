import { WechatyOptions } from 'wechaty'
import { getBot } from './bot'

async function main() {
  if(!process.env.Donut_Bot_Token) {
    console.error('[ERR] Please set Donut_Bot_Token to env');
    process.exit(1);
  }
  
  const options: WechatyOptions = {
    puppet: 'wechaty-puppet-hostie',
    puppetOptions: {
      token: process.env.Donut_Bot_Token,
    }
  };

  const bot = getBot(options);

  await bot.start();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
