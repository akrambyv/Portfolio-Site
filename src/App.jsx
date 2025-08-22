import React, { useMemo, useState } from "react";
// Framer Motion for subtle animations (optional but nice)
import { motion } from "framer-motion";

// --- Simple inline icons (no extra deps) --- //
const LinkIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M10 14a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 1 0-7.07-7.07L11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10a5 5 0 0 0-7.07 0L4.1 12.83a5 5 0 1 0 7.07 7.07L13 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8 16l-4-4 4-4M16 8l4 4-4 4M14 4l-4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
    <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// --- Demo data (replace with your projects) --- //
const PROJECTS = [
  {
    img: "/eightborn.png",
    title: "Eightborn Site | Yoldadır :) |",
    description: "İnkişaf etmiş funksionallığa malik sayt: çoxdilli dəstək, dark/light mode və API inteqrasiyası.",
    tags: ["React", "Tailwind CSS", "API Integration", "Multi-language", "Dark/Light Mode", "Responsive design"],
    demoUrl: "#",
    // codeUrl: "#",
  },
  {
    img: "/spacephoto.png",
    title: "SpaceXShop Site",
    description: "API ilə işləyən demo e-commerce sayt. Məhsul siyahısı, detalları və səbət funksionallığı daxildir.",
    tags: ["React", "Tailwind CSS", "API Integration", "Responsive design"],
    demoUrl: "https://space-x-shop.vercel.app/",
    // codeUrl: "#",
  },
  {
    img: "/countryphoto.png",
    title: "Country Site",
    description: "Ölkələri API vasitəsilə göstərən interaktiv veb tətbiqi.",
    tags: ["React", "Tailwind CSS", "API Integration", "Responsive design"],
    demoUrl: "https://ekrem-country.vercel.app/",
    // codeUrl: "#",
  },
  {
    img: "/saytaz.png",
    title: "Saytaz Site",
    description: "Əsasən UI və istifadəçi təcrübəsi üzərində işlənmiş təqdimat məqsədli sayt.",
    tags: ["HTML", "CSS", "Vanilla JS", "Responsive design"],
    demoUrl: "https://sayt-az-sigma.vercel.app/",
    // codeUrl: "#",
  },
  {
    img: "/archo.png",
    title: "Archo Site",
    description: "Sadə və modern dizayna malik demo veb sayt. Layout və dizayn üzərində fokuslanmışdır.",
    tags: ["HTML", "CSS", "Vanilla JS", "Responsive design"],
    demoUrl: "https://archo-site.vercel.app/",
    // codeUrl: "#",
  },
];

const TAGS = ["All", "React", "HTML", "CSS", "Tailwind CSS", "API Integration", "Responsive design", "Vanilla JS"];

// --- Small helper badge --- //
function Tag({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 cursor-pointer rounded-full text-sm border transition hover:shadow-sm active:scale-[.98] ${active ? "bg-black text-white border-black" : "bg-white/60 backdrop-blur border-gray-200"
        }`}
    >
      {label}
    </button>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-2xl border border-gray-200 bg-white/65 backdrop-blur p-5 shadow-sm hover:shadow-md"
    >
      <div className="h-28 mb-4 rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 grid place-items-center text-sm text-gray-500">
        {/* Placeholder preview area – you can swap with real screenshots */}
        <img src={p.img} className="h-28 w-full rounded-md" alt="" />
      </div>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
      </div>
      <p className="mt-2 text-sm text-gray-600">{p.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags?.map((t) => (
          <span key={t} className="text-xs rounded-full bg-gray-100 px-2.5 py-1 text-gray-700 border border-gray-200">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <a
          href={p.demoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          <LinkIcon className="w-4 h-4" /> Go To Site
        </a>
        {/* <a
          href={p.codeUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          <CodeIcon className="w-4 h-4" /> Source
        </a> */}
      </div>
    </motion.div>
  );
}

export default function PortfolioHub() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = q
        ? p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q))
        : true;
      const matchesTag = activeTag === "All" ? true : (p.tags || []).includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <div className="min-h-screen bg-[url('/bgphoto.jpg')] bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Container */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl text-[#fff] font-bold tracking-tight">Əkrəm Abıyev</h1>
            <p className="mt-1 text-[#fff]"><span className="text-[red]">Front‑End Developer</span> · React · HTML · CSS · JavaScript · Tailwind</p>
            <p className="mt-2 text-[#fff] text-sm max-w-xl">
              Real layihələrdən ibarət qısa vitrin. Aşağıda sayt linkləri var.
            </p>
          </div>

          {/* Contact / CTA */}
          <div className="flex flex-col gap-2 md:items-end">
            <a
              href="mailto:abyvkrm2004@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow"
            >
              <MailIcon className="w-4 h-4" /> abyvkrm2004@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/akramabiyev0/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Controls */}
        <section className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-3 py-2 shadow-sm w-full md:w-96">
            <SearchIcon className="w-5 h-5 text-gray-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Axtar: React, API, landing…"
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <Tag key={t} label={t} active={activeTag === t} onClick={() => setActiveTag(t)} />
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-16 border rounded-2xl bg-white">
              Heç nə tapılmadı. Axtarış sorğusunu və ya tag seçimini dəyiş.
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 text-sm text-[#fff] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ekrem Abıyev. Portfolio Website.</p>
          <p className="opacity-80">Vercel‑də host edilir · Tailwind + React</p>
        </footer>
      </div>
    </div>
  );
}
