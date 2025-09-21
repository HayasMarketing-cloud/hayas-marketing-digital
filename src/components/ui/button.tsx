import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-gray-400 bg-background text-gray-700 hover:bg-gray-50 hover:border-gray-600 hover:text-gray-900 transition-colors focus:border-primary active:bg-gray-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        cta:
          "bg-accent text-accent-foreground hover:bg-accent/90",
        green:
          "bg-hayas-primary text-white hover:bg-hayas-primary/90 shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Solution-specific outline variants
        "impulsa-outline":
          "border-2 border-impulsa-400 bg-background text-impulsa-600 hover:bg-impulsa-50 hover:border-impulsa-500 hover:text-impulsa-700 transition-colors focus:border-impulsa-600 active:bg-impulsa-100",
        "conecta-outline":
          "border-2 border-conecta-400 bg-background text-conecta-600 hover:bg-conecta-50 hover:border-conecta-500 hover:text-conecta-700 transition-colors focus:border-conecta-600 active:bg-conecta-100",
        "activa-outline":
          "border-2 border-activa-400 bg-background text-activa-600 hover:bg-activa-50 hover:border-activa-500 hover:text-activa-700 transition-colors focus:border-activa-600 active:bg-activa-100",
        // Primary variants for solution colors
        impulsa:
          "bg-impulsa-500 text-white hover:bg-impulsa-600 focus:bg-impulsa-600 active:bg-impulsa-700 shadow-lg",
        conecta:
          "bg-conecta-500 text-white hover:bg-conecta-600 focus:bg-conecta-600 active:bg-conecta-700 shadow-lg",
        activa:
          "bg-activa-500 text-white hover:bg-activa-600 focus:bg-activa-600 active:bg-activa-700 shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
