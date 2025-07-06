"use client";

import { BellIcon, HeartIcon, StarIcon, ThumbsUpIcon } from "lucide-react";
import * as React from "react";

import { AnimatedButton } from "./animated-button";

export const AnimatedButtonDemo: React.FC = () => {
    const [likeCount, setLikeCount] = React.useState(42);
    const [favoriteCount, setFavoriteCount] = React.useState(128);

    const handleLike = () => {
        setLikeCount((prev) => prev + 1);
    };

    const handleFavorite = () => {
        setFavoriteCount((prev) => prev + 1);
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Subscribe Button Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Subscribe Button</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <AnimatedButton
                            variant="subscribe"
                            size="lg"
                            animationType="confetti"
                            activeText="Subscribed"
                            inactiveText="Subscribe"
                            activeIcon={<BellIcon className="w-4 h-4" />}
                            onStateChange={(isActive) =>
                                console.log("Subscribe:", isActive)
                            }
                        />

                        <AnimatedButton
                            variant="subscribe"
                            size="lg"
                            animationType="confetti"
                            activeText="Following"
                            inactiveText="Follow"
                            activeIcon={<BellIcon className="w-4 h-4" />}
                        />
                    </div>
                </div>

                {/* Like Button Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Like Button</h2>
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <AnimatedButton
                            variant="like"
                            size="lg"
                            animationType="hearts"
                            activeText={`${likeCount} Likes`}
                            inactiveText={`${likeCount} Likes`}
                            activeIcon={
                                <HeartIcon className="w-4 h-4 fill-current" />
                            }
                            inactiveIcon={<HeartIcon className="w-4 h-4" />}
                            onClick={handleLike}
                        />

                        <AnimatedButton
                            variant="like"
                            size="lg"
                            animationType="hearts"
                            activeText="Liked!"
                            inactiveText="Like"
                            activeIcon={
                                <ThumbsUpIcon className="w-4 h-4 fill-current" />
                            }
                            inactiveIcon={<ThumbsUpIcon className="w-4 h-4" />}
                        />
                    </div>
                </div>

                {/* Favorite Button Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Favorite Button</h2>
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <AnimatedButton
                            variant="favorite"
                            size="lg"
                            animationType="stars"
                            activeText={`${favoriteCount} Favorites`}
                            inactiveText={`${favoriteCount} Favorites`}
                            activeIcon={
                                <StarIcon className="w-4 h-4 fill-current" />
                            }
                            inactiveIcon={<StarIcon className="w-4 h-4" />}
                            onClick={handleFavorite}
                        />

                        <AnimatedButton
                            variant="favorite"
                            size="lg"
                            animationType="stars"
                            activeText="Favorited!"
                            inactiveText="Favorite"
                            activeIcon={
                                <StarIcon className="w-4 h-4 fill-current" />
                            }
                            inactiveIcon={<StarIcon className="w-4 h-4" />}
                        />
                    </div>
                </div>

                {/* Standard Button Variants with Animations */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold ">
                        Standard Variants with Animations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                                Default with Confetti
                            </h3>
                            <AnimatedButton
                                variant="default"
                                animationType="confetti"
                                activeText="Activated!"
                                inactiveText="Activate"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                                Destructive with Hearts
                            </h3>
                            <AnimatedButton
                                variant="destructive"
                                animationType="hearts"
                                activeText="Deleted!"
                                inactiveText="Delete"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium ">
                                Outline with Stars
                            </h3>
                            <AnimatedButton
                                variant="outline"
                                animationType="stars"
                                activeText="Saved!"
                                inactiveText="Save"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                                Secondary with Confetti
                            </h3>
                            <AnimatedButton
                                variant="secondary"
                                animationType="confetti"
                                activeText="Completed!"
                                inactiveText="Complete"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                                Ghost with Hearts
                            </h3>
                            <AnimatedButton
                                variant="ghost"
                                animationType="hearts"
                                activeText="Loved!"
                                inactiveText="Love"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                                Link with Stars
                            </h3>
                            <AnimatedButton
                                variant="link"
                                animationType="stars"
                                activeText="Bookmarked!"
                                inactiveText="Bookmark"
                            />
                        </div>
                    </div>
                </div>

                {/* Size Variants */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Size Variants</h2>
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <AnimatedButton
                            variant="subscribe"
                            size="sm"
                            animationType="confetti"
                            activeText="Subscribed"
                            inactiveText="Subscribe"
                        />
                        <AnimatedButton
                            variant="subscribe"
                            size="default"
                            animationType="confetti"
                            activeText="Subscribed"
                            inactiveText="Subscribe"
                        />
                        <AnimatedButton
                            variant="subscribe"
                            size="lg"
                            animationType="confetti"
                            activeText="Subscribed"
                            inactiveText="Subscribe"
                        />
                    </div>
                </div>

                {/* Custom Configurations */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">
                        Custom Configurations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                                High Particle Count
                            </h3>
                            <AnimatedButton
                                variant="like"
                                animationType="hearts"
                                particleCount={50}
                                activeText="Liked!"
                                inactiveText="Like"
                                activeIcon={
                                    <HeartIcon className="w-4 h-4 fill-current" />
                                }
                                inactiveIcon={<HeartIcon className="w-4 h-4" />}
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">
                                Long Animation Duration
                            </h3>
                            <AnimatedButton
                                variant="favorite"
                                animationType="stars"
                                animationDuration={2000}
                                activeText="Favorited!"
                                inactiveText="Favorite"
                                activeIcon={
                                    <StarIcon className="w-4 h-4 fill-current" />
                                }
                                inactiveIcon={<StarIcon className="w-4 h-4" />}
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">
                                No Animation
                            </h3>
                            <AnimatedButton
                                variant="default"
                                animationType="none"
                                activeText="Active"
                                inactiveText="Inactive"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">
                                Pre-activated State
                            </h3>
                            <AnimatedButton
                                variant="subscribe"
                                initialState="active"
                                animationType="confetti"
                                activeText="Subscribed"
                                inactiveText="Subscribe"
                                activeIcon={<BellIcon className="w-4 h-4" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
