export default function AccountPage() {
  return (
    <div className="grid md:grid-cols-12 gap-12 items-start">
      {/* Left Column: Title & Meta */}
      <div className="md:col-span-4 space-y-6 sticky top-32">
        <div className="w-16 h-1 bg-amber-600"></div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
          My
          <br />
          Profile
        </h2>
        <div className="font-mono text-xs text-slate-400 mt-4 border-l-2 border-slate-200 pl-4">
          PATH: src/app/(shop)/account
        </div>
      </div>

      {/* Right Column: Content Card */}
      <div className="md:col-span-8">
        <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] duration-300">
          <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-6">
            <div>
              <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">
                Member ID
              </span>
              <span className="font-mono text-2xl text-slate-900">
                #8829-AC
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl grayscale">
              👤
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-900 rotate-45"></span>
                Personal Details
              </h3>
              <div className="grid gap-4 text-sm font-medium text-slate-600">
                <p className="flex justify-between border-b border-dotted border-slate-300 pb-2">
                  <span>Name</span>
                  <span className="text-slate-900">Camone User</span>
                </p>
                <p className="flex justify-between border-b border-dotted border-slate-300 pb-2">
                  <span>Email</span>
                  <span className="text-slate-900">user@example.com</span>
                </p>
                <p className="flex justify-between border-b border-dotted border-slate-300 pb-2">
                  <span>Status</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 text-xs uppercase tracking-wider">
                    Gold Member
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 border border-slate-200">
              <p className="font-mono text-xs text-slate-500 leading-relaxed">
                This interface demonstrates the nested layout capability. The
                surrounding frame and navigation are inherited from the (shop)
                layout group.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
