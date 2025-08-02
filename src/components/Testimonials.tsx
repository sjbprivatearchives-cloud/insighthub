export default function Testimonials() {
  const testimonials = [
    {
      name: "김영희",
      role: "회사원",
      content: "처음에는 어려울 줄 알았는데, 가이드 덕분에 3개월 만에 월 300만원 수익을 달성했습니다. 정말 감사합니다!",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "박철수",
      role: "대학생",
      content: "학비 마련을 위해 시작했는데, 예상보다 훨씬 빨리 수익이 나기 시작했어요. 이제 졸업 후에도 계속할 예정입니다.",
      avatar: "👨‍🎓",
      rating: 5
    },
    {
      name: "이미영",
      role: "주부",
      content: "아이들 키우면서도 할 수 있는 부업을 찾고 있었는데, 정말 만족스러워요. 시간도 자유롭고 수익도 좋습니다.",
      avatar: "👩‍👧‍👦",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            실제 성공 사례
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            우리 가이드를 통해 성공한 부업가들의 생생한 후기를 들어보세요
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 