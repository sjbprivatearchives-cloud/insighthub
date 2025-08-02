'use client'

import { useEffect, useState } from 'react'

export default function Solution() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('#solution-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="solution-section" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            카피라이팅부터 세무까지 + 커뮤니티까지!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            포기하지 않도록 같은 셀러들과 함께하는 완벽한 부업 환경
          </p>
        </div>
        
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg border border-primary-100 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-3xl mb-2">✍️</div>
            <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">카피라이팅</h3>
            <p className="text-xs md:text-sm text-gray-600">판매율 300%</p>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg border border-secondary-100 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-3xl mb-2">📦</div>
            <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">아이템소싱</h3>
            <p className="text-xs md:text-sm text-gray-600">핫템 분석</p>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg border border-primary-100 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-3xl mb-2">🚚</div>
            <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">물류 관리</h3>
            <p className="text-xs md:text-sm text-gray-600">배송 최적화</p>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg border border-secondary-100 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-3xl mb-2">📋</div>
            <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">법무·세무</h3>
            <p className="text-xs md:text-sm text-gray-600">계약서·세무</p>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg border border-primary-100 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-3xl mb-2">👥</div>
            <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">커뮤니티</h3>
            <p className="text-xs md:text-sm text-gray-600">단톡방·카페</p>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg border border-secondary-100 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-3xl mb-2">🤖</div>
            <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">AI 자동화</h3>
            <p className="text-xs md:text-sm text-gray-600">24시간 운영</p>
          </div>
        </div>
        
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              포기하지 않는 완벽한 환경!
            </h3>
            <p className="text-xl">
              같은 셀러들과 함께 성공하세요!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 