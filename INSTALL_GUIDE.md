# 🚀 Next.js 랜딩페이지 설치 가이드

## 1단계: Node.js 설치

### Windows에서 Node.js 설치하기

1. **Node.js 다운로드**
   - 브라우저에서 https://nodejs.org/ko/ 접속
   - "LTS" 버전 클릭 (더 안정적)
   - Windows Installer (.msi) 파일 다운로드

2. **설치 과정**
   ```
   📁 다운로드한 .msi 파일을 더블클릭
   → "Next" 버튼 클릭
   → 기본 설정 유지 (체크박스 모두 체크)
   → "Install" 버튼 클릭
   → 설치 완료 후 "Finish" 클릭
   ```

3. **설치 확인**
   - 컴퓨터 재시작 또는 터미널 새로 열기
   - 터미널에서 다음 명령어 실행:
   ```bash
   node --version
   npm --version
   ```

## 2단계: 프로젝트 의존성 설치

Node.js 설치 완료 후:

1. **프로젝트 폴더로 이동**
   ```bash
   cd C:\Users\mookb\OneDrive\insight_hub
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **설치 확인**
   - `node_modules` 폴더가 생성되었는지 확인
   - `package-lock.json` 파일이 생성되었는지 확인

## 3단계: 개발 서버 실행

1. **개발 서버 시작**
   ```bash
   npm run dev
   ```

2. **브라우저에서 확인**
   - http://localhost:3000 접속
   - 페이지가 정상적으로 로드되는지 확인

## 4단계: 문제 해결

### 문제 1: 'node' 명령어를 찾을 수 없음
**해결방법:**
- Node.js 재설치
- 컴퓨터 재시작
- 환경변수 확인

### 문제 2: npm install 오류
**해결방법:**
```bash
# 캐시 삭제
npm cache clean --force

# 다시 설치
npm install
```

### 문제 3: 포트 3000이 사용 중
**해결방법:**
```bash
# 다른 포트로 실행
npm run dev -- -p 3001
```

## 5단계: 완전한 랜딩페이지로 변경

개발 서버가 정상 작동하면, 완전한 랜딩페이지로 변경:

1. **src/app/page.tsx 파일 수정**
   ```tsx
   import Hero from '@/components/Hero'
   import Features from '@/components/Features'
   import About from '@/components/About'
   import Contact from '@/components/Contact'
   import Footer from '@/components/Footer'

   export default function Home() {
     return (
       <main className="min-h-screen">
         <Hero />
         <Features />
         <About />
         <Contact />
         <Footer />
       </main>
     )
   }
   ```

## 📞 도움이 필요하시면

1. **Node.js 설치 문제**: https://nodejs.org/ko/ 에서 LTS 버전 다운로드
2. **터미널 명령어 문제**: PowerShell을 관리자 권한으로 실행
3. **포트 문제**: 다른 프로그램이 3000번 포트를 사용 중일 수 있음

## ✅ 체크리스트

- [ ] Node.js 설치 완료
- [ ] npm --version 명령어 실행 성공
- [ ] npm install 실행 성공
- [ ] npm run dev 실행 성공
- [ ] http://localhost:3000 접속 성공
- [ ] 페이지 정상 로드 확인

---

**참고**: 모든 단계를 완료하신 후, 완전한 랜딩페이지로 변경하는 방법을 알려드리겠습니다. 