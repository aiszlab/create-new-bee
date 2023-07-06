import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'new bee with any apps',
  description: 'it is an exciting way to build you app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zh_CN'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
