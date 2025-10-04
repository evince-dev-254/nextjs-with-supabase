import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visit Supabase website"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a 
          href="https://nextjs.org/" 
          target="_blank" 
          rel="noreferrer noopener"
          aria-label="Visit Next.js website"
        >
          <NextLogo />
        </a>
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The fastest way to build apps with{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer noopener"
        >
          Supabase
        </a>{" "}
        and{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer noopener"
        >
          Next.js
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <div className="flex gap-4">
        <Link
          href="/todos"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          View Todos
        </Link>
        <a
          href="https://supabase.com/docs"
          target="_blank"
          rel="noreferrer noopener"
          className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
        >
          View Docs
        </a>
      </div>
    </div>
  );
}
