import { useEffect, useState } from 'react'
import './App.css'

// ─── LEGAL PAGE WRAPPER ───────────────────────────────────────────────────────
function LegalPage({ title, lastUpdated, children, onBack }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-wordmark" onClick={e => { e.preventDefault(); onBack() }}>
          Margin &amp; Momentum™ <span>Systems Over Hustle™</span>
        </a>
        <ul className="nav-links">
          <li><a href="https://app.marginmomentum.co">VA Launch System Portal</a></li>
          <li><a href="https://valibrary.marginmomentum.co">Mainframe VA Library</a></li>
          <li><a href="https://systems.marginmomentum.co">VA Systems Library</a></li>
          <li><a href="https://polcode.marginmomentum.co" target="_blank" rel="noreferrer">POLcode</a></li>
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
      <p>Margin &amp; Momentum™ is operated by its Founder and Systems Architect. We provide free educational resources, tools, and operational systems for Filipino virtual assistants and solopreneurs globally. Our primary properties include marginmomentum.co, app.marginmomentum.co, valibrary.marginmomentum.co, and systems.marginmomentum.co.</p>

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
      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-wordmark">
          Margin &amp; Momentum™ <span>Systems Over Hustle™</span>
        </a>
        <ul className="nav-links">
          <li><a href="https://app.marginmomentum.co">VA Launch System Portal</a></li>
          <li><a href="https://valibrary.marginmomentum.co">Mainframe VA Library</a></li>
          <li><a href="https://systems.marginmomentum.co">VA Systems Library</a></li>
          <li><a href="https://intelligenceoperator.marginmomentum.co/" target="_blank" rel="noreferrer" className="nav-io-link">The Intelligence Operator</a></li>
          <li><a href="https://polcode.marginmomentum.co" target="_blank" rel="noreferrer" className="nav-polcode-link">POLcode</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-label">A Manifesto for the Filipino VA</div>
        <h1 className="hero-title">
          Systems<br />Over<br /><em>Hustle.</em>
        </h1>
        <p className="hero-sub">
          I am not a guru. I am a Lean Six Sigma Green Belt practitioner with 16+ years of corporate
          banking operations experience, currently pursuing Black Belt certification.
        </p>
        <div className="hero-bottom-rule" />
      </section>

      {/* MANIFESTO OPENER */}
      <section className="manifesto-opener" id="manifesto">
        <div className="section-inner">
          <div>
            <div className="section-tag">Origin</div>
            <h2 className="column-heading">The Systems Architect</h2>
          </div>
          <div className="manifesto-body reveal">
            <p>I have spent my career inside the institutional structures that move the world's capital.</p>
            <p>I am constitutionally incapable of looking at a broken system without needing to fix it.</p>
            <p>This is a character flaw I have decided to make useful.</p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="credentials">
        <div className="section-inner">
          <div>
            <div className="section-tag">Credentials</div>
            <h2 className="column-heading">The Methodology Has a Paper Trail.</h2>
          </div>
          <div className="credentials-list reveal">

            <div className="credential-item">
              <div className="credential-badge">Certified <span>·</span> Verifiable</div>
              <div className="credential-title">Lean Six Sigma Green Belt</div>
              <div className="credential-issuer">Currently Pursuing Black Belt Certification</div>
              <p className="credential-desc">
                The operational backbone of every system built under Margin &amp; Momentum™.
                DMAIC methodology applied to VA positioning, client acquisition, and service delivery architecture.
              </p>
              <div className="credential-verify">Verification available upon request.</div>
            </div>

            <div className="credential-item">
              <div className="credential-badge">Certified <span>·</span> Verifiable</div>
              <div className="credential-title">AI for Business</div>
              <div className="credential-issuer">Wharton School, University of Pennsylvania</div>
              <p className="credential-desc">
                Strategic AI adoption, risk frameworks, ethics, and organizational readiness — translated
                into the operational reality of knowledge work and virtual service delivery.
              </p>
              <div className="credential-verify">Verification available upon request.</div>
            </div>

            <div className="credential-item">
              <div className="credential-badge">Certified <span>·</span> Verifiable</div>
              <div className="credential-title">AI-Powered Business Operations</div>
              <div className="credential-issuer">Starweaver</div>
              <p className="credential-desc">
                Four-course applied program covering Business Process Modeling with AI, ChatGPT for
                Product Management &amp; Innovation, Data Storytelling for B2B &amp; B2C Sales, and Gen AI for Sustainability.
              </p>
              <div className="credential-verify">Verification available upon request.</div>
            </div>

            <div className="credential-item">
              <div className="credential-badge">Certified <span>·</span> Verifiable</div>
              <div className="credential-title">Instructional Design Foundations and Applications</div>
              <div className="credential-issuer">University of Illinois Urbana-Champaign</div>
              <p className="credential-desc">
                The learning science behind the system architecture. Covers adult learning theory, curriculum
                design, learner analysis, and evaluation frameworks — applied directly to how the VA Launch
                System is structured and sequenced.
              </p>
              <div className="credential-verify">Verification available upon request.</div>
            </div>

            <div className="credential-item">
              <div className="credential-badge">Certified <span>·</span> Verifiable</div>
              <div className="credential-title">An Introduction to Learning Experience Design (LXD)</div>
              <div className="credential-issuer">University of Michigan</div>
              <p className="credential-desc">
                Three-course specialization covering orientation to the profession, theories and frameworks,
                and development and evaluation. The discipline behind building programs that people actually
                complete — not just content they consume.
              </p>
              <div className="credential-verify">Verification available upon request.</div>
            </div>

          </div>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="diagnosis">
        <div className="section-inner">
          <div className="diagnosis-body reveal">
            <div className="section-tag">The Problem</div>
            <h2 className="diagnosis-heading">The Problem<br />Is Not Talent.</h2>
            <p>
              When I look at the Filipino VA community, I do not see a talent deficit. I see a systems
              deficit. Brilliant people, trapped in operational chaos, being sold hustle as a substitute
              for architecture.
            </p>
            <p>
              The "work harder" prescription is not wrong. It is incomplete. And incomplete is expensive —
              it costs you time you cannot recover, rates you cannot raise, and clients who do not stay.
            </p>
            <p>Hustle is the tax you pay for a deficit in architecture.</p>
          </div>
          <div className="diagnosis-pull reveal">
            <strong>We are being told to hustle.</strong>
            We should be taught to build.
          </div>
        </div>
      </section>

      {/* THE RECORD */}
      <section className="record">
        <div className="section-inner">
          <div>
            <div className="section-tag">The Record</div>
            <h2 className="column-heading">I Know What Exploitation Weighs.</h2>
          </div>
          <div className="record-body reveal">
            <p>
              I have been the student who saved every cent for a premium course and received hours of
              unfocused content, no support, and no clarity — a coach performing expertise for their own
              satisfaction, not mine.
            </p>
            <p>
              I have been the one with a broken, refurbished phone, walking to piso net rentals just to
              submit my final draft to my editor at The Huffington Post Contributor platform. I know what
              it costs to access this industry with zero infrastructure.
            </p>
            <p>
              I am not recounting this for sympathy. I am recounting it because it is the reason I refuse
              to charge a working student, a blue-collar worker transitioning into remote work, or an
              experienced VA stuck at low rates — for a system I have already built and can offer for free.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="audience">
        <div className="section-inner">
          <div className="audience-header reveal">
            <div className="section-tag">Who This Is For</div>
            <h2 className="audience-heading">I Built This for Four Kinds of Operators.</h2>
          </div>

          <div className="audience-grid">
            <div className="audience-card reveal">
              <div className="audience-card-number">01</div>
              <div className="audience-card-label">Group 01</div>
              <h3>The Beginner</h3>
              <p>No clients yet. No niche yet. Needs a starting point that isn't just "pick a skill."</p>
              <ul className="audience-card-list">
                <li>Niche positioning content</li>
                <li>Free course recommendations</li>
                <li>What clients actually pay for</li>
              </ul>
            </div>

            <div className="audience-card reveal">
              <div className="audience-card-number">02</div>
              <div className="audience-card-label">Group 02</div>
              <h3>The Career Shifter</h3>
              <p>Coming from a different industry. Has transferable skills but doesn't know how to reframe them.</p>
              <ul className="audience-card-list">
                <li>Industry-to-VA translation guides</li>
                <li>Reskilling course tracks</li>
                <li>Positioning without starting over</li>
              </ul>
            </div>

            <div className="audience-card reveal">
              <div className="audience-card-number">03</div>
              <div className="audience-card-label">Group 03</div>
              <h3>The Experienced VA</h3>
              <p>Already working. Low rates. Generalist trap. Doing the work but not moving up.</p>
              <ul className="audience-card-list">
                <li>Niche repositioning content</li>
                <li>Rate-raising frameworks</li>
                <li>Moving from tasks to outcomes</li>
              </ul>
            </div>

            <div className="audience-card reveal">
              <div className="audience-card-number">04</div>
              <div className="audience-card-label">Group 04</div>
              <h3>The Side Hustler</h3>
              <p>Has a day job. Wants income on the side. Needs fast, zero-cost, practical skill-building.</p>
              <ul className="audience-card-list">
                <li>Short course recommendations</li>
                <li>Weekend-ready skill tracks</li>
                <li>Low-commitment entry points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE CONTRACT */}
      <section className="contract">
        <div className="section-inner">
          <div className="contract-left reveal">
            <div className="section-tag">The Contract</div>
            <h2>The 80/20 Rule of Leverage.</h2>
            <p>
              The VA Launch System and POL Framework™ provide the 80%: enterprise-grade architecture,
              positioning logic, structural hardening, and operational playbooks built to a Six Sigma standard.
            </p>
            <p>The remaining 20% is your discipline.</p>
            <blockquote className="contract-quote">
              "I can engineer the system. I cannot engineer your decision to show up. That 20% is the
              human variable — and it is yours."
            </blockquote>
          </div>
          <div className="ratio-display reveal">
            <div className="ratio-block eighty">
              <span className="ratio-num">80%</span>
              <p className="ratio-desc">
                Enterprise-grade systems, architecture, and operational frameworks. Built and given to you.
              </p>
            </div>
            <div className="ratio-block twenty">
              <span className="ratio-num">20%</span>
              <p className="ratio-desc">
                Your decision to show up, stay consistent, and execute. The only component I cannot build for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE ARCHITECTURE */}
      <section className="architecture">
        <div className="section-inner">
          <div className="architecture-left reveal">
            <div className="section-tag">The Architecture</div>
            <h2>Why the Systems Are Free.</h2>
            <p>A system that works should not be a luxury. It should be the foundation.</p>
            <p>
              I have no interest in being a VA influencer. I have no interest in selling you a dream
              wrapped in a lifestyle ad. What I need is for the VA Launch System and the POL Framework™
              to be the most reliable operational architecture you have ever stepped into.
            </p>
            <p>The structured systems I have built are 100% free for the first 1,000 operators.</p>
          </div>
          <div className="architecture-stat reveal">
            <span className="architecture-stat-num">1,000</span>
            <span className="architecture-stat-label">
              Operators.<br />Free access.<br />No exceptions.
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POLCODE
      ═══════════════════════════════════════ */}
      <section className="polcode-section" id="polcode">
        <div className="section-inner">

          {/* LEFT */}
          <div className="polcode-left reveal">
            <div className="section-tag">POLcode</div>
            <div className="polcode-overline">Communications Architecture for Systems Operators</div>
            <h2 className="polcode-heading">Precision.<br />On<br />Language.</h2>
            <p className="polcode-lead">
              Six levels. 135 personas. One framework that makes executives trust you before the call ends.
            </p>
            <p className="polcode-sub">
              Built for systems operators who are done guessing what to say, when to say it,
              and how to make it land under pressure.
            </p>
            <div className="polcode-price-block">
              <div className="polcode-price-row">
                <span className="polcode-price">699 PHP</span>
                <span className="polcode-price-note">One-time enrollment</span>
              </div>
              <a href="https://polcode.marginmomentum.co" target="_blank" rel="noreferrer" className="polcode-cta">
                Enter the Program →
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="polcode-right">

            {/* Stats bar */}
            <div className="polcode-stats reveal">
              <div className="polcode-stat">
                <span className="polcode-stat-num">06</span>
                <span className="polcode-stat-label">Levels</span>
              </div>
              <div className="polcode-stat">
                <span className="polcode-stat-num">135</span>
                <span className="polcode-stat-label">Simulated Personas</span>
              </div>
              <div className="polcode-stat">
                <span className="polcode-stat-num">15</span>
                <span className="polcode-stat-label">Industry Niches</span>
              </div>
              <div className="polcode-stat">
                <span className="polcode-stat-num">∞</span>
                <span className="polcode-stat-label">Reps Available</span>
              </div>
            </div>

            {/* Mastery Pillars */}
            <div className="polcode-pillars reveal">
              <div className="polcode-pillars-label">What You Train</div>
              <div className="polcode-pillar">
                <div className="polcode-pillar-tag">Spoken Fluency</div>
                <p>Practice live discovery calls across 15 industry niches. Read the room, ask the right diagnostic questions, and find the point of leverage in real time.</p>
              </div>
              <div className="polcode-pillar">
                <div className="polcode-pillar-tag">Written Authority</div>
                <p>Craft follow-ups, proposals, and SOPs that signal expertise. Written communication that converts is a strategic asset — not a soft skill.</p>
              </div>
              <div className="polcode-pillar">
                <div className="polcode-pillar-tag">Lean Six Sigma + AI</div>
                <p>Eliminate communication waste through structured prompting and precision editing. Use AI as a force multiplier — remove rework, reduce ambiguity, engineer outputs that need no follow-up.</p>
              </div>
            </div>

            {/* Deliverables */}
            <div className="polcode-deliverables reveal">
              <div className="polcode-pillars-label">What You Build</div>
              <div className="polcode-deliv-grid">
                <div className="polcode-deliv-item">
                  <span className="polcode-deliv-num">01</span>
                  <div>
                    <div className="polcode-deliv-title">Personal Tone Guide</div>
                    <p>Your rules for how you communicate across platforms and situations — documented, specific to you, and ready to apply.</p>
                  </div>
                </div>
                <div className="polcode-deliv-item">
                  <span className="polcode-deliv-num">02</span>
                  <div>
                    <div className="polcode-deliv-title">Scenario Portfolio</div>
                    <p>Your best rewrites, responses, and summaries from practice. Evidence of your skills, not just a claim that you have them.</p>
                  </div>
                </div>
                <div className="polcode-deliv-item">
                  <span className="polcode-deliv-num">03</span>
                  <div>
                    <div className="polcode-deliv-title">Phrase Bank</div>
                    <p>A personal library of go-to phrases for follow-up, escalation, clarification, and de-escalation — tested and yours.</p>
                  </div>
                </div>
                <div className="polcode-deliv-item">
                  <span className="polcode-deliv-num">04</span>
                  <div>
                    <div className="polcode-deliv-title">Employer Readiness Snapshot</div>
                    <p>A one-page self-assessment showing exactly what you can do and where you are still growing. Honest, specific, portable.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THE INTELLIGENCE OPERATOR
      ═══════════════════════════════════════ */}
      <section className="io-section" id="intelligence-operator">
        <div className="section-inner">

          {/* LEFT — sticky heading */}
          <div className="io-left reveal">
            <div className="section-tag">The Intelligence Operator</div>
            <h2 className="io-heading">From<br />Operator.<br />To Architect.<br />To Builder.</h2>
            <p className="io-lead">
              Three 30-day courses. One Lean Six Sigma methodology running through every lab.
              One credential — the Intelligence Operator: Complete Stack — that does not exist
              anywhere else in the Filipino VA market.
            </p>
          </div>

          {/* RIGHT — all content */}
          <div className="io-right">

            {/* Complete Stack */}
            <div className="io-stack-box reveal">
              <div className="io-stack-title">Intelligence Operator: Complete Stack</div>
              <div className="io-stack-courses">
                <a href="https://intelligenceoperator001.marginmomentum.co/" target="_blank" rel="noreferrer" className="io-stack-course io-stack-course-link">
                  <span className="io-stack-dot" style={{background:'#7C9A92'}} />
                  Course 01 — Mastering Gemini AI &amp; NotebookLM
                </a>
                <a href="https://intelligenceoperator002.marginmomentum.co/" target="_blank" rel="noreferrer" className="io-stack-course io-stack-course-link">
                  <span className="io-stack-dot" style={{background:'#9A8C7C'}} />
                  Course 02 — Mastering Claude &amp; Cowork
                </a>
                <a href="https://intelligenceoperator003.marginmomentum.co/" target="_blank" rel="noreferrer" className="io-stack-course io-stack-course-link">
                  <span className="io-stack-dot" style={{background:'#7C8A9A'}} />
                  Course 03 — Mastering ChatGPT
                </a>
              </div>
              <p className="io-stack-desc">
                All three courses. One investment. One credential reviewed and issued by The Systems Architect personally
                after all three capstone submissions are approved. The Complete Stack is not a shortcut —
                it is a commitment to the full system.
              </p>
              <div className="io-stack-price-row">
                <span className="io-stack-price-sm">6,999 PHP</span>
                <span className="io-stack-savings">Saves 2,007 PHP vs. individual purchase</span>
              </div>
              <p className="io-stack-cta-text">
                To enroll in the Complete Stack or inquire about bundle pricing for your tier,
                message us directly at <strong>hello@marginmomentum.co</strong>
              </p>
            </div>

            {/* Individual Courses */}
            <div className="io-courses-label reveal">
              <div className="section-tag">Or enter at any course</div>
            </div>

            {/* Course 01 */}
            <div className="io-course-item reveal">
              <div className="io-course-num" style={{color:'#7C9A92'}}>01</div>
              <div className="io-course-body">
                <div className="io-course-tag">30 Days · 30 Labs · 5 Logic-Check Checkpoints</div>
                <div className="io-course-title">Mastering Gemini AI &amp; NotebookLM</div>
                <p className="io-course-desc">
                  Source-grounded intelligence architecture. The Knowledge Fortress. Client-grade
                  analysis and deliverables — built on LSS methodology woven through every lab.
                </p>
                <div className="io-course-price">2,999 PHP</div>
                <a href="https://intelligenceoperator001.marginmomentum.co/" target="_blank" rel="noreferrer" className="io-course-btn">
                  Enroll in Course 01 →
                </a>
              </div>
            </div>

            {/* Course 02 */}
            <div className="io-course-item reveal">
              <div className="io-course-num" style={{color:'#9A8C7C'}}>02</div>
              <div className="io-course-body">
                <div className="io-course-tag">30 Days · 30 Labs · 5 Logic-Check Checkpoints</div>
                <div className="io-course-title">Mastering Claude &amp; Cowork</div>
                <p className="io-course-desc">
                  Autonomous operations. Constitutional reasoning. AI systems designed to run
                  without your constant presence — so your practice scales beyond your available hours.
                </p>
                <div className="io-course-price">2,999 PHP</div>
                <a href="https://intelligenceoperator002.marginmomentum.co/" target="_blank" rel="noreferrer" className="io-course-btn">
                  Enroll in Course 02 →
                </a>
              </div>
            </div>

            {/* Course 03 */}
            <div className="io-course-item reveal">
              <div className="io-course-num" style={{color:'#7C8A9A'}}>03</div>
              <div className="io-course-body">
                <div className="io-course-tag">30 Days · 30 Labs · 5 Logic-Check Checkpoints</div>
                <div className="io-course-title">Mastering ChatGPT</div>
                <p className="io-course-desc">
                  Custom GPT architecture. Code Interpreter data intelligence. Client-facing AI
                  products your clients use directly — without requiring your presence in every interaction.
                </p>
                <div className="io-course-price">2,999 PHP</div>
                <a href="https://intelligenceoperator003.marginmomentum.co/" target="_blank" rel="noreferrer" className="io-course-btn">
                  Enroll in Course 03 →
                </a>
              </div>
            </div>

            {/* Investment Architecture */}
            <div className="io-pricing reveal">
              <div className="io-pricing-heading">Investment Architecture</div>
              <p className="io-pricing-sub">
                The Intelligence Operator is a premium product. It is also a product I refuse to put out of reach.
                Every tier below is a named, deliberate architectural decision — not a discount, not charity.
              </p>

              <div className="io-tier-item">
                <div>
                  <div className="io-tier-label">Regular</div>
                  <div className="io-tier-price">2,999</div>
                  <div className="io-tier-per">PHP / Course</div>
                </div>
                <div className="io-tier-desc">Standard enrollment rate. Open to all operators.</div>
              </div>

              <div className="io-tier-item">
                <div>
                  <div className="io-tier-label">VALS &amp; Mainframe VA Library Learners</div>
                  <div className="io-tier-price">1,499</div>
                  <div className="io-tier-per">PHP / Course</div>
                </div>
                <div className="io-tier-desc">
                  Current or past learners of the VA Launch System or Mainframe VA Library.
                  The foundation earns the rate.
                </div>
              </div>

              <div className="io-tier-item">
                <div>
                  <div className="io-tier-label">Lifestyle Architects</div>
                  <div className="io-tier-price">999</div>
                  <div className="io-tier-per">PHP / Course</div>
                </div>
                <div className="io-tier-desc">
                  Caregivers, solo parents, stay-at-home parents — building a professional practice
                  around the people who need you most. Your constraints are not disqualifiers.
                  They are the reason this rate exists.
                </div>
              </div>

              <div className="io-tier-item">
                <div>
                  <div className="io-tier-label">The Adaptive Operator Tier</div>
                  <div className="io-tier-price">999</div>
                  <div className="io-tier-per">PHP / Course</div>
                </div>
                <div className="io-tier-desc">
                  <strong>Working Students</strong> — balancing daily labor with education, architecting the bridge between your current shift and your future career.<br /><br />
                  <strong>Neurodivergent Individuals</strong><br /><br />
                  <strong>ADHD</strong> — The friction is real: tasks that stall, context that evaporates, and the tax of switching attention between the work and the administration of the work. AI becomes the external system that holds the thread. It absorbs the overhead — the scheduling, the summarizing, the follow-up drafts, the second-pass reviews — so your attention goes to what it does best. You bring the ideas and the urgency. The system holds the structure.<br /><br />
                  <strong>Autism</strong> — The depth of focus, the pattern recognition, the precision — these are not deficits to compensate for. They are the input the system runs on. What AI removes is the surrounding friction: the social ambiguity of client communication, the formatting and administrative noise, the energy cost of context-switching into tasks that do not match your processing style. You bring the systematic thinking. The system handles the rest.<br /><br />
                  <strong>PWDs</strong> — neutralizing physical and sensory barriers with clinical, digital leverage. Powered by the systems you build, not your energy levels or physical constraints.<br /><br />
                  <strong>Seasoned Professionals (50+)</strong> — reclaiming relevance in a digital-first world. Your wisdom is your greatest asset. AI is the engine that scales it.<br /><br />
                  <strong>Minimum Wage Breadwinners</strong> — specifically for those earning the provincial rate. You should not have to choose between survival and growth.
                </div>
              </div>

              <div className="io-pricing-footer">
                All discounted rates are verified manually before access is granted.
                To enroll at a discounted rate or to inquire about bundle pricing for your tier,
                email <a href="mailto:hello@marginmomentum.co">hello@marginmomentum.co</a>.<br /><br />
                Every certification is issued by The Systems Architect personally after reviewing your capstone submission.
                Not auto-generated. Not downloadable from the portal. Reviewed, approved, and issued by hand.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
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
              <li><a href="https://app.marginmomentum.co">VA Launch System Portal</a></li>
              <li><a href="https://valibrary.marginmomentum.co">Mainframe VA Library</a></li>
              <li><a href="https://systems.marginmomentum.co">VA Systems Library</a></li>
              <li><a href="https://intelligenceoperator.marginmomentum.co/" target="_blank" rel="noreferrer">The Intelligence Operator</a></li>
              <li><a href="https://polcode.marginmomentum.co" target="_blank" rel="noreferrer">POLcode</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
