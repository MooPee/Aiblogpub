import { Link } from "react-router";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function PostList() {
  const posts = [
    {
      id: 1,
      title: "Spring Boot 3.0으로 마이그레이션하며 배운 것들",
      category: "백엔드",
      status: "published",
      views: 1234,
      date: "2026.04.20",
    },
    {
      id: 2,
      title: "Redis 캐싱 전략: 실무에서 마주친 5가지 문제와 해결법",
      category: "백엔드",
      status: "published",
      views: 856,
      date: "2026.04.18",
    },
    {
      id: 3,
      title: "JPA N+1 문제 완벽 정리: Fetch Join vs EntityGraph",
      category: "백엔드",
      status: "draft",
      views: 0,
      date: "2026.04.15",
    },
    {
      id: 4,
      title: "Kafka를 활용한 이벤트 드리븐 아키텍처 설계",
      category: "아키텍처/운영",
      status: "published",
      views: 542,
      date: "2026.04.12",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl text-foreground mb-2">글 관리</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            전체 {posts.length}개의 글
          </p>
        </div>

        <Link
          to="/admin/posts/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          새 글 작성
        </Link>
      </div>

      <div className="bg-card rounded-lg border border-border shadow-sm mb-6">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="글 검색..."
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm text-foreground">
                  제목
                </th>
                <th className="px-4 py-3 text-left text-sm text-foreground hidden sm:table-cell">
                  카테고리
                </th>
                <th className="px-4 py-3 text-left text-sm text-foreground hidden md:table-cell">
                  상태
                </th>
                <th className="px-4 py-3 text-left text-sm text-foreground hidden lg:table-cell">
                  조회수
                </th>
                <th className="px-4 py-3 text-left text-sm text-foreground hidden md:table-cell">
                  작성일
                </th>
                <th className="px-4 py-3 text-right text-sm text-foreground">
                  작업
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t border-border hover:bg-secondary/30">
                  <td className="px-4 py-4">
                    <div>
                      <p className="text-foreground line-clamp-1">{post.title}</p>
                      <div className="flex items-center gap-2 mt-1 sm:hidden">
                        <span className="text-xs text-muted-foreground">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden sm:table-cell">
                    <span className="text-sm text-muted-foreground">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    {post.status === "published" ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                        발행됨
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        임시저장
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="text-sm text-muted-foreground">
                      {post.views.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
