import { useEffect } from 'react'
import './App.css'

export default function App() {
  useEffect(() => {
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
  }, [])

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
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-number">M</div>
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
            <p>We are being told to hustle when we should be taught to build.</p>
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
            <h2 className="audience-heading">We Built This for Four Kinds of Operators.</h2>
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
              <h3>The Stuck VA</h3>
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

      {/* FOOTER */}
      <footer>
        <div className="site-footer">
          <div className="footer-bottom">
            <div>
              <div className="footer-wordmark">Margin &amp; Momentum™</div>
              <div className="footer-tagline">Systems Over Hustle™</div>
              <div className="footer-copy">© 2025 Margin &amp; Momentum™. All rights reserved.</div>
              <div className="footer-legal">
                <a href="https://marginmomentum.co/terms">Terms</a>
                <a href="https://marginmomentum.co/privacy">Privacy</a>
              </div>
            </div>
            <ul className="footer-nav">
              <li><a href="https://app.marginmomentum.co">VA Launch System Portal</a></li>
              <li><a href="https://valibrary.marginmomentum.co">Mainframe VA Library</a></li>
              <li><a href="https://systems.marginmomentum.co">VA Systems Library</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
