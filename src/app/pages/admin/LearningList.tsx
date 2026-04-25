import { Link } from "react-router";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function LearningList() {
  const learningPosts = [
    {
      id: 1,
      title: "JPA N+1 문제 완벽 정리",
      category: "학습",
      status: "published",
      date: "2026.04.15",
    },
    {
      id: 2,
      title: "Spring Security 6.0 인증/인가 구조",
      category: "학습",
      status: "published",
      date: "2026.04.10",
    },
    {
      id: 3,
      title: "함수형 프로그래밍 패러다임",
      category: "학습",
      status: "draft",
      date: "2026.04.03",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl text-foreground mb-2">학습 관리</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            실무에 도움 되는 학습 자료
          </p>
        </div>

        <Link
          to="/admin/learning/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          학습 자료 추가
        </Link>
      </div>

      <div className="bg-card rounded-lg border border-border shadow-sm">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="학습 자료 검색..."
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="divide-y divide-border">
          {learningPosts.map((post) => (
            <div
              key={post.id}
              className="p-4 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground mb-2">{post.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    {post.status === "published" ? (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">
                        발행됨
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                        임시저장
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
