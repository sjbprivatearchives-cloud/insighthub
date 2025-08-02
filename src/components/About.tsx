export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              온라인 이커머스 부업이란?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              온라인 이커머스 부업은 인터넷을 통해 제품을 판매하여 
              수익을 창출하는 부업 형태입니다. 재고 관리 없이도 
              시작할 수 있어 초보자도 쉽게 도전할 수 있습니다.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              드롭쉬핑, 소셜커머스, 온라인 마켓플레이스 등 
              다양한 방식으로 시작할 수 있으며, 자동화 시스템을 
              활용하면 시간 투자 대비 높은 수익을 얻을 수 있습니다.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500만원+</div>
                <div className="text-gray-600">월 평균 수익</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">3개월</div>
                <div className="text-gray-600">수익 창출 기간</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-primary-100">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">초기 투자 최소화</h3>
                  <p className="text-gray-600">재고 없이 시작, 수수료만으로 수익 창출</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">자동화 시스템</h3>
                  <p className="text-gray-600">주문부터 배송까지 자동화로 시간 절약</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">확장 가능성</h3>
                  <p className="text-gray-600">성공 후 다양한 제품군으로 확장 가능</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 