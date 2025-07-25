import { CustomCard } from "@/components/custom"
import { FeatureItem } from "@/types"
import { cn } from "@/lib/utils"

interface FeaturesProps {
  title?: string
  description?: string
  features: FeatureItem[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export function Features({
  title,
  description,
  features,
  columns = 3,
  className,
}: FeaturesProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className={cn("py-24", className)}>
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
          {features.map((feature, index) => (
            <CustomCard
              key={index}
              title={feature.title}
              description={feature.description}
              className="text-center"
            >
              {feature.icon && (
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              )}
            </CustomCard>
          ))}
        </div>
      </div>
    </section>
  )
}