import { ExternalLink, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import {
  education,
  links,
  profile,
  projects,
  workTimeline,
  type LinkItem,
} from "./content";

function calculateAge(birthdate: string, now = new Date()) {
  const birth = new Date(`${birthdate}T00:00:00`);
  let age = now.getFullYear() - birth.getFullYear();
  const hasHadBirthday =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());

  if (!hasHadBirthday) {
    age -= 1;
  }

  return age;
}

const iconMap: Record<LinkItem["kind"], React.ComponentType<{ size?: number }>> =
  {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
    resume: FileText,
    external: ExternalLink,
  };

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-8 flex items-center gap-4 font-mono text-base uppercase tracking-[0.14em] text-zinc-200">
      <span>{children}</span>
      <span className="h-px flex-1 bg-zinc-900" />
    </div>
  );
}

function Hero() {
  const age = calculateAge(profile.birthdate);

  return (
    <header className="pt-12 sm:pt-16">
      <section id="top">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
          <img
            src={profile.image}
            alt={`${profile.name} profile`}
            className="size-24 rounded-full border border-zinc-800 bg-ink-850 object-cover ring-1 ring-white/5 sm:size-28"
          />
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl">
              {profile.heroName}
            </h1>
            <p className="mt-3 max-w-lg text-balance text-base text-zinc-400">
              {profile.tagline}
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-2xl space-y-5">
          <p className="text-lg leading-8 text-zinc-200">{profile.bio}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-sm text-zinc-500">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} />
              {profile.location}
            </span>
            <span>{age} years old</span>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            {links.map((link) => {
              const Icon = iconMap[link.kind];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3.5 py-2 font-mono text-xs text-zinc-300 transition hover:border-accent/60 hover:text-accent"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon size={14} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </header>
  );
}

function WorkTimeline() {
  return (
    <section id="work" className="pt-20">
      <SectionHeading>Work</SectionHeading>
      <div className="relative space-y-0 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-zinc-900 sm:before:left-[8.5rem]">
        {workTimeline.map((item) => (
          <article
            key={`${item.range}-${item.company}`}
            className="grid gap-4 border-b border-zinc-900 py-7 pl-8 sm:grid-cols-[7.5rem_1fr] sm:gap-8 sm:pl-0"
          >
            <div
              className={`relative font-mono text-xs leading-5 ${
                item.current ? "text-accent" : "text-zinc-500"
              }`}
            >
              <span
                className={`absolute -left-[1.94rem] top-1 size-4 rounded-full border ring-4 ring-ink-950 sm:left-[8.03rem] ${
                  item.current
                    ? "border-accent/50 bg-accent shadow-[0_0_0_5px_rgba(74,222,128,0.08)]"
                    : "border-zinc-800 bg-ink-950"
                }`}
              />
              {item.range}
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-100">
                {item.role}
                <span className="font-normal text-zinc-500"> at </span>
                {item.company}
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">{item.description}</p>
              {item.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-accent transition hover:text-accent-soft"
                    >
                      {link.label}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="pt-20">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-4">
        {projects.map((project) => {
          const content = (
            <>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-100">
                  {project.name}
                </h3>
              </div>
              <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-900/80 px-2.5 py-1 font-mono text-[0.7rem] text-zinc-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </>
          );

          if (!project.href) {
            return (
              <article
                key={project.name}
                className="rounded-lg border border-zinc-900 bg-white/[0.015] p-5"
              >
                {content}
              </article>
            );
          }

          return (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-zinc-900 bg-white/[0.015] p-5 transition hover:border-zinc-700 hover:bg-white/[0.025]"
            >
              {content}
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition group-hover:text-accent">
                View project <ExternalLink size={12} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="pt-20">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-5">
        {education.map((item) => (
          <article key={item.institution} className="border-b border-zinc-900 pb-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-100">
                {item.institution}
              </h3>
              <span className="font-mono text-xs text-zinc-500">{item.range}</span>
            </div>
            <p className="mt-2 text-zinc-300">{item.program}</p>
            <p className="mt-3 leading-7 text-zinc-400">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const email = links.find((link) => link.kind === "email");

  return (
    <footer id="contact" className="pt-20 pb-10">
      <div className="rounded-lg border border-zinc-900 bg-white/[0.015] p-6">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-50">
          Wanna talk?
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-zinc-400">
          I'm always open to hearing about interesting opportunities, meeting
          thoughtful people, and having good conversations about technology,
          product, or whatever you are building.
        </p>
        {email ? (
          <a
            href={email.href}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2.5 font-mono text-xs font-medium text-ink-950 transition hover:bg-accent"
          >
            <Mail size={15} />
            {email.label}
          </a>
        ) : null}
      </div>
      <p className="mt-8 font-mono text-xs text-zinc-700">
        © {new Date().getFullYear()} {profile.name}.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-ink-950 text-zinc-100">
      <div className="mx-auto w-full max-w-4xl px-6">
        <Hero />
        <WorkTimeline />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
