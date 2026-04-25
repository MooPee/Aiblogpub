import { Save } from "lucide-react";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl text-foreground mb-2">설정</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          사이트 기본 설정을 관리하세요
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h2 className="text-xl text-foreground mb-4">사이트 정보</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-foreground mb-2">
                사이트 이름
              </label>
              <input
                type="text"
                defaultValue="Dev Digest"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2">
                사이트 설명
              </label>
              <textarea
                defaultValue="AI 기반 기술 아카이브 플랫폼"
                rows={3}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h2 className="text-xl text-foreground mb-4">프로필 정보</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-foreground mb-2">이름</label>
              <input
                type="text"
                defaultValue="개발자 이름"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2">직책</label>
              <input
                type="text"
                defaultValue="Backend Developer"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2">
                GitHub URL
              </label>
              <input
                type="url"
                defaultValue="https://github.com"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2">
                이메일
              </label>
              <input
                type="email"
                defaultValue="dev@example.com"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h2 className="text-xl text-foreground mb-4">소개 페이지 설정</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="showAbout"
                defaultChecked
                className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary/50"
              />
              <label htmlFor="showAbout" className="text-sm text-foreground">
                소개 페이지 표시 (쿠키로 제어)
              </label>
            </div>
            <p className="text-xs text-muted-foreground">
              특정 파라미터 접근 시 쿠키를 통해 소개 페이지 노출을 제어할 수
              있습니다.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <Save className="w-4 h-4" />
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
