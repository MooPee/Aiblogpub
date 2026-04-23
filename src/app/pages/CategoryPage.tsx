import { useParams } from "react-router";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

export default function CategoryPage() {
  const { category } = useParams();

  const categoryNames: Record<string, string> = {
    backend: "백엔드",
    architecture: "아키텍처/운영",
    study: "공부하면 좋을 내용",
    ai: "AI 활용 자료",
  };

  const posts = [
    {
      id: 2,
      title: "Redis 캐싱 전략: 실무에서 마주친 5가지 문제와 해결법",
      summary:
        "대용량 트래픽 환경에서 Redis 캐싱을 적용하며 겪었던 실전 문제들과 해결 과정을 공유합니다.",
      category: categoryNames[category || "backend"],
      date: "2026.04.18",
      readTime: "6분",
      tags: ["Redis", "캐싱", "성능최적화"],
    },
    {
      id: 3,
      title: "JPA N+1 문제 완벽 정리: Fetch Join vs EntityGraph",
      summary:
        "JPA를 사용하면서 가장 흔하게 마주치는 N+1 문제의 원인과 해결 방법을 실전 예제와 함께 정리했습니다.",
      category: categoryNames[category || "backend"],
      date: "2026.04.15",
      readTime: "10분",
      tags: ["JPA", "ORM", "성능"],
    },
    {
      id: 5,
      title: "Spring Security 6.0 인증/인가 구조 deep dive",
      summary:
        "Spring Security 6.0의 변경된 인증 아키텍처와 주요 컴포넌트를 깊이 있게 분석합니다.",
      category: categoryNames[category || "backend"],
      date: "2026.04.10",
      readTime: "15분",
      tags: ["Spring Security", "인증", "보안"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl text-foreground mb-2">
          {categoryNames[category || "backend"]}
        </h1>
        <p className="text-muted-foreground">
          {categoryNames[category || "backend"]} 카테고리의 모든 글
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
