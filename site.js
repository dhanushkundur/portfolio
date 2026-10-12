/* Builds the pages from projects.js. You shouldn't need to edit this file. */

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function initials(t) {
  return t.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}
// image that turns into a grid placeholder if the file isn't uploaded yet
function img(src, alt, label) {
  if (!src) return `<div class="ph">${esc(label || "")}</div>`;
  return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"
    onerror="this.outerHTML='<div class=&quot;ph&quot;>${esc(label || "")}</div>'">`;
}
function tags(list) {
  return `<div class="tags">${(list || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
}
function nav(home) {
  const p = home ? "" : "index.html";
  return `<nav class="nav"><div class="wrap">
    <a class="brand" href="index.html">${esc(SITE.name.split(" ")[0].toLowerCase())}<span>.</span>${esc(SITE.name.split(" ").slice(-1)[0].toLowerCase())}</a>
    <div class="nav-links">
      <a href="${p}#projects">Projects</a>
      <a class="hide-sm" href="${p}#experience">Experience</a>
      <a class="hide-sm" href="${p}#skills">Skills</a>
      <a href="${esc(SITE.resume)}" target="_blank" rel="noopener">Resume</a>
    </div></div></nav>`;
}
function contactBtns(primaryEmail) {
  return `<div class="btns">
    <a class="btn ${primaryEmail ? "primary" : ""}" href="mailto:${esc(SITE.email)}">Email me</a>
    <a class="btn" href="${esc(SITE.resume)}" target="_blank" rel="noopener">Resume (PDF)</a>
    <a class="btn" href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="btn" href="${esc(SITE.github)}" target="_blank" rel="noopener">GitHub</a>
  </div>`;
}
function footer() {
  return `<footer><div class="wrap">© ${new Date().getFullYear()} ${esc(SITE.name)}</div></footer>`;
}

/* ------------------------------- HOME ------------------------------- */
function renderHome() {
  const cards = PROJECTS.map(p => `
    <a class="card" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="thumb">${img(p.cover, p.title, initials(p.title))}
        <span class="badge ${/progress|flying/i.test(p.status) ? "live" : ""}">${esc(p.status)}</span>${p.video ? `<span class="play">▶ Video</span>` : ""}</div>
      <div class="body">
        <div class="sub">${esc(p.dates)} · ${esc(p.role)}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.tagline)}</p>
        ${tags(p.tags)}
        <span class="more">View project →</span>
      </div>
    </a>`).join("");

  const exp = EXPERIENCE.map(e => `
    <div class="exp-item">
      <div class="dates">${esc(e.dates)}</div>
      <div><h3>${esc(e.title)}</h3><div class="org">${esc(e.org)}</div><p>${esc(e.text)}</p></div>
    </div>`).join("");

  const skills = SKILLS.map(s => `<div class="skill"><h3>${esc(s.group)}</h3>${tags(s.items)}</div>`).join("");

  document.title = `${SITE.name} · ${SITE.focus}`;
  document.getElementById("app").innerHTML = `
    ${nav(true)}
    <header class="hero"><div class="wrap">
      <div class="eyebrow">// ${esc(SITE.focus)}</div>
      <h1>${esc(SITE.name)}</h1>
      <p class="role">${esc(SITE.role)}</p>
      <p class="intro">${esc(SITE.intro)}</p>
      <div class="btns">
        <a class="btn primary" href="#projects">See my projects</a>
        <a class="btn" href="${esc(SITE.resume)}" target="_blank" rel="noopener">Resume</a>
        <a class="btn" href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn" href="${esc(SITE.github)}" target="_blank" rel="noopener">GitHub</a>
      </div>
      <div class="facts">${SITE.facts.map(f => `<span class="fact">${esc(f)}</span>`).join("")}</div>
    </div></header>

    <section class="block" id="projects"><div class="wrap">
      <div class="block-head"><div><div class="eyebrow">01 / Projects</div><h2>Things I've built</h2></div></div>
      <div class="grid">${cards}</div>
    </div></section>

    <section class="block" id="experience"><div class="wrap">
      <div class="block-head"><div><div class="eyebrow">02 / Experience</div><h2>Where I've worked</h2></div></div>
      <div class="exp">${exp}</div>
    </div></section>

    <section class="block" id="skills"><div class="wrap">
      <div class="block-head"><div><div class="eyebrow">03 / Skills</div><h2>Tools I use</h2></div></div>
      <div class="skills">${skills}</div>
    </div></section>

    <section class="block contact" id="contact"><div class="wrap">
      <div class="eyebrow">04 / Contact</div>
      <h2>Let's talk.</h2>
      <p>I'm looking for Summer 2027 internships in robotics, autonomy, and aerospace. The fastest way to reach me is email.</p>
      ${contactBtns(true)}
    </div></section>
    ${footer()}`;
}

/* ----------------------------- PROJECT ------------------------------ */
function renderProject() {
  const id = new URLSearchParams(location.search).get("id");
  const i = PROJECTS.findIndex(p => p.id === id);
  if (i < 0) { location.replace("index.html#projects"); return; }
  const p = PROJECTS[i];
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  const frame = id => `<iframe src="https://www.youtube-nocookie.com/embed/${esc(id)}?rel=0&modestbranding=1&playsinline=1"
         title="${esc(p.title)} video" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  const media = (p.video && p.verticalVideo)
    ? `<div class="media-split"><div class="media vvideo">${frame(p.video)}</div>
         ${p.cover ? `<div class="media cover-side">${img(p.cover, p.title, initials(p.title))}</div>` : ""}</div>`
    : p.video
    ? `<div class="media video"><iframe src="https://www.youtube-nocookie.com/embed/${esc(p.video)}?rel=0"
         title="${esc(p.title)} video" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`
    : (p.cover ? `<div class="media">${img(p.cover, p.title, initials(p.title))}</div>` : "");

  const stats = (p.stats || []).length
    ? `<div class="stats">${p.stats.map(s => `<div class="stat"><div class="v">${esc(s.value)}</div><div class="l">${esc(s.label)}</div></div>`).join("")}</div>` : "";

  const secs = (p.sections || []).map((s, n) => {
    const sid = "s" + n;
    const paras = (s.text || []).map(t => `<p>${esc(t)}</p>`).join("");
    const list = (s.list || []).length ? `<ul>${s.list.map(l => `<li>${esc(l)}</li>`).join("")}</ul>` : "";
    return `<div class="p-section" id="${sid}"><h2><span class="n">${String(n + 1).padStart(2, "0")}</span>${esc(s.heading)}</h2>${s.list && !s.textFirst ? list + paras : paras + list}</div>`;
  }).join("");
  const toc = (p.sections || []).map((s, n) => `<a href="#s${n}">${esc(s.heading)}</a>`).join("")
    + ((p.gallery || []).length ? `<a href="#gallery">Gallery</a>` : "");

  const gal = (p.gallery || []).length
    ? `<div class="p-section" id="gallery"><h2><span class="n">${String((p.sections || []).length + 1).padStart(2, "0")}</span>Gallery</h2></div>
       <div class="gallery">${p.gallery.map(g => `<figure data-src="${esc(g.src)}" data-cap="${esc(g.caption)}">${img(g.src, g.caption, "")}<figcaption>${esc(g.caption)}</figcaption></figure>`).join("")}</div>` : "";

  const links = (p.links || []).map(l => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("");

  document.title = `${p.title} · ${SITE.name}`;
  document.getElementById("app").innerHTML = `
    ${nav(false)}
    <main class="wrap">
      <a class="back" href="index.html#projects">← All projects</a>
      <header class="p-hero">
        <div class="eyebrow">// ${esc(p.status)}</div>
        <h1>${esc(p.title)}</h1>
        <p class="subtitle">${esc(p.subtitle)}</p>
        <p class="tagline">${esc(p.tagline)}</p>
        <div class="meta">
          <div><span class="k">Timeline</span>${esc(p.dates)}</div>
          <div><span class="k">Role</span>${esc(p.role)}</div>
          <div><span class="k">Status</span>${esc(p.status)}</div>
        </div>
        ${tags(p.tags)}
        ${links ? `<div class="btns" style="margin-top:18px">${links}</div>` : ""}
      </header>
      ${media}
      ${stats}
      <div class="p-body">
        <aside class="toc">${toc}</aside>
        <div>${secs}${gal}</div>
      </div>
      <div class="pager">
        ${PROJECTS.length > 1 ? `<a href="project.html?id=${encodeURIComponent(prev.id)}"><div class="k">← Previous</div><div class="t">${esc(prev.title)}</div></a>
        <a class="next" href="project.html?id=${encodeURIComponent(next.id)}"><div class="k">Next →</div><div class="t">${esc(next.title)}</div></a>` : ""}
      </div>
    </main>
    ${footer()}
    <div class="lightbox" id="lb"><img alt=""><div class="cap"></div></div>`;

  const lb = document.getElementById("lb");
  document.querySelectorAll(".gallery figure").forEach(f => f.addEventListener("click", () => {
    if (!f.querySelector("img")) return;
    lb.querySelector("img").src = f.dataset.src;
    lb.querySelector(".cap").textContent = f.dataset.cap;
    lb.classList.add("open");
  }));
  lb.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  window.scrollTo(0, 0);
}
