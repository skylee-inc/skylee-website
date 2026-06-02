import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  Lock,
  Mail,
  MapPin,
  Phone,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Layers3,
  Cpu,
  Globe2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const viewport = { once: true, margin: "-90px" };
const navLinks = ["Home", "About Us", "Services", "Contact Us"];

const reasons = [
  { title: "Business-Focused Solutions", text: "Technology strategies aligned to operational priorities, customer outcomes, and measurable growth.", icon: Users },
  { title: "Agile Delivery", text: "Modern delivery practices designed to move quickly while maintaining governance and quality.", icon: Workflow },
  { title: "Scalable Innovation", text: "Future-ready architectures that support modernization, automation, and long-term transformation.", icon: Sparkles },
  { title: "Trusted Technology Expertise", text: "Practical consulting experience across platforms, systems, cloud, data, and enterprise security.", icon: ShieldCheck },
];

const steps = [
  ["01", "Discover", "Understanding business needs and challenges"],
  ["02", "Strategize", "Designing scalable technology solutions"],
  ["03", "Execute", "Delivering efficiently with modern methodologies"],
  ["04", "Optimize", "Continuous improvement and business growth"],
];

const services = [
  { title: "Project Management", text: "Structured execution, stakeholder alignment, and delivery oversight for complex initiatives.", icon: CheckCircle2 },
  { title: "IT Consulting", text: "Strategic advisory to modernize systems, improve operations, and reduce technology friction.", icon: Network },
  { title: "Application Modernization", text: "Upgrade legacy applications into secure, scalable, and cloud-ready digital platforms.", icon: Workflow },
  { title: "Data & AI", text: "Data platforms, analytics, and intelligent workflows that turn information into action.", icon: Database },
  { title: "Cloud Services", text: "Cloud strategy, migration, optimization, and managed transformation across modern platforms.", icon: Cloud },
  { title: "Cybersecurity", text: "Risk-aware security programs that protect systems, data, identities, and business continuity.", icon: Lock },
];

function Logo() {
  return (
    <motion.div
      whileHover="hover"
      className="group flex cursor-pointer items-center gap-3"
    >
      <img
        src="/skylee-logo.png"
        alt="Skylee Inc logo"
        className="h-16 w-auto object-contain"
      />

      <motion.div
        initial={{ width: 0, opacity: 0, x: -8 }}
        variants={{
          hover: {
            width: "auto",
            opacity: 1,
            x: 0,
          },
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="overflow-hidden whitespace-nowrap"
      >
        <p className="text-sm font-semibold tracking-wide text-[#0F2747]">
          Skylee Inc
        </p>
      </motion.div>
    </motion.div>
  );
}
function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#2F80ED]">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-[#0F2747] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{text}</p>}
    </motion.div>
  );
}

function PremiumHeroGraphic() {
  return (
    <motion.div variants={fadeRight} initial="hidden" animate="show" className="relative">
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-5 top-10 z-10 hidden rounded-2xl border border-white/30 bg-white/80 p-4 shadow-xl shadow-blue-950/10 backdrop-blur md:block">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#2F80ED]"><Cpu className="h-5 w-5" /></div>
          <div><p className="text-xs text-slate-500">Automation</p><p className="text-sm font-semibold text-[#0F2747]">Enterprise-ready</p></div>
        </div>
      </motion.div>
      <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 bottom-12 z-10 hidden rounded-2xl border border-white/30 bg-white/80 p-4 shadow-xl shadow-blue-950/10 backdrop-blur md:block">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#2F80ED]"><Globe2 className="h-5 w-5" /></div>
          <div><p className="text-xs text-slate-500">Cloud scale</p><p className="text-sm font-semibold text-[#0F2747]">Global systems</p></div>
        </div>
      </motion.div>

      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-[#0F2747] p-6 shadow-2xl shadow-blue-950/30">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(47,128,237,0.42),transparent_36%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.16),transparent_25%)]" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-dashed border-white/15" />
        <div className="relative rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-100">Transformation index</p>
              <p className="mt-1 text-3xl font-semibold text-white">98%</p>
            </div>
            <motion.div animate={{ scale: [1, 1.08, 1], rotate: [0, 4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="rounded-2xl bg-white/10 p-3 text-blue-100">
              <Sparkles className="h-7 w-7" />
            </motion.div>
          </div>
          <div className="space-y-4">
            {["Cloud Readiness", "Process Modernization", "Security Posture"].map((item, index) => (
              <div key={item}>
                <div className="mb-2 flex justify-between text-sm text-blue-50"><span>{item}</span><span>{92 - index * 7}%</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${92 - index * 7}%` }} transition={{ duration: 1.2, delay: 0.5 + index * 0.18 }} className="h-full rounded-full bg-gradient-to-r from-white to-[#2F80ED]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EnterpriseIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[470px] overflow-hidden rounded-[2rem] border border-white/70 bg-white p-8 shadow-2xl shadow-blue-950/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(47,128,237,0.18),transparent_32%),radial-gradient(circle_at_80%_76%,rgba(15,39,71,0.16),transparent_35%)]" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2F80ED]/25" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 42, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0F2747]/10" />
      <div className="relative grid h-full place-items-center">
        <motion.div whileInView={{ scale: [0.92, 1.03, 1] }} viewport={viewport} transition={{ duration: 0.9 }} className="grid h-36 w-36 place-items-center rounded-[2rem] bg-[#0F2747] text-white shadow-xl shadow-blue-950/30">
          <Layers3 className="h-14 w-14" />
        </motion.div>
        {[
          ["top-7 left-9", Cpu],
          ["top-12 right-8", Cloud],
          ["bottom-10 left-10", Database],
          ["bottom-9 right-9", Lock],
        ].map(([pos, Icon], index) => (
          <motion.div key={pos} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewport} transition={{ delay: index * 0.12, duration: 0.55 }} animate={{ y: [0, index % 2 ? 8 : -8, 0] }} className={`absolute ${pos} grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#2F80ED] shadow-lg shadow-blue-950/10 ring-1 ring-slate-200`}>
            <Icon className="h-6 w-6" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div style={{ scaleX: scrollYProgress }} className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[#2F80ED]" />;
}

export default function SkyleeEnterpriseWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 110]);

  return (
    <main className="min-h-screen bg-[#F7FAFD] font-sans text-slate-900">
      <ScrollProgress />

      <section id="home" className="relative overflow-hidden bg-white">
        <motion.div style={{ y: heroY }} className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,39,71,0.05),rgba(47,128,237,0.08),transparent)]" />
        <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-[#2F80ED]/10 blur-3xl" />
        <div className="absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-[#0F2747]/10 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-medium text-slate-600 transition hover:text-[#0F2747]">{link}</a>
            ))}
          </nav>
          <a href="#contact-us" className="hidden rounded-full bg-[#0F2747] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-[#173a68] md:inline-flex">Let’s Talk</a>
          <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="rounded-xl border border-slate-200 p-2 text-[#0F2747] md:hidden"
  aria-label="Open menu"
>
  <Menu className="h-5 w-5" />
</button>

        </header>
 {mobileMenuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative z-30 mx-5 mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg md:hidden"
  >
    <div className="flex flex-col gap-4">
      <a onClick={() => setMobileMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMobileMenuOpen(false)} href="#about-us">
        About Us
      </a>
      <a onClick={() => setMobileMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMobileMenuOpen(false)} href="#contact-us">
        Contact Us
      </a>
    </div>
  </motion.div>
)} 



        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-14 md:px-8 md:pb-32 md:pt-20 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={fadeLeft} initial="hidden" animate="show">
            <motion.div whileHover={{ scale: 1.02 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-[#0F2747] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#2F80ED]" />Enterprise technology consulting for modern businesses
            </motion.div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[#0F2747] md:text-7xl lg:text-8xl">Technology That Delivers</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">Helping businesses modernize, streamline, and scale with technology.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#services" className="group inline-flex items-center justify-center rounded-full bg-[#2F80ED] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#1f6fd4]">Explore Services <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></a>
              <a href="#contact-us" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-[#0F2747] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2F80ED]/40">Contact Us</a>
            </div>
          </motion.div>
          <PremiumHeroGraphic />
        </div>
      </section>

      <section id="about-us" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why Skylee" title="Why Choose Skylee" text="We partner with organizations to connect business strategy with practical technology execution — helping teams modernize operations, unlock efficiency, and scale confidently." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ title, text, icon: Icon }) => (
              <motion.div key={title} variants={fadeUp} whileHover={{ y: -8, scale: 1.015 }} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#2F80ED]/30 hover:shadow-xl hover:shadow-blue-950/10">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#2F80ED] transition group-hover:bg-[#2F80ED] group-hover:text-white"><Icon className="h-6 w-6" /></div>
                <h3 className="text-lg font-semibold text-[#0F2747]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}><EnterpriseIllustration /></motion.div>
          <div>
            <SectionHeader eyebrow="Delivery Model" title="How We Work" text="A disciplined consulting approach designed to move from clarity to measurable outcomes." />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid gap-4 sm:grid-cols-2">
              {steps.map(([number, title, text]) => (
                <motion.div key={title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-3xl border border-slate-200 bg-[#F7FAFD] p-6 transition hover:border-[#2F80ED]/30 hover:bg-white hover:shadow-lg hover:shadow-blue-950/10">
                  <span className="text-sm font-semibold text-[#2F80ED]">{number}</span>
                  <h3 className="mt-4 text-xl font-semibold text-[#0F2747]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Capabilities" title="Our Services" text="Focused services for organizations investing in modernization, resilience, and intelligent growth." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, icon: Icon }) => (
              <motion.div key={title} variants={fadeUp} whileHover={{ y: -10, scale: 1.012 }} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-2xl hover:shadow-blue-950/10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F2747] via-[#2F80ED] to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-[#0F2747] p-3 text-white shadow-lg shadow-blue-950/20"><Icon className="h-6 w-6" /></div>
                  <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#2F80ED]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F2747]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact-us" className="bg-[#0F2747] px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-blue-200">Contact Us</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Ready to Transform Your Business?</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">Helping businesses modernize, streamline, and scale with technology.</p>
            <div className="mt-10 space-y-5 text-blue-50">

  
  <a
  href="tel:+1 (704) 796-2050"
  className="flex items-center gap-3 transition hover:text-white"
>
  <Phone className="h-5 w-5 text-[#2F80ED]" />
  <span>1 (704) 796-2050</span>
</a>

  <a href="mailto:contact@skylee.com" className="flex items-center gap-3 transition hover:text-white">
    <Mail className="h-5 w-5 text-[#2F80ED]" />
    <span>hr@skylee.org</span>
  </a>

  <div className="flex items-center gap-3">
    <MapPin className="h-5 w-5 text-[#2F80ED]" />
    <span>North Carolina, USA</span>
  </div>

  <a
  href="https://www.linkedin.com/company/skyleetech/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 transition hover:text-white"
>
  <Globe2 className="h-5 w-5 text-[#2F80ED]" />
  <span>LinkedIn</span>
</a>

  <a
  href="https://www.instagram.com/skyleetech?igsh=MWxldm9iMXo4eXZ6Yg=="
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 transition hover:text-white"
>
  <Globe2 className="h-5 w-5 text-[#2F80ED]" />
  <span>Instagram</span>
</a>
</div>
          </motion.div>

          <a
  href="mailto:hr@skylee.org"
  className="inline-flex items-center justify-center rounded-full bg-[#2F80ED] px-7 py-4 text-sm font-semibold text-white"
>
  Contact Us
</a>
        </div>
      </section>

      <footer className="bg-white px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-slate-200 pt-10 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[#0F2747]">{link}</a>)}
          </div>
          <div className="flex gap-3">

  <a
    href="https://www.linkedin.com/company/skyleetech/"
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-[#0F2747] hover:text-white transition"
  >
    <span className="text-xs font-bold">in</span>
  </a>

  <a
    href="https://www.instagram.com/skyleetech?igsh=MWxldm9iMXo4eXZ6Yg=="
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-[#0F2747] hover:text-white transition"
  >
    <span className="text-xs font-bold">IG</span>
  </a>

</div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">© 2026 Skylee Inc. All Rights Reserved.</p>
      </footer>
    </main>
  );
}


