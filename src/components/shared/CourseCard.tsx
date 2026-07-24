import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, TrendingUp } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  teacher: string;
  duration: string;
  students: number;
  progress?: number;
  price: number;
  featured?: boolean;
  badge?: "Nuevo" | "Popular" | "Premium" | "Destacado";
}

export function CourseCard({ title, description, imageUrl, teacher, duration, students, progress, price, featured, badge }: CourseCardProps) {
  return (
    <Card className="bg-card border-card hover:border-cta/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden rounded-t-lg bg-surface">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted">
            <span className="text-4xl">📚</span>
          </div>
        )}
        {(badge || featured) && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {badge && (
              <Badge variant="secondary" className="bg-cta text-white text-xs">
                {badge}
              </Badge>
            )}
            {featured && (
              <Badge variant="secondary" className="bg-cta text-white text-xs">
                Destacado
              </Badge>
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="icon" className="h-12 w-12 bg-cta text-white hover:bg-cta-hover" aria-label={`Ver curso ${title}`}>
            <Play className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-heading text-lg text-text truncate">{title}</h3>
        <p className="mt-1 text-sm text-text-muted line-clamp-2">{description}</p>
        <p className="mt-1 text-xs text-text-muted">{teacher}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            {students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {duration}
          </span>
        </div>
        {progress !== undefined && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-text-muted mb-1">
              <span>Progreso</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-cta rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between">
        <span className="font-heading text-lg text-cta">
          {price === 0 ? "Gratis" : `$${price.toFixed(2)}`}
        </span>
        <Button variant={price === 0 ? "default" : "outline"} className="gap-1" aria-label={price === 0 ? `Inscribirse en ${title}` : `Comprar ${title}`}>
          {price === 0 ? "Inscribirse" : "Comprar"}
          <TrendingUp className="h-4 w-4" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}