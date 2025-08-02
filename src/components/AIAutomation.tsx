export default function AIAutomation() {
  const features = [
    {
      icon: "🛒",
      title: "쿠팡 파트너스 자동화",
      description: "상품 추천·링크 생성·수익 추적 자동화"
    },
    {
      icon: "🏪",
      title: "스마트스토어 운영 자동화",
      description: "상품 등록·재고 관리·주문 처리 자동화"
    },
    {
      icon: "🥕",
      title: "당근마켓 거래 자동화",
      description: "상품 등록·가격 모니터링·채팅 응답 자동화"
    },
    {
      icon: "📊",
      title: "세무 관리 자동화",
      description: "부가세 계산·신고서 작성·세무 신고 자동화"
    },
    {
      icon: "📈",
      title: "수익 분석 자동화",
      description: "매출 분석·수익률 계산·성과 리포트 자동 생성"
    },
    {
      icon: "⚙️",
      title: "통합 관리 시스템",
      description: "모든 플랫폼 통합 대시보드·원클릭 관리"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            플랫폼별 자동화 시스템
          </h2>
          <p className="text-xl md:text-2xl opacity-90">
            쿠팡·스마트스토어·당근마켓 모든 작업을 자동화
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              내가 할 수 있는 것만 골라서 실행하면 끝!
            </h3>
            <p className="text-lg opacity-90">
              모든 플랫폼을 자동화로 관리하고 수익만 확인하세요
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 