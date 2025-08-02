export default function Crisis() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-secondary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            아직도 월급만 바라보시나요?
          </h2>
          <p className="text-xl md:text-2xl opacity-90">
            물가 상승에 월급만으로는 감당할 수 없는 시대
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-primary-500/20 rounded-lg border border-primary-400/30">
            <div className="text-4xl mb-4">📉</div>
            <h3 className="text-xl font-bold mb-3">직장인 80%</h3>
            <p className="text-gray-300">부수입 없이는 물가 상승 감당 불가</p>
          </div>
          
          <div className="text-center p-6 bg-secondary-500/20 rounded-lg border border-secondary-400/30">
            <div className="text-4xl mb-4">⏳</div>
            <h3 className="text-xl font-bold mb-3">시간은 흐르는데</h3>
            <p className="text-gray-300">통장 잔고는 그대로...</p>
          </div>
          
          <div className="text-center p-6 bg-primary-600/20 rounded-lg border border-primary-500/30">
            <div className="text-4xl mb-4">💔</div>
            <h3 className="text-xl font-bold mb-3">퇴직 후엔 더 불안</h3>
            <p className="text-gray-300">준비 없는 은퇴는 공포</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              이커머스 부업, 지금 시작하지 않으면 기회는 사라집니다!
            </h3>
            <p className="text-lg opacity-90">
              컴맹도 Ctrl + C만 할 줄 알면 월 100만원 만든다!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 