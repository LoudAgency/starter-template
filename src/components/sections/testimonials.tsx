import { CustomCard } from "@/components/custom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TestimonialItem } from "@/types"
import { cn } from "@/lib/utils"

interface TestimonialsProps {
  title?: string
  description?: string
  testimonials: TestimonialItem[]
  columns?: 1 | 2 | 3
  className?: string
}

export function Testimonials({
  title,
  description,
  testimonials,
  columns = 2,
  className,
}: TestimonialsProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }

  return (
    <section className={cn("py-24 bg-muted/50", className)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {title && (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              {description}
            </p>
          )}
        </div>
        <div className={cn("mt-16 grid gap-8", gridCols[columns])}>
          {testimonials.map((testimonial, index) => (
            <CustomCard key={index} className="p-6">
              <blockquote className="text-lg italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-muted-foreground">
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </CustomCard>
          ))}
        </div>
      </div>
    </section>
  )
}