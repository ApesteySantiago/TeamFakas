import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ProductCard } from "@/components/shared/ProductCard";
import { CourseCard } from "@/components/shared/CourseCard";
import { ExerciseCard } from "@/components/shared/ExerciseCard";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  { name: "Proteina Whey Isolate", description: "Proteina de suero aislada de alta pureza", price: 49.99, badge: "Popular" as const },
  { name: "Creatina Monohidrato", description: "Creatina pura micronizada", price: 24.99 },
  { name: "Pre-Workout Explosivo", description: "Formula avanzada con citrulina", price: 39.99, badge: "Nuevo" as const },
  { name: "Omega-3 Ultra Puro", description: "Aceite de pescado molecularmente destilado", price: 29.99 },
];

const courses = [
  { title: "Fundamentos de Fuerza", description: "Domina los patrones basicos de entrenamiento de fuerza.", teacher: "Coach Pablo", duration: "8h 30min", students: 1240, price: 89.99, badge: "Popular" as const },
  { title: "Nutricion Deportiva", description: "Planes nutricionales personalizados para cada objetivo.", teacher: "Nut. Laura M.", duration: "6h 15min", students: 980, price: 129.99, badge: "Nuevo" as const },
  { title: "Mentalidad de Campeon", description: "Disciplina, consistencia y resiliencia mental.", teacher: "Coach Pablo", duration: "4h 45min", students: 750, price: 49.99 },
];

const exercises = [
  { title: "Sentadilla con Barra", description: "El rey de los ejercicios para piernas y gluteos.", muscleGroup: "Piernas", difficulty: "Intermedio" as const, duration: "45min", equipment: ["Barra", "Rack"], sets: 4, reps: "6-8" },
  { title: "Peso Muerto Convencional", description: "Ejercicio compuesto para cadena posterior completa.", muscleGroup: "Espalda", difficulty: "Avanzado" as const, duration: "40min", equipment: ["Barra", "Discos"], sets: 3, reps: "5" },
  { title: "Press de Banca", description: "Fundamental para pecho, hombros y triceps.", muscleGroup: "Pecho", difficulty: "Intermedio" as const, duration: "35min", equipment: ["Barra", "Banco"], sets: 4, reps: "8-10" },
];

const testimonials = [
  { quote: "Team Fakas cambio mi enfoque del entrenamiento. La metodologia basada en ciencia y la comunidad me mantienen consistente.", author: "Roberto K.", role: "Ingeniero - 2 anos en TF" },
  { quote: "Los cursos de nutricion me ensenaron a comer para mis objetivos sin dietas extremas. Resultados reales y sostenibles.", author: "Laura M.", role: "Disenaadora - 1 ano en TF" },
  { quote: "Las rutinas estan bien estructuradas, progresivas y se adaptan a mi horario. El seguimiento de progreso es brutal.", author: "Diego R.", role: "Estudiante - 8 meses en TF" },
  { quote: "Como entrenador, uso la plataforma para programar a mis atletas. Ahorro tiempo y entrego calidad profesional.", author: "Coach Pablo", role: "Entrenador Personal - 3 anos en TF" },
];

const stats = [
  { value: "50K+", label: "Usuarios activos" },
  { value: "200+", label: "Cursos y programas" },
  { value: "15K+", label: "Transformaciones" },
  { value: "98%", label: "Satisfaccion" },
];

const pillars = [
  { emoji: "🔬", title: "CIENCIA", desc: "Metodos basados en evidencia, no en modas." },
  { emoji: "💪", title: "FUERZA", desc: "El entrenamiento como pilar central de la transformacion." },
  { emoji: "🧠", title: "MENTALIDAD", desc: "Disciplina, consistencia y resiliencia como estilo de vida." },
  { emoji: "⚡", title: "EVOLUCION", desc: "Progreso continuo, medible y sostenible en el tiempo." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-cta/5 via-transparent to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge variant="secondary" className="bg-cta/20 text-cta border-cta/30 mb-6 text-sm px-3 py-1">
              FORGE YOURSELF
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-text leading-tight mb-4">
              TEAM FAKAS
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-heading text-cta mb-8 tracking-wide">
              FORGE YOURSELF
            </p>
            <p className="max-w-2xl mx-auto text-text-muted mb-10 text-lg md:text-xl">
              Sistema de transformacion fisica, mental y nutricional basado en ciencia, disciplina y accion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button render={<a href="#productos" className="px-8 py-4 bg-cta text-white font-semibold rounded-lg hover:bg-cta-hover transition-colors text-lg" />}>
                Comenzar Ahora
              </Button>
              <Button render={<a href="#cursos" className="px-8 py-4 border border-cta text-cta font-semibold rounded-lg hover:bg-cta hover:text-white transition-colors text-lg" />} variant="outline">
                Ver Cursos
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="p-6 bg-card/50 border border-card/50 rounded-xl hover:border-cta/30 transition-colors">
                  <span className="text-4xl mb-3 block">{pillar.emoji}</span>
                  <h3 className="font-heading text-lg text-text mb-2">{pillar.title}</h3>
                  <p className="text-sm text-text-muted">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 md:px-8 bg-surface/50 border-y border-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl lg:text-5xl text-cta mb-2">{stat.value}</div>
                  <div className="text-text-muted font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="productos" className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge variant="secondary" className="bg-cta/20 text-cta border-cta/30 mb-3 text-sm px-3 py-1">
                  PRODUCTOS DESTACADOS
                </Badge>
                <h2 className="font-heading text-3xl md:text-4xl text-text">Tienda Team Fakas</h2>
                <p className="mt-2 text-text-muted">Suplementos y equipamiento seleccionados con criterio cientifico.</p>
              </div>
              <Link href="/shop" className="flex items-center gap-2 text-cta font-medium hover:underline self-end">
                Ver todo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="cursos" className="py-20 px-4 md:px-8 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge variant="secondary" className="bg-cta/20 text-cta border-cta/30 mb-3 text-sm px-3 py-1">
                  CAMPUS EDUCATIVO
                </Badge>
                <h2 className="font-heading text-3xl md:text-4xl text-text">Cursos Destacados</h2>
                <p className="mt-2 text-text-muted">Aprende de expertos. Aplica la ciencia. Transforma tu vida.</p>
              </div>
              <Link href="/courses" className="flex items-center gap-2 text-cta font-medium hover:underline self-end">
                Ver todo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Exercises */}
        <section id="ejercicios" className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge variant="secondary" className="bg-cta/20 text-cta border-cta/30 mb-3 text-sm px-3 py-1">
                  MODULO DE EJERCITACION
                </Badge>
                <h2 className="font-heading text-3xl md:text-4xl text-text">Ejercicios Fundamentales</h2>
                <p className="mt-2 text-text-muted">Domina los movimientos base. Progresa con inteligencia.</p>
              </div>
              <Link href="/exercises" className="flex items-center gap-2 text-cta font-medium hover:underline self-end">
                Ver todo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exercises.map((exercise) => (
                <ExerciseCard key={exercise.title} {...exercise} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-20 px-4 md:px-8 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-cta/20 text-cta border-cta/30 mb-3 text-sm px-3 py-1">
                LO QUE DICE LA COMUNIDAD
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl text-text">Transformaciones Reales</h2>
              <p className="mt-2 text-text-muted max-w-2xl mx-auto">
                Mas de 15,000 personas han forjado su mejor version con Team Fakas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-cta/10 via-transparent to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-cta/20 text-cta border-cta/30 mb-6 text-sm px-3 py-1">
              LISTO PARA FORJARTE?
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text mb-6">
              Tu Transformacion Empieza Hoy
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
              No necesitas mas motivacion. Necesitas un sistema. Ciencia, disciplina y accion.
              Unete a miles que ya estan forjando su mejor version.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button render={<a href="/register" className="px-8 py-4 bg-cta text-white font-semibold rounded-lg hover:bg-cta-hover transition-colors text-lg" />}>
                Empezar Gratis
              </Button>
              <Button render={<a href="/pricing" className="px-8 py-4 border border-cta text-cta font-semibold rounded-lg hover:bg-cta hover:text-white transition-colors text-lg" />} variant="outline">
                Ver Planes
              </Button>
            </div>
            <p className="mt-6 text-sm text-text-muted">Sin compromiso. Cancela cuando quieras. Acceso inmediato.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
