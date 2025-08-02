'use client'

import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 35,
    minutes: 59,
    seconds: 59
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 컴포넌트가 마운트되면 애니메이션 시작
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        seconds -= 1
        
        if (seconds < 0) {
          seconds = 59
          minutes -= 1
        }
        
        if (minutes < 0) {
          minutes = 59
          hours -= 1
        }
        
        if (hours < 0) {
          // 36시간이 지나면 다시 36시간으로 리셋
          hours = 35
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000) // 1초마다 업데이트

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
      <div className="bg-white rounded-lg shadow-2xl border-2 border-primary-500 p-4 hover:shadow-3xl transition-all duration-300">
        {/* 카운트다운 */}
        <div className="text-center mb-3">
          <div className="text-xs text-gray-600 mb-1">남은 시간</div>
          <div className="text-lg font-bold text-red-600 animate-pulse">
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>
        
        {/* 수강신청하기 버튼 */}
        <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg text-sm animate-bounce">
          📚 수강신청하기
        </button>
        
        {/* 한정인원 표시 */}
        <div className="text-center mt-2">
          <div className="text-xs text-gray-500">
            🚨 한정인원 마감 임박
          </div>
        </div>
      </div>
    </div>
  )
} 