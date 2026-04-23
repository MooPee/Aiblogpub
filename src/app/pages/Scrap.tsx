import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

export default function Scrap() {
  const scrapPosts = [
    {
      id: 2,
      title: "Redis 캐싱 전략: 실무에서 마주친 5가지 문제와 해결법",
      summary:
        "대용량 트래픽 환경에서 Redis 캐싱을 적용하며 겪었던 실전 문제들과 해결 과정을 공유합니다.",
      category: "백엔드",
      date: "2026.04.18",
      readTime: "6분",
      tags: ["Redis", "캐싱", "성능최적화"],
    },
    {
      id: 4,
      title: "Kafka를 활용한 이벤트 드리븐 아키텍처 설계",
      summary:
        "마이크로서비스 환경에서 Kafka를 도입하며 배운 이벤트 드리븐 아키텍처 설계 원칙과 실무 적용 사례입니다.",
      category: "아키텍처/운영",
      date: "2026.04.12",
      readTime: "12분",
      tags: ["Kafka", "이벤트드리븐", "MSA"],
    },
    {
      id: 6,
      title: "GitHub Copilot과 Claude를 활용한 개발 생산성 3배 높이기",
      summary:
        "AI 도구를 실무에 통합하여 코드 리뷰, 테스트 작성, 리팩토링 시간을 대폭 단축한 경험을 공유합니다.",
      category: "AI 활용 자료",
      date: "2026.04.08",
      readTime: "7분",
      tags: ["AI", "생산성", "도구"],
    },
    {
      id: 7,
      title: "Docker 컨테이너 최적화: 이미지 크기 80% 줄이기",
      summary:
        "프로덕션 환경에서 Docker 이미지를 최적화하여 빌드 시간과 배포 속도를 개선한 실전 가이드입니다.",
      category: "아키텍처/운영",
      date: "2026.04.05",
      readTime: "9분",
      tags: ["Docker", "최적화", "DevOps"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl text-foreground mb-2">스크랩</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          AI가 수집한 개발 뉴스와 기술 자료 모음
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-1 min-w-0">
          <div className="grid gap-4 sm:gap-6">
            {scrapPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>

        <div className="lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
