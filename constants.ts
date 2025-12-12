import { SiteConfig, Service, Project } from './types';

export const SITE_CONFIG: SiteConfig = {
  name: "Ding Studio",
  description: "브랜드의 가치를 높이는 크리에이티브 에이전시, 딩 스튜디오입니다.",
  contact: {
    email: "contact@dingstudio.kr",
    phone: "02-1234-5678",
    address: "서울특별시 강남구 테헤란로 123, 딩빌딩 4층",
  },
  socials: {
    instagram: "https://instagram.com/dingstudio",
    behance: "https://behance.net/dingstudio",
  }
};

export const NAV_LINKS = [
  { name: "홈", href: "#home" },
  { name: "서비스", href: "#services" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "회사소개", href: "#about" },
  { name: "문의하기", href: "#contact" },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: "네온 테크 리브랜딩",
    description: "미래지향적인 스타트업을 위한 아이덴티티 디자인",
    category: "Branding",
    imageUrl: "https://picsum.photos/id/20/800/600",
  },
  {
    id: '2',
    title: "카페 모닝글로리 웹사이트",
    description: "감성적인 분위기의 반응형 웹사이트 구축",
    category: "Web Development",
    imageUrl: "https://picsum.photos/id/3/800/600",
  },
  {
    id: '3',
    title: "핀테크 앱 UI/UX",
    description: "사용자 경험을 극대화한 금융 앱 디자인",
    category: "Logo Design",
    imageUrl: "https://picsum.photos/id/60/800/600",
  },
  {
    id: '4',
    title: "에코 라이프스타일 샵",
    description: "친환경 제품을 위한 이커머스 플랫폼",
    category: "Web Development",
    imageUrl: "https://picsum.photos/id/119/800/600",
  },
  {
    id: '5',
    title: "미니멀리스트 로고 컬렉션",
    description: "단순함 속에 담긴 브랜드 철학",
    category: "Logo Design",
    imageUrl: "https://picsum.photos/id/48/800/600",
  },
  {
    id: '6',
    title: "어반 스트릿 패션",
    description: "MZ세대를 타겟으로 한 패션 브랜드 룩북 웹",
    category: "Web Development",
    imageUrl: "https://picsum.photos/id/250/800/600",
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: "로고 디자인 & 브랜딩",
    description: "브랜드의 핵심 가치를 시각적으로 표현하여 강력한 아이덴티티를 구축합니다.",
    price: "₩ 1,500,000 ~",
    features: [
      "브랜드 컨셉 도출 및 전략 수립",
      "로고 시안 3종 제안",
      "심볼, 워드마크, 엠블럼 디자인",
      "어플리케이션 가이드 (명함, 봉투 등)"
    ],
    iconName: "PenTool"
  },
  {
    id: 's2',
    title: "웹사이트 구축",
    description: "최신 트렌드를 반영한 반응형 웹사이트로 비즈니스의 성장을 돕습니다.",
    price: "₩ 3,000,000 ~",
    features: [
      "기획 및 UI/UX 디자인",
      "모바일 최적화 (반응형 웹)",
      "SEO (검색 엔진 최적화)",
      "관리자 페이지 제공"
    ],
    iconName: "Monitor"
  },
  {
    id: 's3',
    title: "종합 크리에이티브 패키지",
    description: "초기 스타트업을 위한 로고부터 웹사이트까지 올인원 솔루션입니다.",
    price: "₩ 4,000,000 ~",
    features: [
      "로고 디자인 & 브랜딩 패키지",
      "반응형 웹사이트 (5페이지 이내)",
      "마케팅용 SNS 이미지 템플릿",
      "도메인 및 호스팅 1년 지원"
    ],
    iconName: "Package"
  }
];