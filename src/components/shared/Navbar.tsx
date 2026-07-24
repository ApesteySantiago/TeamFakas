"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-card">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold font-heading text-cta" aria-label="Team Fakas Home">
              TEAM FAKAS
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-text-muted hover:text-cta transition-colors">
                    Tienda
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/shop" className="text-sm font-medium text-text-muted hover:text-cta transition-colors">
                      Ver Productos
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-text-muted hover:text-cta transition-colors">
                    Cursos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/courses" className="text-sm font-medium text-text-muted hover:text-cta transition-colors">
                      Ver Cursos
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-text-muted hover:text-cta transition-colors">
                    Ejercicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/exercises" className="text-sm font-medium text-text-muted hover:text-cta transition-colors">
                      Ver Rutinas
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="/login" className="text-sm font-medium text-text-muted hover:text-cta transition-colors">
              Iniciar Sesión
            </Link>
            <Link href="/register" className="px-4 py-2 bg-cta text-white text-sm font-semibold rounded-lg hover:bg-cta-hover transition-colors">
              Registrarse
            </Link>
          </div>

          <Sheet>
            <SheetTrigger
              render={<button className="md:hidden p-2 text-text" aria-label="Open menu" />}
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6">
              <div className="flex justify-end mb-6">
                <button onClick={() => {}} className="p-2 text-text" aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/shop" className="text-lg font-medium text-text-muted hover:text-cta transition-colors">
                  Tienda
                </Link>
                <Link href="/courses" className="text-lg font-medium text-text-muted hover:text-cta transition-colors">
                  Cursos
                </Link>
                <Link href="/exercises" className="text-lg font-medium text-text-muted hover:text-cta transition-colors">
                  Ejercicios
                </Link>
                <div className="flex flex-col gap-3 pt-4 border-t border-card">
                  <Link href="/login" className="text-lg font-medium text-text-muted hover:text-cta transition-colors text-center">
                    Iniciar Sesión
                  </Link>
                  <Link href="/register" className="px-4 py-3 bg-cta text-white text-lg font-semibold rounded-lg text-center hover:bg-cta-hover transition-colors">
                    Registrarse
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}