export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">인사이트 허브</h3>
            <p className="text-gray-400">
              컴퓨터 몰라도 이커머스로 돈 벌 수 있는 완벽한 가이드를 제공합니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">카피라이팅 가이드</a></li>
              <li><a href="#" className="hover:text-white transition-colors">아이템소싱</a></li>
              <li><a href="#" className="hover:text-white transition-colors">물류 관리</a></li>
              <li><a href="#" className="hover:text-white transition-colors">법무·세무</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">커뮤니티</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">단톡방</a></li>
              <li><a href="#" className="hover:text-white transition-colors">네이버 카페</a></li>
              <li><a href="#" className="hover:text-white transition-colors">성공 사례</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Q&A</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400">
              <li>이메일: contact@insighthub.co.kr</li>
              <li>카카오톡: @인사이트허브</li>
              <li>운영시간: 평일 09:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 인사이트 허브. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 