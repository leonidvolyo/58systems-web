// 58 Systems — bilingual content (English / Czech)
// Single source of truth for all on-page copy.
// Keep keys identical across languages.

export const translations = {
  en: {
    nav: {
      systems: "Products",
      cases: "System stories",
      process: "Process",
      analysis: "Free analysis",
      contact: "Contact",
      cta: "Book process analysis",
    },
    hero: {
      eyebrow: "Automation studio for SMBs",
      headline: "Business automation systems for growing SMBs",
      subheadline:
        "58 Systems helps companies reduce manual work, connect tools, and build stable automation across sales, support, e-commerce and back-office operations — without AI hype or fragile one-off hacks.",
      ctaPrimary: "Book process analysis",
      ctaSecondary: "See systems we build",
      diagramTitle: "We connect your messy tools into one working process.",
      diagramInputs: "Inputs",
      diagramCenter: "58 Systems",
      diagramOutputs: "Outputs",
      diagramInputItems: ["Web forms", "Email", "CRM", "Sheets", "E-commerce", "Support"],
      diagramOutputItems: ["CRM update", "Sales alert", "Follow-up", "Dashboard", "Report", "Customer reply"],
      engineSubtitle: ["orchestrate", "log", "monitor"],
    },
    trust: {
      items: [
        "Stable systems, not demos",
        "AI only where it makes sense",
        "Integrated into your workflow",
        "Built with engineering discipline",
      ],
    },
    problems: {
      eyebrow: "The problem",
      headline: "Growth creates chaos when processes stay manual",
      cards: [
        {
          title: "Leads get lost",
          body:
            "Incoming requests arrive from forms, email, chat or calls, but response is slow and follow-ups are missed.",
        },
        {
          title: "Tools do not talk to each other",
          body:
            "CRM, spreadsheets, email, website and support tools each contain pieces of the same process.",
        },
        {
          title: "People copy-paste instead of selling or serving",
          body:
            "Employees waste time moving data, rewriting messages, checking statuses and updating sheets.",
        },
        {
          title: "Managers lack visibility",
          body:
            "The work is happening, but nobody has a clear view of bottlenecks, response times, lost opportunities or workload.",
        },
      ],
    },
    values: {
      eyebrow: "Core value",
      headline: "Automation built for real business processes",
      lead:
        "58 Systems does not build AI toys or isolated no-code hacks. We design automation that fits how your company already works — with clear ownership, integrations, logs, fallbacks and long-term maintainability.",
      pillars: [
        {
          tag: "01",
          title: "Systematic",
          body:
            "We map the full workflow before building, so the solution supports the real process — not just one isolated task.",
        },
        {
          tag: "02",
          title: "Integrated",
          body:
            "We connect your existing tools instead of forcing your team to work in another disconnected place.",
        },
        {
          tag: "03",
          title: "Stable",
          body:
            "We build with testing, monitoring, clear error handling and support in mind from day one.",
        },
        {
          tag: "04",
          title: "Cost-efficient",
          body:
            "We focus on automating work that actually saves time, reduces mistakes or improves response speed.",
        },
      ],
    },
    products: {
      eyebrow: "Systems we build",
      headline: "Systems you can start with",
      lead:
        "Each system is adapted to your tools, team and workflow. Start with one painful process, then expand.",
      problemLabel: "Problem",
      gotLabel: "What you get",
      connectsLabel: "Connects to",
      outcomeLabel: "Outcome",
      cardCta: "Discuss this system",
      items: [
        {
          number: "01",
          title: "Lead Response System",
          problem:
            "Leads arrive from website forms, email, chat or social channels, but response is slow and follow-ups are inconsistent.",
          gets: [
            "Lead capture from forms / email / chat",
            "Automatic qualification",
            "CRM / contact creation",
            "Sales notifications",
            "Follow-up reminders",
            "Simple reporting",
          ],
          connects: ["Website forms", "Gmail / Workspace", "HubSpot", "Pipedrive", "Sheets", "Slack / Teams"],
          outcome: "Faster response, fewer missed leads, cleaner pipeline.",
        },
        {
          number: "02",
          title: "AI Sales Assistant",
          problem:
            "Sales people spend too much time on repetitive replies, notes, research and reminders.",
          gets: [
            "Suggested first replies",
            "Follow-up drafts",
            "CRM note summaries",
            "Lead and context enrichment",
            "Meeting preparation",
            "Human handoff",
          ],
          connects: ["CRM", "Email", "Calendar", "Website forms", "Internal docs"],
          outcome:
            "Sales spends more time closing and less on admin. AI assists; humans decide.",
        },
        {
          number: "03",
          title: "Customer Support Assistant",
          problem:
            "Teams answer the same questions again and again while customers wait.",
          gets: [
            "Website / chat assistant",
            "FAQ and knowledge-base answers",
            "Ticket triage",
            "Escalation to human",
            "Conversation logging",
            "Analytics of repeated questions",
          ],
          connects: ["Website", "Helpdesk", "Knowledge base", "CRM", "Sheets", "Email"],
          outcome: "Faster answers, lower support workload, better customer experience.",
        },
        {
          number: "04",
          title: "E-commerce Product Import Automation",
          problem:
            "Adding products manually from different sources is slow, repetitive and error-prone.",
          gets: [
            "Product URL / source input",
            "Product data extraction",
            "Image collection",
            "Rewritten descriptions",
            "Translations",
            "Shoptet-compatible import XLSX",
            "Validation before import",
          ],
          connects: ["Shoptet", "Supplier sites", "Manufacturer pages", "Spreadsheets", "Image storage"],
          outcome: "Products go online faster with less manual work and fewer mistakes.",
        },
        {
          number: "05",
          title: "Internal Operations Automation",
          problem:
            "Approvals, reminders, documents and admin tasks are scattered across people and tools.",
          gets: [
            "Approval workflows",
            "Notifications",
            "Task creation",
            "Document / email automation",
            "Spreadsheet / database sync",
            "Status tracking",
          ],
          connects: ["Google Workspace", "Microsoft 365", "Slack / Teams", "Email", "Sheets", "CRM"],
          outcome: "Fewer delays, fewer missed tasks, clearer responsibility.",
        },
        {
          number: "06",
          title: "Reporting & KPI Dashboard",
          problem:
            "The data exists, but business owners and managers do not see what is really happening.",
          gets: [
            "Automated daily / weekly reports",
            "KPI dashboard",
            "Sales / support / e-commerce summaries",
            "Anomaly alerts",
            "Management overview",
          ],
          connects: ["CRM", "Spreadsheets", "Web forms", "E-commerce", "Databases", "APIs"],
          outcome: "Better decisions based on visible data, not guesses.",
        },
      ],
    },
    stories: {
      eyebrow: "System stories",
      headline: "Examples of automation connected to a real business process",
      lead:
        "Honest snapshots of systems we have designed and built. We use clear labels — Real project, Pilot, Example system — and avoid fabricated metrics.",
      labels: {
        real: "Real project",
        pilot: "Pilot",
        example: "Example system",
      },
      problemLabel: "Problem",
      systemLabel: "System",
      connectsLabel: "What it connects",
      resultLabel: "Designed outcome",
      items: [
        {
          label: "pilot",
          title: "Language school chatbot",
          problem:
            "Visitors need quick answers about study options, articles and consultations, while the team needs better lead capture and insight into repeated questions.",
          system:
            "A website assistant that uses the school content and knowledge base to answer questions, summarize relevant pages, guide users to consultation, and log useful data.",
          connects: ["Website", "Knowledge base / RAG", "Consultation form", "Analytics / KPI logs", "CRM-ready architecture"],
          result:
            "Designed to reduce repeated manual answering and make consultation requests easier to capture.",
        },
        {
          label: "real",
          title: "E-commerce product upload automation",
          problem:
            "Adding products to Shoptet manually from different sources takes too much time and creates inconsistency.",
          system:
            "Input a product or source URL, extract data and images, rewrite the description, translate the content, and export a Shoptet-compatible import file.",
          connects: ["Supplier / competitor / manufacturer pages", "Image extraction", "Translation", "Shoptet XLSX import"],
          result:
            "Built to reduce manual product entry and make product creation faster and more consistent.",
        },
        {
          label: "example",
          title: "CRM + lead flow automation",
          problem:
            "Leads arrive from different channels and depend on manual follow-up.",
          system:
            "Website / email lead is captured, enriched, added to CRM, assigned to sales, followed up, and shown in a dashboard.",
          connects: ["Forms", "Email", "CRM", "Notifications", "Dashboard"],
          result:
            "Typical starting system for companies that want more control over incoming opportunities.",
        },
        {
          label: "real",
          title: "News & market intelligence aggregator",
          problem:
            "Teams need to track news sources, market signals and prices across the web, but reading and summarising it manually eats hours every day.",
          system:
            "A scheduled scraper pulls from configured RSS, news sites and price feeds. An LLM classifies, summarises and extracts entities. A small forecasting model adds short-term signals. Briefs are pushed to Telegram / WhatsApp / email and stored in a searchable history.",
          connects: ["RSS / news sites", "Price & market feeds", "Telegram", "WhatsApp / Email", "Database"],
          result:
            "Built to replace daily manual reading with a focused 5-minute brief, with full source links and replayable history.",
        },
        {
          label: "pilot",
          title: "Social content engine",
          problem:
            "Posting consistently on X / Threads / LinkedIn requires daily attention, trend-watching and creative effort that small teams cannot sustain.",
          system:
            "A pipeline scrapes trending topics, scores virality, drafts posts in your tone, schedules them, and learns from per-post performance to adapt the strategy.",
          connects: ["X (Twitter)", "Threads", "LinkedIn", "Scheduler", "Analytics"],
          result:
            "Designed to keep a small brand active several times per week without daily creative work.",
        },
        {
          label: "real",
          title: "CBAM CO₂ reporting system",
          problem:
            "EU importers must produce CBAM-ready CO₂ reports on demand, but the source data lives across the ERP, supplier docs and spreadsheets.",
          system:
            "On-request job pulls product, supplier and shipment data from the client ERP, applies CBAM emissions methodology, generates the official report, and logs every transformation for auditability. Optional model predicts upcoming credit needs.",
          connects: ["Client ERP", "Supplier docs", "Internal CBAM database", "Regulator export format"],
          result:
            "Built so a regulated CBAM report can be re-generated on demand with full transparency and an audit trail.",
        },
      ],
    },
    process: {
      eyebrow: "How we build",
      headline: "From process analysis to a stable working system",
      steps: [
        {
          number: "01",
          title: "Analysis",
          body:
            "We map your workflow, tools, bottlenecks and repetitive work. The goal is to find one process where automation creates real value.",
        },
        {
          number: "02",
          title: "System design",
          body:
            "We define what should be automated, what should stay human, which tools are involved, and how success will be measured.",
        },
        {
          number: "03",
          title: "Implementation",
          body:
            "We build, integrate, test and launch the system with clear communication and realistic milestones.",
        },
        {
          number: "04",
          title: "Support & improvement",
          body:
            "We monitor real usage, fix issues, improve flows, and expand only where it makes business sense.",
        },
      ],
      capabilitiesLabel: "Capabilities — secondary proof, not the headline",
      capabilities: [
        { group: "Automation", items: ["Make", "Zapier", "n8n"] },
        { group: "AI & LLMs", items: ["OpenAI", "Claude", "Gemini"] },
        { group: "Integrations", items: ["APIs", "Webhooks", "Databases"] },
        { group: "CRM & ERP", items: ["HubSpot", "Pipedrive", "Custom systems"] },
        { group: "E-commerce", items: ["Shoptet", "Product data", "Imports"] },
        { group: "Communication", items: ["Email", "Forms", "Chat", "WhatsApp / SMS"] },
        { group: "Analytics", items: ["Reports", "Dashboards", "KPIs"] },
        { group: "Cloud", items: ["AWS", "Google Cloud", "Azure", "Oracle Cloud"] },
      ],
    },
    why: {
      eyebrow: "Why 58 Systems",
      headline: "Why not just use a no-code tool or an AI chatbot?",
      lead:
        "Many automation projects fail because they automate one task without understanding the full process. 58 Systems starts from the workflow, then chooses the right tools.",
      pillars: [
        {
          title: "Business process first",
          body: "We understand the workflow before choosing technology.",
        },
        {
          title: "AI only where it helps",
          body:
            "We use AI for classification, drafting, summarization, extraction and assistance — not as a gimmick.",
        },
        {
          title: "Integrated by design",
          body: "The system fits into your CRM, email, sheets, website or existing tools.",
        },
        {
          title: "Built to last",
          body: "We care about logs, errors, maintainability, documentation and support.",
        },
        {
          title: "Human control",
          body: "Automation should help your team, not create a black box nobody trusts.",
        },
        {
          title: "Clear economics",
          body:
            "We focus on processes where saved time, fewer errors or faster response justify the implementation.",
        },
      ],
    },
    cta: {
      eyebrow: "Next step",
      headline: "Start with one process analysis",
      lead:
        "You do not need to know what to automate. Show us where work is slow, repetitive or unclear — we will map the process and suggest the simplest useful system.",
      deliverablesLabel: "What you get",
      deliverables: [
        "Workflow map",
        "Bottlenecks and quick wins",
        "Automation opportunities",
        "Recommended first system",
        "Rough timeline and cost range",
        "KPIs to measure success",
      ],
      chipsLabel: "What process feels manual right now?",
      chips: [
        { id: "leads", label: "Lead follow-up", prefill: "Our incoming leads come from forms / email / chat and follow-ups are slow or inconsistent. We need a single place to capture and react to them." },
        { id: "products", label: "Product upload", prefill: "Adding products to our shop / catalogue takes too long, the data lives in different sources and people make mistakes copying it." },
        { id: "support", label: "Repeated support questions", prefill: "Our support team keeps answering the same questions; we'd like to automate the easy ones and triage the rest." },
        { id: "reporting", label: "Reporting / KPIs", prefill: "We don't have a clear view of what's actually happening in the business — we want automated reports and a simple dashboard." },
        { id: "approvals", label: "Approvals & admin", prefill: "Approvals, reminders, documents and admin tasks are scattered across people and tools and they slip through the cracks." },
        { id: "news", label: "News / market tracking", prefill: "We need to track news, prices or competitor signals across the web and turn them into a short daily brief." },
        { id: "social", label: "Social posting", prefill: "We struggle to keep our social channels active; we'd like to automate trend tracking, drafts and scheduling." },
        { id: "co2", label: "CBAM / CO₂ reporting", prefill: "We need to produce CBAM CO₂ reports on demand by pulling data from our ERP and supplier documents." },
        { id: "other", label: "Something else", prefill: "" },
      ],
      form: {
        name: "Your name",
        email: "Work email",
        company: "Company",
        website: "Website (optional)",
        message: "What process feels manual, slow or messy?",
        language: "Preferred language",
        languageOptions: [
          { value: "en", label: "English" },
          { value: "cs", label: "Čeština" },
          { value: "ru", label: "Русский" },
        ],
        submit: "Book process analysis",
        submitting: "Sending…",
        success: "Thanks — we received your request and will reply within 1 business day.",
        error: "Something went wrong. Please try again or email info@58systems.com.",
        consent:
          "By submitting you agree we may contact you about your request. No spam, no newsletters.",
      },
    },
    footer: {
      tagline:
        "Business automation systems for SMBs. Practical automation, AI where it makes sense, and stable integrations for real workflows.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      links: [
        { label: "Products", href: "#systems" },
        { label: "System stories", href: "#stories" },
        { label: "Process", href: "#process" },
        { label: "Free analysis", href: "#analysis" },
        { label: "Contact", href: "#analysis" },
      ],
      copyright: `© ${new Date().getFullYear()} 58 Systems. All rights reserved.`,
    },
  },
  cs: {
    nav: {
      systems: "Produkty",
      cases: "Příběhy systémů",
      process: "Proces",
      analysis: "Bezplatná analýza",
      contact: "Kontakt",
      cta: "Objednat procesní analýzu",
    },
    hero: {
      eyebrow: "Automatizační studio pro SMB",
      headline: "Automatizační systémy pro rostoucí firmy",
      subheadline:
        "58 Systems pomáhá firmám snižovat manuální práci, propojovat nástroje a stavět stabilní automatizace v obchodu, podpoře, e-commerce a back-office — bez AI marketingu a křehkých jednorázových řešení.",
      ctaPrimary: "Objednat procesní analýzu",
      ctaSecondary: "Naše systémy",
      diagramTitle: "Spojíme vaše roztříštěné nástroje do jednoho funkčního procesu.",
      diagramInputs: "Vstupy",
      diagramCenter: "58 Systems",
      diagramOutputs: "Výstupy",
      diagramInputItems: ["Web formuláře", "E-mail", "CRM", "Tabulky", "E-commerce", "Podpora"],
      diagramOutputItems: ["Aktualizace CRM", "Notifikace pro obchod", "Follow-up", "Dashboard", "Report", "Odpověď zákazníkovi"],
      engineSubtitle: ["orchestrace", "logy", "monitoring"],
    },
    trust: {
      items: [
        "Stabilní systémy, ne dema",
        "AI jen tam, kde dává smysl",
        "Integrované do vašeho workflow",
        "Postavené s inženýrskou disciplínou",
      ],
    },
    problems: {
      eyebrow: "Problém",
      headline: "Růst přináší chaos, když procesy zůstávají manuální",
      cards: [
        {
          title: "Leady se ztrácejí",
          body:
            "Poptávky chodí z formulářů, e-mailu, chatu i telefonů, ale reakce je pomalá a follow-up nekonzistentní.",
        },
        {
          title: "Nástroje spolu nemluví",
          body:
            "CRM, tabulky, e-mail, web a podpora — každý nástroj drží jen kus stejného procesu.",
        },
        {
          title: "Lidé místo prodeje a péče přepisují data",
          body:
            "Tým ztrácí čas přesouváním dat, opisováním zpráv, kontrolou statusů a aktualizací tabulek.",
        },
        {
          title: "Management nevidí, co se děje",
          body:
            "Práce se sice odvádí, ale nikdo nemá jasný přehled o úzkých místech, časech reakcí, ztracených příležitostech ani vytížení.",
        },
      ],
    },
    values: {
      eyebrow: "Jak to děláme",
      headline: "Automatizace navržená pro reálné firemní procesy",
      lead:
        "58 Systems nestavíme AI hračky ani izolované no-code hacky. Navrhujeme automatizace, které sedí na to, jak firma reálně funguje — s jasnou odpovědností, integracemi, logy, fallbacky a dlouhodobou udržovatelností.",
      pillars: [
        {
          tag: "01",
          title: "Systematicky",
          body:
            "Než stavíme, zmapujeme celý workflow. Řešení tak podporuje skutečný proces, ne jen jednu izolovanou úlohu.",
        },
        {
          tag: "02",
          title: "Integrovaně",
          body:
            "Napojíme se na nástroje, které už používáte. Nenutíme tým pracovat v dalším odpojeném prostředí.",
        },
        {
          tag: "03",
          title: "Stabilně",
          body:
            "Stavíme s testováním, monitoringem, jasnou obsluhou chyb a podporou — od prvního dne.",
        },
        {
          tag: "04",
          title: "Ekonomicky",
          body:
            "Automatizujeme práci, která reálně šetří čas, snižuje chyby nebo zrychluje reakci.",
        },
      ],
    },
    products: {
      eyebrow: "Co stavíme",
      headline: "Systémy, kterými můžete začít",
      lead:
        "Každý systém přizpůsobíme vašim nástrojům, týmu a procesu. Začněte jedním bolestivým procesem a postupně rozšiřujte.",
      problemLabel: "Problém",
      gotLabel: "Co dostanete",
      connectsLabel: "Napojení na",
      outcomeLabel: "Výsledek",
      cardCta: "Probrat tento systém",
      items: [
        {
          number: "01",
          title: "Systém pro práci s leady",
          problem:
            "Leady chodí z formulářů, e-mailu, chatu i sociálních sítí, ale reakce je pomalá a follow-up nekonzistentní.",
          gets: [
            "Sběr leadů z formulářů / e-mailu / chatu",
            "Automatická kvalifikace",
            "Vytvoření kontaktu v CRM",
            "Notifikace pro obchod",
            "Připomínky k follow-upu",
            "Jednoduchý reporting",
          ],
          connects: ["Web formuláře", "Gmail / Workspace", "HubSpot", "Pipedrive", "Tabulky", "Slack / Teams"],
          outcome: "Rychlejší reakce, méně ztracených leadů, čistší pipeline.",
        },
        {
          number: "02",
          title: "AI obchodní asistent",
          problem:
            "Obchodníci tráví příliš mnoho času opakovanými odpověďmi, poznámkami, rešerší a připomínkami.",
          gets: [
            "Návrhy úvodních odpovědí",
            "Drafty follow-upů",
            "Shrnutí poznámek do CRM",
            "Obohacení leadu o kontext",
            "Příprava na schůzku",
            "Předání obchodníkovi",
          ],
          connects: ["CRM", "E-mail", "Kalendář", "Web formuláře", "Interní dokumenty"],
          outcome:
            "Obchod tráví víc času uzavíráním a míň administrativou. AI asistuje; rozhoduje člověk.",
        },
        {
          number: "03",
          title: "Asistent zákaznické podpory",
          problem:
            "Tým odpovídá pořád dokola na stejné otázky, zatímco zákazníci čekají.",
          gets: [
            "Webový / chatový asistent",
            "Odpovědi z FAQ a znalostní báze",
            "Třídění ticketů",
            "Předání člověku",
            "Logování konverzací",
            "Analytika opakovaných dotazů",
          ],
          connects: ["Web", "Helpdesk", "Znalostní báze", "CRM", "Tabulky", "E-mail"],
          outcome: "Rychlejší odpovědi, menší zátěž podpory, lepší zákaznický zážitek.",
        },
        {
          number: "04",
          title: "Automatický import produktů (e-commerce)",
          problem:
            "Ruční přidávání produktů z různých zdrojů je pomalé, repetitivní a chybové.",
          gets: [
            "Vstup URL produktu / zdroje",
            "Extrakce dat o produktu",
            "Sběr obrázků",
            "Přepsané popisy",
            "Překlady",
            "Importní XLSX pro Shoptet",
            "Kontrola před importem",
          ],
          connects: ["Shoptet", "Stránky dodavatelů", "Stránky výrobců", "Tabulky", "Úložiště obrázků"],
          outcome: "Produkty jsou online rychleji, s menším množstvím ruční práce a chyb.",
        },
        {
          number: "05",
          title: "Automatizace interního provozu",
          problem:
            "Schvalování, připomínky, dokumenty a administrativa jsou roztroušené mezi lidmi a nástroji.",
          gets: [
            "Schvalovací workflow",
            "Notifikace",
            "Vytváření úkolů",
            "Automatizace dokumentů / e-mailů",
            "Synchronizace tabulek a databází",
            "Sledování stavu",
          ],
          connects: ["Google Workspace", "Microsoft 365", "Slack / Teams", "E-mail", "Tabulky", "CRM"],
          outcome: "Méně zdržení, méně zapomenutých úkolů, jasnější odpovědnost.",
        },
        {
          number: "06",
          title: "Reporting a KPI dashboard",
          problem:
            "Data existují, ale majitelé a manažeři reálně nevidí, co se děje.",
          gets: [
            "Automatické denní / týdenní reporty",
            "KPI dashboard",
            "Souhrny obchod / podpora / e-commerce",
            "Upozornění na anomálie",
            "Manažerský přehled",
          ],
          connects: ["CRM", "Tabulky", "Web formuláře", "E-commerce", "Databáze", "API"],
          outcome: "Lepší rozhodování na základě viditelných dat — ne odhadů.",
        },
      ],
    },
    stories: {
      eyebrow: "Příběhy systémů",
      headline: "Příklady automatizace napojené na reálný proces",
      lead:
        "Poctivé ukázky systémů, které jsme navrhli a postavili. Používáme jasné štítky — Reálný projekt, Pilot, Příkladový systém — a vyhýbáme se vymyšleným číslům.",
      labels: {
        real: "Reálný projekt",
        pilot: "Pilot",
        example: "Příkladový systém",
      },
      problemLabel: "Problém",
      systemLabel: "Systém",
      connectsLabel: "Co propojuje",
      resultLabel: "Cílený výsledek",
      items: [
        {
          label: "pilot",
          title: "Chatbot pro jazykovou školu",
          problem:
            "Návštěvníci potřebují rychlé odpovědi o studiu, článcích a konzultacích, tým chce lepší sběr leadů a přehled o opakovaných dotazech.",
          system:
            "Webový asistent využívá obsah školy a znalostní bázi — odpovídá na otázky, shrnuje relevantní stránky, vede uživatele ke konzultaci a loguje užitečná data.",
          connects: ["Web", "Znalostní báze / RAG", "Formulář konzultace", "Analytika / KPI logy", "Architektura připravená pro CRM"],
          result:
            "Cílem je snížit opakované manuální odpovídání a usnadnit sběr požadavků na konzultaci.",
        },
        {
          label: "real",
          title: "Automatický upload produktů (e-commerce)",
          problem:
            "Ruční přidávání produktů do Shoptetu z různých zdrojů zabírá příliš mnoho času a vede k nekonzistencím.",
          system:
            "Vložte URL produktu nebo zdroje — systém extrahuje data a obrázky, přepíše popis, přeloží obsah a vyexportuje import pro Shoptet.",
          connects: ["Stránky dodavatelů / konkurence / výrobců", "Extrakce obrázků", "Překlad", "Importní XLSX pro Shoptet"],
          result:
            "Postaveno tak, aby snížilo manuální zadávání produktů a zrychlilo a zkonzistentnilo jejich tvorbu.",
        },
        {
          label: "example",
          title: "CRM + tok leadů",
          problem:
            "Leady přicházejí z různých kanálů a závisí na manuálním follow-upu.",
          system:
            "Web/e-mail lead je sebrán, obohacen, vložen do CRM, přiřazen obchodu, dále zpracován a viditelný v dashboardu.",
          connects: ["Formuláře", "E-mail", "CRM", "Notifikace", "Dashboard"],
          result:
            "Typický startovní systém pro firmy, které chtějí mít víc kontroly nad přílivem příležitostí.",
        },
        {
          label: "real",
          title: "Agregátor zpráv a tržních dat",
          problem:
            "Týmy musí sledovat zpravodajské zdroje, tržní signály a ceny napříč webem, ale ruční čtení a sumarizace zabírá hodiny denně.",
          system:
            "Naplánovaný scraper stahuje data z RSS, news webů a cenových zdrojů. LLM klasifikuje, sumarizuje a extrahuje entity. Malý prediktivní model přidá krátkodobé signály. Souhrny chodí na Telegram / WhatsApp / e-mail a ukládají se do prohledávatelné historie.",
          connects: ["RSS / zpravodajské weby", "Cenové a tržní feedy", "Telegram", "WhatsApp / E-mail", "Databáze"],
          result:
            "Postaveno tak, aby nahradilo denní ruční čtení 5minutovým souhrnem s odkazy na zdroje a historií.",
        },
        {
          label: "pilot",
          title: "Engine pro sociální obsah",
          problem:
            "Pravidelné publikování na X / Threads / LinkedIn vyžaduje denní pozornost, sledování trendů a kreativní práci, což si malé týmy nemůžou dovolit.",
          system:
            "Pipeline scrapuje trendující témata, skóruje virálnost, generuje drafty postů ve vašem tónu, plánuje publikaci a učí se z výkonu jednotlivých postů.",
          connects: ["X (Twitter)", "Threads", "LinkedIn", "Plánovač", "Analytika"],
          result:
            "Cílem je udržet značku aktivní několikrát týdně bez denní kreativní práce.",
        },
        {
          label: "real",
          title: "CBAM CO₂ reporting",
          problem:
            "EU dovozci musí na vyžádání produkovat CBAM-ready reporty CO₂, ale zdrojová data jsou roztroušená v ERP, dokladech od dodavatelů a tabulkách.",
          system:
            "Job na vyžádání stáhne data o produktech, dodavatelích a zásilkách z ERP klienta, aplikuje CBAM metodiku emisí, vygeneruje oficiální report a uloží každou transformaci pro audit. Volitelný model předpovídá potřebu kreditů.",
          connects: ["ERP klienta", "Dokumenty dodavatelů", "Interní CBAM databáze", "Exportní formát regulátora"],
          result:
            "Postaveno tak, aby regulační CBAM report šel kdykoliv znovu vygenerovat s plnou transparencí a audit trailem.",
        },
      ],
    },
    process: {
      eyebrow: "Jak stavíme",
      headline: "Od procesní analýzy k stabilnímu funkčnímu systému",
      steps: [
        {
          number: "01",
          title: "Analýza",
          body:
            "Zmapujeme váš workflow, nástroje, úzká místa a opakovanou práci. Cílem je najít proces, kde automatizace přinese reálnou hodnotu.",
        },
        {
          number: "02",
          title: "Návrh systému",
          body:
            "Definujeme, co automatizovat, co nechat na člověku, jaké nástroje zapojit a jak měřit úspěch.",
        },
        {
          number: "03",
          title: "Implementace",
          body:
            "Stavíme, integrujeme, testujeme a spouštíme systém. S jasnou komunikací a reálnými milníky.",
        },
        {
          number: "04",
          title: "Podpora a zlepšování",
          body:
            "Sledujeme reálné používání, opravujeme problémy, vylepšujeme procesy a rozšiřujeme jen tam, kde to dává byznysový smysl.",
        },
      ],
      capabilitiesLabel: "Technologie — sekundární důkaz, ne hlavní zpráva",
      capabilities: [
        { group: "Automatizace", items: ["Make", "Zapier", "n8n"] },
        { group: "AI & LLM", items: ["OpenAI", "Claude", "Gemini"] },
        { group: "Integrace", items: ["API", "Webhooks", "Databáze"] },
        { group: "CRM & ERP", items: ["HubSpot", "Pipedrive", "Custom systémy"] },
        { group: "E-commerce", items: ["Shoptet", "Produktová data", "Importy"] },
        { group: "Komunikace", items: ["E-mail", "Formuláře", "Chat", "WhatsApp / SMS"] },
        { group: "Analytika", items: ["Reporty", "Dashboardy", "KPI"] },
        { group: "Cloud", items: ["AWS", "Google Cloud", "Azure", "Oracle Cloud"] },
      ],
    },
    why: {
      eyebrow: "Proč 58 Systems",
      headline: "Proč nestačí jenom no-code nástroj nebo AI chatbot?",
      lead:
        "Spousta automatizací selhává, protože automatizují jednu úlohu, aniž by chápaly celý proces. 58 Systems začínáme od workflow a teprve potom vybíráme nástroje.",
      pillars: [
        {
          title: "Nejdřív proces",
          body: "Než vybereme technologii, rozumíme workflow.",
        },
        {
          title: "AI jen tam, kde pomáhá",
          body:
            "AI používáme na klasifikaci, drafty, shrnutí, extrakci a asistenci — ne jako efekt.",
        },
        {
          title: "Integrované od začátku",
          body: "Systém zapadne do vašeho CRM, e-mailu, tabulek, webu a stávajících nástrojů.",
        },
        {
          title: "Postavené na delší dobu",
          body: "Záleží nám na lozích, chybách, udržovatelnosti, dokumentaci a podpoře.",
        },
        {
          title: "Kontrolu má člověk",
          body: "Automatizace má pomáhat týmu, ne tvořit black box, kterému nikdo nevěří.",
        },
        {
          title: "Jasná ekonomika",
          body:
            "Soustředíme se na procesy, kde ušetřený čas, méně chyb nebo rychlejší reakce ospravedlní implementaci.",
        },
      ],
    },
    cta: {
      eyebrow: "Další krok",
      headline: "Začněte jednou procesní analýzou",
      lead:
        "Nemusíte vědět, co automatizovat. Ukažte nám, kde je práce pomalá, repetitivní nebo nepřehledná — proces zmapujeme a navrhneme nejjednodušší užitečný systém.",
      deliverablesLabel: "Co dostanete",
      deliverables: [
        "Mapa workflow",
        "Úzká místa a quick-wins",
        "Příležitosti pro automatizaci",
        "Doporučený první systém",
        "Hrubý odhad termínu a ceny",
        "KPI pro měření úspěchu",
      ],
      chipsLabel: "Jaký proces vám teď připadá manuální?",
      chips: [
        { id: "leads", label: "Práce s leady", prefill: "Leady k nám chodí z formulářů / e-mailu / chatu a follow-up je pomalý nebo nekonzistentní. Chceme je sbírat a reagovat na ně z jednoho místa." },
        { id: "products", label: "Nahrávání produktů", prefill: "Přidávání produktů do našeho e-shopu / katalogu trvá moc dlouho, data jsou v různých zdrojích a lidé dělají chyby při přepisování." },
        { id: "support", label: "Opakované dotazy v podpoře", prefill: "Náš support pořád odpovídá na stejné věci. Rádi bychom ty jednoduché automatizovali a zbytek triagovali." },
        { id: "reporting", label: "Reporting / KPI", prefill: "Nemáme jasný přehled o tom, co se ve firmě reálně děje — chceme automatické reporty a jednoduchý dashboard." },
        { id: "approvals", label: "Schvalování a administrativa", prefill: "Schvalování, připomínky, dokumenty a administrativa jsou roztroušené mezi lidmi a nástroji a často nám utíkají." },
        { id: "news", label: "Sledování zpráv / trhu", prefill: "Potřebujeme sledovat zprávy, ceny nebo signály od konkurence napříč webem a převést je do krátkého denního souhrnu." },
        { id: "social", label: "Sociální sítě", prefill: "Nestíháme udržet aktivitu na sociálních sítích — chtěli bychom automatizovat sledování trendů, drafty a plánování." },
        { id: "co2", label: "CBAM / CO₂ reporting", prefill: "Potřebujeme generovat CBAM reporty CO₂ na vyžádání tažením dat z našeho ERP a dokumentů od dodavatelů." },
        { id: "other", label: "Něco jiného", prefill: "" },
      ],
      form: {
        name: "Jméno",
        email: "Pracovní e-mail",
        company: "Firma",
        website: "Web (volitelné)",
        message: "Jaký proces vám připadá manuální, pomalý nebo nepřehledný?",
        language: "Preferovaný jazyk",
        languageOptions: [
          { value: "en", label: "English" },
          { value: "cs", label: "Čeština" },
          { value: "ru", label: "Русский" },
        ],
        submit: "Objednat procesní analýzu",
        submitting: "Odesílání…",
        success: "Děkujeme — poptávku jsme přijali, ozveme se do 1 pracovního dne.",
        error: "Něco se nepovedlo. Zkuste to prosím znovu nebo napište na info@58systems.com.",
        consent:
          "Odesláním souhlasíte s tím, že vás můžeme kontaktovat ohledně vaší poptávky. Žádný spam, žádné newslettery.",
      },
    },
    footer: {
      tagline:
        "Automatizační systémy pro malé a střední firmy. Praktická automatizace, AI tam, kde dává smysl, a stabilní integrace pro reálné workflow.",
      navTitle: "Navigace",
      contactTitle: "Kontakt",
      links: [
        { label: "Produkty", href: "#systems" },
        { label: "Příběhy systémů", href: "#stories" },
        { label: "Proces", href: "#process" },
        { label: "Bezplatná analýza", href: "#analysis" },
        { label: "Kontakt", href: "#analysis" },
      ],
      copyright: `© ${new Date().getFullYear()} 58 Systems. Všechna práva vyhrazena.`,
    },
  },
};

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "cs", label: "CS" },
];
