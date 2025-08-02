import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '인사이트 허브 - 온라인 이커머스 부업 가이드',
  description: '컴퓨터 몰라도 인생 2막, 이커머스로 월수입 만들기! 카피라이팅부터 세무까지 모든 것을 제공하는 인사이트 허브',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 