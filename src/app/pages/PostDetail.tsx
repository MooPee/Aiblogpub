import { useParams, Link } from "react-router";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

export default function PostDetail() {
  const { id } = useParams();

  const post = {
    title: "Spring Boot 3.0으로 마이그레이션하며 배운 것들",
    category: "백엔드",
    date: "2026.04.20",
    readTime: "8분",
    tags: ["Spring Boot", "마이그레이션", "Java"],
    content: `
이번 프로젝트에서 Spring Boot 2.7에서 3.0으로 마이그레이션을 진행했습니다.
생각보다 많은 변경 사항이 있었고, 특히 Jakarta EE 네임스페이스 전환이 가장 큰 작업이었습니다.

## 주요 변경 사항

### 1. Jakarta EE 네임스페이스 전환

가장 먼저 마주친 문제는 javax.* 패키지가 jakarta.*로 변경된 것입니다.

\`\`\`java
// Before (Spring Boot 2.7)
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

// After (Spring Boot 3.0)
import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
\`\`\`

IntelliJ의 Replace in Path 기능을 활용하면 일괄 변경이 가능하지만,
라이브러리 의존성도 함께 업데이트해야 합니다.

### 2. Spring Security 변경사항

Spring Security 6.0으로 업그레이드되면서 deprecated 된 메서드들이 많습니다.

\`\`\`java
// Before
http.authorizeRequests()
    .antMatchers("/api/**").authenticated()
    .and()
    .formLogin();

// After
http.authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/**").authenticated()
    )
    .formLogin(Customizer.withDefaults());
\`\`\`

### 3. 성능 개선

Spring Boot 3.0은 GraalVM Native Image를 공식 지원합니다.
실제로 테스트해본 결과 시작 시간이 70% 감소했습니다.

## 마이그레이션 체크리스트

1. ✅ Java 17 이상 버전 확인
2. ✅ 모든 의존성 Spring Boot 3.0 호환 버전으로 업데이트
3. ✅ javax.* → jakarta.* 패키지 변경
4. ✅ Deprecated API 교체
5. ✅ 테스트 코드 실행 및 검증

## 결론

마이그레이션 과정은 쉽지 않았지만, 성능 개선과 최신 기능을 활용할 수 있게 되어 만족스러웠습니다.
특히 Native Image 지원은 클라우드 환경에서 큰 장점이 될 것으로 보입니다.
    `,
  };

  const relatedPosts = [
    { id: 2, title: "Redis 캐싱 전략: 실무에서 마주친 5가지 문제와 해결법", category: "백엔드" },
    { id: 3, title: "JPA N+1 문제 완벽 정리: Fetch Join vs EntityGraph", category: "백엔드" },
    { id: 4, title: "Spring Security 6.0 인증/인가 구조 deep dive", category: "백엔드" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        목록으로
      </Link>

      <article>
        <header className="mb-8 pb-8 border-b border-border">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl text-foreground mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-slate max-w-none">
          <div className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>

      <div className="mt-16 pt-8 border-t border-border">
        <h3 className="text-xl text-foreground mb-6">관련 글</h3>
        <div className="grid gap-4">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              to={`/post/${relatedPost.id}`}
              className="block p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs text-primary mb-2 block">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-foreground group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
