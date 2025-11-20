import Link from "next/link";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-serif selection:bg-amber-200 selection:text-amber-900">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-900 bg-[#FDFBF7]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-baseline gap-4">
            <h1 className="text-3xl font-black tracking-tighter uppercase italic">
              The Store
              <span className="text-amber-600 text-4xl">.</span>
            </h1>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400 tracking-widest uppercase">
              (Shop Group)
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8 text-sm font-bold tracking-wider uppercase">
            <Link href="/account" className="relative group py-2">
              Account
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/cart" className="relative group py-2">
              Cart
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="h-6 w-px bg-slate-300 rotate-12 mx-2"></div>
            <Link
              href="/checkout"
              className="px-5 py-2 bg-slate-900 text-[#FDFBF7] hover:bg-amber-600 transition-colors duration-300 skew-x-[-12deg] inline-block"
            >
              <span className="inline-block skew-x-12">Checkout</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-6 md:p-12 min-h-[calc(100vh-5rem)] relative">
        {/* Decorational Lines */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
        <div className="absolute right-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 md:px-12">{children}</div>
      </main>

      {/* Footer Decor */}
      <footer className="border-t border-slate-900 py-8 text-center">
        <p className="font-mono text-xs text-slate-400 uppercase tracking-[0.3em]">
          Est. 2024 — Next.js App Router Collection
        </p>
      </footer>
    </div>
  );
}
