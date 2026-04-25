import { useState, KeyboardEvent } from "react";
import { Link } from "react-router";
import { ArrowLeft, Save, X } from "lucide-react";

export default function PostEdit() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const categories = [
    "백엔드",
    "아키텍처/운영",
    "공부하면 좋을 내용",
    "AI 활용 자료",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <Link
        to="/admin/posts"
        className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        글 목록으로
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl text-foreground mb-2">새 글 작성</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          새로운 글을 작성하세요
        </p>
      </div>

      <form className="space-y-6">
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-foreground mb-2">
                제목 <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="글 제목을 입력하세요"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground mb-2">
                분류 <span className="text-destructive">*</span>
              </label>
              <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">분류를 선택하세요</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-foreground mb-2">
                태그
              </label>
              <input
                type="text"
                placeholder="태그를 입력하고 Enter를 누르세요"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                        aria-label={`${tag} 태그 제거`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-2">
                태그를 입력하고 Enter 키를 눌러 추가하세요
              </p>
            </div>

            <div>
              <label className="block text-sm text-foreground mb-2">
                내용 <span className="text-destructive">*</span>
              </label>
              <textarea
                rows={20}
                placeholder="Markdown 형식으로 내용을 작성하세요"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Markdown 문법을 사용할 수 있습니다
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h3 className="text-lg text-foreground mb-4">글 설정</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-foreground mb-2">
                읽는 시간 (분)
              </label>
              <input
                type="number"
                placeholder="예: 8"
                min="1"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground mb-2">
                요약
              </label>
              <textarea
                rows={3}
                placeholder="글의 요약을 2-3줄로 작성하세요 (목록 화면에 표시됩니다)"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Link
            to="/admin/posts"
            className="px-6 py-2.5 border border-border rounded-lg hover:bg-secondary transition-colors text-center"
          >
            취소
          </Link>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Save className="w-4 h-4" />
            저장
          </button>
        </div>
      </form>
    </div>
  );
}
