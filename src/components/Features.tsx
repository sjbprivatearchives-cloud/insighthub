export default function Features() {
  const features = [
    {
      title: "쿠팡 파트너스",
      description: "링크 하나로 수수료 수익, 재고 걱정 없이 시작",
      icon: "🛒"
    },
    {
      title: "스마트스토어",
      description: "구매대행·브랜드유통·위탁판매 완벽 가이드",
      icon: "🏪"
    },
    {
      title: "당근마켓",
      description: "중고거래로 빠른 현금 수익, 지역별 전략",
      icon: "🥕"
    },
    {
      title: "세무·법무",
      description: "사업자등록·부가세·소득세 초간단 정리",
      icon: "📊"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            내가 할 수 있는 것만 골라서 실행!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            쿠팡·스마트스토어·당근마켓 + 세무지식까지 완벽 가이드
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300 border border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 