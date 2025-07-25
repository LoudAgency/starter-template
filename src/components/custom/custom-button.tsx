import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"

interface CustomButtonProps 
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function CustomButton({
  className,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        "transition-all duration-200 hover:scale-105 active:scale-95",
        loading && "opacity-75 cursor-not-allowed",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon && <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Button>
  )
}