import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Rutas públicas que no requieren autenticación
  const publicPaths = ["/", "/shop", "/courses", "/exercises", "/login", "/register", "/about", "/contact", "/help", "/faq", "/terms", "/privacy", "/cookies", "/pricing"];

  const isPublicPath = publicPaths.some((path) => pathname === path || pathname.startsWith(path + "/"));

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
        },
      },
    }
  );

  // Solo verificar autenticación en rutas protegidas
  if (!isPublicPath) {
    await supabase.auth.getUser();
  }

  return supabaseResponse;
}