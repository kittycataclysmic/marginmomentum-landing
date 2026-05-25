import { useEffect, useState } from 'react'
import './App.css'

// ─── LEGAL PAGE WRAPPER ───────────────────────────────────────────────────────
function LegalPage({ title, lastUpdated, children, onBack }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-wordmark" onClick={e => { e.preventDefault(); onBack() }}>
          Margin &amp; Momentum™
        </a>
        <ul className="nav-links">
          <li><a href="#free" onClick={onBack}>Free Systems</a></li>
          <li><a href="#paid" onClick={onBack}>Paid Systems</a></li>
          <li><a href="mailto:hello@marginmomentum.co" className="nav-contact-link">hello@marginmomentum.co</a></li>
        </ul>
      </nav>

      <div className="legal-page">
        <div className="legal-header">
          <div className="legal-tag">Legal</div>
          <h1 className="legal-title">{title}</h1>
          <div className="legal-meta">Last Updated: {lastUpdated} · Margin &amp; Momentum™</div>
        </div>
        <div className="legal-rule" />
        <div className="legal-body">{children}</div>
        <div className="legal-back">
          <button className="legal-back-btn" onClick={onBack}>← Back to Main Hub</button>
        </div>
      </div>

      <footer>
        <div className="site-footer">
          <div className="footer-bottom">
            <div>
              <div className="footer-wordmark">Margin &amp; Momentum™</div>
              <div className="footer-tagline">Systems Over Hustle™</div>
              <div className="footer-copy">© 2026 Margin &amp; Momentum™. All rights reserved.</div>
              <div className="footer-legal">
                <a href="#" onClick={e => { e.preventDefault(); onBack() }}>← Back</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

// ─── TERMS PAGE ───────────────────────────────────────────────────────────────
function TermsPage({ onBack }) {
  return (
    <LegalPage title="Terms &amp; Conditions" lastUpdated="March 2026" onBack={onBack}>
      <p className="legal-lead">
        By accessing or using any product, resource, portal, or content provided by Margin &amp; Momentum™ ("the System"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the System.
      </p>
      <p>
        These terms apply to all users of marginmomentum.co, the VA Launch System portal, the POL Framework™, and any related properties operated under the Margin &amp; Momentum™ brand.
      </p>
      <h2 className="legal-h2">1. Acceptance of Terms</h2>
      <p>By accessing or using any part of the Margin &amp; Momentum™ ecosystem — including but not limited to the VA Launch System portal, the VA Systems Library, the Mainframe VA Library, and any downloadable resources — you confirm that you have read, understood, and agreed to these terms.</p>
      <h2 className="legal-h2">2. Use of the System</h2>
      <p>The tools, frameworks, and resources provided by Margin &amp; Momentum™ are for personal, professional development use only. You may not reproduce, redistribute, resell, or repurpose any content from the Margin &amp; Momentum™ ecosystem for commercial gain without explicit written permission from the Systems Architect.</p>
      <p>You agree not to use the System to:</p>
      <ul className="legal-list">
        <li>Violate any applicable law or regulation</li>
        <li>Misrepresent your identity or qualifications to clients or prospective employers</li>
        <li>Share access credentials with third parties</li>
        <li>Reverse-engineer, copy, or replicate the architecture of any tool or framework within the ecosystem</li>
      </ul>
      <h2 className="legal-h2">3. Free Access and Operator Slots</h2>
      <p>The VA Launch System is offered free of charge for the first 1,000 operators. Free access is non-transferable. Margin &amp; Momentum™ reserves the right to modify access terms, introduce paid tiers, or limit capacity at any time with reasonable notice.</p>
      <h2 className="legal-h2">4. Intellectual Property</h2>
      <p>All content within the Margin &amp; Momentum™ ecosystem — including the POL Framework™, the Systems Over Hustle™ methodology, written content, PDF workbooks, lab structures, and AI tool configurations — is the intellectual property of Margin &amp; Momentum™ and its Systems Architect.</p>
      <p>You are granted a limited, non-exclusive, non-transferable license to use these materials for your own professional development. This license does not include the right to redistribute, modify, or commercialize any content.</p>
      <h2 className="legal-h2">5. Disclaimer of Warranties</h2>
      <p>Margin &amp; Momentum™ provides its systems and resources on an "as is" basis. While every effort is made to ensure accuracy and utility, no warranties are made regarding outcomes, income results, or client acquisition timelines. The 20% human variable — your consistency and execution — remains outside our control and outside our responsibility.</p>
      <p>Results vary. The system removes structural barriers. It does not remove the requirement to show up.</p>
      <h2 className="legal-h2">6. Limitation of Liability</h2>
      <p>To the fullest extent permitted by applicable law, Margin &amp; Momentum™ and its Systems Architect shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the System — including but not limited to lost income, lost clients, or professional setbacks.</p>
      <h2 className="legal-h2">7. Third-Party Platforms and Tools</h2>
      <p>The System may reference or recommend third-party platforms, tools, and courses (including but not limited to Coursera, HubSpot Academy, Google, Canva, and Notion). These references are informational. Margin &amp; Momentum™ does not endorse, guarantee, or take responsibility for third-party content, pricing changes, or platform availability.</p>
      <h2 className="legal-h2">8. Cohort Participation</h2>
      <p>Participation in any Margin &amp; Momentum™ cohort is subject to enrollment terms communicated at the time of registration. Cohort access is personal and non-transferable. Margin &amp; Momentum™ reserves the right to remove any operator from a cohort for conduct that disrupts the learning environment or violates these terms.</p>
      <h2 className="legal-h2">9. Modifications</h2>
      <p>Margin &amp; Momentum™ reserves the right to update these Terms and Conditions at any time. Continued use of the System following any modification constitutes your acceptance of the revised terms. Material changes will be communicated through the portal or via email where applicable.</p>
      <h2 className="legal-h2">10. Governing Law</h2>
      <p>These terms are governed by the laws of the Republic of the Philippines. Any disputes arising from the use of the Margin &amp; Momentum™ System shall be subject to the exclusive jurisdiction of the appropriate courts of the Philippines.</p>
      <h2 className="legal-h2">11. Contact</h2>
      <p>For questions regarding these Terms and Conditions, contact the Systems Architect through the official Margin &amp; Momentum™ channels. Margin &amp; Momentum™ operates as a faceless brand. Correspondence is handled by the Systems Architect and their designated team.</p>
    </LegalPage>
  )
}

// ─── PRIVACY PAGE ─────────────────────────────────────────────────────────────
function PrivacyPage({ onBack }) {
  return (
    <LegalPage title="Privacy Notice" lastUpdated="March 2026" onBack={onBack}>
      <p className="legal-lead">
        This notice explains what data we collect, why we collect it, and how we handle it. We collect the minimum necessary. We do not sell your data. We do not share it with advertisers.
      </p>
      <h2 className="legal-h2">1. Who We Are</h2>
      <p>Margin &amp; Momentum™ is operated by its Founder and Systems Architect. We provide free educational resources, tools, and operational systems for virtual assistants and remote operators globally. Our primary properties include marginmomentum.co, app.marginmomentum.co, valibrary.marginmomentum.co, and systems.marginmomentum.co.</p>
      <h2 className="legal-h2">2. What We Collect</h2>
      <p>We collect only what is necessary to operate the System and communicate with operators.</p>
      <ul className="legal-list">
        <li><strong>Registration data:</strong> First name and email address, collected when you register for a cohort, access the VA Launch System portal, or subscribe to any Margin &amp; Momentum™ resource.</li>
        <li><strong>Progress data:</strong> Lab completion status, feedback responses, and portal activity — collected through the VLS portal to track operator progress and improve the system.</li>
        <li><strong>Communication data:</strong> Any information you voluntarily share when contacting us, submitting feedback, or participating in cohort activities.</li>
        <li><strong>Technical data:</strong> Standard web analytics including page views, session duration, and referral source — collected to understand how operators use our resources. We do not use invasive tracking or cross-site behavioral profiling.</li>
      </ul>
      <h2 className="legal-h2">3. How We Use Your Data</h2>
      <p>Your data is used exclusively to:</p>
      <ul className="legal-list">
        <li>Deliver access to the VA Launch System and related resources</li>
        <li>Send operational communications — cohort updates, lab reminders, completion certificates</li>
        <li>Improve the system based on operator feedback and usage patterns</li>
        <li>Contact you about new cohort openings, product launches, or relevant updates — only if you have subscribed or registered</li>
      </ul>
      <p>We do not use your data for advertising, profiling, or sale to third parties under any circumstances.</p>
      <h2 className="legal-h2">4. Email Communications</h2>
      <p>If you register for a cohort or subscribe to any Margin &amp; Momentum™ resource, you will receive operational and product communications. You may unsubscribe at any time using the link in any email we send. Unsubscribing from marketing emails does not affect access to the portal if you are an enrolled operator.</p>
      <p>We use a third-party email service provider (ConvertKit) to manage communications. Your name and email are stored on their platform in accordance with their privacy policy.</p>
      <h2 className="legal-h2">5. Data Storage and Security</h2>
      <p>Operator data is stored on Firebase (Google) infrastructure. We use industry-standard authentication and security measures including magic link authentication for portal access. We do not store passwords.</p>
      <p>While we take reasonable precautions to protect your data, no system is entirely immune to security risks. We will notify affected operators promptly in the event of any data breach.</p>
      <h2 className="legal-h2">6. Third-Party Services</h2>
      <p>The following third-party services process data in connection with the Margin &amp; Momentum™ System:</p>
      <ul className="legal-list">
        <li><strong>Firebase / Google:</strong> Authentication and database infrastructure for the VLS portal</li>
        <li><strong>ConvertKit:</strong> Email list management and communication</li>
        <li><strong>Vercel / Netlify:</strong> Hosting for web properties</li>
        <li><strong>Anthropic (Claude API):</strong> Powers the POLAI discovery call simulator</li>
      </ul>
      <p>Each of these providers maintains their own privacy policies. We select providers with strong data protection standards and do not authorize them to use your data for their own purposes.</p>
      <h2 className="legal-h2">7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="legal-list">
        <li>Request access to the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data from our systems</li>
        <li>Withdraw consent for communications at any time</li>
      </ul>
      <p>To exercise any of these rights, contact the Systems Architect through the official Margin &amp; Momentum™ channels. We will respond within 30 days.</p>
      <h2 className="legal-h2">8. Data Retention</h2>
      <p>We retain operator data for as long as your account is active or as needed to provide the System. If you request deletion, we will remove your personal data from active systems within 30 days, subject to any legal obligations that require retention.</p>
      <p>Cohort completion records and certificate data may be retained for verification purposes even after account deletion, in anonymized or minimal form.</p>
      <h2 className="legal-h2">9. Children's Privacy</h2>
      <p>The Margin &amp; Momentum™ System is not directed at individuals under the age of 18. We do not knowingly collect data from minors. If you believe a minor has submitted data to our system, please contact us immediately.</p>
      <h2 className="legal-h2">10. Changes to This Notice</h2>
      <p>This Privacy Notice may be updated periodically to reflect changes in our practices or applicable law. The date at the top of this page reflects the most recent revision. Continued use of the System following any update constitutes acceptance of the revised notice.</p>
      <h2 className="legal-h2">11. Contact</h2>
      <p>For any privacy-related questions or requests, contact the Systems Architect through the official Margin &amp; Momentum™ channels. We take data privacy seriously and will respond to all legitimate inquiries promptly.</p>
    </LegalPage>
  )
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    if (page !== 'home') return
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [page])

  if (page === 'terms') return <TermsPage onBack={() => setPage('home')} />
  if (page === 'privacy') return <PrivacyPage onBack={() => setPage('home')} />

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <a href="#" className="nav-wordmark">Margin &amp; Momentum™</a>
        <ul className="nav-links">
          <li><a href="#free">Free Systems</a></li>
          <li><a href="#paid">Paid Systems</a></li>
          <li>
            <a href="mailto:hello@marginmomentum.co" className="nav-contact-link">
              hello@marginmomentum.co
            </a>
          </li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-label">Margin &amp; Momentum™ · Systems Over Hustle™</div>
        <h1 className="hero-title">
          One<br />Methodology.<br /><em>Every Stage.</em>
        </h1>
        <p className="hero-sub">
          Lean Six Sigma methodology applied to the practice of remote work.
          Free entry points. Operational tools. Advanced programs.
          Built for operators who want to stop guessing and start running a system.
        </p>
        <div className="hero-bottom-rule" />
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="diagnosis">
        <div className="section-inner">
          <div className="diagnosis-body reveal">
            <div className="section-tag">The Problem</div>
            <h2 className="diagnosis-heading">The Problem<br />Is Not Talent.<br />It Is Structure.</h2>
            <p>
              Most operators who struggle with client acquisition, rate stagnation, and income
              instability are not underqualified. They are under-systematized. Skilled people,
              operating without architecture, being sold hustle as a substitute for process.
            </p>
            <p>
              The "work harder" prescription is not wrong. It is incomplete. And incomplete is
              expensive — it costs time that cannot be recovered, rates that cannot be raised,
              and clients who do not stay.
            </p>
            <p>Hustle is the tax you pay for a deficit in architecture.</p>
          </div>
          <div className="diagnosis-pull reveal">
            <strong>Built to hustle.</strong>
            Should be built to operate.
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="audience">
        <div className="section-inner">
          <div className="audience-header reveal">
            <div className="section-tag">Who This Is For</div>
            <h2 className="audience-heading">Four Kinds of Operators. One Ecosystem.</h2>
          </div>

          <div className="audience-grid">
            <div className="audience-card reveal">
              <div className="audience-card-number">01</div>
              <div className="audience-card-label">The Beginner</div>
              <h3>No clients yet. No niche yet.</h3>
              <p>Needs a starting point that is not just "pick a skill and hustle." The system provides the architecture before the first proposal goes out.</p>
              <ul className="audience-card-list">
                <li>Niche positioning frameworks</li>
                <li>Free course entry points</li>
                <li>Client acquisition systems</li>
              </ul>
            </div>

            <div className="audience-card reveal">
              <div className="audience-card-number">02</div>
              <div className="audience-card-label">The Career Shifter</div>
              <h3>Different industry. Transferable skills.</h3>
              <p>Has real professional experience but does not know how to reframe it for a remote practice. The methodology translates what they already know.</p>
              <ul className="audience-card-list">
                <li>Skills-to-outcomes mapping</li>
                <li>Positioning without starting over</li>
                <li>Rate anchoring by niche</li>
              </ul>
            </div>

            <div className="audience-card reveal">
              <div className="audience-card-number">03</div>
              <div className="audience-card-label">The Experienced Operator</div>
              <h3>Already working. Rate is not moving.</h3>
              <p>Has clients. Has skills. Stuck at generalist rates without a clear path to income stability or niche authority.</p>
              <ul className="audience-card-list">
                <li>Rate raise protocols</li>
                <li>Retainer architecture</li>
                <li>Scope and dependency audits</li>
              </ul>
            </div>

            <div className="audience-card reveal">
              <div className="audience-card-number">04</div>
              <div className="audience-card-label">The Side Hustler</div>
              <h3>Day job. Building alongside it.</h3>
              <p>Needs income on the side without burning the primary schedule. The system is designed to run with limited hours and zero wasted effort.</p>
              <ul className="audience-card-list">
                <li>High-leverage entry points</li>
                <li>Weekend-ready skill tracks</li>
                <li>Low-commitment starting points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CONTRACT ── */}
      <section className="contract">
        <div className="section-inner">
          <div className="contract-left reveal">
            <div className="section-tag">The Contract</div>
            <h2>The 80/20 Rule of Leverage.</h2>
            <p>
              The Margin &amp; Momentum™ ecosystem provides the 80%: enterprise-grade architecture,
              positioning logic, structural hardening, and operational playbooks built to a
              Six Sigma standard.
            </p>
            <p>The remaining 20% is the operator's discipline.</p>
            <blockquote className="contract-quote">
              "The system removes the structural barriers. It does not remove the requirement
              to show up. That 20% is the human variable — and it belongs to the operator."
            </blockquote>
          </div>
          <div className="ratio-display reveal">
            <div className="ratio-block eighty">
              <span className="ratio-num">80%</span>
              <p className="ratio-desc">
                Enterprise-grade systems, architecture, and operational frameworks.
                Built and delivered through the ecosystem.
              </p>
            </div>
            <div className="ratio-block twenty">
              <span className="ratio-num">20%</span>
              <p className="ratio-desc">
                The operator's decision to show up, stay consistent, and execute.
                The only component the system cannot build for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FREE SYSTEMS
      ══════════════════════════════════════ */}
      <section className="eco-free-section" id="free">
        <div className="section-inner">

          <div className="eco-tier-header reveal">
            <div className="section-tag">Free Systems</div>
            <h2 className="column-heading">The Foundation.<br />No Cost.<br />No Guesswork.</h2>
          </div>

          {/* Forever Free — two libraries */}
          <div className="eco-forever-label reveal">
            <span>Forever Free · No Slots · No Expiry</span>
          </div>

          <div className="eco-free-grid reveal">
            <div className="eco-free-card">
              <div className="eco-free-title">VA Systems Library</div>
              <p className="eco-free-desc">
                A permanent, always-accessible reference library for virtual assistants and
                remote operators. Tools, frameworks, and system references organized for
                operational use — not passive consumption. No enrollment. No deadline.
                Open to all operators.
              </p>
              <a href="https://systems.marginmomentum.co" target="_blank" rel="noreferrer" className="eco-free-link">
                Access the Library →
              </a>
            </div>

            <div className="eco-free-card">
              <div className="eco-free-title">Mainframe VA Library</div>
              <p className="eco-free-desc">
                A curated, permanently free directory of courses, certifications, and
                skill-building resources for remote operators. Organized by niche and
                skill level. No enrollment. No deadline. Open to all operators.
              </p>
              <a href="https://valibrary.marginmomentum.co" target="_blank" rel="noreferrer" className="eco-free-link">
                Access the Library →
              </a>
            </div>
          </div>

          {/* VALS 3.0 — freemium */}
          <div className="eco-forever-label reveal" style={{marginTop: '48px'}}>
            <span>Free · Structured · 7 Labs · 10-Day Completion Window Per Cohort</span>
          </div>

          <div className="vls-block reveal">
            <div className="vls-block-header">
              <div className="vls-block-badge">Free · First 1,000 Operators · 699 PHP After</div>
              <h3 className="vls-block-title">VALS 3.0</h3>
            </div>

            <div className="vls-block-inner">
              <div className="vls-block-left">
                <p className="vls-block-desc">
                  The operational foundation for a remote practice. Not a course library —
                  a structured system that takes an operator from zero to a positioned, priced,
                  and client-ready practice. Every module produces a usable output, not just
                  a lesson completed. Built on Lean Six Sigma DMAIC methodology throughout.
                  Free for the first 1,000 operators. 699 PHP after the threshold is reached.
                </p>
                <div className="vls-block-stats">
                  <div className="vls-stat-item">
                    <span className="vls-stat-num">1,000</span>
                    <span className="vls-stat-label">Free Slots</span>
                  </div>
                  <div className="vls-stat-item">
                    <span className="vls-stat-num">699</span>
                    <span className="vls-stat-label">PHP After</span>
                  </div>
                </div>
                <a href="https://app.marginmomentum.co" target="_blank" rel="noreferrer" className="polcode-cta">
                  Enter the System →
                </a>
              </div>

              <div className="vls-block-right">
                <div className="vls-feature-label">What the System Covers</div>
                <ul className="vls-feature-items">
                  <li>Lab 01 — Niche Clarity</li>
                  <li>Lab 02 — Proof of Skill</li>
                  <li>Lab 03 — Portfolio Build</li>
                  <li>Lab 04 — Platform Positioning</li>
                  <li>Lab 05 — Digital Presence</li>
                  <li>Lab 06 — Proposal System</li>
                  <li>Lab 07 — Client Acquisition Sprint</li>
                </ul>
                <div className="vls-methodology-note">
                  <div className="vls-feature-label" style={{marginTop: '32px'}}>The Methodology</div>
                  <p>
                    Each lab is built on two tracks — LSS methodology to frame the problem
                    correctly, and AI to execute it precisely. Structure and intelligence,
                    woven into every output.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── TIER TRANSITION ── */}
      <section className="tier-transition">
        <div className="section-inner">
          <div className="tier-transition-inner reveal">
            <div className="tier-transition-rule" />
            <p className="tier-transition-text">
              The free systems give you the foundation.<br />The paid systems give you the operational
              depth, communication architecture, and advanced programs for operators ready to go further.
            </p>
            <div className="tier-transition-rule" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PAID SYSTEMS
      ══════════════════════════════════════ */}
      <section className="eco-paid-section" id="paid">
        <div className="section-inner">

          <div className="eco-tier-header reveal">
            <div className="section-tag">Paid Systems</div>
            <h2 className="column-heading">Six Systems.<br />One Methodology.</h2>
          </div>

          <div className="eco-paid-grid reveal">

            {/* 01 — Intelligence Operator */}
            <div className="eco-paid-card">
              <div className="eco-paid-num">01</div>
              <div className="eco-paid-name">The Intelligence Operator</div>
              <div className="eco-paid-tag">Three 30-Day Courses · One Certification</div>
              <p className="eco-paid-desc">
                A three-course professional certification for operators ready to build, automate,
                and deliver AI-powered systems at the client level. Mastering Gemini AI &amp;
                NotebookLM · Mastering Claude &amp; Cowork · Mastering ChatGPT. LSS methodology
                woven through every lab. One credential — reviewed and issued by the Systems
                Architect personally after all capstone submissions are approved.
              </p>
              <ul className="eco-paid-specs">
                <li>90 days · 90 labs · 15 Logic-Check Checkpoints</li>
                <li>Complete Stack: 6,999 PHP · Individual: 2,999 PHP / course</li>
                <li>VALS &amp; Mainframe learners: 1,499 PHP / course</li>
              </ul>
              <a href="https://intelligenceoperator.marginmomentum.co/" target="_blank" rel="noreferrer" className="eco-paid-link">
                View the Program →
              </a>
            </div>

            {/* 02 — POLcode */}
            <div className="eco-paid-card">
              <div className="eco-paid-num">02</div>
              <div className="eco-paid-name">POLcode</div>
              <div className="eco-paid-tag">Communications Architecture · 6 Levels · 135 Personas</div>
              <p className="eco-paid-desc">
                Precision on language. Six levels. 135 simulated personas across 15 industry
                niches. One framework that makes executives trust you before the call ends.
                Built for operators who are done guessing what to say, when to say it, and
                how to make it land under pressure. Spoken fluency, written authority,
                and LSS + AI communication systems.
              </p>
              <ul className="eco-paid-specs">
                <li>6 levels · 135 personas · 15 niches · Unlimited reps</li>
                <li>699 PHP · M&amp;M Community: 333 PHP</li>
                <li>Lifetime access including all future updates</li>
              </ul>
              <a href="https://polcode.marginmomentum.co" target="_blank" rel="noreferrer" className="eco-paid-link">
                Enter the Program →
              </a>
            </div>

            {/* 03 — Client Pipeline System */}
            <div className="eco-paid-card">
              <div className="eco-paid-num">03</div>
              <div className="eco-paid-name">The Client Pipeline System</div>
              <div className="eco-paid-tag">Three Phases · ATS Filter to Direct Client</div>
              <p className="eco-paid-desc">
                The complete client acquisition system — from the moment an ATS reads a resume
                to the moment a direct client signs before a job post is written. Three
                deliverables: The Diagnostic, Beating the Bots (3-session ATS training +
                audio companion), and the Cold Outreach System field guide. Built live.
                Operator-tested.
              </p>
              <ul className="eco-paid-specs">
                <li>3 deliverables · 15 cold outreach modules · Session slides + audio</li>
                <li>1,499 PHP public · 999 PHP M&amp;M Community</li>
              </ul>
              <a href="https://pipeline.marginmomentum.co" target="_blank" rel="noreferrer" className="eco-paid-link">
                View the System →
              </a>
            </div>

            {/* 04 — Operator Reference Suite */}
            <div className="eco-paid-card">
              <div className="eco-paid-num">04</div>
              <div className="eco-paid-name">Operator Reference Suite</div>
              <div className="eco-paid-tag">Nine PDF Workbooks · LSS + AI Integrated</div>
              <p className="eco-paid-desc">
                Nine paid PDF workbooks, each targeting a specific structural problem in a
                remote practice — rate health, client dependency, scope integrity, positioning
                clarity, proposal conversion, and income stability. Entry point: the VA Business
                Health Scorecard. Your lowest-scoring dimension determines your sequence.
              </p>
              <ul className="eco-paid-specs">
                <li>9 documents · Diagnostic framework + AI layer prompt in each</li>
                <li>Suite: 7,999 PHP public · 3,999 PHP M&amp;M Community</li>
                <li>Individual total: 13,191 PHP</li>
              </ul>
              <a href="https://operatorsuite.marginmomentum.co" target="_blank" rel="noreferrer" className="eco-paid-link">
                View the Suite →
              </a>
            </div>

            {/* 05 — The Operator Standard */}
            <div className="eco-paid-card">
              <div className="eco-paid-num">05</div>
              <div className="eco-paid-name">The Operator Standard</div>
              <div className="eco-paid-tag">15 Specializations · 35 Days · LSS Applied</div>
              <p className="eco-paid-desc">
                Fifteen specializations. One proven methodology. Lean Six Sigma applied to the
                role — whether you are already in it or building toward it. Thirty-five days to
                understand what the standard demands, build the systems that meet it, and operate
                at a level clients notice. Choose your niche. Build your system. Deliver at a
                level most operators never reach.
              </p>
              <ul className="eco-paid-specs">
                <li>15 specializations · 35 days per niche</li>
                <li>699 PHP per niche · Free for approved scholars</li>
                <li>Approved by The Systems Architect</li>
              </ul>
              <a href="https://tos.marginmomentum.co" target="_blank" rel="noreferrer" className="eco-paid-link">
                View the Standard →
              </a>
            </div>

            {/* 06 — AI-Ready Funnel Operator */}
            <div className="eco-paid-card">
              <div className="eco-paid-num">06</div>
              <div className="eco-paid-name">AI-Ready Funnel Operator</div>
              <div className="eco-paid-tag">3-Day Credentialed Sprint · AI-Assisted Systems</div>
              <p className="eco-paid-desc">
                A 3-day credentialed sprint for Systems Operators who want to build AI-assisted
                funnel systems — and position themselves to charge for the outcome, not the hours.
                Built for operators ready to name the problem before the client does, construct
                owned infrastructure that survives AI search disruption, and operate in a category
                most VAs cannot access.
              </p>
              <ul className="eco-paid-specs">
                <li>3 days · 3 labs · Credential issued on completion</li>
                <li>2,999 PHP</li>
                <li>Covers lead capture, sales pages, and email infrastructure</li>
              </ul>
              <a href="https://funnel.marginmomentum.co" target="_blank" rel="noreferrer" className="eco-paid-link">
                Access the Sprint →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── POLARIS ── */}
      <section className="polaris-strip">
        <div className="section-inner">
          <div className="polaris-inner reveal">
            <div className="polaris-label">POLARIS — FINAL BUILD</div>
            <p className="polaris-copy">
              Nine systems. One methodology. One app. The full stack, mobile-native.
              POLARIS is the only M&amp;M system that lives in the App Store and Google Play.
            </p>
            <div className="polaris-status">IN DEVELOPMENT</div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="site-footer">
          <div className="footer-bottom">
            <div>
              <div className="footer-wordmark">Margin &amp; Momentum™</div>
              <div className="footer-tagline">Systems Over Hustle™</div>
              <div className="footer-copy">© 2026 Margin &amp; Momentum™. All rights reserved.</div>
              <div className="footer-legal">
                <a href="#" onClick={e => { e.preventDefault(); setPage('terms') }}>Terms</a>
                <a href="#" onClick={e => { e.preventDefault(); setPage('privacy') }}>Privacy</a>
              </div>
            </div>
            <ul className="footer-nav">
              <li><a href="https://systems.marginmomentum.co" target="_blank" rel="noreferrer">VA Systems Library</a></li>
              <li><a href="https://valibrary.marginmomentum.co" target="_blank" rel="noreferrer">Mainframe VA Library</a></li>
              <li><a href="https://app.marginmomentum.co" target="_blank" rel="noreferrer">VALS 3.0</a></li>
              <li><a href="https://polcode.marginmomentum.co" target="_blank" rel="noreferrer">POLcode</a></li>
              <li><a href="https://intelligenceoperator.marginmomentum.co/" target="_blank" rel="noreferrer">The Intelligence Operator</a></li>
              <li><a href="https://pipeline.marginmomentum.co" target="_blank" rel="noreferrer">The Client Pipeline System</a></li>
              <li><a href="https://operatorsuite.marginmomentum.co" target="_blank" rel="noreferrer">Operator Reference Suite</a></li>
              <li><a href="https://tos.marginmomentum.co" target="_blank" rel="noreferrer">The Operator Standard</a></li>
              <li><a href="https://funnel.marginmomentum.co" target="_blank" rel="noreferrer">AI-Ready Funnel Operator</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
