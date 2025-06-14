"use client";

import * as React from "react";

export function LayoutHeader({
    children,
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="flex h-fit flex-row items-center justify-end gap-4 bg-transparent px-4 py-2">
            {children}
        </div>
    );
}
