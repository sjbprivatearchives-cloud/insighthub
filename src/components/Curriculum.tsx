export default function Curriculum() {
  const steps = [
    {
      step: "01",
      title: "사업자등록 & 세무기초",
      content: ["홈택스 사업자등록 완벽 가이드", "부가세·소득세 초간단 정리"],
      icon: "📋"
    },
    {
      step: "02",
      title: "쿠팡 파트너스 시작",
      content: ["회원가입·상품 선정·링크 생성", "수수료 수익 실시간 확인"],
      icon: "🛒"
    },
    {
      step: "03",
      title: "스마트스토어 구축",
      content: ["구매대행·브랜드유통·위탁판매", "상품 등록·결제·배송 설정"],
      icon: "🏪"
    },
    {
      step: "04",
      title: "당근마켓 전략",
      content: ["중고상품 선정·사진 촬영", "지역별 가격 전략·빠른 거래"],
      icon: "🥕"
    },
    {
      step: "05",
      title: "마케팅 & 광고",
      content: ["네이버·구글·페이스북 광고", "키워드 최적화·예산 관리"],
      icon: "📢"
    },
    {
      step: "06",
      title: "고객 관리 & CS",
      content: ["주문 관리·배송 추적", "고객 문의·리뷰 관리"],
      icon: "💬"
    },
    {
      step: "07",
      title: "수익 분석 & 확장",
      content: ["매출 분석·수익률 계산", "성공 상품 확장·신규 플랫폼 진출"],
      icon: "📈"
    },
    {
      step: "08",
      title: "세무 신고 & 관리",
      content: ["분기별 부가세 신고", "연말정산·소득세 신고"],
      icon: "💰"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            플랫폼별 완벽 커리큘럼
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            쿠팡·스마트스토어·당근마켓 + 세무지식까지 단계별로 따라하세요
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-lg border border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  {step.step}
                </div>
                <div className="text-2xl">{step.icon}</div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <ul className="space-y-2">
                {step.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-2xl inline-block">
            <p className="text-lg font-semibold">
              "내가 할 수 있는 것만 골라서 실행하면 무조건 돈 벌 수 있다!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 