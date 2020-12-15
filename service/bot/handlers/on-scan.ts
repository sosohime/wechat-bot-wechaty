import { log, Wechaty } from 'wechaty';
import { ScanStatus } from 'wechaty-puppet';
import QrcodeTerminal from 'qrcode-terminal';

async function onScan(this: Wechaty, qrcode: string, status: number): Promise<void> {
  log.info('on-scan', 'onScan() [%s] %s\nScan QR Code above to log in.', status, qrcode);
  if (status === ScanStatus.Waiting) {
    QrcodeTerminal.generate(qrcode, {
      small: true
    })
  }
}

export default onScan;
