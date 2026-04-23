import { Link } from "react-router";
import { Calendar, Clock } from "lucide-react";

interface FeaturedPostProps {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export default function FeaturedPost({
  id,
  title,
  summary,
  category,
  date,
  readTime,
  imageUrl,
}: FeaturedPostProps) {
  return (
    <Link to={`/post/${id}`} className="block group">
      <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64 md:h-auto overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {category}
              </span>
            </div>

            <h2 className="text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
              {title}
            </h2>

            <p className="text-foreground/70 mb-4 line-clamp-3">{summary}</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
