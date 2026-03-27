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

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="sticky top-0 z-50 border-b border-[#1E1E1E] bg-[#0A0A0A] px-6 flex items-center justify-between" style={{ height: 52 }}>
        <Link to="/" className="font-mono text-[10px] tracking-[3px] uppercase text-white hover:text-[#6B7280] transition-colors">
          ← Margin &amp; Momentum™
        </Link>
        <span className="font-mono text-[9px] tracking-[2px] uppercase text-[#6B7280]">Terms &amp; Conditions</span>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="font-mono text-[9px] tracking-[4px] uppercase text-[#6B7280] block mb-4">Legal</span>
          <h1 className="font-bebas text-5xl text-white tracking-wide mb-4">Terms &amp; Conditions</h1>
          <p className="font-mono text-[9px] tracking-[2px] uppercase text-[#3A3A3A]">
            Last updated: March 2026 · Margin &amp; Momentum™
          </p>
        </div>

        <div className="h-px bg-[#1E1E1E] mb-12" />

        <Section title="1. Acceptance of Terms">
          <p>By accessing or using any product, resource, portal, or content provided by Margin &amp; Momentum™ ("the System"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the System.</p>
          <p>These terms apply to all users of marginmomentum.co, the VA Launch System portal, the POL Framework™, the Founding Operator Track applications, and any related properties operated under the Margin &amp; Momentum™ brand.</p>
        </Section>

        <Section title="2. Use of the System">
          <p>The VA Launch System, POL Framework™, and all associated resources are provided for personal, non-commercial educational use. You may not resell, redistribute, sublicense, or reproduce any part of the System without prior written consent from Margin &amp; Momentum™.</p>
          <p>You agree to use the System in good faith and in accordance with its stated purpose — to support your development as a professional virtual assistant and systems operator.</p>
          <p>You may not use the System to copy, replicate, or build a competing product that materially reproduces its structure, methodology, or content.</p>
        </Section>

        <Section title="3. Intellectual Property">
          <p>All content within the System — including but not limited to the POL Framework™, LEAN+AI Methodology, lab structures, tools, templates, documents, and brand assets — is the intellectual property of Margin &amp; Momentum™.</p>
          <p>The trademarks Margin &amp; Momentum™, Systems Over Hustle™, POL Framework™, and VA Launch System are owned by the Founder and may not be used without written permission.</p>
          <p>You retain ownership of any work you produce using the System's tools and prompts. Margin &amp; Momentum™ does not claim ownership over your portfolio, proposals, or deliverables.</p>
        </Section>

        <Section title="4. Free Access and Cohort Eligibility">
          <p>The VA Launch System is currently offered at no cost to operators within designated cohorts. Free access is subject to availability and cohort capacity limits. Margin &amp; Momentum™ reserves the right to introduce pricing for future cohorts or tiers at any time.</p>
          <p>Access granted to one cohort does not guarantee access to future cohorts, updates, or new product releases.</p>
        </Section>

        <Section title="5. No Guarantees of Outcome">
          <p>The System provides structure, tools, and methodology. It does not guarantee employment, client acquisition, income levels, or any specific professional outcome. Results depend entirely on your execution, consistency, and the market conditions you operate in.</p>
          <p>Testimonials and case studies shared by Margin &amp; Momentum™ represent individual outcomes and are not a promise of equivalent results for all users.</p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>Margin &amp; Momentum™ is not liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use the System — including but not limited to lost income, lost clients, or data loss.</p>
          <p>The System is provided "as is" without warranties of any kind, express or implied.</p>
        </Section>

        <Section title="7. Third-Party Links and Resources">
          <p>The System may reference or link to third-party platforms, tools, and courses. Margin &amp; Momentum™ does not control these resources and is not responsible for their content, availability, or accuracy. Links are provided for informational purposes only.</p>
        </Section>

        <Section title="8. Modifications">
          <p>Margin &amp; Momentum™ reserves the right to modify these Terms at any time. Continued use of the System after changes are posted constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.</p>
        </Section>

        <Section title="9. Governing Law">
          <p>These Terms are governed by the laws of the Republic of the Philippines. Any disputes arising from the use of the System shall be subject to the jurisdiction of the appropriate courts of the Philippines.</p>
        </Section>

        <Section title="10. Contact">
          <p>For questions regarding these Terms, contact us at:</p>
          <p>
            <a href="mailto:hey@marginmomentum.co" className="text-white hover:text-[#6B7280] transition-colors">
              hey@marginmomentum.co
            </a>
          </p>
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
