import { CustomButton } from "@/components/custom"
import { cn } from "@/lib/utils"

interface CTAProps {
  title: string
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
  variant?: "default" | "gradient"
  className?: string
}

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
  className,
}: CTAProps) {
  return (
    <section
      className={cn(
        "py-24",
        variant === "gradient" &&
          "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
        variant === "default" && "bg-muted/50",
        className
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl opacity-90">
              {description}
            </p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {primaryAction && (
                <CustomButton
                  size="lg"
                  variant={variant === "gradient" ? "secondary" : "default"}
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
                  className={
                    variant === "gradient"
                      ? "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                      : undefined
                  }
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