/* =====================================================
   EDIT YOUR CONTENT HERE. The page builds itself from this object.
   - Leave a link as "" and its button is hidden automatically.
   - Add a new item by copying one { ... } block.
   ===================================================== */
const DATA = {
  education: [
    { title: "CITS, Computer Software Application (CSA)", place: "NSTI Kanpur", period: "2026–27", note: "Currently pursuing" },
    { title: "ITI, COPA Trade", place: "Government I.T.I, Pandu Nagar, Kanpur", period: "2023–24", note: "89.17%" },
    { title: "Class 12", place: "Mariampur Sr. Sec. School, Kanpur", period: "2022–23", note: "80%" },
    { title: "Class 10", place: "Mariampur Sr. Sec. School, Kanpur", period: "2020–21", note: "92.2%" }
  ],

  skills: [
    { group: "Core trade skills", items: ["Computer Fundamentals", "Hardware and Networking Basics", "Operating Systems", "DBMS", "Programming Fundamentals", "HTML"] },
    { group: "Computer skills", items: ["MS Office", "MS Excel", "Internet"] },
    { group: "Software and tools", items: ["Python (Basic)", "MySQL", "VS Code", "ChatGPT", "Claude"] },
    { group: "Languages", items: ["English (Proficient)", "German (A1)"] },
    { group: "Soft skills", items: ["Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability", "Quick Learning"] }
  ],

  projects: [
    {
      title: "AI-Powered Interview Preparation System",
      desc: "Helps students prepare for interviews by generating technical questions, evaluating answers and giving feedback.",
      role: "My contribution: designed the interview workflow, built the question-generation feature and tested the system.",
      tech: ["Python", "Flask", "AI API (ChatGPT)", "HTML", "CSS"],
      image: "",   // e.g. "assets/images/project1.png". Empty shows a plain banner.
      repo: "",    // PLACEHOLDER: paste your GitHub repo link here
      demo: ""     // optional live demo link
    }
  ],

  training: [
    { title: "Data Entry Operator Apprentice", place: "Government ITI, Pandu Nagar, Kanpur", period: "1 Jan 2025 – 31 Dec 2025",
      tags: ["Data Entry", "MS Word", "MS Excel", "Data Management", "Record Keeping"] },
    { title: "On-the-Job Training", place: "", period: "15 days",
      tags: ["Computer operations", "Office documentation", "Digital record management"] }
  ],

  certs: [
    { name: "AI Literacy", issuer: "IBM SkillsBuild", year: "29 Oct 2026",
      file: "assets/documents/ai-literacy-certificate.pdf", link: "https://www.credly.com/go/4v8rB6y8" },
    { name: "National Trade Certificate (NTC), COPA", issuer: "NCVT", year: "2024", file: "", link: "" },
    { name: "National Apprenticeship Certificate (NAC)", issuer: "NCVT", year: "2025", file: "", link: "" },
    { name: "AI Tools and Claude Workshop", issuer: "B10X", year: "September 2026", file: "", link: "" }
  ]
};

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const tags = (list) => list && list.length ? `<ul class="tags">${list.map(t => `<li>${t}</li>`).join("")}</ul>` : "";
const link = (url, label, external = true) =>
  url ? `<a href="${url}"${external ? ' target="_blank" rel="noopener"' : ""}>${label}</a>` : "";

/* ---------- Render sections ---------- */
$("education-list").innerHTML = DATA.education.map(e => `
  <div class="item reveal"><h3>${e.title}</h3>
    <p>${e.place}</p><p class="meta">${[e.period, e.note].filter(Boolean).join(" | ")}</p></div>`).join("");

$("skills-list").innerHTML = DATA.skills.map(s => `
  <div class="card reveal"><h3>${s.group}</h3>${tags(s.items)}</div>`).join("");

$("projects-list").innerHTML = DATA.projects.map(p => `
  <article class="card reveal">
    <div class="thumb">${p.image ? `<img src="${p.image}" alt="${p.title} screenshot">` : "Project"}</div>
    <h3>${p.title}</h3><p>${p.desc}</p><p>${p.role}</p>${tags(p.tech)}
    <div class="links">${link(p.repo, "Source code")}${link(p.demo, "Live demo")}</div>
  </article>`).join("");

$("training-list").innerHTML = DATA.training.map(t => `
  <div class="item reveal"><h3>${t.title}</h3>
    ${t.place ? `<p>${t.place}</p>` : ""}<p class="meta">${t.period}</p>${tags(t.tags)}</div>`).join("");

$("certs-list").innerHTML = DATA.certs.map(c => `
  <article class="card reveal"><h3>${c.name}</h3>
    <p>${c.issuer}</p><p class="meta">${c.year}</p>
    <div class="links">${link(c.file, "View certificate")}${link(c.link, "Verify online")}</div>
  </article>`).join("");

/* ---------- Footer year ---------- */
$("year").textContent = new Date().getFullYear();

/* ---------- Theme toggle (remembered in this browser) ---------- */
$("theme-btn").addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* ---------- Mobile menu ---------- */
const menu = $("menu"), menuBtn = $("menu-btn");
menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});

/* ---------- Highlight the current section in the menu ---------- */
const links = [...menu.querySelectorAll("a")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

/* ---------- Gentle reveal on scroll ---------- */
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("show"); reveal.unobserve(en.target); } });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));
