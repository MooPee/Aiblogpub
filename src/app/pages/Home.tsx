import FeaturedPost from "../components/FeaturedPost";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const featuredPost = {
    id: 1,
    title: "Spring Boot 3.0으로 마이그레이션하며 배운 것들",
    summary:
      "Spring Boot 2.7에서 3.0으로 마이그레이션하면서 겪은 문제와 해결 과정을 정리했습니다. Jakarta EE 전환, Native Image 지원, 그리고 성능 개선까지 실무에서 바로 적용할 수 있는 인사이트를 공유합니다.",
    category: "백엔드",
    date: "2026.04.20",
    readTime: "8분",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  };

  const recentPosts = [
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
      id: 3,
      title: "JPA N+1 문제 완벽 정리: Fetch Join vs EntityGraph",
      summary:
        "JPA를 사용하면서 가장 흔하게 마주치는 N+1 문제의 원인과 해결 방법을 실전 예제와 함께 정리했습니다.",
      category: "백엔드",
      date: "2026.04.15",
      readTime: "10분",
      tags: ["JPA", "ORM", "성능"],
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
      id: 5,
      title: "Spring Security 6.0 인증/인가 구조 deep dive",
      summary:
        "Spring Security 6.0의 변경된 인증 아키텍처와 주요 컴포넌트를 깊이 있게 분석합니다.",
      category: "백엔드",
      date: "2026.04.10",
      readTime: "15분",
      tags: ["Spring Security", "인증", "보안"],
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
      <div className="mb-8 sm:mb-12">
        <FeaturedPost {...featuredPost} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-1 min-w-0">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl text-foreground">최신 글</h2>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {recentPosts.map((post) => (
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
