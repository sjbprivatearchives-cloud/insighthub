export default function Stats() {
  const stats = [
    {
      number: "500만원+",
      label: "월 평균 수익",
      description: "성공한 부업가들의 평균 수익"
    },
    {
      number: "3개월",
      label: "수익 창출 기간",
      description: "첫 매출까지 걸리는 평균 시간"
    },
    {
      number: "95%",
      label: "성공률",
      description: "가이드 따라하기 성공률"
    },
    {
      number: "24시간",
      label: "자동화 운영",
      description: "수동 개입 없이 자동 운영"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            검증된 수익 실적
          </h2>
          <p className="text-xl opacity-90">
            실제 부업가들의 성공 사례를 통해 검증된 결과입니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm opacity-80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 