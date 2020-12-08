import * as externalWebApi from './external-web-api';

interface MatchInputMessage {
    words: string[],
    replay: (input_message?: string) => Promise<string>
}

const defaultReplay = async () => externalWebApi.caihongpoi()

const matchInputMessage: MatchInputMessage[] = [{
    words: ['鸡汤'],
    replay: async () => externalWebApi.dujitang()
}, {
    words: ['渣男'],
    replay: async () => externalWebApi.zhanan()
}, {
    words: ['给老子骂'],
    replay: async () => externalWebApi.maren('min')
}, {
    words: ['往死里骂'],
    replay: async () => externalWebApi.maren('max')
}, {
    words: ['夸一下', '夸一夸', '赞美'],
    replay: async () => externalWebApi.caihongpoi()
}]

async function getMessage(input_message: string): Promise<string> {
    const matched = matchInputMessage.find(m => m.words.some(keyword => input_message.includes(keyword)));
    if(matched) {
        return matched.replay()
    } else {
        return defaultReplay()
    }
}

export {
    getMessage as lowIQMessage
}