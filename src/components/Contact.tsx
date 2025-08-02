'use client'

import { useEffect } from 'react'

export default function Contact() {
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
        document.head.appendChild(script)
      } else if (window.Tally) {
        window.Tally.loadEmbeds()
      }
    }

    loadTallyScript()

    return () => {
      // 컴포넌트 언마운트 시 정리
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            수강신청
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            인사이트 허브 프로그램에 참여하고 싶으시다면 아래 폼을 통해 신청해주세요.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 프로그램 안내 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                  프로그램 안내
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  실무 중심의 교육으로 여러분의 성장을 도와드립니다.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">실무 중심 교육</h4>
                    <p className="text-gray-600">이론보다 실무에 집중한 교육으로 바로 적용 가능한 스킬을 습득합니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">유연한 학습 일정</h4>
                    <p className="text-gray-600">본인의 일정에 맞춰 학습할 수 있는 유연한 교육 시스템입니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">1:1 멘토링</h4>
                    <p className="text-gray-600">개인별 맞춤 멘토링을 통해 더욱 효과적인 학습을 지원합니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">24시간 문의 지원</h4>
                    <p className="text-gray-600">언제든지 문의하실 수 있습니다: sjb.privatearchives@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">수강 혜택</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    실무 프로젝트 참여 기회
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    수료증 발급
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    취업 연계 지원
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    평생 학습 자료 제공
                  </li>
                </ul>
              </div>
            </div>

            {/* Tally 수강신청 폼 */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
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
                  height="600" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0" 
                  title="인사이트 허브 수강신청"
                  className="rounded-lg"
                  style={{ minHeight: '600px' }}
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  문의사항이 있으시면 <a href="mailto:sjb.privatearchives@gmail.com" className="text-blue-600 hover:underline">sjb.privatearchives@gmail.com</a>으로 연락주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 