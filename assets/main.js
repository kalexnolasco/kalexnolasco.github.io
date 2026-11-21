(function () {
  "use strict";

  var EN = {
    "skip": "Skip to content",
    "nav.about": "About", "nav.work": "Experience", "nav.projects": "Projects", "nav.edu": "Education", "nav.stack": "Stack", "nav.contact": "Contact", "nav.cv": "Résumé", "nav.platform": "Platform",
    "hero.eyebrow": "Tech Lead · Palma de Mallorca, Spain",
    "hero.title": "I build data platforms <span class=\"accent\">that stay up</span> and the tools to run them.",
    "hero.lead": "I lead the Automation team at Wireless DNA: a distributed platform that carries mobile operators' network data from the antenna to the dashboard. 8+ years on it. In my spare time I publish open source Python libraries and apps.",
    "hero.cv": "See my résumé", "hero.pdfPre": "Résumé ",
    "facts.since": "since 2018", "facts.eduW": "Two degrees · University of the Balearic Islands", "facts.cert": "Astronomer certification",
    "band.title": "The platform I lead", "band.lead": "Mobile operators' network data, from the antenna to the dashboard. Each stage in detail is in my résumé.",
    "sg.red": "Network", "sg.redF": "vendors", "sg.proc": "Processing", "sg.procF": "faster Nokia parser", "sg.data": "Data", "sg.dataF": "parity", "sg.ops": "Operations", "sg.opsF": "MCP tools",
    "cvc.title": "My résumé, on one page", "cvc.text": "The platform, what I did at each stage, my career and education. In Spanish and English, on the web and as a PDF.", "cvc.open": "Open the résumé",
    "hero.cta1": "See projects",
    "facts.role": "Role", "facts.roleV": "Tech Lead, Automation team", "facts.company": "Company",
    "facts.focus": "Focus", "facts.focusV": "Data pipelines · Backend · DevOps", "facts.edu": "Education", "facts.eduV": "Telematics Engineering and Mathematics",
    "facts.langs": "Languages", "facts.langsV": "Spanish · English",
    "about.title": "About me",
    "about.p1": "I am Tech Lead of the Automation team at Wireless DNA. I make the architecture and stack decisions for a platform that processes telecom network data, weather station feeds and IoT sensor streams, and we own it end to end: code, multi-server deployment and monitoring.",
    "about.p2": "I care about stability over speed, decisions that are written down, and tools that make running a complex system boring, in the good sense.",
    "about.k1": "Reliability", "about.v1": "Immutable releases, rollback and alarms that matter.",
    "about.k2": "Automation", "about.v2": "Inventory as code: a deploy is one command.",
    "about.k3": "Observability", "about.v3": "Metrics and logs that answer real questions.",
    "work.title": "Experience",
    "work.r1": "Tech Lead · Automation Team", "work.d1": "Mar 2023 – present",
    "work.intro": "I lead WDNA's distributed data processing platform, focused on telecommunications: performance and configuration data from mobile operators' networks, thousands of network elements and several vendors.",
    "work.b0": "<strong>Modular architecture</strong> of the platform (telecom, meteorology, IoT and a common core), adopted as the company standard.",
    "work.r2": "Software engineer · Data & automation", "work.d2": "Feb 2019 – Feb 2023",
    "work.t2": "ETL pipelines for telecom network data from many sources (SNMP, SFTP, relational and time-series databases), server and service automation with Python and Bash, Docker containers and shared libraries for data access, credentials and monitoring.",
    "work.r3": "Operations engineer", "work.d3": "Aug 2018 – Jan 2019",
    "work.t3": "Network and infrastructure monitoring for telecom clients. After 6 months I moved to the development team thanks to my automation and scripting work.",
    "work.r4": "Big Data Engineer (intern)", "work.d4": "May – Sep 2017",
    "edu.title": "Education", "edu.deg1": "Bachelor's degree in Telematics Engineering", "edu.deg2": "Bachelor's degree in Mathematics",
    "edu.exch": "Exchange in Computer Engineering", "edu.exchBy": "Universidad de Guadalajara, Mexico · 2018", "edu.beca": "Santander scholarship",
    "edu.cert": "Apache Airflow 3 Fundamentals", "edu.certBy": "Astronomer certification · 2025",
    "edu.lang": "Languages", "edu.langV": "Spanish native · Catalan basic · English basic",
    "work.b1": "<strong>Network data ETL</strong> with Apache Airflow 3 and Celery: reading, transforming and loading counters from several vendors, with native Rust parsers for the largest files.",
    "work.b2": "<strong>Storage</strong> on ClickHouse, MySQL/Percona and PostgreSQL with Patroni, with replication and failover.",
    "work.b3": "<strong>Infrastructure as code</strong>: declarative inventory, Docker containers and deploys with immutable releases, checksum verification and rollback.",
    "work.b4": "<strong>Observability</strong>: OpenTelemetry into ClickHouse, native and Grafana dashboards, and an alarm centre that notifies Teams and email.",
    "work.b5": "<strong>Security and access</strong>: single sign-on with Keycloak (OIDC) and an encrypted credential vault.",
    "work.b6": "<strong>AI for operations</strong>: read-only MCP servers so AI agents can safely query the platform's state.",
    "st.years": "years building the platform", "st.commits": "own commits across 55 repositories",
    "st.hours": "hours on 630+ tasks in 70 projects", "st.vendors": "network vendors integrated in the ETL",
    "st.tests": "automated tests", "st.mcp": "MCP tools for AI agents",
    "work.b6": "<strong>AI for operations</strong>: 7 read-only MCP servers (86 tools) and an NOC support agent that answers with real production data.",
    "work.b7": "<strong>Migration to version 4 with no downtime</strong>: 13 RAN, Core and Transport vendors, validated against production (up to 99.99% of a full day's files) and documented in 59 architecture decision records (ADRs).",
    "work.b8": "<strong>Performance</strong>: Nokia configuration 5 to 40 times faster (3G in 50 s instead of 36 min), 3.17 GB of 5G configuration read in 47 s, and purges turned from mass deletes into instant partition drops.",
    "dom.title": "Domains I have worked in",
    "dom.t1": "Telecommunications", "dom.d1": "Performance, configuration and alarm ETL for mobile operators; capacity tools for RAN, Core and Transport; anomaly detection and forecasting.",
    "dom.t2": "Meteorology", "dom.d2": "Weather stations, radar, satellite and non-conventional observations; forecasting engine and weather apps.",
    "dom.t3": "IoT & smart city", "dom.d3": "5G waste management, sensors, SmartWorld and connected-device platforms.",
    "dom.t4": "Internal platform", "dom.d4": "Communications gateway, monitoring, operations console, intranet and developer tools.",
    "projects.title": "Open source projects",
    "p.webgate": "Self-hosted web gateway for server management: SSH terminal, SFTP browser, server registry with jump hosts, shared live sessions, session recording, LDAP/AD, 2FA and high-availability deployment.",
    "p.systemd": "Python library for systemd: services, units, journal, resource limits and security analysis. Async-first with sync wrappers, optional D-Bus backend, a CLI and a Rust-powered TUI.",
    "p.ironflet": "Offline, bilingual weight-training tracker: 7 periodized routines and 68 exercises with animated images. One Python codebase that runs as an Android APK, desktop and web.",
    "p.skills": "A fast lane for small changes with AI agents: minimal edit, targeted checks, quick review and scoped commits. Agent Skills for Claude Code, Codex and more.",
    "links.demo": "Live demo", "links.docs": "Docs", "links.code": "Code",
    "stack.title": "Stack", "stack.lang": "Languages", "stack.data": "Data", "stack.infra": "Infrastructure",
    "stack.obs": "Security", "stack.web": "Web, APIs & AI",
    "contact.title": "Let's talk",
    "contact.text": "If you like what I do, have an opportunity or want to collaborate on one of the projects, write to me.",
    "contact.mail": "Write to me", "contact.cv": "Résumé", "foot.cv": "Résumé",
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
    document.title = lang === "en" ? "Alex Nolasco · Tech Lead, Python & data" : esTitle;
    document.querySelector('meta[name="description"]').content = lang === "en"
      ? "Alex Nolasco: Tech Lead of a telecom network data platform. Python, Airflow, ClickHouse and Rust, and open source tools." : esDesc;
    var pdf = document.getElementById("pdf");
    if (pdf) pdf.setAttribute("href", lang === "en" ? "assets/cv/CV-Kevin-Nolasco-EN.pdf" : "assets/cv/CV-Kevin-Nolasco-ES.pdf");
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
