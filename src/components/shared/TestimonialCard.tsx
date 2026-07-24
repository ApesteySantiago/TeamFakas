import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
}

export function TestimonialCard({ quote, author, role, avatar, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="bg-card border-card h-full flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-cta text-cta" aria-hidden="true" />
        ))}
      </div>
      <CardContent className="flex-1">
        <Quote className="h-8 w-8 text-cta/30 mb-4" aria-hidden="true" />
        <p className="text-text mb-6 italic">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center gap-3">
          {avatar ? (
            <img src={avatar} alt={author} className="h-10 w-10 rounded-full object-cover" />
          ) : (
            <div className="h-10 w-10 rounded-full bg-cta/20 flex items-center justify-center">
              <span className="font-heading text-cta text-lg">
                {author.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-medium text-text">{author}</p>
            <p className="text-sm text-text-muted">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}