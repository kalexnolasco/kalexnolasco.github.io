(function () {
  "use strict";

  var EN = {
    "skip": "Skip to content",
    "nav.about": "About", "nav.work": "Experience", "nav.projects": "Projects", "nav.stack": "Stack", "nav.contact": "Contact",
    "hero.eyebrow": "Software engineer · Balearic Islands, Spain",
    "hero.title": "I build data platforms <span class=\"accent\">that stay up</span> and the tools to run them.",
    "hero.lead": "I design and run network data pipelines at scale, infrastructure as code and consoles for operations teams. In my spare time I publish open source Python libraries and apps.",
    "hero.cta1": "See projects",
    "facts.role": "Role", "facts.roleV": "Software engineer", "facts.company": "Company",
    "facts.focus": "Focus", "facts.focusV": "Data · Automation · DevOps",
    "facts.langs": "Languages", "facts.langsV": "Spanish · Technical English",
    "about.title": "About me",
    "about.p1": "I work where software meets operations: I write the code that processes a mobile operator's network data, the infrastructure that deploys it and the consoles the operations team uses every day.",
    "about.p2": "I care about stability over speed, decisions that are written down, and tools that make running a complex system boring, in the good sense.",
    "about.k1": "Reliability", "about.v1": "Immutable releases, rollback and alarms that matter.",
    "about.k2": "Automation", "about.v2": "Inventory as code: a deploy is one command.",
    "about.k3": "Observability", "about.v3": "Metrics and logs that answer real questions.",
    "work.title": "Experience",
    "work.role": "Software engineer · Automation platform",
    "work.when": "Present",
    "work.intro": "A platform that collects, transforms and serves the performance and configuration data of a mobile operator's network, for thousands of network elements and several vendors.",
    "work.b1": "<strong>Network data ETL</strong> with Apache Airflow 3 and Celery: reading, transforming and loading counters from several vendors, with native Rust parsers for the largest files.",
    "work.b2": "<strong>Storage</strong> on ClickHouse, MySQL/Percona and PostgreSQL with Patroni, with replication and failover.",
    "work.b3": "<strong>Infrastructure as code</strong>: declarative inventory, Docker containers and deploys with immutable releases, checksum verification and rollback.",
    "work.b4": "<strong>Observability</strong>: OpenTelemetry into ClickHouse, native and Grafana dashboards, and an alarm centre that notifies Teams and email.",
    "work.b5": "<strong>Security and access</strong>: single sign-on with Keycloak (OIDC) and an encrypted credential vault.",
    "work.b6": "<strong>AI for operations</strong>: read-only MCP servers so AI agents can safely query the platform's state.",
    "projects.title": "Open source projects",
    "p.webgate": "Self-hosted web gateway for server management: SSH terminal, SFTP browser, server registry with jump hosts, shared live sessions, session recording, LDAP/AD, 2FA and high-availability deployment.",
    "p.systemd": "Python library for systemd: services, units, journal, resource limits and security analysis. Async-first with sync wrappers, optional D-Bus backend, a CLI and a Rust-powered TUI.",
    "p.ironflet": "Offline, bilingual weight-training tracker: 7 periodized routines and 68 exercises with animated images. One Python codebase that runs as an Android APK, desktop and web.",
    "p.skills": "A fast lane for small changes with AI agents: minimal edit, targeted checks, quick review and scoped commits. Agent Skills for Claude Code, Codex and more.",
    "links.demo": "Live demo", "links.docs": "Docs", "links.code": "Code",
    "stack.title": "Stack", "stack.lang": "Languages", "stack.data": "Data", "stack.infra": "Infrastructure",
    "stack.obs": "Observability & security", "stack.web": "Web & APIs",
    "contact.title": "Let's talk",
    "contact.text": "If you like what I do or want to collaborate on one of the projects, reach me on GitHub.",
    "foot.made": "Handmade, served by GitHub Pages."
  };

  var ES = {};
  var root = document.documentElement;

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  // Capture the Spanish text from the page itself so there is one source per language.
  document.querySelectorAll("[data-i18n]").forEach(function (el) { ES[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) { ES[el.dataset.i18nHtml] = el.innerHTML; });
  var esTitle = document.title, esDesc = document.querySelector('meta[name="description"]').content;

  function setLang(lang) {
    var dict = lang === "en" ? EN : ES;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.dataset.i18n]; if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v;
    });
    root.lang = lang;
    document.title = lang === "en" ? "Alex Nolasco · Software engineer" : esTitle;
    document.querySelector('meta[name="description"]').content = lang === "en"
      ? "Alex Nolasco: software engineer. Data platforms, infrastructure automation and open source Python tools." : esDesc;
    var b = document.getElementById("lang");
    b.textContent = lang === "en" ? "ES" : "EN";
    b.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
    store("lang", lang);
  }

  var saved = read("lang");
  var initial = saved || ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en");
  if (initial === "en") setLang("en");
  document.getElementById("lang").addEventListener("click", function () {
    setLang(root.lang === "en" ? "es" : "en");
  });

  document.getElementById("theme").addEventListener("click", function () {
    var cur = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store("theme", next);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Live star counts; the numbers in the HTML stay if GitHub's API is unreachable or rate-limited.
  fetch("https://api.github.com/users/kalexnolasco/repos?per_page=100")
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(function (repos) {
      var stars = {};
      repos.forEach(function (r) { stars[r.name] = r.stargazers_count; });
      document.querySelectorAll("[data-repo]").forEach(function (card) {
        var n = stars[card.dataset.repo];
        if (n != null) card.querySelector(".stars b").textContent = n;
      });
    })
    .catch(function () {});
})();
