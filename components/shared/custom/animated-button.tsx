"use client";

import { Button } from "@/components/ui/button";
import { cva, type VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { BellIcon, HeartIcon, StarIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

const animatedButtonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                destructive:
                    "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
                subscribe:
                    "bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200",
                like: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                favorite:
                    "bg-warning text-warning-foreground hover:bg-warning/90",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 px-6 has-[>svg]:px-4",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface AnimatedButtonProps
    extends React.ComponentProps<"button">,
        VariantProps<typeof animatedButtonVariants> {
    asChild?: boolean;
    animationType?: "confetti" | "hearts" | "stars" | "none";
    initialState?: "active" | "inactive";
    activeText?: string;
    inactiveText?: string;
    activeIcon?: React.ReactNode;
    inactiveIcon?: React.ReactNode;
    onStateChange?: (isActive: boolean) => void;
    particleCount?: number;
    animationDuration?: number;
}

export const AnimatedButton = React.forwardRef<
    HTMLButtonElement,
    AnimatedButtonProps
>(
    (
        {
            children,
            className,
            variant = "default",
            size = "default",
            animationType = "confetti",
            initialState = "inactive",
            activeText,
            inactiveText,
            activeIcon,
            inactiveIcon,
            onStateChange,
            particleCount = 20,
            animationDuration = 1200,
            onClick,
            ...props
        },
        ref,
    ) => {
        const [isActive, setIsActive] = React.useState(
            initialState === "active",
        );
        const [isAnimating, setIsAnimating] = React.useState(false);
        const { theme, systemTheme } = useTheme();

        React.useEffect(() => {
            if (isAnimating) {
                const timer = setTimeout(() => {
                    setIsAnimating(false);
                }, animationDuration);
                return () => clearTimeout(timer);
            }
        }, [isAnimating, animationDuration]);

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isActive) {
                setIsAnimating(true);
            }
            setIsActive(!isActive);
            if (onStateChange) {
                onStateChange(!isActive);
            }
            if (onClick) {
                onClick(e);
            }
        };

        const createParticles = () => {
            if (animationType === "none") return null;

            const particleConfigs = {
                confetti: {
                    shapes: ["rectangle", "circle"],
                    colors: [
                        "#ff6b6b",
                        "#4ecdc4",
                        "#45b7d1",
                        "#96ceb4",
                        "#feca57",
                        "#ff9ff3",
                        "#54a0ff",
                        "#5f27cd",
                        "#00d2d3",
                        "#ff9f43",
                    ],
                    sizeRange: { min: 4, max: 12 },
                },
                hearts: {
                    shapes: ["heart"],
                    colors: [
                        "#ff6b6b",
                        "#ff8e8e",
                        "#ffb3b3",
                        "#ffd6d6",
                        "#ff9999",
                    ],
                    sizeRange: { min: 8, max: 16 },
                },
                stars: {
                    shapes: ["star"],
                    colors: [
                        "#ffd700",
                        "#ffed4e",
                        "#fff200",
                        "#ffeb3b",
                        "#fff176",
                    ],
                    sizeRange: { min: 6, max: 14 },
                },
            };

            const config =
                particleConfigs[animationType as keyof typeof particleConfigs];

            return Array.from({ length: particleCount }, (_, i) => {
                const angle = (i / particleCount) * 2 * Math.PI;
                const radius = Math.random() * 100 + 50;
                const endX = Math.cos(angle) * radius;
                const endY = Math.sin(angle) * radius;

                const randomShape =
                    config.shapes[
                        Math.floor(Math.random() * config.shapes.length)
                    ];
                const randomColor =
                    config.colors[
                        Math.floor(Math.random() * config.colors.length)
                    ];
                const size =
                    Math.random() *
                        (config.sizeRange.max - config.sizeRange.min) +
                    config.sizeRange.min;

                const getClipPath = (shape: string) => {
                    switch (shape) {
                        case "heart":
                            return "polygon(50% 0%, 100% 38%, 82% 100%, 50% 85%, 18% 100%, 0% 38%)";
                        case "star":
                            return "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
                        default:
                            return "";
                    }
                };

                return (
                    <motion.div
                        key={i}
                        className={`absolute`}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: "-50%",
                            y: "-50%",
                            left: "50%",
                            top: "50%",
                            rotate: 0,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, Math.random() * 0.5 + 0.7, 0],
                            x: ["-50%", `calc(${endX}px - 50%)`],
                            y: ["-50%", `calc(${endY}px - 50%)`],
                            rotate: [0, Math.random() * 360],
                        }}
                        transition={{
                            duration: animationDuration / 1000,
                            delay: Math.random() * 0.1,
                            ease: "easeInOut",
                        }}
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor: randomColor,
                            clipPath: getClipPath(randomShape),
                            boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                        }}
                    />
                );
            });
        };

        const getButtonBackgroundColor = () => {
            const currentTheme = theme === "system" ? systemTheme : theme;

            if (variant === "subscribe") {
                return isActive
                    ? isAnimating
                        ? currentTheme === "dark"
                            ? [
                                  "rgba(50,50,50,0.3)",
                                  "rgba(0,150,0,0.3)",
                                  "rgba(0,200,0,0.3)",
                                  "rgba(0,250,0,0.3)",
                                  "rgba(50,250,0,0.3)",
                                  "rgba(100,250,0,0.35)",
                                  "rgba(150,250,0,0.4)",
                                  "rgba(200,250,0,0.45)",
                                  "rgba(250,250,0,0.5)",
                                  "rgba(250,200,0,0.55)",
                                  "rgba(250,150,0,0.6)",
                                  "rgba(250,100,0,0.65)",
                                  "rgba(250,50,0,0.7)",
                                  "rgba(250,0,0,0.75)",
                                  "rgba(200,0,0,0.8)",
                                  "rgba(150,0,0,0.85)",
                                  "rgba(50,50,50,0.9)",
                              ]
                            : [
                                  "rgba(211,211,211,0.3)",
                                  "rgba(105,255,0,0.3)",
                                  "rgba(0,255,0,0.3)",
                                  "rgba(64,255,0,0.3)",
                                  "rgba(128,255,0,0.3)",
                                  "rgba(192,255,0,0.35)",
                                  "rgba(255,255,0,0.4)",
                                  "rgba(255,224,0,0.45)",
                                  "rgba(255,192,0,0.5)",
                                  "rgba(255,160,0,0.55)",
                                  "rgba(255,128,0,0.6)",
                                  "rgba(255,96,0,0.65)",
                                  "rgba(255,64,0,0.7)",
                                  "rgba(255,32,0,0.75)",
                                  "rgba(255,0,0,0.8)",
                                  "rgba(233,105,105,0.85)",
                                  "rgba(211,211,211,0.9)",
                              ]
                        : currentTheme === "dark"
                          ? "rgb(50,50,50)"
                          : "rgb(211,211,211)"
                    : currentTheme === "dark"
                      ? "rgb(200,200,200)"
                      : "rgb(0,0,0)";
            }

            return undefined;
        };

        const getDisplayText = () => {
            if (activeText && inactiveText) {
                return isActive ? activeText : inactiveText;
            }
            return children;
        };

        const getDisplayIcon = () => {
            if (activeIcon && inactiveIcon) {
                return isActive ? activeIcon : inactiveIcon;
            }

            // Default icons for specific variants
            if (variant === "subscribe") {
                return isActive ? <BellIcon className="w-4 h-4" /> : null;
            }
            if (variant === "like") {
                return isActive ? (
                    <HeartIcon className="w-4 h-4 fill-current" />
                ) : (
                    <HeartIcon className="w-4 h-4" />
                );
            }
            if (variant === "favorite") {
                return isActive ? (
                    <StarIcon className="w-4 h-4 fill-current" />
                ) : (
                    <StarIcon className="w-4 h-4" />
                );
            }

            return null;
        };

        const buttonBackgroundColor = getButtonBackgroundColor();
        /* const currentTheme = theme === "system" ? systemTheme : theme; */

        return (
            <motion.div className="relative w-fit">
                {isActive && isAnimating ? createParticles() : null}
                <motion.div
                    layout
                    className="rounded-md overflow-hidden"
                    animate={{
                        backgroundColor: buttonBackgroundColor,
                    }}
                    transition={{
                        backgroundColor: {
                            duration: isAnimating
                                ? animationDuration / 1000
                                : 0.3,
                            times:
                                isAnimating &&
                                buttonBackgroundColor instanceof Array
                                    ? [
                                          0, 0.0625, 0.125, 0.1875, 0.25,
                                          0.3125, 0.375, 0.4375, 0.5, 0.5625,
                                          0.625, 0.6875, 0.75, 0.8125, 0.875,
                                          0.9375, 1,
                                      ]
                                    : [0, 1],
                        },
                    }}
                >
                    <Button
                        ref={ref}
                        variant={
                            variant === "subscribe" ||
                            variant === "like" ||
                            variant === "favorite"
                                ? "default"
                                : variant
                        }
                        size={size}
                        onClick={handleClick}
                        className={animatedButtonVariants({
                            variant,
                            size,
                            className,
                        })}
                        data-active={isActive}
                        {...props}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isActive ? "active" : "inactive"}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex items-center gap-2"
                            >
                                {getDisplayIcon()}
                                {getDisplayText()}
                            </motion.div>
                        </AnimatePresence>
                    </Button>
                </motion.div>
            </motion.div>
        );
    },
);

AnimatedButton.displayName = "AnimatedButton";
