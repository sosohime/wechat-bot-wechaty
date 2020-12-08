import { log, Message, Wechaty } from 'wechaty';
import { lowIQMessage } from '../../api'

async function onMessage(this: Wechaty, message: Message): Promise<void> {
  log.info('on-message', 'onMessage(%s).', message);
  // 不回复来自己的消息、太久前的消息
  if(message.self() || message.age() > 60) {
    return
  } else if(await message.mentionSelf()) {
    // 提及机器人时回复信息
    // match
    const replay = await lowIQMessage(message.text());
    message.say(replay)
  }
}

export default onMessage;
