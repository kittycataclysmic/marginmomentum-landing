import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Terms from './Terms.jsx';
import Privacy from './Privacy.jsx';

const KIT_FORM_ID = "9147039";

function Rule() {
  return <div className="h-px bg-[#2A2520] my-12" />;
}

function Label({ children }) {
  return (
    <span className="font-mono text-[9px] tracking-[4px] uppercase text-[#C8C0B4] block mb-4">
      {children}
    </span>
  );
}

function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email_address: email }),
        mode: 'no-cors',
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-[#2A2520] border-l-2 border-l-white p-8">
        <Label>Confirmed</Label>
        <p className="font-serif text-[#E8E4DF] text-sm leading-relaxed">
          You are on the list. When access opens, you will be the first to know.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 bg-[#161310] border border-[#2A2520] text-[#E8E4DF] font-mono text-sm px-4 py-3 placeholder-[#4A4540] focus:outline-none focus:border-white transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-white text-[#0A0A0A] font-mono text-[10px] tracking-[3px] uppercase px-8 py-3 hover:bg-[#E8E8E8] transition-colors disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Join the List'}
        </button>
      </div>
      <p className="font-mono text-[9px] tracking-[2px] uppercase text-[#4A4540]">
        Free for the first 1,000 operators. No spam. No upsell.
      </p>
    </form>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F0D0B] text-[#E8E4DF]">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#2A2520] bg-[#0F0D0B] px-6 flex items-center justify-between" style={{ height: 52 }}>
        <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#E8E4DF]">
          Margin &amp; Momentum™
        </span>
        <a href="#join" className="font-mono text-[9px] tracking-[2px] uppercase text-[#C8C0B4] hover:text-[#E8E4DF] transition-colors">
          Join the List →
        </a>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="mb-20">
          <Label>A Manifesto for the Filipino VA</Label>
          <h1 className="font-bebas text-[clamp(52px,10vw,96px)] leading-none text-[#E8E4DF] tracking-wide mb-8">
            Systems<br />Over<br />Status.
          </h1>
          <div className="h-px w-12 bg-white mb-8" />
          <p className="font-serif text-[#C8C0B4] text-base leading-relaxed mb-4">
            I am not a guru. I am a Lean Six Sigma Green Belt practitioner with sixteen years of corporate banking operations experience, currently pursuing Black Belt certification.
          </p>
          <p className="font-serif text-[#C8C0B4] text-base leading-relaxed mb-4">
            I have spent my career inside the institutional structures that move the world's capital. I am constitutionally incapable of looking at a broken system without needing to fix it.
          </p>
          <p className="font-serif text-[#E8E4DF] text-base leading-relaxed font-bold">
            This is a character flaw I have decided to make useful.
          </p>
        </div>

        <Rule />

        {/* The Diagnosis */}
        <div className="mb-16">
          <Label>The Diagnosis</Label>
          <h2 className="font-bebas text-4xl text-[#E8E4DF] tracking-wide mb-6">The Problem Is Not Talent.</h2>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-4">
            When I look at the Filipino VA community, I do not see a talent deficit. I see a systems deficit. Brilliant people, trapped in operational chaos, being sold hustle as a substitute for architecture.
          </p>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-4">
            The "work harder" prescription is not wrong. It is incomplete. And incomplete is expensive — it costs you time you cannot recover, rates you cannot raise, and clients who do not stay.
          </p>
          <p className="font-serif text-[#E8E4DF] text-sm leading-relaxed font-bold">
            We are being told to hustle when we should be taught to build.
          </p>
        </div>

        <Rule />

        {/* The Record */}
        <div className="mb-16">
          <Label>The Record</Label>
          <h2 className="font-bebas text-4xl text-[#E8E4DF] tracking-wide mb-6">I Know What Exploitation Weighs.</h2>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-4">
            In 2014, I was paid $2 USD for a 2,500-word article.
          </p>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-4">
            I have been the student who saved every cent for a premium course and received hours of unfocused content, no support, and no clarity — a coach performing expertise for their own satisfaction, not mine.
          </p>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-8">
            I have been the one with a broken, refurbished phone, walking to piso net rentals to submit a final draft to my editors. I know what it costs to access this industry with zero infrastructure.
          </p>
          <div className="border-l-2 border-white pl-6 py-1">
            <p className="font-serif text-[#E8E4DF] text-sm leading-relaxed italic">
              I am not recounting this for sympathy. I am recounting it because it is the reason I refuse to charge a working student, a blue-collar worker transitioning into remote work, or an experienced VA stuck at $3/hr — for a system I have already built and can offer for free.
            </p>
          </div>
        </div>

        <Rule />

        {/* The Bridge */}
        <div className="mb-16">
          <Label>Who This Is For</Label>
          <h2 className="font-bebas text-4xl text-[#E8E4DF] tracking-wide mb-8">If No One Else Builds the Bridge, I Will.</h2>
          <div className="space-y-px">
            {[
              ["For the blue-collar worker", "Construction workers, garbage collectors, street sweepers — anyone who wants a pathway into this industry. Who am I to tell them no?"],
              ["For the working student", "If you cannot afford a ₱99 course, the full system is free. Access should not be determined by the size of your starting budget."],
              ["For the experienced VA stuck at low rates", "If you have paid for premium training that never actually answered the question, you should not have to pay again."],
              ["For those who have been sidelined", "Physical limitations, psychological barriers, zero tech access — if every hustle coach in the industry has written you off, this was built with you in mind."],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4 p-5 bg-[#161310] border border-[#2A2520]">
                <div className="w-0.5 bg-white flex-shrink-0 mt-1" />
                <div>
                  <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#E8E4DF] block mb-1">{title}</span>
                  <p className="font-serif text-[#C8C0B4] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Rule />

        {/* 80/20 */}
        <div className="mb-16">
          <Label>The Contract</Label>
          <h2 className="font-bebas text-4xl text-[#E8E4DF] tracking-wide mb-6">The 80/20 Rule of Leverage.</h2>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-4">
            The VA Launch System and POL Framework™ provide the 80%: enterprise-grade architecture, positioning logic, structural hardening, and operational playbooks built to a Six Sigma standard.
          </p>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-8">
            The remaining 20% is your discipline.
          </p>
          <div className="grid grid-cols-2 gap-px bg-[#2A2520] mb-6">
            <div className="bg-[#0F0D0B] p-6">
              <span className="font-bebas text-5xl text-[#E8E4DF] block mb-2">80%</span>
              <p className="font-serif text-[#C8C0B4] text-xs leading-relaxed">
                Enterprise-grade systems, architecture, and operational frameworks. Built and given to you.
              </p>
            </div>
            <div className="bg-[#161310] p-6">
              <span className="font-bebas text-5xl text-[#E8E4DF] block mb-2">20%</span>
              <p className="font-serif text-[#C8C0B4] text-xs leading-relaxed">
                Your decision to show up, stay consistent, and execute. The only component I cannot build for you.
              </p>
            </div>
          </div>
          <div className="border border-[#2A2520] border-l-2 border-l-white p-5">
            <p className="font-serif text-[#E8E4DF] text-sm leading-relaxed italic">
              "I can engineer the system. I cannot engineer your decision to show up. That 20% is the human variable — and it is yours."
            </p>
          </div>
        </div>

        <Rule />

        {/* Why Free */}
        <div className="mb-16">
          <Label>The Architecture</Label>
          <h2 className="font-bebas text-4xl text-[#E8E4DF] tracking-wide mb-6">Why the Systems Are Free.</h2>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-4">
            A system that works should not be a luxury. It should be the foundation.
          </p>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-4">
            I have no interest in being a VA influencer. I have no interest in selling you a dream wrapped in a lifestyle ad. What I need is for the VA Launch System and the POL Framework™ to be the most reliable operational architecture you have ever stepped into.
          </p>
          <p className="font-serif text-[#E8E4DF] text-sm leading-relaxed font-bold">
            The structured systems I have built are 100% free for the first 1,000 operators.
          </p>
        </div>

        <Rule />

        {/* CTA */}
        <div className="mb-16" id="join">
          <Label>Access</Label>
          <h2 className="font-bebas text-4xl text-[#E8E4DF] tracking-wide mb-3">
            Stop the Hustle.<br />Start the Build.
          </h2>
          <p className="font-serif text-[#C8C0B4] text-sm leading-relaxed mb-8">
            Join the list. When the VA Launch System opens for the next cohort, you will be the first to receive access.
          </p>
          <EmailCapture />
        </div>

        <Rule />

        {/* Signature */}
        <div className="pb-8">
          <p className="font-serif text-[#C8C0B4] text-xs leading-relaxed mb-8 italic">
            If you are ready to stop the hustle and start the build — you are in the right place.
          </p>
          <div className="space-y-1">
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#E8E4DF] block">— Systems Architect</span>
            <span className="font-mono text-[9px] tracking-[2px] uppercase text-[#C8C0B4] block">Founder &amp; CEO, Margin &amp; Momentum™</span>
            <a href="https://founder.marginmomentum.co" target="_blank" rel="noopener noreferrer"
              className="font-mono text-[9px] tracking-[2px] uppercase text-[#4A4540] hover:text-[#E8E4DF] transition-colors block">
              founder.marginmomentum.co
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#2A2520] px-6 py-4">
        <div className="grid grid-cols-3 items-center mb-3">
          <span className="font-mono text-[8px] tracking-[3px] uppercase text-[#4A4540]">Systems Over Hustle™</span>
          <span className="font-mono text-[8px] tracking-[2px] uppercase text-[#4A4540] text-center">marginmomentum.co</span>
          <span className="font-mono text-[8px] tracking-[2px] uppercase text-[#4A4540] text-right">© 2026</span>
        </div>
        <div className="flex justify-center gap-6">
          <Link to="/terms" className="font-mono text-[8px] tracking-[2px] uppercase text-[#4A4540] hover:text-[#E8E4DF] transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link to="/privacy" className="font-mono text-[8px] tracking-[2px] uppercase text-[#4A4540] hover:text-[#E8E4DF] transition-colors">
            Privacy Notice
          </Link>
        </div>
      </footer>

    </div>
  );
}
