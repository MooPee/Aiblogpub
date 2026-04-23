import { Github, Mail, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const skills = [
    { category: "Backend", items: ["Java", "Spring Boot", "JPA/Hibernate", "Spring Security"] },
    { category: "Database", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"] },
    { category: "Message Queue", items: ["Kafka", "RabbitMQ"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "GitHub Actions"] },
    { category: "AI Tools", items: ["GitHub Copilot", "Claude", "ChatGPT"] },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-card rounded-xl p-8 border border-border shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-5xl text-primary" style={{ fontWeight: 700 }}>
              D
            </span>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl text-foreground mb-2">개발자 이름</h1>
            <p className="text-xl text-muted-foreground mb-4">Backend Developer</p>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              Java와 Spring 생태계를 기반으로 백엔드 시스템을 설계하고 개발합니다.
              실무에서 마주친 문제와 해결 과정, 그리고 학습한 내용을 이 블로그에 정리하고 있습니다.
              AI 도구를 활용하여 개발 생산성을 높이는 데 관심이 많습니다.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="mailto:dev@example.com"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-xl text-foreground">경력</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-foreground mb-1">Backend Developer</h3>
              <p className="text-sm text-muted-foreground mb-1">테크 스타트업 A</p>
              <p className="text-sm text-muted-foreground">2022 - 현재</p>
            </div>
            <div>
              <h3 className="text-foreground mb-1">Junior Backend Developer</h3>
              <p className="text-sm text-muted-foreground mb-1">IT 회사 B</p>
              <p className="text-sm text-muted-foreground">2020 - 2022</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-xl text-foreground">학력</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-foreground mb-1">컴퓨터공학 학사</h3>
              <p className="text-sm text-muted-foreground mb-1">○○대학교</p>
              <p className="text-sm text-muted-foreground">2016 - 2020</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
        <h2 className="text-2xl text-foreground mb-6">기술 스택</h2>
        <div className="grid gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-foreground mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-accent/50 rounded-xl p-6 border border-primary/20">
        <h2 className="text-xl text-foreground mb-3">Dev Digest 소개</h2>
        <p className="text-foreground/80 leading-relaxed">
          이 블로그는 단순한 개인 블로그를 넘어, AI가 수집하고 정리한 기술 자료를
          아카이빙하는 플랫폼입니다. 실무에서 바로 활용할 수 있는 백엔드 개발 지식과
          최신 기술 트렌드를 공유합니다.
        </p>
      </div>
    </div>
  );
}
