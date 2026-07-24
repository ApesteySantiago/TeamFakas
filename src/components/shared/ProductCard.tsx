import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Tag } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category?: string;
  featured?: boolean;
  badge?: "Nuevo" | "Popular" | "Premium" | "Destacado";
  inStock?: boolean;
  onAddToCart?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
}

export function ProductCard({ name, description, price, imageUrl, category, featured, badge, inStock = true, onAddToCart, onToggleFavorite, isFavorite }: ProductCardProps) {
  return (
    <Card className="bg-card border-card hover:border-cta/50 transition-all duration-300 flex flex-col h-full group">
      <div className="relative aspect-square overflow-hidden rounded-t-lg bg-surface">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted">
            <Tag className="h-12 w-12" aria-hidden="true" />
          </div>
        )}
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
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/80 backdrop-blur-sm text-text-muted hover:text-cta hover:bg-cta/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={onToggleFavorite}
            aria-label={isFavorite ? `Quitar ${name} de favoritos` : `Añadir ${name} a favoritos`}
          >
            <Heart
              className={`h-5 w-5 transition-colors ${isFavorite ? "fill-cta text-cta" : ""}`}
              aria-hidden="true"
            />
          </Button>
        </div>
        {!inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <Badge variant="secondary" className="bg-red-500/90 text-white text-sm px-3 py-1">
              Agotado
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        {category && (
          <Badge variant="outline" className="text-xs mb-2">
            {category}
          </Badge>
        )}
        <h3 className="font-heading text-lg text-text truncate">{name}</h3>
        <p className="mt-1 text-sm text-text-muted line-clamp-2">{description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end">
        <div className="font-heading text-xl text-cta mb-3">
          ${price.toFixed(2)}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          className="w-full bg-cta hover:bg-cta-hover flex items-center justify-center gap-2"
          disabled={!inStock}
          onClick={onAddToCart}
          aria-label={inStock ? `Añadir ${name} al carrito` : `${name} agotado`}
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          {inStock ? "Añadir al carrito" : "Agotado"}
        </Button>
      </CardFooter>
    </Card>
  );
}