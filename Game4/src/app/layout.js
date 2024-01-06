import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LingoLand Jr',
  description: 'This activity implements consonant-vowel-consonant (CVC) words, which help build the foundation for students’ phonic knowledge.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
