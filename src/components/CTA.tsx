'use client'

export default function CTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            쿠팡·스마트스토어·당근마켓
            <br />
            <span className="text-yellow-300">무조건 돈 벌 수 있다!</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            구매대행·브랜드유통·위탁판매 + 세무지식까지
            <br />
            <span className="font-bold text-yellow-300">내가 할 수 있는 것만 골라서 실행하면 끝!</span>
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">50만원</div>
                <div className="text-sm opacity-80">정가</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-4xl">→</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-300 mb-2">무료</div>
                <div className="text-sm opacity-80">지금만</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={scrollToContact}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              📚 무료 전자책 다운로드
            </button>
            <div className="text-sm opacity-80">
              ⏰ 오늘만! 내일부터는 유료로 변경됩니다
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center">
              <div className="text-2xl mr-3">✅</div>
              <div className="text-left">
                <div className="font-semibold">즉시 다운로드</div>
                <div className="text-sm opacity-80">결제 없이 바로 받기</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl mr-3">✅</div>
              <div className="text-left">
                <div className="font-semibold">평생 보관</div>
                <div className="text-sm opacity-80">언제든 다시 보기</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl mr-3">✅</div>
              <div className="text-left">
                <div className="font-semibold">1:1 상담</div>
                <div className="text-sm opacity-80">전문가 직접 도움</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-red-500/20 border border-red-400 rounded-lg p-4">
            <p className="text-lg font-semibold">
              🚨 한정 200명 얼리버드 특별 혜택
            </p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• 쿠팡·스마트스토어·당근마켓 완벽 가이드</li>
              <li>• 세무지식·법무지식 포함</li>
              <li>• 1:1 매니저 추가 코칭권</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 