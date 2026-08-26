import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Phone, Mail, FileText, Users, BookOpen, Award, Rocket, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: '人才招聘 - 中能矿机',
  description: '加入中能矿机，与全球矿业精英并肩，推动矿山装备行业创新与发展。',
}

const philosophy = [
  '选拔人才，培养人才，善用人才，留住人才。',
]

const values = [
  '以人为本',
  '职得其人',
  '人尽其才',
  '锐意进取',
  '实现价值',
  '广阔空间',
]

const standards = [
  {
    title: '术有专攻',
    desc: '中能希望培养的是专业的人才，对自己所从事的事业能够投入十分的热爱与饱满的激情。',
  },
  {
    title: '超强的执行力',
    desc: '在遇到问题时，第一时间着手如何解决问题，以行动力为导向，将客户的利益永远放在第一位。',
  },
  {
    title: '分析和解决问题的能力',
    desc: '中能注重在实践问题中员工分析和解决实际问题的能力。',
  },
  {
    title: '不断学习',
    desc: '员工更是要不断进行专业学习，系统学习，不断充实和丰富自己。',
  },
  {
    title: '开拓创新',
    desc: '中能鼓励每一位员工在自己的岗位上锐意进取，积极钻研，不断创新创优。',
  },
  {
    title: '互利合作',
    desc: '懂得团队协作的重要性，与中能大家庭一起乘风破浪，共迎时代浪潮。',
  },
  {
    title: '认同公司文化',
    desc: '着重自身在公司的长久发展。',
  },
  {
    title: '勇于承担责任',
    desc: '',
  },
]

const steps = [
  {
    icon: Mail,
    title: '投递简历',
    desc: '邮件请发送至 a6852178@163.com，邮件的主题格式为"姓名 – 学校 – 申请的职位"。在收到您投递的简历后，我们会在两个工作日以内给您答复。',
  },
  {
    icon: Users,
    title: '面试',
    desc: '我们会以电话的形式进行面试通知，面试地点在公司，这不仅是我们对您的面试，同时也是您对我们的一次考察。',
  },
  {
    icon: FileText,
    title: '笔试',
    desc: '在进行一轮面试之后，我们会根据您的面试情况予以笔试，时间为半小时左右。',
  },
  {
    icon: BookOpen,
    title: '复试',
    desc: '通知复试或破格录用。根据笔试结果，我们会在一到两天之内，通知您进行二次面试或者录用。',
  },
  {
    icon: Award,
    title: '签约',
    desc: '面试笔试通过者，将正式签约中能矿机。',
  },
  {
    icon: Rocket,
    title: '培训',
    desc: '签约中能矿机后，中能将对您进行为期2周左右时间的免费培训，届时将有各个领域的技术人员及专家对您进行细心的讲解和实战培训。',
  },
  {
    icon: Briefcase,
    title: '试用期',
    desc: '试用期为1-3个月，表现良好者，将有机会提前转正。',
  },
  {
    icon: FileText,
    title: '入岗',
    desc: '在培训通过后，试用期考核符合，您将踏入自己的岗位，成为中能矿机的光荣一员。',
  },
]

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en/careers" />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              人才招聘
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
          <h2 className="font-heading text-2xl font-bold">用人理念</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            中能坚持"以人为本，职得其人，人尽其才"的用人理念，为员工提供良好的发展平台，努力激发员工的积极性和创造力，实现企业与员工的共同发展。以优惠的人才政策，富有竞争力的用人体制，以及广阔的发展平台，不断吸引公司需要的各类人才来我司发展。
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-accent font-medium">
            <span>广阔的职业发展空间</span>
            <span>—</span>
            <span className="text-muted-foreground">
              中能始终坚持技术人才和管理人才两手，从整体结构优化上来考虑人才配置，为员工搭建良好的晋职通道，开拓广阔的发展空间。
            </span>
          </div>
          <div className="mt-4 text-sm text-muted-foreground italic">
            {philosophy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        {/* Standards */}
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold">中能选拔人才的标准</h2>
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
          <h2 className="font-heading text-2xl font-bold">招聘流程</h2>
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
            <h2 className="font-heading text-2xl font-bold">联系我们</h2>
            <p className="mt-4 text-muted-foreground">
              中能人力资源电话：
            </p>
            <div className="mt-3 flex flex-col items-center gap-2">
              <a href="tel:05616852015" className="flex items-center gap-2 text-highlight hover:underline">
                <Phone className="size-4 text-foreground" />
                0561-6852015
              </a>
              <a href="tel:15756159188" className="flex items-center gap-2 text-highlight hover:underline">
                <Phone className="size-4 text-foreground" />
                15756159188
              </a>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              <Mail className="size-4 text-muted-foreground" />
              <a href="mailto:a6852178@163.com" className="text-highlight hover:underline">
                a6852178@163.com
              </a>
            </div>
            <p className="mt-6 text-accent font-medium">
              欢迎加入我们！
            </p>
          </div>
        </section>
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
