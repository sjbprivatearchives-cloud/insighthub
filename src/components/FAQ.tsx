export default function FAQ() {
  const faqs = [
    {
      question: "컴맹인데 정말 할 수 있나요?",
      answer: "컴퓨터 기초부터 영상으로 따라 할 수 있게 설계되어 있습니다."
    },
    {
      question: "AI 툴 사용이 복잡하진 않을까요?",
      answer: "단 한 번의 클릭으로 세팅이 완료됩니다."
    },
    {
      question: "매주 주어지는 미션은 부담 없나요?",
      answer: "하루 10분 투자로 충분히 완수 가능한 단계별 미션입니다."
    },
    {
      question: "진행 중 궁금증은 어디서 해결하나요?",
      answer: "전담 지원 채널(채팅·이메일)에서 빠르게 응답해 드립니다."
    },
    {
      question: "전자책·VOD만으로 충분한가요?",
      answer: "모든 절차·화면 예시·영상이 포함되어 있습니다."
    },
    {
      question: "주간 미션은 얼마나 걸리나요?",
      answer: "하루 10분 내외로 완수 가능하도록 설계했습니다."
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer: "다운로드 전까지 100% 환불 보장"
    },
    {
      question: "지속 업데이트는 언제 이뤄지나요?",
      answer: "매월 최신 트렌드 반영 콘텐츠 무료 제공"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            한 번도 못해본 분도, 이젠 클릭만으로 시작!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-primary-100">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-primary-600 mr-3">Q.</span>
                    {faq.question}
                  </h3>
                  <div className="pl-8">
                    <p className="text-gray-600 flex items-start">
                      <span className="text-secondary-600 mr-3 font-semibold">A.</span>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-2xl inline-block">
            <p className="text-lg font-semibold">
              "한 번도 못해본 분도, 이젠 클릭만으로 시작!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 