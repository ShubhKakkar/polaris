"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from 'react';

const Sidebar = () => {
    return (
        <header className="w-1/5 h-screen screen shadow-lg font-medium bg-primary-foreground p-5 flex flex-col items-start justify-between">
            <Suspense fallback={<Skeleton className="h-4 w-[250px]"  />}>
                <Link href="/"><h1 className="text-2xl uppercase underline">Polaris Analytics</h1></Link>
                <SignedIn>
                    <div className="shadow-lg w-full px-3 py-2 rounded-lg flex justify-center">
                        <Button size="lg" className="w-full" asChild><UserButton defaultOpen={true} showName={true} /></Button>
                    </div>
                </SignedIn>
                <SignedOut>
                    <Button size="lg" className="w-full bg-primary" asChild><SignInButton>Sign in to continue</SignInButton></Button>
                </SignedOut>
            </Suspense>
        </header>
    )
}

export default Sidebar