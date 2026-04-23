import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

export default function Learning() {
  const learningPosts = [
    {
      id: 3,
      title: "JPA N+1 문제 완벽 정리: Fetch Join vs EntityGraph",
      summary:
        "JPA를 사용하면서 가장 흔하게 마주치는 N+1 문제의 원인과 해결 방법을 실전 예제와 함께 정리했습니다.",
      category: "학습",
      date: "2026.04.15",
      readTime: "10분",
      tags: ["JPA", "ORM", "성능"],
    },
    {
      id: 5,
      title: "Spring Security 6.0 인증/인가 구조 deep dive",
      summary:
        "Spring Security 6.0의 변경된 인증 아키텍처와 주요 컴포넌트를 깊이 있게 분석합니다.",
      category: "학습",
      date: "2026.04.10",
      readTime: "15분",
      tags: ["Spring Security", "인증", "보안"],
    },
    {
      id: 8,
      title: "함수형 프로그래밍 패러다임으로 Java 코드 개선하기",
      summary:
        "Java 8 이후의 함수형 프로그래밍 기능을 활용하여 더 읽기 쉽고 유지보수하기 좋은 코드를 작성하는 방법을 소개합니다.",
      category: "학습",
      date: "2026.04.03",
      readTime: "11분",
      tags: ["Java", "함수형프로그래밍", "리팩토링"],
    },
    {
      id: 9,
      title: "REST API 설계 원칙과 실무 가이드",
      summary:
        "RESTful API를 설계할 때 지켜야 할 원칙과 실무에서 자주 마주치는 고민들을 정리했습니다.",
      category: "학습",
      date: "2026.04.01",
      readTime: "13분",
      tags: ["REST API", "설계", "Best Practice"],
    },
    {
      id: 10,
      title: "Git 브랜치 전략: Git Flow vs GitHub Flow",
      summary:
        "팀 협업을 위한 Git 브랜치 전략의 종류와 각각의 장단점, 프로젝트 특성에 맞는 선택 방법을 안내합니다.",
      category: "학습",
      date: "2026.03.28",
      readTime: "8분",
      tags: ["Git", "협업", "워크플로우"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl text-foreground mb-2">학습</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          실무에 바로 도움 되는 학습 자료와 기술 정리
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-1 min-w-0">
          <div className="grid gap-4 sm:gap-6">
            {learningPosts.map((post) => (
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
