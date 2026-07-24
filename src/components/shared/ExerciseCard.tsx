import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Flame, Zap, Target, CheckCircle2 } from "lucide-react";

interface ExerciseCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  muscleGroup: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  duration: string;
  equipment: string[];
  sets: number;
  reps: string;
  featured?: boolean;
  badge?: "Nuevo" | "Popular" | "Premium" | "Destacado";
}

const difficultyColors = {
  Principiante: "bg-green-500/20 text-green-400",
  Intermedio: "bg-yellow-500/20 text-yellow-400",
  Avanzado: "bg-red-500/20 text-red-400",
};

const difficultyIcons = {
  Principiante: Target,
  Intermedio: Zap,
  Avanzado: Flame,
};

export function ExerciseCard({ title, description, imageUrl, muscleGroup, difficulty, duration, equipment, sets, reps, featured, badge }: ExerciseCardProps) {
  const DifficultyIcon = difficultyIcons[difficulty];
  const difficultyClass = difficultyColors[difficulty];

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
            <Dumbbell className="h-12 w-12" aria-hidden="true" />
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
        <div className="absolute bottom-2 right-2">
          <Badge className={`${difficultyClass} text-xs px-2 py-1 flex items-center gap-1`}>
            <DifficultyIcon className="h-3 w-3" aria-hidden="true" />
            {difficulty}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-heading text-lg text-text truncate">{title}</h3>
        <p className="mt-1 text-sm text-text-muted line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Target className="h-3.5 w-3.5" aria-hidden="true" />
            {muscleGroup}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-2 text-center p-3 bg-surface/50 rounded-lg">
          <div>
            <div className="font-heading text-lg text-cta">{sets}</div>
            <div className="text-xs text-text-muted">Series</div>
          </div>
          <div>
            <div className="font-heading text-lg text-cta">{reps}</div>
            <div className="text-xs text-text-muted">Reps</div>
          </div>
          <div>
            <div className="font-heading text-lg text-cta">{duration}</div>
            <div className="text-xs text-text-muted">Duración</div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {equipment.slice(0, 3).map((item) => (
            <Badge key={item} variant="outline" className="text-xs px-2 py-0.5">
              {item}
            </Badge>
          ))}
          {equipment.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              +{equipment.length - 3} más
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-cta hover:bg-cta-hover flex items-center justify-center gap-2" aria-label={`Añadir ${title} a mi rutina`}>
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Añadir a mi rutina
        </Button>
      </CardFooter>
    </Card>
  );
}