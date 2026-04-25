import { FileText, Bookmark, GraduationCap, Eye } from "lucide-react";
import { Link } from "react-router";

export default function Dashboard() {
  const stats = [
    {
      label: "전체 글",
      value: "89",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      link: "/admin/posts",
    },
    {
      label: "스크랩",
      value: "124",
      icon: Bookmark,
      color: "text-green-600",
      bgColor: "bg-green-50",
      link: "/admin/scraps",
    },
    {
      label: "학습 자료",
      value: "56",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      link: "/admin/learning",
    },
    {
      label: "오늘 조회수",
      value: "1,234",
      icon: Eye,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      link: "#",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Spring Boot 3.0으로 마이그레이션하며 배운 것들",
      category: "백엔드",
      status: "published",
      date: "2026.04.20",
    },
    {
      id: 2,
      title: "Redis 캐싱 전략: 실무에서 마주친 5가지 문제와 해결법",
      category: "백엔드",
      status: "published",
      date: "2026.04.18",
    },
    {
      id: 3,
      title: "JPA N+1 문제 완벽 정리",
      category: "백엔드",
      status: "draft",
      date: "2026.04.15",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl text-foreground mb-2">대시보드</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          전체 콘텐츠 현황을 확인하세요
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            to={stat.link}
            className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-lg ${stat.bgColor} group-hover:scale-110 transition-transform`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl text-foreground" style={{ fontWeight: 700 }}>
                {stat.value}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-foreground">최근 작성한 글</h2>
            <Link
              to="/admin/posts"
              className="text-sm text-primary hover:underline"
            >
              전체 보기
            </Link>
          </div>

          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground mb-1 truncate">{post.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div>
                  {post.status === "published" ? (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                      발행됨
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      임시저장
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-foreground">빠른 작업</h2>
          </div>

          <div className="space-y-3">
            <Link
              to="/admin/posts/new"
              className="block p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
            >
              새 글 작성
            </Link>
            <Link
              to="/admin/scraps/new"
              className="block p-4 border border-border rounded-lg hover:bg-secondary transition-colors text-center"
            >
              스크랩 추가
            </Link>
            <Link
              to="/admin/learning/new"
              className="block p-4 border border-border rounded-lg hover:bg-secondary transition-colors text-center"
            >
              학습 자료 추가
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
