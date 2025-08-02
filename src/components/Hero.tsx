'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 py-20 overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary-300 rounded-full opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚨 한정인원! 수강신청으로 시작하세요
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            컴퓨터 몰라도
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              인생 2막, 이커머스로
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              월수입 만들기!
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            카피라이팅 템플릿·아이템소싱·물류·근로계약서·비용처리·법무·세무
            <br />
            <span className="font-semibold text-primary-600">+ 단톡방·네이버 카페 커뮤니티까지 수강신청으로 모두 제공!</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg text-lg">
              📚 수강신청하기
            </button>
            <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg">
              👥 커뮤니티 미리보기
            </button>
          </div>
          
          {/* 지금 시작하세요 섹션 */}
          <div className={`text-center mb-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              지금 시작하세요
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              온라인 이커머스 부업으로 안정적인 수익을 창출해보세요.
              <br />
              수강신청을 통해 성공 전략을 확인해보세요.
            </p>
          </div>
          
          {/* 제공 자료 상세 */}
          <div className={`bg-gradient-to-r from-green-50 to-blue-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-4xl mx-auto border border-green-200 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
              📚 완벽한 이커머스 부업 자료
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">✍️</div>
                <div className="font-semibold text-gray-900 text-xs md:text-sm">카피라이팅</div>
                <div className="text-xs text-gray-600">판매율 300%</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">📦</div>
                <div className="font-semibold text-gray-900 text-xs md:text-sm">아이템소싱</div>
                <div className="text-xs text-gray-600">핫템 분석</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">🚚</div>
                <div className="font-semibold text-gray-900 text-xs md:text-sm">물류 관리</div>
                <div className="text-xs text-gray-600">배송 최적화</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">📋</div>
                <div className="font-semibold text-gray-900 text-xs md:text-sm">법무·세무</div>
                <div className="text-xs text-gray-600">계약서·세무</div>
              </div>
            </div>
          </div>
          
          {/* 커뮤니티 강조 */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
              👥 포기하지 않는 커뮤니티
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">💬</div>
                <div className="font-semibold text-gray-900 text-xs md:text-sm">단톡방</div>
                <div className="text-xs text-gray-600">실시간 공유</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">🏢</div>
                <div className="font-semibold text-gray-900 text-xs md:text-sm">네이버 카페</div>
                <div className="text-xs text-gray-600">지속 업데이트</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">🤝</div>
                <div className="font-semibold text-gray-900 text-xs md:text-sm">셀러 네트워크</div>
                <div className="text-xs text-gray-600">성공 사례</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">📈</div>
                <div className="font-semibold text-gray-900 text-xs md:text-sm">수익 공유</div>
                <div className="text-xs text-gray-600">실시간 현황</div>
              </div>
            </div>
          </div>
          
          {/* 플랫폼 로고 */}
          <div className={`grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col items-center justify-center p-2 md:p-3 bg-white rounded-lg shadow-md border border-primary-100 hover:scale-105 transition-transform duration-300">
              <div className="text-lg md:text-xl mb-1">🛒</div>
              <div className="font-semibold text-gray-900 text-xs">쿠팡</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 md:p-3 bg-white rounded-lg shadow-md border border-secondary-100 hover:scale-105 transition-transform duration-300">
              <div className="text-lg md:text-xl mb-1">🏪</div>
              <div className="font-semibold text-gray-900 text-xs">스마트스토어</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 md:p-3 bg-white rounded-lg shadow-md border border-primary-100 hover:scale-105 transition-transform duration-300">
              <div className="text-lg md:text-xl mb-1">🥕</div>
              <div className="font-semibold text-gray-900 text-xs">당근마켓</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 md:p-3 bg-white rounded-lg shadow-md border border-secondary-100 hover:scale-105 transition-transform duration-300">
              <div className="text-lg md:text-xl mb-1">📊</div>
              <div className="font-semibold text-gray-900 text-xs">세무지식</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 md:p-3 bg-white rounded-lg shadow-md border border-primary-100 hover:scale-105 transition-transform duration-300">
              <div className="text-lg md:text-xl mb-1">🤖</div>
              <div className="font-semibold text-gray-900 text-xs">AI 자동화</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 md:p-3 bg-white rounded-lg shadow-md border border-secondary-100 hover:scale-105 transition-transform duration-300">
              <div className="text-lg md:text-xl mb-1">👥</div>
              <div className="font-semibold text-gray-900 text-xs">커뮤니티</div>
            </div>
          </div>
          
          {/* 신뢰 요소 */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start justify-start hover:scale-105 transition-transform duration-300">
              <div className="text-xl md:text-2xl mr-2 md:mr-3 mt-1">✅</div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm md:text-base">완벽한 자료</div>
                <div className="text-xs md:text-sm text-gray-600">카피라이팅부터 세무까지</div>
              </div>
            </div>
            <div className="flex items-start justify-start hover:scale-105 transition-transform duration-300">
              <div className="text-xl md:text-2xl mr-2 md:mr-3 mt-1">✅</div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm md:text-base">커뮤니티 지원</div>
                <div className="text-xs md:text-sm text-gray-600">포기하지 않는 환경</div>
              </div>
            </div>
            <div className="flex items-start justify-start hover:scale-105 transition-transform duration-300">
              <div className="text-xl md:text-2xl mr-2 md:mr-3 mt-1">✅</div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm md:text-base">한정인원</div>
                <div className="text-xs md:text-sm text-gray-600">지금만 특별 혜택</div>
              </div>
            </div>
            <div className="flex items-start justify-start hover:scale-105 transition-transform duration-300">
              <div className="text-xl md:text-2xl mr-2 md:mr-3 mt-1">✅</div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm md:text-base">실제 성공 사례</div>
                <div className="text-xs md:text-sm text-gray-600">검증된 수익 창출</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 