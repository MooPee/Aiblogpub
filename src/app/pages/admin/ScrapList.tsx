import { Link } from "react-router";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function ScrapList() {
  const scraps = [
    {
      id: 1,
      title: "Redis 캐싱 전략과 주의사항",
      source: "Medium",
      category: "백엔드",
      date: "2026.04.20",
    },
    {
      id: 2,
      title: "Kafka 성능 최적화 가이드",
      source: "Tech Blog",
      category: "아키텍처/운영",
      date: "2026.04.19",
    },
    {
      id: 3,
      title: "GitHub Copilot 활용 팁",
      source: "Dev.to",
      category: "AI 활용 자료",
      date: "2026.04.18",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl text-foreground mb-2">스크랩 관리</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            AI가 수집한 개발 뉴스와 기술 자료
          </p>
        </div>

        <Link
          to="/admin/scraps/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          스크랩 추가
        </Link>
      </div>

      <div className="bg-card rounded-lg border border-border shadow-sm">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="스크랩 검색..."
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="divide-y divide-border">
          {scraps.map((scrap) => (
            <div
              key={scrap.id}
              className="p-4 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground mb-2">{scrap.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{scrap.source}</span>
                    <span>•</span>
                    <span>{scrap.category}</span>
                    <span>•</span>
                    <span>{scrap.date}</span>
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
