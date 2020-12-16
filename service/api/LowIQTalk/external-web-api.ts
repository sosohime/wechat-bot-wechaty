import axios from 'axios';
import { JSDOM } from 'jsdom';

async function caihongpoi(): Promise<string> {
    
    try {
        const res = await axios.get('https://chp.shadiao.app/api.php')
        
        return res.data || '彩虹屁获取异常'
    }catch(e) {
        return '彩虹屁获取异常'
    }
}

type MaRenLevel = 'min' | 'max'

async function maren(level: MaRenLevel): Promise<string> {
    const apiMap: {[key in MaRenLevel]: string} = {
        min: 'https://zuanbot.com/api.php?level=min',
        max: 'https://zuanbot.com/api.php'
    }
    try{
        const res = await axios.get(apiMap[level])
        return res.data || '老子网络异常了，歇一会'
    }catch(e) {
        return '老子网络异常了，歇一会'
    }
}

async function dujitang():Promise<string> {
    try{
        const res = await axios.get('http://www.nows.fun/')

        const dom = new JSDOM(res.data);

        const dujitang = (dom.window.document.querySelector('#sentence') || {}).textContent

        return dujitang || '鸡汤熬不动了，歇一会'
    }catch(e) {
        return '鸡汤熬不动了，歇一会'
    }
}

async function zhanan():Promise<string> {
    try{
        const res = await axios.get('https://api.lovelive.tools/api/SweetNothings/Serialization/Json')

        return (res.data || {returnObj:[]} as any).returnObj[0] || '宝贝等一下'
    }catch(e) {
        return '宝贝等一下'
    }
}

export {
    caihongpoi,
    maren,
    dujitang,
    zhanan,
}