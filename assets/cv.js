(function () {
  "use strict";

  var EN = {
    "skip": "Skip to content",
    "nav.platform": "Platform", "nav.career": "Career", "nav.edu": "Education", "nav.portfolio": "Portfolio",
    "who.role": "Tech Lead · Python and data platforms", "who.place": "Palma de Mallorca, Spain", "who.mail": "Write to me",
    "band.title": "The platform I lead",
    "band.lead": "Mobile operators' network data, from the antenna to the dashboard. Pick a stage to see what I did there.",
    "st.red": "Network", "st.redF": "vendors", "st.proc": "Processing", "st.procF": "faster Nokia parser",
    "st.data": "Data", "st.dataF": "parity", "st.ops": "Operations", "st.opsF": "MCP tools",
    "w.arch": "Designed the platform's <b>modular architecture</b>, now the company standard.",
    "w.red": "Reading <b>13 vendors</b> across RAN, Core and Transport over SFTP, SNMP and databases.",
    "w.airflow": "ETL on <b>Airflow 3</b> and Celery: one cluster for several network domains, with per-domain queues.",
    "w.rust": "Native <b>Rust</b> parsers: Nokia configuration from 36 min to 50 s.",
    "w.v4": "Migration to <b>v4 with no downtime</b>, validated against production: 99.99&nbsp;% parity.",
    "w.db": "<b>ClickHouse</b>, MySQL/Percona and PostgreSQL with Patroni, with replicas and failover.",
    "w.deploy": "<b>Immutable releases</b>: one-command deploy and rollback across dozens of servers.",
    "w.obs": "Observability with <b>OpenTelemetry</b> and single sign-on with <b>Keycloak</b>.",
    "w.mcp": "<b>7 MCP servers</b> so AI agents can query the platform read-only.",
    "band.foot": "8+ years on the platform · 9,000+ own commits · 12,000+ hours on 630+ tasks · 17,000+ automated tests",
    "career.title": "Career",
    "c1.when": "2023 – now", "c1.role": "Tech Lead · Automation Team",
    "c2.role": "Software Engineer · Data and Automation",
    "c2.what": "Wireless DNA · ETL pipelines for network data and automation with Python, Bash and Docker.",
    "c3.role": "Operations Engineer", "c3.what": "Wireless DNA · Network monitoring. Moved to development after six months.",
    "c4.role": "Big Data Engineer (intern)",
    "os.title": "Open source",
    "os.webgate": "Self-hosted SSH and SFTP web gateway (FastAPI). On PyPI.",
    "os.systemd": "Python library for systemd. On PyPI.",
    "edu.title": "Education",
    "e.tel": "Bachelor's degree in Telematics Engineering", "e.mat": "Bachelor's degree in Mathematics",
    "e.exch": "Exchange in Computer Engineering", "e.exchW": "Universidad de Guadalajara, Mexico · 2018",
    "e.cert": "Astronomer · 2025", "e.lang": "Languages", "e.langV": "Spanish native · Catalan basic · English basic",
    "close.title": "Shall we talk?",
    "foot.back": "Back to the portfolio"
  };
  var PDF = { es: "assets/cv/CV-Kevin-Nolasco-ES.pdf", en: "assets/cv/CV-Kevin-Nolasco-EN.pdf" };

  var ES = {};
  var root = document.documentElement;
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  // The Spanish text lives in the page; capture it once so each language has one source.
  document.querySelectorAll("[data-i18n]").forEach(function (el) { ES[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) { ES[el.dataset.i18nHtml] = el.innerHTML; });
  var esTitle = document.title;

  function setLang(lang) {
    var dict = lang === "en" ? EN : ES;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.dataset.i18n]; if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v;
    });
    root.lang = lang;
    document.title = lang === "en" ? "Alex Nolasco · Résumé" : esTitle;
    document.getElementById("pdf").setAttribute("href", PDF[lang]);
    var b = document.getElementById("lang");
    b.textContent = lang === "en" ? "ES" : "EN";
    b.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
    store("lang", lang);
  }

  var saved = read("lang");
  if ((saved || ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en")) === "en") setLang("en");
  document.getElementById("lang").addEventListener("click", function () { setLang(root.lang === "en" ? "es" : "en"); });

  document.getElementById("theme").addEventListener("click", function () {
    var cur = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store("theme", next);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Stages: pick one to light the achievements that belong to it; pick it again to see them all.
  var pipeline = document.querySelector(".pipeline");
  var stages = pipeline.querySelectorAll(".stage");
  var wins = document.querySelectorAll(".wins li");
  function pick(name) {
    stages.forEach(function (s) { s.setAttribute("aria-pressed", String(s.dataset.stage === name)); });
    pipeline.classList.toggle("has-pick", !!name);
    wins.forEach(function (w) { w.classList.toggle("on", !!name && (w.dataset.stage === name || w.dataset.stage === "all")); });
  }
  stages.forEach(function (s) {
    s.addEventListener("click", function () {
      pick(s.getAttribute("aria-pressed") === "true" ? null : s.dataset.stage);
    });
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") pick(null); });
})();
