# Insight Hub 랜딩페이지

Next.js와 TypeScript를 사용하여 만든 현대적인 랜딩페이지입니다.

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 방법

1. **Node.js 설치**
   - [Node.js 공식 사이트](https://nodejs.org/ko/)에서 LTS 버전을 다운로드하여 설치하세요.

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   - http://localhost:3000 으로 접속하여 확인하세요.

## 📁 프로젝트 구조

```
insight_hub/
├── src/
│   ├── app/
│   │   ├── globals.css      # 전역 스타일
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   └── page.tsx         # 메인 페이지
│   └── components/
│       ├── Hero.tsx         # 히어로 섹션
│       ├── Features.tsx     # 기능 소개
│       ├── About.tsx        # 회사 소개
│       ├── Contact.tsx      # 연락처
│       └── Footer.tsx       # 푸터
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ 사용된 기술

- **Next.js 14**: React 기반의 풀스택 프레임워크
- **TypeScript**: 타입 안전성을 제공하는 JavaScript 확장
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **PostCSS**: CSS 전처리기

## 🎨 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 화면

### 2. 모던 UI/UX
- 깔끔하고 현대적인 디자인
- 부드러운 애니메이션과 호버 효과

### 3. 컴포넌트 기반 구조
- 재사용 가능한 컴포넌트로 구성
- 유지보수가 용이한 구조

## 📝 커스터마이징

### 색상 변경
`tailwind.config.js` 파일에서 색상을 수정할 수 있습니다:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  },
}
```

### 내용 수정
각 컴포넌트 파일에서 텍스트와 내용을 수정할 수 있습니다.

## 🚀 배포

### Vercel 배포 (권장)
1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 설정

### 수동 빌드
```bash
npm run build
npm start
```

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든 연락주세요.

## 📄 라이선스

MIT License

---

**참고**: 이 프로젝트는 학습 목적으로 제작되었습니다. 실제 서비스에 사용하시려면 추가적인 보안 및 성능 최적화가 필요합니다. 