import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Phone, Mail, FileText, Users, BookOpen, Award, Rocket, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Talent Recruitment - Sinomining Machinery',
  description: 'Join Sinomining Machinery and work with mining professionals worldwide to drive innovation and growth in the mining equipment industry.',
}

const values = [
  'People-Oriented',
  'Right Fit for Every Role',
  'Maximizing Personal Potential',
  'Forging Ahead',
  'Realizing Value',
  'Broad Horizons',
]

const standards = [
  {
    title: 'Professional Expertise',
    desc: 'Sinomining seeks to cultivate professionals who possess dedication and passion for their chosen fields.',
  },
  {
    title: 'Strong Execution Capabilities',
    desc: 'When facing challenges, taking immediate action to find solutions, driven by execution and prioritizing customer interests above all.',
  },
  {
    title: 'Problem-Analyzing and Problem-Solving Skills',
    desc: 'Sinomining values an employee\'s ability to analyze and resolve practical issues through hands-on practice.',
  },
  {
    title: 'Continuous Learning',
    desc: 'In a fast-changing and competitive environment, employees must pursue systematic and ongoing professional learning to continuously enrich themselves.',
  },
  {
    title: 'Innovation and Initiative',
    desc: 'Sinomining encourages every employee to forge ahead, study diligently, and continuously innovate in their respective roles.',
  },
  {
    title: 'Collaboration and Teamwork',
    desc: 'Understanding the importance of teamwork, navigating challenges together, and thriving alongside the Sinomining family.',
  },
  {
    title: 'Cultural Alignment',
    desc: 'Sharing the company\'s core values and focusing on long-term personal growth within the organization.',
  },
  {
    title: 'Accountability',
    desc: 'Having the courage to take ownership and assume responsibility.',
  },
]

const steps = [
  {
    icon: Mail,
    title: 'Resume Submission',
    desc: 'You may submit your resume on-site or via email. Please send your email to a6852178@163.com with the subject line format: "Name - University - Applied Position". We will review and reply within two business days.',
  },
  {
    icon: Users,
    title: 'First Interview',
    desc: 'Interview notifications will be sent via telephone. Interviews are held at the company headquarters—this is a two-way process for us to evaluate each other.',
  },
  {
    icon: FileText,
    title: 'Written Test',
    desc: 'Following the initial interview, candidates may take a written test lasting approximately 30 minutes based on their interview evaluation.',
  },
  {
    icon: BookOpen,
    title: 'Second Interview',
    desc: 'Candidates will be notified of a second interview or direct employment offer within 1–2 days based on their written test results.',
  },
  {
    icon: Award,
    title: 'Contract Signing',
    desc: 'Candidates who successfully pass both the interview and written test stages will formally sign an employment contract with Sinomining Machinery.',
  },
  {
    icon: Rocket,
    title: 'Training',
    desc: 'Upon signing, Sinomining provides approximately two weeks of free training. Technical personnel and experts from various fields will deliver detailed lectures and hands-on operational training.',
  },
  {
    icon: Briefcase,
    title: 'Probation Period',
    desc: 'The probation period ranges from 1 to 3 months. Outstanding performers may be eligible for early full-time confirmation.',
  },
  {
    icon: FileText,
    title: 'Onboarding',
    desc: 'Upon passing training and meeting probation evaluation criteria, you will officially step into your position as a proud member of Sinomining Machinery.',
  },
]

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref="/careers" />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Talent Recruitment
            </h1>
            <p className="mt-6 flex flex-wrap justify-center gap-3 text-lg text-secondary-foreground/80">
              {values.map((v) => (
                <span key={v} className="rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 px-4 py-1 text-sm">
                  {v}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">HR Philosophy</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Sinomining adheres to the employment philosophy of &quot;people-oriented, right fit for every role, and maximizing personal potential.&quot; We provide employees with a strong development platform, strive to inspire their enthusiasm and creativity, and achieve mutual growth between the company and its workforce.
          </p>
          <div className="mt-4 text-sm text-accent font-medium">
            <span>Broad Career Development Space</span>
            <span className="text-muted-foreground ml-2">
              — Sinomining consistently emphasizes the dual cultivation of technical and management talent, configuring personnel from the perspective of overall structure optimization. We establish clear promotion pathways for employees and open up broad horizons for their development.
            </span>
          </div>
          <div className="mt-4 text-sm text-muted-foreground italic">
            <p>Selecting Talent, Nurturing Talent, Leveraging Talent, Retaining Talent.</p>
          </div>
        </section>

        {/* Standards */}
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold">Sinomining&apos;s Talent Selection Standards</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {standards.map((s, i) => (
                <div key={s.title} className="flex gap-4 rounded border border-border bg-background p-5">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    {s.desc && <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">Recruitment Process</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative rounded border border-border p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded bg-accent text-accent-foreground">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</div>
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-secondary/20 py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-heading text-2xl font-bold">Contact Us</h2>
            <p className="mt-4 text-muted-foreground">
              HR Contact Phone:
            </p>
            <div className="mt-3 flex flex-col items-center gap-2">
              <a href="tel:+865616852015" className="flex items-center gap-2 text-highlight hover:underline">
                <Phone className="size-4 text-foreground" />
                +86 0561-6852015
              </a>
              <a href="tel:+8615756159188" className="flex items-center gap-2 text-highlight hover:underline">
                <Phone className="size-4 text-foreground" />
                +86 15756159188
              </a>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              <Mail className="size-4 text-muted-foreground" />
              <a href="mailto:a6852178@163.com" className="text-highlight hover:underline">
                a6852178@163.com
              </a>
            </div>
            <p className="mt-6 text-accent font-medium">
              Welcome to join us!
            </p>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
