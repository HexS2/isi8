// app/layout.tsx
import { Providers } from "./components/providers";
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
})
{
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}