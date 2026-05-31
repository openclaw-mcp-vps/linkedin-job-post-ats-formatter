export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          ATS Formatter
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Format Job Posts for{" "}
          <span className="text-[#58a6ff]">Any ATS Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Paste your job description, choose Workday, Greenhouse, or Lever, and get a perfectly structured output in seconds. No more manual reformatting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Formatting — $12/mo
          </a>
          <span className="text-[#8b949e] text-sm">Cancel anytime. No contracts.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { platform: "Workday", desc: "Structured fields, keyword density, and compliance-ready formatting for Workday ATS ingestion." },
            { platform: "Greenhouse", desc: "Clean HTML output with proper heading hierarchy and metadata tags for Greenhouse job boards." },
            { platform: "Lever", desc: "Markdown-compatible format with team tags and custom fields optimized for Lever pipelines." }
          ].map((item) => (
            <div key={item.platform} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-bold text-lg mb-2">{item.platform}</div>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited job post conversions",
              "Workday, Greenhouse & Lever formats",
              "Keyword optimization suggestions",
              "Copy-to-clipboard & export",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which ATS platforms are supported?",
              a: "We currently support Workday, Greenhouse, and Lever — the three most widely used ATS platforms. More are being added based on user demand."
            },
            {
              q: "Do I need technical knowledge to use this?",
              a: "Not at all. Paste your job description, select your target ATS, and click convert. The tool handles all formatting rules automatically."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal. You'll retain access until the end of your billing period with no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} ATS Job Formatter. All rights reserved.
      </footer>
    </main>
  )
}
