import { Link } from "react-router";
import { Calendar, Clock, Tag } from "lucide-react";

interface PostCardProps {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function PostCard({
  id,
  title,
  summary,
  category,
  date,
  readTime,
  tags,
}: PostCardProps) {
  return (
    <Link to={`/post/${id}`} className="block group">
      <article className="bg-card rounded-lg p-4 sm:p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="mb-2 sm:mb-3">
          <span className="inline-block px-2.5 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm">
            {category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-foreground/70 mb-3 sm:mb-4 line-clamp-2">{summary}</p>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground" />
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
