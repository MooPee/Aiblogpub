import { Link } from "react-router";
import { Github, Mail } from "lucide-react";

export default function Sidebar() {
  const categories = [
    { name: "백엔드", path: "/category/backend", count: 24 },
    { name: "아키텍처/운영", path: "/category/architecture", count: 15 },
    { name: "공부하면 좋을 내용", path: "/category/study", count: 32 },
    { name: "AI 활용 자료", path: "/category/ai", count: 18 },
  ];

  const popularPosts = [
    { id: 1, title: "Spring Boot 3.0 마이그레이션 가이드" },
    { id: 2, title: "Redis 캐싱 전략과 주의사항" },
    { id: 3, title: "JPA N+1 문제 완벽 정리" },
    { id: 4, title: "Kafka를 활용한 이벤트 드리븐 아키텍처" },
  ];

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-20 space-y-4 sm:space-y-6">
        <div className="bg-card rounded-lg p-5 sm:p-6 border border-border shadow-sm">
          <div className="text-center mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl text-primary" style={{ fontWeight: 700 }}>
                D
              </span>
            </div>
            <h3 className="text-base sm:text-lg text-foreground mb-1">개발자 이름</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Backend Developer
            </p>
          </div>
          <p className="text-xs sm:text-sm text-foreground/70 mb-3 sm:mb-4 text-center">
            Java/Spring 기반 백엔드 개발자입니다. 실무 경험과 학습 내용을 정리합니다.
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <Github className="w-5 h-5 text-foreground/60" />
            </a>
            <a
              href="mailto:dev@example.com"
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 text-foreground/60" />
            </a>
          </div>
        </div>

        <div className="bg-card rounded-lg p-5 sm:p-6 border border-border shadow-sm">
          <h3 className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">카테고리</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="flex items-center justify-between py-2 px-3 hover:bg-secondary rounded-lg transition-colors group"
              >
                <span className="text-foreground/80 group-hover:text-primary">
                  {category.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-5 sm:p-6 border border-border shadow-sm">
          <h3 className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">인기 글</h3>
          <div className="space-y-2.5 sm:space-y-3">
            {popularPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/post/${post.id}`}
                className="block group"
              >
                <div className="flex gap-2 sm:gap-3">
                  <span className="text-sm sm:text-base text-primary" style={{ fontWeight: 700 }}>
                    {index + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground/80 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
