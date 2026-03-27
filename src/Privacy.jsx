import { Link } from 'react-router-dom';

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-bebas text-2xl text-white tracking-wide mb-4">{title}</h2>
      <div className="space-y-3 font-serif text-[#6B7280] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="sticky top-0 z-50 border-b border-[#1E1E1E] bg-[#0A0A0A] px-6 flex items-center justify-between" style={{ height: 52 }}>
        <Link to="/" className="font-mono text-[10px] tracking-[3px] uppercase text-white hover:text-[#6B7280] transition-colors">
          ← Margin &amp; Momentum™
        </Link>
        <span className="font-mono text-[9px] tracking-[2px] uppercase text-[#6B7280]">Privacy Notice</span>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="font-mono text-[9px] tracking-[4px] uppercase text-[#6B7280] block mb-4">Legal</span>
          <h1 className="font-bebas text-5xl text-white tracking-wide mb-4">Privacy Notice</h1>
          <p className="font-mono text-[9px] tracking-[2px] uppercase text-[#3A3A3A]">
            Last updated: March 2026 · Margin &amp; Momentum™
          </p>
        </div>

        <div className="h-px bg-[#1E1E1E] mb-12" />

        <div className="mb-10 border-l-2 border-white pl-6">
          <p className="font-serif text-white text-sm leading-relaxed italic">
            This notice explains what data we collect, why we collect it, and how we handle it. We collect the minimum necessary. We do not sell your data. We do not share it with advertisers.
          </p>
        </div>

        <Section title="1. Who We Are">
          <p>Margin &amp; Momentum™ is operated by its Founder and Systems Architect. We provide free educational resources, tools, and operational systems for Filipino virtual assistants and solopreneurs globally.</p>
          <p>For privacy-related questions, contact us at: <a href="mailto:hey@marginmomentum.co" className="text-white hover:text-[#6B7280] transition-colors">hey@marginmomentum.co</a></p>
        </Section>

        <Section title="2. What Data We Collect">
          <p><strong className="text-white font-normal">Email address</strong> — collected when you submit the waitlist or cohort application form on marginmomentum.co. This is the only personal data we collect through the main site.</p>
          <p><strong className="text-white font-normal">Portal account data</strong> — if you are granted access to the VA Launch System portal, we collect your email address for authentication (via magic link — no password required), your niche profile selections, and your lab progress and completion data. This data is stored in Firebase Firestore and used solely to operate your portal account.</p>
          <p><strong className="text-white font-normal">Usage data</strong> — we do not use tracking pixels, advertising cookies, or behavioural analytics on any Margin &amp; Momentum™ property.</p>
        </Section>

        <Section title="3. Why We Collect It">
          <p><strong className="text-white font-normal">Email address</strong> — to notify you when cohort access opens, send system updates, and communicate programme information relevant to your participation. We use Kit (formerly ConvertKit) to manage email communications.</p>
          <p><strong className="text-white font-normal">Portal data</strong> — to operate the 24-hour lab lock system, track your progress through the 7-lab sequence, and provide the Systems Architect with cohort-level completion data for system improvement.</p>
        </Section>

        <Section title="4. Legal Basis for Processing">
          <p>We process your data on the basis of your consent — given when you submit the waitlist form or create a portal account. You may withdraw consent at any time by contacting us or unsubscribing from communications.</p>
          <p>For users in the Philippines, this notice is consistent with the requirements of the Data Privacy Act of 2012 (Republic Act No. 10173) and its implementing rules and regulations.</p>
          <p>For users in the European Union or United Kingdom, we process data on the lawful basis of consent under the GDPR and UK GDPR.</p>
        </Section>

        <Section title="5. How Long We Keep Your Data">
          <p><strong className="text-white font-normal">Email list</strong> — retained for as long as you remain subscribed. You may unsubscribe at any time via the link in any email we send.</p>
          <p><strong className="text-white font-normal">Portal data</strong> — retained for the duration of your active cohort and for a reasonable period thereafter for system auditing purposes. You may request deletion at any time.</p>
        </Section>

        <Section title="6. Who We Share Data With">
          <p>We do not sell your personal data to any third party under any circumstances.</p>
          <p>We share data only with the following service providers, strictly for the purpose of operating the System:</p>
          <div className="space-y-2 mt-2">
            {[
              ["Kit (ConvertKit)", "Email list management and cohort communications"],
              ["Firebase (Google)", "Portal authentication and progress data storage"],
              ["Netlify", "Static site hosting — no personal data processed"],
              ["Vercel", "Portal hosting — no personal data processed beyond standard server logs"],
            ].map(([service, purpose]) => (
              <div key={service} className="flex gap-4 p-4 bg-[#111111] border border-[#1E1E1E]">
                <div className="w-0.5 bg-white flex-shrink-0" />
                <div>
                  <span className="font-mono text-[10px] tracking-[2px] uppercase text-white block mb-0.5">{service}</span>
                  <span className="font-serif text-xs text-[#6B7280]">{purpose}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your location, you have the right to:</p>
          <div className="space-y-1 mt-2">
            {[
              "Access the personal data we hold about you",
              "Request correction of inaccurate data",
              "Request deletion of your data",
              "Withdraw consent for email communications at any time",
              "Lodge a complaint with the National Privacy Commission (Philippines) or your local data protection authority",
            ].map((right, i) => (
              <div key={i} className="flex gap-3">
                <span className="font-mono text-[9px] text-[#3A3A3A] pt-1">{String(i+1).padStart(2,"0")}</span>
                <span className="font-serif text-sm text-[#6B7280]">{right}</span>
              </div>
            ))}
          </div>
          <p className="mt-4">To exercise any of these rights, contact us at: <a href="mailto:hey@marginmomentum.co" className="text-white hover:text-[#6B7280] transition-colors">hey@marginmomentum.co</a></p>
        </Section>

        <Section title="8. Cookies">
          <p>marginmomentum.co does not use advertising cookies, tracking pixels, or third-party analytics. The portal uses session-based authentication managed through Firebase, which uses standard browser storage mechanisms for maintaining your logged-in state.</p>
        </Section>

        <Section title="9. Security">
          <p>We take reasonable technical and organisational measures to protect your data from unauthorised access, loss, or misuse. The portal uses Firebase's built-in security rules and magic link authentication — no passwords are stored.</p>
          <p>No method of data transmission over the internet is completely secure. While we work to protect your data, we cannot guarantee absolute security.</p>
        </Section>

        <Section title="10. Changes to This Notice">
          <p>We may update this Privacy Notice from time to time. When we do, we will update the date at the top of this page. Continued use of any Margin &amp; Momentum™ property after changes are posted constitutes acceptance of the revised Notice.</p>
        </Section>

        <Section title="11. Contact">
          <p>For any privacy-related questions, requests, or concerns:</p>
          <p><a href="mailto:hey@marginmomentum.co" className="text-white hover:text-[#6B7280] transition-colors">hey@marginmomentum.co</a></p>
          <p>Margin &amp; Momentum™ · marginmomentum.co</p>
        </Section>

        <div className="h-px bg-[#1E1E1E] my-12" />

        <Link to="/" className="font-mono text-[9px] tracking-[3px] uppercase text-[#6B7280] hover:text-white transition-colors">
          ← Back to marginmomentum.co
        </Link>
      </main>

      <footer className="border-t border-[#1E1E1E] px-6 py-4 grid grid-cols-3 items-center">
        <span className="font-mono text-[8px] tracking-[3px] uppercase text-[#3A3A3A]">Systems Over Hustle™</span>
        <span className="font-mono text-[8px] tracking-[2px] uppercase text-[#3A3A3A] text-center">marginmomentum.co</span>
        <span className="font-mono text-[8px] tracking-[2px] uppercase text-[#3A3A3A] text-right">© 2026</span>
      </footer>
    </div>
  );
}
