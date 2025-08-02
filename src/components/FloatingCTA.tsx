'use client'

import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
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
    // 절대적인 카운트다운 시작 시간 설정 (2024년 1월 20일 오후 2시)
    const countdownStartTime = new Date('2024-01-20T14:00:00').getTime()
    const countdownDuration = 36 * 60 * 60 * 1000 // 36시간을 밀리초로
    const countdownEndTime = countdownStartTime + countdownDuration

    const updateCountdown = () => {
      const now = new Date().getTime()
      const timeDifference = countdownEndTime - now

      if (timeDifference > 0) {
        // 남은 시간 계산
        const hours = Math.floor(timeDifference / (1000 * 60 * 60))
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        // 카운트다운이 끝났을 때
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // 초기 카운트다운 설정
    updateCountdown()

    // 1초마다 업데이트
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
        <button 
          onClick={scrollToContact}
          className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg text-sm animate-bounce"
        >
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