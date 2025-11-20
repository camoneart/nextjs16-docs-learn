import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-red-500 selection:text-white">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Side: Branding / Statement */}
        <div className="p-12 md:p-24 flex flex-col justify-between border-r border-white/10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
          <div>
            <span className="inline-block border border-white/20 px-3 py-1 text-xs font-mono tracking-[0.2em] text-white/60 mb-8">
              SECURE ENVIRONMENT
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Check
              <br />
              out.
            </h1>
          </div>

          <div className="mt-12">
            <p className="font-serif italic text-2xl text-white/60 leading-relaxed max-w-md">
              &quot;Simplicity is the ultimate sophistication.&quot;
            </p>
            <div className="mt-8 w-12 h-1 bg-red-600"></div>
          </div>

          <div className="mt-auto pt-12">
            <div className="text-xs font-mono text-white/40 space-y-1">
              <p>CONTEXT: Independent Root</p>
              <p>LAYOUT: None (Shop Layout Bypassed)</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Area */}
        <div className="p-12 md:p-24 flex flex-col justify-center bg-slate-950">
          <div className="max-w-md w-full mx-auto space-y-12">
            <div className="space-y-2">
              <h2 className="text-xl font-medium tracking-wide uppercase text-white">
                Payment Details
              </h2>
              <p className="text-sm text-slate-500">
                Complete your purchase securely.
              </p>
            </div>

            <form className="space-y-8">
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-xs font-bold tracking-widest text-slate-500 mb-2 group-focus-within:text-red-500 transition-colors">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl font-mono text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-slate-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs font-bold tracking-widest text-slate-500 mb-2 group-focus-within:text-red-500 transition-colors">
                      EXPIRY
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl font-mono text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-slate-700"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold tracking-widest text-slate-500 mb-2 group-focus-within:text-red-500 transition-colors">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl font-mono text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-slate-700"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between">
                <Link
                  href="/cart"
                  className="text-sm text-slate-500 hover:text-white transition-colors font-mono"
                >
                  ← BACK TO CART
                </Link>
                <button
                  type="button"
                  className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
