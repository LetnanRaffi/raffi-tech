"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export type Language = "en" | "id";
export type NavItem = { label: string; href: string };
export type Service = {
  title: string;
  description: string;
  mode: "software" | "automation" | "ai" | "consulting";
};
export type Project = {
  title: string;
  what: string;
  tech: string;
  tags: readonly string[];
  screenshotSrc?: string;
};
export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
export type Partner = {
  name: string;
  context: string;
  mark: string;
  logoSrc?: string;
};

type HeroCopy = {
  eyebrow: string;
  title: string;
  body: string;
  primary: string;
  secondary: string;
};

type SectionCopy = {
  eyebrow: string;
  title: string;
  body?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const languageLabels = {
  en: { flag: "🇬🇧", label: "EN", name: "English" },
  id: { flag: "🇮🇩", label: "ID", name: "Bahasa Indonesia" },
} as const;

const contactLinks = {
  whatsapp: "https://wa.me/62895328949434",
  linkedin: "https://linkedin.com/in/muhamad-raffi-pasha",
  github: "https://github.com/LetnanRaffi",
} as const;

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function MotionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.985 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

function LanguageToggle({
  language,
  onLanguageChange,
  className = "",
  inverse = false,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
  inverse?: boolean;
}) {
  const nextLanguage: Language = language === "en" ? "id" : "en";
  const copy = languageLabels[language];
  const tone = inverse
    ? "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15 hover:text-white"
    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 hover:text-neutral-950";

  return (
    <button
      type="button"
      className={`inline-flex h-10 items-center gap-2 rounded-md border px-3 text-sm font-medium transition ${tone} ${className}`}
      aria-label={`Switch language to ${languageLabels[nextLanguage].name}`}
      onClick={() => onLanguageChange(nextLanguage)}
    >
      <span aria-hidden="true">{copy.flag}</span>
      <span>{copy.label}</span>
    </button>
  );
}

export function Navbar({
  navItems,
  cta,
  language,
  onLanguageChange,
}: {
  navItems: NavItem[];
  cta: string;
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? "border-neutral-200 bg-white/92 shadow-sm backdrop-blur-xl"
          : "border-white/10 bg-neutral-950/16 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="RaffiTech Solutions home">
          <Image
            src="/raffitech-logo.png"
            alt=""
            width={34}
            height={34}
            className="h-8 w-8 object-contain"
          />
          <span
            className={`font-display text-sm font-bold transition sm:text-base ${
              scrolled ? "text-neutral-950" : "text-white"
            }`}
          >
            RaffiTech Solutions
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                scrolled
                  ? "text-neutral-500 hover:text-neutral-950"
                  : "text-white/72 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle
            language={language}
            onLanguageChange={onLanguageChange}
            inverse={!scrolled}
          />
          <a
            href="#contact"
            className={`inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium transition ${
              scrolled
                ? "bg-neutral-950 text-white hover:bg-neutral-800"
                : "bg-white text-neutral-950 hover:bg-neutral-200"
            }`}
          >
            {cta}
          </a>
        </div>

        <button
          type="button"
          className={`flex h-10 items-center justify-center rounded-md border px-3 text-sm font-medium transition md:hidden ${
            scrolled
              ? "border-neutral-200 text-neutral-950"
              : "border-white/20 text-white"
          }`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-11 py-2 text-base font-medium text-neutral-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <LanguageToggle
              language={language}
              onLanguageChange={onLanguageChange}
              className="mt-1 justify-center"
            />
            <a
              href="#contact"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-neutral-950 px-5 font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              {cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function HeroIntro({ copy }: { copy: HeroCopy }) {
  return (
    <div className="relative isolate min-h-[92vh] overflow-hidden bg-neutral-950">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero-raffitech.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-neutral-950/68" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.96)_0%,rgba(10,10,10,0.76)_48%,rgba(10,10,10,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950/55 to-transparent" />
      <div className="absolute bottom-0 right-0 h-52 w-72 bg-gradient-to-tl from-neutral-950 via-neutral-950/72 to-transparent sm:h-64 sm:w-[28rem]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8">
        <Reveal>
          <div className="max-w-4xl">
            <h1 className="max-w-4xl font-hero text-[clamp(3.6rem,7.5vw,7.6rem)] font-normal leading-[0.86] text-white">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              {copy.body}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MotionLink
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                {copy.primary}
              </MotionLink>
              <MotionLink
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 px-6 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
              >
                {copy.secondary}
              </MotionLink>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function PartnerStrip({
  copy,
  partners,
}: {
  copy: SectionCopy;
  partners: Partner[];
}) {
  return (
    <section className="section-border px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center font-mono text-xs font-medium text-blue-700">
            {copy.eyebrow}
          </p>
        </Reveal>
        <div className="mt-10 grid items-center gap-x-10 gap-y-8 border-b border-neutral-200 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex min-h-16 items-center justify-center"
              title={`${partner.name} - ${partner.context}`}
            >
              {partner.logoSrc ? (
                <Image
                  src={partner.logoSrc}
                  alt={partner.name}
                  width={160}
                  height={72}
                  className="h-14 w-auto max-w-44 object-contain opacity-45 grayscale transition group-hover:opacity-70"
                />
              ) : (
                <div className="flex items-center gap-3 text-neutral-400 grayscale transition group-hover:text-neutral-600">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-300 font-display text-sm font-bold tracking-[0.08em]">
                    {partner.mark}
                  </span>
                  <span className="font-display text-xl font-semibold leading-none tracking-normal">
                    {partner.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceModules({
  copy,
  services,
}: {
  copy: SectionCopy;
  services: Service[];
}) {
  const serviceLayouts = [
    "md:col-span-7 lg:col-span-5 lg:row-span-2",
    "md:col-span-5 md:translate-y-10 lg:col-span-4 lg:translate-y-16",
    "md:col-span-5 md:-translate-y-4 lg:col-span-3 lg:translate-y-4",
    "md:col-span-7 md:translate-y-6 lg:col-span-7 lg:-translate-y-8 lg:ml-14",
  ];
  const serviceHeights = ["min-h-[28rem]", "min-h-[20rem]", "min-h-[17rem]", "min-h-[21rem]"];

  return (
    <section id="services" className="section-border px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader copy={copy} />
        </Reveal>
        <div className="mt-12 grid auto-rows-[minmax(15rem,auto)] gap-4 md:grid-cols-12 lg:gap-5">
          {services.map((service, index) => {
            const isPrimary = index === 0;

            return (
              <div
                key={service.title}
                className={serviceLayouts[index] ?? "md:col-span-6 lg:col-span-4"}
              >
              <Reveal delay={index * 0.04}>
                <article
                  className={`group relative flex h-full min-h-60 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-8 ${
                    isPrimary ? "bg-neutral-950 text-white" : "bg-white"
                  } ${serviceHeights[index] ?? "min-h-64"}`}
                >
                  <div className="relative z-10 flex h-full w-full flex-col justify-between">
                    <div>
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-md text-sm font-semibold ${
                          isPrimary
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        0{index + 1}
                      </div>
                      <h3
                        className={`mt-8 max-w-md font-display text-2xl font-bold leading-tight ${
                          isPrimary ? "text-white" : "text-neutral-950"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`mt-4 max-w-xl text-base leading-7 ${
                          isPrimary ? "text-white/72" : "text-neutral-600"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                    <p
                      className={`mt-9 text-sm font-semibold ${
                        isPrimary ? "text-white" : "text-neutral-950"
                      }`}
                    >
                      Practical system delivery
                    </p>
                  </div>
                  <div
                    className={`absolute -right-10 -top-10 h-36 w-36 rounded-full border ${
                      isPrimary ? "border-white/10" : "border-neutral-200"
                    }`}
                  />
                  <div
                    className={`absolute bottom-5 right-5 h-16 w-24 rounded-md border ${
                      isPrimary
                        ? "border-white/10 bg-white/5"
                        : "border-neutral-200 bg-neutral-50"
                    }`}
                  />
                </article>
              </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProjectShowcase({
  copy,
  labels,
  projects,
}: {
  copy: SectionCopy;
  labels: { selected: string; screenshotFallback: string; tech: string };
  projects: Project[];
}) {
  return (
    <section id="projects" className="section-border px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader copy={copy} />
        </Reveal>
        <div className="mt-12 grid gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="grid overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
                <ProjectScreenshot project={project} fallback={labels.screenshotFallback} />
                <div className="flex min-h-80 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-xs font-medium font-mono text-blue-700">
                      {labels.selected}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-bold text-neutral-950">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                      {project.what}
                    </p>
                  </div>
                  <div className="mt-10">
                    <p className="text-sm font-medium text-neutral-950">
                      {labels.tech}: {project.tech}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectScreenshot({
  project,
  fallback,
}: {
  project: Project;
  fallback: string;
}) {
  return (
    <div className="relative min-h-80 border-b border-neutral-200 bg-neutral-50 lg:border-b-0 lg:border-r">
      {project.screenshotSrc ? (
        <Image
          src={project.screenshotSrc}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="relative flex h-full min-h-80 w-full items-center justify-center p-8">
          <Image
            src="/dummy-project.png"
            alt={fallback}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
          <p className="relative z-10 rounded-md border border-white/20 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-md">
            {fallback}
          </p>
        </div>
      )}
    </div>
  );
}

export function ProcessTimeline({
  copy,
  process,
}: {
  copy: SectionCopy;
  process: ProcessStep[];
}) {
  return (
    <section className="section-border px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeader copy={copy} />
        </Reveal>
        <div className="grid gap-3">
          {process.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.04}>
              <div className="grid gap-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:grid-cols-[4rem_1fr] sm:p-8">
                <p className="font-mono text-sm font-semibold text-blue-700">{step.number}</p>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-600">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueGrid({
  copy,
  values,
}: {
  copy: SectionCopy;
  values: string[];
}) {
  return (
    <section className="section-border px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader copy={copy} />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value} delay={index * 0.04}>
              <div className="group relative flex min-h-32 flex-col justify-end overflow-hidden rounded-2xl bg-neutral-100 p-6 transition-colors hover:bg-neutral-200">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-100/40 transition-transform duration-500 group-hover:scale-[2]" />
                <div className="relative z-10">
                  <p className="mb-2 font-mono text-xs font-semibold text-blue-600">0{index + 1}</p>
                  <h3 className="font-display text-xl font-medium text-neutral-900">
                    {value}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderSection({
  copy,
}: {
  copy: SectionCopy & { role: string; stats: readonly (readonly [string, string])[] };
}) {
  return (
    <section id="about" className="section-border px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="overflow-hidden rounded-md border border-neutral-200 bg-white">
            <Image
              src="/founder.jpg"
              alt="Muhamad Raffi Pasha"
              width={896}
              height={1152}
              className="h-[34rem] w-full object-cover object-[center_22%]"
            />
            <div className="grid gap-px border-t border-neutral-200 bg-neutral-200 sm:grid-cols-3">
              {copy.stats.map(([label, value]) => (
                <div key={label} className="bg-white p-5">
                  <p className="text-xs font-medium font-mono text-blue-700">
                    {label}
                  </p>
                  <p className="mt-3 text-sm font-medium text-neutral-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-xs font-medium font-mono text-blue-700">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-neutral-950 sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-lg font-medium text-neutral-950">{copy.role}</p>
          {copy.body && (
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              {copy.body}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function MidPageCTA({
  copy,
}: {
  copy: { eyebrow: string; title: string; body: string; primary: string; secondary: string };
}) {
  return (
    <section className="px-5 py-10 sm:px-8">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-8 rounded-md bg-neutral-950 p-7 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-medium font-mono text-white/55">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              {copy.body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <MotionLink
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              {copy.primary}
            </MotionLink>
            <MotionLink
              href={contactLinks.whatsapp}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {copy.secondary}
            </MotionLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ContactSection({
  copy,
}: {
  copy: { eyebrow: string; title: string; primary: string; secondary: string };
}) {
  return (
    <section id="contact" className="section-border px-5 py-20 text-center sm:px-8 lg:py-28">
      <Reveal>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium font-mono text-blue-700">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-neutral-950 sm:text-6xl">
            {copy.title}
          </h2>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <MotionLink
              href={contactLinks.whatsapp}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              {copy.primary}
            </MotionLink>
            <MotionLink
              href={contactLinks.linkedin}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-neutral-200 px-6 text-sm font-medium text-neutral-950 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              {copy.secondary}
            </MotionLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SectionHeader({ copy }: { copy: SectionCopy }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-medium font-mono text-blue-700">
        {copy.eyebrow}
      </p>
      <h2 className="mt-4 font-title text-4xl font-normal leading-[0.9] text-neutral-950 sm:text-6xl">
        {copy.title}
      </h2>
      {copy.body && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
          {copy.body}
        </p>
      )}
    </div>
  );
}

export function CookieBanner({ language }: { language: Language }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-neutral-200 bg-white p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] sm:p-5"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-neutral-600 sm:text-left">
          {language === "en"
            ? "We use cookies to improve your experience and analyze site traffic."
            : "Kami menggunakan cookie untuk memastikan Anda mendapat pengalaman terbaik di situs kami."}
        </p>
        <button
          onClick={accept}
          className="whitespace-nowrap rounded-md bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {language === "en" ? "Accept Cookies" : "Terima Cookie"}
        </button>
      </div>
    </motion.div>
  );
}
