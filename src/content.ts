export type LinkItem = {
  label: string;
  href: string;
  kind: "github" | "linkedin" | "email" | "resume" | "external";
};

export type TimelineItem = {
  range: string;
  role: string;
  company: string;
  logo?: string;
  description: string;
  bullets?: string[];
  current?: boolean;
  links?: Array<Pick<LinkItem, "label" | "href">>;
};

export type ProjectItem = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
};

export type EducationItem = {
  range: string;
  institution: string;
  program: string;
  note: string;
};

export const profile = {
  name: "Arsam Abbaszadeh",
  heroName: "Hey, I'm Arsam 👋",
  initials: "A",
  birthdate: "2006-10-24",
  location: "Melbourne, Australia",
  tagline: "Software engineer building useful AI and web products.",
  image: "/profile-image.png",
  bio:
    "I recently left WiseTech Global, where I worked on logistics software used by companies like DHL and FedEx. Right now, I'm focused on sharpening my engineering skills, building products end to end like [Classi](https://tryclassi.com) (and others), and working my current opportunities.",
};

export const links: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/Arsam-Abbaszadeh",
    kind: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arsam-abbaszadeh-a7a02a300",
    kind: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:abbaszadeharsam@gmail.com",
    kind: "email",
  },
];

export const workTimeline: TimelineItem[] = [
  {
    range: "May 2026 - Present",
    role: "Co-Founder",
    company: "Classi",
    current: true,
    description:
      "Co-founded an EdTech product for building subject-specific AI learning apps for classrooms.",
    bullets: [
      "Helped secure **$20,000** in team grant funding and built a **working MVP** reviewed by **several teachers**.",
      "Built the full-stack classroom app with **Next.js, React, Supabase Auth/Postgres, and Tailwind CSS**, including teacher/student roles, classrooms, app publishing, session history, and review workflows.",
      "Implemented **AI chat app** using **Vertex AI and AWS Bedrock**, alongside an **agentic harness** to answer student problems.",
    ],
    links: [{ label: "Live Preview", href: "https://tryclassi.com" }],
  },
  {
    range: "June 2026 - June 2026",
    role: "SEE Program",
    company: "Jane Street",
    description:
      "Selected for Jane Street's SEE program in the software engineering track, spending a month in Hong Kong.",
  },
  {
    range: "Jan 2025 - May 2026",
    role: "Associate Software Engineer",
    company: "WiseTech Global",
    description:
      "Worked for 1 year and 5 months across production software engineering tasks in a large-scale logistics software environment.",
    bullets: [
      "Built and maintained **C# / ASP.NET Core** scraping services running **30,000+ scrapes and 100,000+ API calls per day**.",
      "Designed post-processing pipelines to **validate, deduplicate, and transform 1M+ records** into structured shipping datasets.",
      "Diagnosed and remediated a **production data-quality incident** affecting a **major customer**, writing the code fix and **SQL** data-correction query for **10,000+ contaminated rows**.",
      "Built an **agentic CLI tool** for scraper integrations, **producing design-ready reports and reducing manual investigation time by 4-6 hours** per integration.",
      "Migrated an internal frontend tool **from JavaScript to TypeScript, rebuilt Vue components**, restyled the UI with SCSS, and **improved request performance from 60s to 5s** with pagination.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Classi",
    description:
      "EdTech product for building subject-specific AI learning apps, with $20,000 in team grant funding, a working MVP reviewed by several teachers, classroom roles, app publishing, session history, review workflows, and AI chat powered by Vertex AI and AWS Bedrock.",
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS", "Vertex AI", "AWS Bedrock"],
    href: "https://tryclassi.com",
  },
  {
    name: "Real-Time Messaging Web App",
    description:
      "Distributed messaging web app with an ASP.NET Core backend, Kafka, PostgreSQL, WebSocket communication, JWT auth with refresh-token revocation, and direct-to-S3 media uploads.",
    stack: ["ASP.NET Core", "Kafka", "PostgreSQL", "Vue", "TypeScript", "AWS S3"],
    href: "https://github.com/Arsam-Abbaszadeh/real-time-messaging-app",
  },
  {
    name: "CRNN for OCR",
    description:
      "Handwritten-text recognition model trained from scratch with a residual CNN, BiLSTM layers, and CTC loss, including XML label parsing, augmentation, batch padding, and GPU memory debugging.",
    stack: ["TensorFlow", "Keras", "NumPy", "Computer Vision", "OCR"],
    href: "https://github.com/Arsam-Abbaszadeh/CRNN-for-OCR-",
  },
  {
    name: "Command Classification Model",
    description:
      "Single-word speech command classifier using the Google Speech Commands dataset, spectrogram preprocessing, TensorFlow data pipelines, and a CNN with softmax classification across 30 command labels.",
    stack: ["TensorFlow", "Keras", "NumPy", "Audio ML", "CNN"],
    href: "https://github.com/Arsam-Abbaszadeh/comand-classification",
  },
];

export const education: EducationItem[] = [
  {
    range: "Expected Graduation: Oct 2027",
    institution: "Monash University",
    program: "Bachelor of Computer Science Advanced (Honours)",
    note:
      "Coursework includes operating systems, databases, object-oriented programming, algorithms and data structures, computer systems and networking, and theory of computation.",
  },
];
