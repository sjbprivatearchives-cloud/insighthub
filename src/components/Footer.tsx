'use client'

import { useEffect } from 'react'

// Tally 타입 정의
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function Footer() {
  useEffect(() => {
    // Tally 스크립트 로드
    const loadTallyScript = () => {
      if (typeof window !== 'undefined' && !window.Tally) {
        const script = document.createElement('script')
        script.src = 'https://tally.so/widgets/embed.js'
        script.async = true
        script.onload = () => {
          if (window.Tally) {
            window.Tally.loadEmbeds()
          }
        }
        document.body.appendChild(script)
      } else if (window.Tally) {
        window.Tally.loadEmbeds()
      }
    }

    loadTallyScript()

    return () => {
      // 컴포넌트 언마운트 시 정리
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* 수강신청 섹션 */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                지금 바로 수강신청하세요!
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                인사이트 허브와 함께 이커머스 성공의 길로 나아가세요.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  수강신청 폼
                </h3>
                <p className="text-gray-600">
                  아래 폼을 작성해주시면 빠른 시일 내에 연락드리겠습니다.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <iframe 
                  data-tally-src="https://tally.so/embed/wMpB9X?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height={424}
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="인사이트 허브 수강신청"
                  className="rounded-lg"
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  문의사항이 있으시면 <a href="mailto:sjb.privatearchives@gmail.com" className="text-blue-600 hover:underline font-medium">sjb.privatearchives@gmail.com</a>으로 연락주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 기존 Footer 정보 */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">인사이트 허브</h3>
              <p className="text-gray-400">
                컴퓨터 몰라도 이커머스로 돈 벌 수 있는 완벽한 가이드를 제공합니다.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">카피라이팅 가이드</a></li>
                <li><a href="#" className="hover:text-white transition-colors">아이템소싱</a></li>
                <li><a href="#" className="hover:text-white transition-colors">물류 관리</a></li>
                <li><a href="#" className="hover:text-white transition-colors">법무·세무</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">커뮤니티</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">단톡방</a></li>
                <li><a href="#" className="hover:text-white transition-colors">네이버 카페</a></li>
                <li><a href="#" className="hover:text-white transition-colors">성공 사례</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Q&A</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>이메일: sjb.privatearchives@gmail.com</li>
                <li>카카오톡: @인사이트허브</li>
                <li>운영시간: 평일 09:00-18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 인사이트 허브. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 