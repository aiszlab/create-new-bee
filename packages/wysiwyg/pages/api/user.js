import { parentPort } from 'worker_threads'

export default function handler(req, res) {
  console.log('parentPort====', parentPort)
  parentPort.postMessage('测试一个消息')
  res.status(200).json({ name: 'John Doe' })
}
