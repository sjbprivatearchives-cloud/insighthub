export default function Process() {
  const steps = [
    {
      step: "01",
      title: "가입 및 설정",
      description: "무료 가입 후 기본 설정을 완료합니다",
      icon: "📝"
    },
    {
      step: "02",
      title: "제품 선정",
      description: "수익성이 높은 제품을 선정하고 등록합니다",
      icon: "📦"
    },
    {
      step: "03",
      title: "마케팅 시작",
      description: "소셜미디어와 광고를 통해 판매를 시작합니다",
      icon: "📱"
    },
    {
      step: "04",
      title: "수익 창출",
      description: "자동화 시스템으로 지속적인 수익을 창출합니다",
      icon: "💰"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            시작부터 수익까지 4단계
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            복잡하지 않습니다. 단계별로 따라하시면 누구나 성공할 수 있습니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              
              {/* 연결선 */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-200 transform -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 