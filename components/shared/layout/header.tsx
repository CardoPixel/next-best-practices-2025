"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Home, LayoutDashboard, User } from "lucide-react";
import * as React from "react";

export function LayoutHeader({
    children,
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="flex h-fit flex-row items-center justify-between bg-transparent px-4 py-2">
            <nav className="flex items-center space-x-4">
                <Link href="/" passHref>
                    <Button variant="ghost" size="sm">
                        <Home className="h-4 w-4 mr-2" />
                        Home
                    </Button>
                </Link>
                <Link href="/dashboard" passHref>
                    <Button variant="ghost" size="sm">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dashboard
                    </Button>
                </Link>
                <Link href="/about" passHref>
                    <Button variant="ghost" size="sm">
                        <User className="h-4 w-4 mr-2" />
                        About
                    </Button>
                </Link>
            </nav>
            <div className="flex items-center gap-4">{children}</div>
        </div>
    );
}
