import { CustomButton } from "@/components/custom"
import { cn } from "@/lib/utils"

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  backgroundImage?: string
  className?: string
}

export function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[600px] items-center justify-center overflow-hidden py-24 text-center",
        backgroundImage && "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="relative z-10 container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {subtitle && (
            <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {subtitle}
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              {description}
            </p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {primaryAction && (
                <CustomButton
                  size="lg"
                  onClick={primaryAction.onClick}
                  asChild={!!primaryAction.href}
                >
                  {primaryAction.href ? (
                    <a href={primaryAction.href}>{primaryAction.label}</a>
                  ) : (
                    primaryAction.label
                  )}
                </CustomButton>
              )}
              {secondaryAction && (
                <CustomButton
                  variant="outline"
                  size="lg"
                  onClick={secondaryAction.onClick}
                  asChild={!!secondaryAction.href}
                >
                  {secondaryAction.href ? (
                    <a href={secondaryAction.href}>{secondaryAction.label}</a>
                  ) : (
                    secondaryAction.label
                  )}
                </CustomButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}