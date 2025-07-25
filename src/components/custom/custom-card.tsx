import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BaseComponent } from "@/types"

interface CustomCardProps extends BaseComponent {
  title?: string
  description?: string
  footer?: React.ReactNode
  hover?: boolean
}

export function CustomCard({
  title,
  description,
  footer,
  hover = true,
  className,
  children,
}: CustomCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-200",
        hover && "hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className="text-xl">{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}