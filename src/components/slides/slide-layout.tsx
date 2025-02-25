import type { ReactNode } from "react"

interface SlideLayoutProps {
  title: string
  children: ReactNode
}

export function SlideLayout({ title, children }: SlideLayoutProps) {
  return (
    <article className="min-h-screen flex flex-col justify-center items-center p-8 md:p-16">
      <header className="w-full text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">{title}</h2>
      </header>
      <div className="w-full max-w-6xl">{children}</div>
    </article>
  )
}

