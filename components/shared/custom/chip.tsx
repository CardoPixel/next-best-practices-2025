import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";
import { JSX } from "react";

// ----------------------------------------------------------------------

const chipVariants = cva(
    "inline-flex items-center select-none appearance-none rounded-md font-medium text-sm text-white transition-[background-color] data-[clickable=true]:cursor-pointer",
    {
        compoundVariants: [
            // Default color
            {
                variant: "filled",
                color: "default",
                className:
                    "bg-background/90 text-foreground dark:bg-background data-[clickable=true]:hover:bg-background/65",
            },
            {
                variant: "outline",
                color: "default",
                className:
                    "text-foreground border-foreground border data-[clickable=true]:hover:bg-muted-foreground/10",
            },
            {
                variant: "soft",
                color: "default",
                className:
                    "text-foreground dark:bg-accent/35 bg-accent data-[clickable=true]:hover:bg-foreground/15 dark:data-[clickable=true]:hover:bg-accent/65",
            },
            // Primary color
            {
                variant: "filled",
                color: "primary",
                className:
                    "bg-primary data-[clickable=true]:hover:bg-primary/80",
            },
            {
                variant: "outline",
                color: "primary",
                className:
                    "text-primary border-primary border data-[clickable=true]:hover:bg-primary/5",
            },
            {
                variant: "soft",
                color: "primary",
                className:
                    "text-primary bg-primary/15 data-[clickable=true]:hover:bg-primary/35",
            },
            // Secondary color
            {
                variant: "filled",
                color: "secondary",
                className:
                    "bg-secondary data-[clickable=true]:hover:bg-secondary/80",
            },
            {
                variant: "outline",
                color: "secondary",
                className:
                    "text-secondary border-secondary border data-[clickable=true]:hover:bg-secondary/5",
            },
            {
                variant: "soft",
                color: "secondary",
                className:
                    "text-secondary bg-secondary/15 data-[clickable=true]:hover:bg-secondary/35",
            },
            // Info color
            {
                variant: "filled",
                color: "info",
                className:
                    "text-info-foreground bg-info data-[clickable=true]:hover:bg-info/90",
            },
            {
                variant: "outline",
                color: "info",
                className:
                    "text-info border-info border data-[clickable=true]:hover:bg-info/5",
            },
            {
                variant: "soft",
                color: "info",
                className:
                    "text-info bg-info/15 data-[clickable=true]:hover:bg-info/35",
            },
            // Success color
            {
                variant: "filled",
                color: "success",
                className:
                    "text-success-foreground bg-success data-[clickable=true]:hover:bg-success/90",
            },
            {
                variant: "outline",
                color: "success",
                className:
                    "text-success border-success border data-[clickable=true]:hover:bg-success/5",
            },
            {
                variant: "soft",
                color: "success",
                className:
                    "text-success bg-success/15 data-[clickable=true]:hover:bg-success/35",
            },
            // Warning color
            {
                variant: "filled",
                color: "warning",
                className:
                    "text-warning-foreground bg-warning data-[clickable=true]:hover:bg-warning/90",
            },
            {
                variant: "outline",
                color: "warning",
                className:
                    "text-warning border-warning border data-[clickable=true]:hover:bg-warning/5",
            },
            {
                variant: "soft",
                color: "warning",
                className:
                    "text-warning bg-warning/15 data-[clickable=true]:hover:bg-warning/35",
            },
            // Error color
            {
                variant: "filled",
                color: "error",
                className:
                    "text-destructive-foreground bg-destructive data-[clickable=true]:hover:bg-destructive/90",
            },
            {
                variant: "outline",
                color: "error",
                className:
                    "text-destructive border-error border data-[clickable=true]:hover:bg-destructive/5",
            },
            {
                variant: "soft",
                color: "error",
                className:
                    "text-destructive bg-destructive/15 data-[clickable=true]:hover:bg-destructive/35",
            },
        ],
        variants: {
            variant: {
                filled: "",
                outline: "bg-transparent",
                soft: "",
            },
            color: {
                default: "",
                primary: "",
                secondary: "",
                info: "",
                success: "",
                warning: "",
                error: "",
            },
            size: {
                sm: "h-6 [&>.label]:px-2 [&>.start-icon]:size-5 [&>.start-icon>span]:size-5 [&>.start-icon>svg]:size-5 [&>.start-icon]:ml-0.5 [&>.start-icon]:-mr-1 [&>.deletable]:mr-0.5 [&>.deletable]:-ml-1",
                md: "h-8 [&>.label]:px-3 [&>.start-icon]:size-6 [&>.start-icon>span]:size-6 [&>.start-icon>svg]:size-6 [&>.start-icon]:ml-1 [&>.start-icon]:-mr-1.5 [&>.deletable]:mr-1 [&>.deletable]:-ml-1.5",
            },
        },
        defaultVariants: {
            color: "default",
            variant: "filled",
            size: "md",
        },
    },
);

const deletableVariants = cva(
    "cursor-pointer rounded-full flex items-center justify-center transition-[background-color] [&_svg]:text-current size-4 [&_svg]:size-2.5",
    {
        variants: {
            variant: {
                filled: "data-[variant=filled]:bg-white/45 data-[variant=filled]:hover:bg-white/80",
                outline: "text-accent",
                soft: "text-accent",
            },
            color: {
                default:
                    "data-[variant=filled]:bg-accent/80 data-[variant=filled]:hover:bg-accent data-[variant=filled]:text-foreground bg-foreground/65 hover:bg-foreground",
                primary:
                    "data-[variant=filled]:text-primary bg-primary/65 hover:bg-primary",
                secondary:
                    "data-[variant=filled]:text-secondary bg-secondary/65 hover:bg-secondary",
                info: "data-[variant=filled]:text-info bg-info/65 hover:bg-info",
                success:
                    "data-[variant=filled]:text-success-foreground bg-success/65 hover:bg-success",
                warning:
                    "data-[variant=filled]:text-warning-foreground bg-warning/65 hover:bg-warning",
                error: "data-[variant=filled]:text-destructive bg-destructive/65 hover:bg-destructive",
            },
        },
        defaultVariants: {
            color: "default",
            variant: "filled",
        },
    },
);

export interface ChipProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
        VariantProps<typeof chipVariants> {
    size?: "sm" | "md";
    label: string;
    deletable?: boolean;
    avatar?: JSX.Element;
    deleteIcon?: JSX.Element;
}

function Chip({
    label,
    variant = "filled",
    size = "md",
    color = "default",
    avatar,
    deletable = true,
    deleteIcon,
    onClick,
    className,
}: ChipProps) {
    return (
        <div
            className={cn(chipVariants({ variant, color, className, size }))}
            data-clickable={!!onClick}
            onClick={onClick}
        >
            {!!avatar && <div className="start-icon">{avatar}</div>}
            <p className="label">{label}</p>
            {!!deletable && (
                <div
                    className={cn(
                        deletableVariants({ variant, color }),
                        "deletable",
                    )}
                    data-variant={variant}
                    data-color={color}
                >
                    {deleteIcon ?? <X strokeWidth={3} />}
                </div>
            )}
        </div>
    );
}

export { Chip };
