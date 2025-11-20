import Link from "next/link";

export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-16 text-center">
        <span className="inline-block py-1 px-3 border border-slate-900 text-xs font-mono uppercase tracking-widest mb-4">
          Shopping Bag
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          Your Selections
        </h2>
      </header>

      <div className="relative">
        {/* Receipt Style Container */}
        <div className="bg-white relative mx-auto max-w-2xl shadow-2xl">
          {/* Jagged Top */}
          <div className="h-4 bg-[#FDFBF7] relative z-10 -mb-2 overflow-hidden">
            <div
              className="absolute top-2 left-0 w-full h-4 bg-white"
              style={{
                clipPath:
                  "polygon(0% 100%, 2% 0%, 4% 100%, 6% 0%, 8% 100%, 10% 0%, 12% 100%, 14% 0%, 16% 100%, 18% 0%, 20% 100%, 22% 0%, 24% 100%, 26% 0%, 28% 100%, 30% 0%, 32% 100%, 34% 0%, 36% 100%, 38% 0%, 40% 100%, 42% 0%, 44% 100%, 46% 0%, 48% 100%, 50% 0%, 52% 100%, 54% 0%, 56% 100%, 58% 0%, 60% 100%, 62% 0%, 64% 100%, 66% 0%, 68% 100%, 70% 0%, 72% 100%, 74% 0%, 76% 100%, 78% 0%, 80% 100%, 82% 0%, 84% 100%, 86% 0%, 88% 100%, 90% 0%, 92% 100%, 94% 0%, 96% 100%, 98% 0%, 100% 100%)",
              }}
            ></div>
          </div>

          <div className="p-8 md:p-12 border-x border-white bg-white">
            <table className="w-full text-left font-mono text-sm">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th className="py-4 w-16">QTY</th>
                  <th className="py-4">ITEM</th>
                  <th className="py-4 text-right">PRICE</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-4">01</td>
                  <td className="py-4">
                    <span className="block font-bold text-slate-900 font-serif uppercase">
                      Classic Layout System
                    </span>
                    <span className="text-xs">Color: Midnight Blue</span>
                  </td>
                  <td className="py-4 text-right">$120.00</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4">01</td>
                  <td className="py-4">
                    <span className="block font-bold text-slate-900 font-serif uppercase">
                      Route Grouping
                    </span>
                    <span className="text-xs">Size: Abstract</span>
                  </td>
                  <td className="py-4 text-right">$85.00</td>
                </tr>
              </tbody>
              <tfoot className="font-bold text-slate-900 text-lg">
                <tr>
                  <td colSpan={2} className="py-6 text-right font-serif italic">
                    Total Amount
                  </td>
                  <td className="py-6 text-right">$205.00</td>
                </tr>
              </tfoot>
            </table>

            <div className="mt-12 flex flex-col items-center space-y-4">
              <div className="w-full border-t border-dashed border-slate-300 my-4"></div>
              <p className="font-serif italic text-slate-500 text-center mb-4">
                Thank you for shopping with The Store.
              </p>
              <Link
                href="/checkout"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white uppercase tracking-widest font-bold overflow-hidden transition-all hover:bg-amber-600 hover:scale-105 w-full md:w-auto"
              >
                <span className="relative z-10">Proceed to Checkout</span>
              </Link>
              <p className="text-[10px] font-mono text-slate-400">
                Leaving (shop) layout context
              </p>
            </div>
          </div>

          {/* Jagged Bottom */}
          <div className="h-4 bg-[#FDFBF7] relative z-10 -mt-2 overflow-hidden">
            <div
              className="absolute bottom-2 left-0 w-full h-4 bg-white"
              style={{
                clipPath:
                  "polygon(0% 0%, 2% 100%, 4% 0%, 6% 100%, 8% 0%, 10% 100%, 12% 0%, 14% 100%, 16% 0%, 18% 100%, 20% 0%, 22% 100%, 24% 0%, 26% 100%, 28% 0%, 30% 100%, 32% 0%, 34% 100%, 36% 0%, 38% 100%, 40% 0%, 42% 100%, 44% 0%, 46% 100%, 48% 0%, 50% 100%, 52% 0%, 54% 100%, 56% 0%, 58% 100%, 60% 0%, 62% 100%, 64% 0%, 66% 100%, 68% 0%, 70% 100%, 72% 0%, 74% 100%, 76% 0%, 78% 100%, 80% 0%, 82% 100%, 84% 0%, 86% 100%, 88% 0%, 90% 100%, 92% 0%, 94% 100%, 96% 0%, 98% 100%, 100% 0%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
