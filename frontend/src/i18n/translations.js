// 58 Systems — bilingual content (English / Czech)
// Single source of truth for all on-page copy.
// Keep keys identical across languages.

export const translations = {
  en: {
    nav: {
      systems: "Products",
      cases: "Work examples",
      process: "Process",
      analysis: "Free analysis",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "For growing businesses",
      headline: "We help growing businesses remove operational chaos",
      subheadline:
        "Lost leads, manual spreadsheets, unanswered customer emails, scattered supplier data, numbers nobody can find — we build simple systems to fix the part that hurts most.",
      ctaPrimary: "Let's discuss your process",
      ctaSecondary: "See what we build",
      diagramTitle: "We connect your scattered tools into one working process.",
      diagramInputs: "Inputs",
      diagramCenter: "58 Systems",
      diagramOutputs: "Outputs",
      diagramInputItems: ["Web forms", "Email", "CRM", "Sheets", "E-commerce", "Support"],
      diagramOutputItems: ["CRM update", "Sales alert", "Follow-up", "Dashboard", "Report", "Customer reply"],
      engineSubtitle: ["organize", "connect", "automate"],
    },
    trust: {
      items: [
        "Real systems, not demos",
        "AI only where it makes sense",
        "Works with your existing tools",
        "Built to work, not just to impress",
      ],
    },
    problems: {
      eyebrow: "Where things break down",
      headline: "When the business grows, the chaos grows with it",
      cards: [
        {
          title: "Lost leads and slow replies",
          body:
            "Requests arrive from website forms, emails, calls or WhatsApp. Replies are slow, follow-ups get missed, and nobody knows who responded — or whether anyone did.",
        },
        {
          title: "Too much manual work",
          body:
            "Your team copies data between tools, updates spreadsheets by hand, and sends the same message from five different places. Admin work eats the day.",
        },
        {
          title: "Customer questions pile up",
          body:
            "The same questions come in every day. Emails pile up. Replies take too long. Everyone is busy, but customers are left waiting.",
        },
        {
          title: "Supplier and ordering chaos",
          body:
            "Supplier emails, quotes, orders and approvals sit in different inboxes. Nobody has a central view of what was sent, agreed or still pending.",
        },
        {
          title: "No visibility into what is happening",
          body:
            "Data exists but it is scattered across spreadsheets, CRM and inboxes. Nobody has a clear view of what is working, what is slow, or what is getting missed.",
        },
      ],
    },
    values: {
      eyebrow: "How we work",
      headline: "We organize the process before we touch any tools",
      lead:
        "58 Systems does not build AI toys or quick hacks. We learn how your company actually works, then build automation around it — transparent, reliable, and made for real people to use every day.",
      pillars: [
        {
          tag: "01",
          title: "Process first, tools second",
          body:
            "We map the full workflow before writing a single line of code, so the solution supports the real process — not just one isolated task.",
        },
        {
          tag: "02",
          title: "Works with what you already have",
          body:
            "We connect tools your team already uses. No new platforms to learn, no second inbox to check.",
        },
        {
          tag: "03",
          title: "Reliable by design",
          body:
            "We build things that actually work when you need them — not just during the demo, but every day after.",
        },
        {
          tag: "04",
          title: "Only where it actually makes sense",
          body:
            "We focus on automating work that saves real time, reduces mistakes or speeds up your response to customers.",
        },
      ],
    },
    claude: {
      eyebrow: "AI & Claude",
      headline: "Want to use Claude or AI inside your business?",
      lead:
        "Claude alone is useful. Claude connected to your CRM, email, documents and existing workflows is much more useful. 58 Systems connects AI tools to the processes where they actually help — so your team gets better output without managing another tool.",
      note: "AI should assist your team, not create another black box.",
      useCasesLabel: "What AI helps with",
      useCases: [
        { title: "Draft replies", body: "From CRM context, email history or customer data." },
        { title: "Summarize communication", body: "Long threads, call notes or support tickets — turned into a brief." },
        { title: "Search internal documents", body: "Find answers across manuals, SOPs, policies and knowledge bases." },
        { title: "Prepare follow-ups", body: "Suggested next steps based on CRM history and open items." },
        { title: "Classify incoming requests", body: "Route tickets, leads or emails by type or priority — automatically." },
        { title: "Extract data from documents", body: "Invoices, orders, forms, PDFs — structured into your systems." },
      ],
    },
    products: {
      eyebrow: "What we build",
      headline: "Start with one process",
      lead:
        "Each system is built around your tools, your team, and the real problem. Start with one, expand when ready.",
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
            "Sales people spend too much time on repetitive replies, notes and reminders instead of closing deals.",
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
            "Sales spends more time closing and less on admin. AI drafts and prepares; humans decide.",
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
          title: "Supplier & Procurement Workflow",
          problem:
            "Supplier emails, quotes, orders, approvals and product data are scattered across inboxes, spreadsheets and people.",
          gets: [
            "Supplier email tracking",
            "Quote / RFQ collection",
            "Order tracking and status",
            "Approval workflows",
            "Product and supplier data",
            "Reminders and follow-ups",
            "Simple reporting",
          ],
          connects: ["Email", "Spreadsheets", "Supplier portals", "ERP / inventory", "Slack / Teams", "CRM"],
          outcome: "Clearer supplier communication, fewer missed orders, faster comparison and less manual chasing.",
        },
        {
          number: "06",
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
          number: "07",
          title: "Reporting & Visibility Dashboard",
          problem:
            "The data exists, but business owners and managers cannot see what is really happening.",
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
      eyebrow: "Real work",
      headline: "Examples from projects we have worked on",
      lead:
        "Honest descriptions of systems we have designed and built. Each one has a real business problem behind it.",
      labels: {
        real: "Real project",
        pilot: "Pilot",
        example: "Example system",
      },
      problemLabel: "Problem",
      systemLabel: "System",
      connectsLabel: "What it connects",
      resultLabel: "Outcome",
      items: [
        {
          label: "example",
          title: "CRM + lead flow automation",
          problem:
            "Leads arrive from different channels and depend on manual follow-up. Things get missed.",
          system:
            "Website / email lead is captured, enriched, added to CRM, assigned to sales, followed up automatically, and visible in a dashboard.",
          connects: ["Forms", "Email", "CRM", "Notifications", "Dashboard"],
          result:
            "Typical starting system for companies that want more control over incoming opportunities.",
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
          label: "pilot",
          title: "Language school customer assistant",
          problem:
            "Visitors need quick answers about study options and consultations, while the team needs better lead capture and insight into repeated questions.",
          system:
            "A website assistant that uses the school content and knowledge base to answer questions, guide users to consultation, and log useful data for the team.",
          connects: ["Website", "Knowledge base", "Consultation form", "Analytics", "CRM-ready architecture"],
          result:
            "Designed to reduce repeated manual answering and make consultation requests easier to capture.",
        },
        {
          label: "example",
          title: "Supplier & procurement workflow",
          problem:
            "Supplier emails, quotes and order approvals sit in people's inboxes. Nobody has a central view of what was sent, answered or still pending.",
          system:
            "Incoming supplier emails are captured and logged. Quotes are compared in a shared view. Approval requests go through a simple workflow. Order status is tracked automatically.",
          connects: ["Email", "Spreadsheets / ERP", "Approval workflow", "Status tracking", "Notifications"],
          result:
            "Designed to replace ad-hoc inbox management with a clear, shared process for supplier communication.",
        },
        {
          label: "real",
          title: "News & market intelligence aggregator",
          problem:
            "Teams need to track news sources, market signals and prices across the web, but reading and summarising it manually eats hours every day.",
          system:
            "A scheduled job pulls from configured RSS, news sites and price feeds. AI classifies, summarises and extracts key information. Briefs are pushed to Telegram / WhatsApp / email and stored in a searchable history.",
          connects: ["RSS / news sites", "Price & market feeds", "Telegram", "WhatsApp / Email", "Database"],
          result:
            "Built to replace daily manual reading with a focused 5-minute brief, with full source links and history.",
        },
        {
          label: "real",
          title: "CBAM CO₂ reporting system",
          problem:
            "EU importers must produce CBAM-ready CO₂ reports on demand, but the source data lives across the ERP, supplier docs and spreadsheets.",
          system:
            "On-request job pulls product, supplier and shipment data from the client ERP, applies CBAM emissions methodology, generates the official report, and logs every transformation for auditability.",
          connects: ["Client ERP", "Supplier docs", "Internal CBAM database", "Regulator export format"],
          result:
            "Built so a regulated CBAM report can be re-generated on demand with full transparency and an audit trail.",
        },
        {
          label: "pilot",
          title: "Social content engine",
          problem:
            "Posting consistently on X / Threads / LinkedIn requires daily attention and creative effort that small teams cannot sustain.",
          system:
            "A pipeline scrapes trending topics, drafts posts in your tone, schedules them, and learns from per-post performance to adapt the strategy.",
          connects: ["X (Twitter)", "Threads", "LinkedIn", "Scheduler", "Analytics"],
          result:
            "Designed to keep a small brand active several times per week without daily creative work.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      headline: "From a messy process to a working system",
      steps: [
        {
          number: "01",
          title: "Analysis",
          body:
            "We map your workflow, tools, bottlenecks and repetitive work. The goal is to find one process where the change creates real value.",
        },
        {
          number: "02",
          title: "System design",
          body:
            "We define what to automate, what stays human, which tools are involved, and how success will be measured.",
        },
        {
          number: "03",
          title: "Implementation",
          body:
            "We build, connect, test and launch the system with clear communication and realistic milestones.",
        },
        {
          number: "04",
          title: "Support & improvement",
          body:
            "We monitor real usage, fix issues, improve flows, and expand only where it makes business sense.",
        },
      ],
      capabilitiesLabel: "Tools we connect",
      capabilities: [
        { group: "CRM & Sales", items: ["HubSpot", "Pipedrive", "Custom CRM"] },
        { group: "Workspace", items: ["Google Workspace", "Microsoft 365", "Slack / Teams"] },
        { group: "E-commerce", items: ["Shoptet", "Product data", "Imports"] },
        { group: "Automation", items: ["Make", "n8n", "Zapier"] },
        { group: "AI", items: ["Claude", "OpenAI", "Gemini"] },
        { group: "Communication", items: ["Email", "Forms", "WhatsApp / SMS", "Chat"] },
        { group: "Analytics", items: ["Dashboards", "Reports", "KPIs"] },
        { group: "Technical", items: ["APIs", "Databases", "Webhooks"] },
      ],
    },
    why: {
      eyebrow: "Why 58 Systems",
      headline: "Why can't you just use a no-code tool or an AI chatbot?",
      lead:
        "Many automation projects fail because they automate one task without understanding how the business actually works. We start from the process.",
      pillars: [
        {
          title: "Process before technology",
          body: "We understand the workflow before recommending any solution.",
        },
        {
          title: "AI only where it helps",
          body:
            "We use AI where it actually helps — drafting, summarizing, answering questions, sorting data. Not because it is trendy.",
        },
        {
          title: "Built around your tools",
          body: "The system fits into your CRM, email, sheets, website or the tools your team already knows.",
        },
        {
          title: "Reliable, not just a demo",
          body: "We build things that actually work when you need them — not just during the presentation.",
        },
        {
          title: "Human control",
          body: "Automation should help your team, not create a black box nobody trusts.",
        },
        {
          title: "Clear economics",
          body:
            "We focus on processes where saved time, fewer errors or faster response justify the work.",
        },
      ],
    },
    cta: {
      eyebrow: "Free process review",
      headline: "Start with one process",
      lead:
        "You don't need to know what to automate. Show us where work is slow, repetitive or unclear — we'll map it and suggest the simplest useful first step.",
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
        { id: "suppliers", label: "Supplier / ordering", prefill: "Supplier emails, quotes and orders are scattered across inboxes and spreadsheets. We'd like a clearer view of what is pending and what has been agreed." },
        { id: "reporting", label: "Reporting / KPIs", prefill: "We don't have a clear view of what's actually happening in the business — we want automated reports and a simple dashboard." },
        { id: "approvals", label: "Approvals & admin", prefill: "Approvals, reminders, documents and admin tasks are scattered across people and tools and they slip through the cracks." },
        { id: "news", label: "News / market tracking", prefill: "We need to track news, prices or competitor signals across the web and turn them into a short daily brief." },
        { id: "social", label: "Social posting", prefill: "We struggle to keep our social channels active; we'd like to automate trend tracking, drafts and scheduling." },
        { id: "co2", label: "CBAM / CO₂ reporting", prefill: "We need to produce CBAM CO₂ reports on demand by pulling data from our ERP and supplier documents." },
        { id: "other", label: "Something else", prefill: "" },
      ],
      form: {
        title: "Let's talk about your process",
        subtitle: "Free process review. No commitment.",
        name: "Your name",
        email: "Email",
        company: "Company",
        website: "Website (optional)",
        message: "What process feels manual, slow or messy?",
        language: "Preferred language",
        languageOptions: [
          { value: "en", label: "English" },
          { value: "cs", label: "Čeština" },
          { value: "ru", label: "Русский" },
        ],
        submit: "Send your request",
        submitting: "Sending…",
        success: "Thanks — we received your request and will reply within 1 business day.",
        error: "Something went wrong. Please try again or email info@58systems.com.",
        consent:
          "By submitting you agree we may contact you about your request. No spam, no newsletters.",
      },
    },
    footer: {
      tagline:
        "Business systems for growing companies. Practical automation, clear processes, and tools that work together.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      links: [
        { label: "Products", href: "#systems" },
        { label: "Work examples", href: "#stories" },
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
      cases: "Ukázky práce",
      process: "Proces",
      analysis: "Bezplatná analýza",
      contact: "Kontakt",
      cta: "Promluvme si",
    },
    hero: {
      eyebrow: "Pro rostoucí firmy",
      headline: "Pomáháme rostoucím firmám dostat chaos pod kontrolu",
      subheadline:
        "Ztracené poptávky, ruční tabulky, hromady e-mailů od zákazníků, chaos u dodavatelů, čísla, která nikdo nevidí — stavíme jednoduché systémy kolem procesů, které nejvíc bolí.",
      ctaPrimary: "Promluvme si o vašem procesu",
      ctaSecondary: "Naše systémy",
      diagramTitle: "Spojíme vaše roztříštěné nástroje do jednoho funkčního procesu.",
      diagramInputs: "Vstupy",
      diagramCenter: "58 Systems",
      diagramOutputs: "Výstupy",
      diagramInputItems: ["Web formuláře", "E-mail", "CRM", "Tabulky", "E-commerce", "Podpora"],
      diagramOutputItems: ["Aktualizace CRM", "Notifikace pro obchod", "Follow-up", "Dashboard", "Report", "Odpověď zákazníkovi"],
      engineSubtitle: ["organizace", "propojení", "automatizace"],
    },
    trust: {
      items: [
        "Skutečné systémy, ne ukázky",
        "AI jen tam, kde dává smysl",
        "Funguje s nástroji, které už máte",
        "Postavené na to, aby skutečně fungovalo",
      ],
    },
    problems: {
      eyebrow: "Kde věci skřípou",
      headline: "Čím víc firma roste, tím víc věcí vypadá mezi prsty",
      cards: [
        {
          title: "Ztracené poptávky a pomalé reakce",
          body:
            "Poptávky chodí z formulářů, e-mailů, telefonů i WhatsAppu. Odpovědi jsou pomalé, follow-up se nehlídá a nikdo neví, jestli vůbec někdo zareagoval — nebo kdo.",
        },
        {
          title: "Příliš mnoho ruční práce",
          body:
            "Tým přepisuje data mezi nástroji, ručně aktualizuje tabulky a odesílá stejnou zprávu z pěti různých míst. Administrativa žere den.",
        },
        {
          title: "Zákazníci čekají na odpovědi",
          body:
            "Stejné dotazy chodí každý den. E-maily se hromadí. Odpovědi přicházejí pozdě. Každý je zaneprázdněný, ale zákazníci čekají.",
        },
        {
          title: "Chaos u dodavatelů a objednávek",
          body:
            "E-maily od dodavatelů, nabídky, objednávky a schvalování sedí v různých schránkách. Nikdo nemá přehled, co bylo odesláno, dohodnuto nebo stále čeká.",
        },
        {
          title: "Firma se řídí odhadem, ne daty",
          body:
            "Data existují, ale jsou roztroušená v tabulkách, CRM a e-mailech. Nikdo nemá jasný přehled, co funguje, kde jsou zpoždění a co se ztrácí.",
        },
      ],
    },
    values: {
      eyebrow: "Jak pracujeme",
      headline: "Nejdřív zmapujeme proces, pak sáhneme na nástroje",
      lead:
        "58 Systems nestavíme AI hračky ani rychlé záplaty. Naučíme se, jak vaše firma reálně funguje, a pak postavíme automatizaci kolem toho — srozumitelnou, spolehlivou a takovou, aby ji lidé skutečně používali každý den.",
      pillars: [
        {
          tag: "01",
          title: "Nejdřív proces, pak nástroj",
          body:
            "Než začneme stavět, zmapujeme celý průběh. Řešení pak sedí na skutečný proces, ne jen na jednu izolovanou část.",
        },
        {
          tag: "02",
          title: "Pracujeme s tím, co máte",
          body:
            "Napojíme se na nástroje, které váš tým už používá. Žádné nové platformy, žádná druhá schránka na hlídání.",
        },
        {
          tag: "03",
          title: "Spolehlivé od prvního dne",
          body:
            "Stavíme věci, které skutečně fungují, když je potřebujete — nejen při ukázce, ale každý den po ní.",
        },
        {
          tag: "04",
          title: "Jen tam, kde to má smysl",
          body:
            "Automatizujeme práci, která reálně šetří čas, snižuje chyby nebo zrychluje odpověď zákazníkům.",
        },
      ],
    },
    claude: {
      eyebrow: "AI & Claude",
      headline: "Chcete využít Claude nebo AI ve vaší firmě?",
      lead:
        "Claude sám o sobě je užitečný. Claude napojený na váš CRM, e-mail, dokumenty a stávající workflow je mnohem užitečnější. 58 Systems propojí AI nástroje s procesy, kde skutečně pomáhají — váš tým dostane lepší výstupy, aniž by spravoval další nástroj.",
      note: "AI má asistovat vašemu týmu, ne tvořit další black box.",
      useCasesLabel: "Kde AI pomáhá",
      useCases: [
        { title: "Návrhy odpovědí", body: "Z kontextu CRM, e-mailové historie nebo zákaznických dat." },
        { title: "Shrnutí komunikace", body: "Dlouhá vlákna, poznámky z hovorů nebo tickety — zhutněné do podstaty." },
        { title: "Vyhledávání v dokumentech", body: "Odpovědi napříč manuály, procesy, pravidly a znalostními bázemi." },
        { title: "Příprava follow-upů", body: "Navrhované kroky na základě CRM historie a otevřených úkolů." },
        { title: "Třídění příchozích požadavků", body: "Automatické směrování ticketů, leadů nebo e-mailů podle typu nebo priority." },
        { title: "Extrakce dat z dokumentů", body: "Faktury, objednávky, formuláře, PDF — strukturovaně do vašich systémů." },
      ],
    },
    products: {
      eyebrow: "Co stavíme",
      headline: "Začněte jedním procesem",
      lead:
        "Každý systém stavíme kolem vašich nástrojů, vašeho týmu a skutečného problému. Začněte jedním, rozšiřujte, když budete připraveni.",
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
            "Obchodníci tráví příliš mnoho času opakovanými odpověďmi, poznámkami a připomínkami místo uzavírání obchodů.",
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
            "Obchod tráví víc času uzavíráním a míň administrativou. AI navrhuje a připravuje; rozhoduje člověk.",
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
          title: "Workflow nákupu a dodavatelů",
          problem:
            "E-maily od dodavatelů, nabídky, objednávky, schvalování a produktová data jsou roztroušené v e-mailech, tabulkách a mezi různými lidmi.",
          gets: [
            "Sledování e-mailů od dodavatelů",
            "Sběr nabídek a poptávek",
            "Sledování objednávek a stavů",
            "Schvalovací workflow",
            "Data o produktech a dodavatelích",
            "Připomínky a follow-upy",
            "Jednoduchý reporting",
          ],
          connects: ["E-mail", "Tabulky", "Portály dodavatelů", "ERP / sklad", "Slack / Teams", "CRM"],
          outcome: "Přehlednější komunikace s dodavateli, méně promeškáných objednávek a méně ručního honičení.",
        },
        {
          number: "06",
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
          number: "07",
          title: "Reporting a přehled pro vedení",
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
      eyebrow: "Ukázky práce",
      headline: "Příklady ze skutečných projektů",
      lead:
        "Poctivé popisy systémů, které jsme navrhli a postavili. Každý vychází z reálného problému.",
      labels: {
        real: "Reálný projekt",
        pilot: "Pilot",
        example: "Příkladový systém",
      },
      problemLabel: "Problém",
      systemLabel: "Systém",
      connectsLabel: "Co propojuje",
      resultLabel: "Výsledek",
      items: [
        {
          label: "example",
          title: "CRM + tok leadů",
          problem:
            "Leady přicházejí z různých kanálů a závisí na manuálním follow-upu. Věci propadají.",
          system:
            "Web/e-mail lead je sebrán, obohacen, vložen do CRM, přiřazen obchodu, automaticky zpracován a viditelný v dashboardu.",
          connects: ["Formuláře", "E-mail", "CRM", "Notifikace", "Dashboard"],
          result:
            "Typický startovní systém pro firmy, které chtějí mít víc kontroly nad přílivem příležitostí.",
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
          label: "pilot",
          title: "Zákaznický asistent pro jazykovou školu",
          problem:
            "Návštěvníci potřebují rychlé odpovědi o studiu a konzultacích, tým chce lepší sběr leadů a přehled o opakovaných dotazech.",
          system:
            "Webový asistent využívá obsah školy a znalostní bázi — odpovídá na otázky, vede uživatele ke konzultaci a loguje užitečná data pro tým.",
          connects: ["Web", "Znalostní báze", "Formulář konzultace", "Analytika", "Architektura připravená pro CRM"],
          result:
            "Cílem je snížit opakované manuální odpovídání a usnadnit sběr požadavků na konzultaci.",
        },
        {
          label: "example",
          title: "Workflow nákupu a dodavatelů",
          problem:
            "E-maily od dodavatelů, nabídky a schvalování objednávek se hromadí v různých schránkách. Nikdo nemá přehled, co bylo odesláno, zodpovězeno nebo stále čeká.",
          system:
            "Příchozí e-maily od dodavatelů se zachytí a zalogují. Nabídky se porovnají v přehledném pohledu. Žádosti o schválení projdou jednoduchým workflow. Stav objednávek se sleduje automaticky.",
          connects: ["E-mail", "Tabulky / ERP", "Schvalovací workflow", "Sledování stavu", "Notifikace"],
          result:
            "Cílem je nahradit ad-hoc správu doručené pošty jasným, sdíleným procesem pro komunikaci s dodavateli.",
        },
        {
          label: "real",
          title: "Agregátor zpráv a tržních dat",
          problem:
            "Týmy musí sledovat zpravodajské zdroje, tržní signály a ceny napříč webem, ale ruční čtení a sumarizace zabírá hodiny denně.",
          system:
            "Naplánovaná úloha stahuje data z RSS, zpravodajských webů a cenových zdrojů. AI klasifikuje, sumarizuje a extrahuje klíčové informace. Souhrny chodí na Telegram / WhatsApp / e-mail a ukládají se do prohledávatelné historie.",
          connects: ["RSS / zpravodajské weby", "Cenové a tržní feedy", "Telegram", "WhatsApp / E-mail", "Databáze"],
          result:
            "Postaveno tak, aby nahradilo denní ruční čtení 5minutovým souhrnem s odkazy na zdroje a historií.",
        },
        {
          label: "real",
          title: "CBAM CO₂ reporting",
          problem:
            "EU dovozci musí na vyžádání produkovat CBAM-ready reporty CO₂, ale zdrojová data jsou roztroušená v ERP, dokladech od dodavatelů a tabulkách.",
          system:
            "Úloha na vyžádání stáhne data z ERP klienta, aplikuje CBAM metodiku emisí, vygeneruje oficiální report a uloží každou transformaci pro audit.",
          connects: ["ERP klienta", "Dokumenty dodavatelů", "Interní CBAM databáze", "Exportní formát regulátora"],
          result:
            "Postaveno tak, aby regulační CBAM report šel kdykoliv znovu vygenerovat s plnou transparencí a audit trailem.",
        },
        {
          label: "pilot",
          title: "Engine pro sociální obsah",
          problem:
            "Pravidelné publikování na X / Threads / LinkedIn vyžaduje denní pozornost a kreativní práci, což si malé týmy nemůžou dovolit.",
          system:
            "Pipeline scrapuje trendující témata, generuje drafty postů ve vašem tónu, plánuje publikaci a učí se z výkonu jednotlivých postů.",
          connects: ["X (Twitter)", "Threads", "LinkedIn", "Plánovač", "Analytika"],
          result:
            "Cílem je udržet značku aktivní několikrát týdně bez denní kreativní práce.",
        },
      ],
    },
    process: {
      eyebrow: "Jak pracujeme",
      headline: "Od rozboru procesu k funkčnímu systému",
      steps: [
        {
          number: "01",
          title: "Analýza",
          body:
            "Zmapujeme váš workflow, nástroje, úzká místa a opakovanou práci. Cílem je najít proces, kde změna přinese reálnou hodnotu.",
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
            "Stavíme, propojujeme, testujeme a spouštíme. S jasnou komunikací a reálnými milníky.",
        },
        {
          number: "04",
          title: "Podpora a zlepšování",
          body:
            "Sledujeme reálné používání, opravujeme problémy, vylepšujeme procesy a rozšiřujeme jen tam, kde to dává byznysový smysl.",
        },
      ],
      capabilitiesLabel: "Nástroje, které propojujeme",
      capabilities: [
        { group: "CRM & obchod", items: ["HubSpot", "Pipedrive", "Vlastní CRM"] },
        { group: "Firemní nástroje", items: ["Google Workspace", "Microsoft 365", "Slack / Teams"] },
        { group: "E-commerce", items: ["Shoptet", "Produktová data", "Importy"] },
        { group: "Automatizace", items: ["Make", "n8n", "Zapier"] },
        { group: "AI", items: ["Claude", "OpenAI", "Gemini"] },
        { group: "Komunikace", items: ["E-mail", "Formuláře", "WhatsApp / SMS", "Chat"] },
        { group: "Analytika", items: ["Dashboardy", "Reporty", "KPI"] },
        { group: "Technické napojení", items: ["API", "Databáze", "Webhooks"] },
      ],
    },
    why: {
      eyebrow: "Proč 58 Systems",
      headline: "Proč nestačí jenom no-code nástroj nebo AI chatbot?",
      lead:
        "Spousta automatizací selže, protože automatizuje jednu úlohu bez porozumění tomu, jak firma reálně funguje. My začínáme od procesu.",
      pillars: [
        {
          title: "Nejdřív proces, pak technologie",
          body: "Než doporučíme jakékoli řešení, rozumíme workflow.",
        },
        {
          title: "AI jen tam, kde pomáhá",
          body:
            "AI používáme tam, kde skutečně pomáhá — návrhy, shrnutí, odpovídání na dotazy, třídění dat. Ne proto, že je to trendy.",
        },
        {
          title: "Kolem nástrojů, které už máte",
          body: "Systém zapadne do vašeho CRM, e-mailu, tabulek, webu a nástrojů, které váš tým zná.",
        },
        {
          title: "Spolehlivé, ne jenom demo",
          body: "Stavíme věci, které fungují, když je potřebujete — nejen při prezentaci.",
        },
        {
          title: "Kontrolu má člověk",
          body: "Automatizace má pomáhat týmu, ne tvořit black box, kterému nikdo nevěří.",
        },
        {
          title: "Jasná ekonomika",
          body:
            "Soustředíme se na procesy, kde ušetřený čas, méně chyb nebo rychlejší reakce ospravedlní práci.",
        },
      ],
    },
    cta: {
      eyebrow: "Bezplatná procesní konzultace",
      headline: "Začněte jedním procesem",
      lead:
        "Nemusíte vědět, co automatizovat. Ukažte nám, kde je práce pomalá, repetitivní nebo nepřehledná — zmapujeme to a navrhneme nejjednodušší první krok.",
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
        { id: "suppliers", label: "Dodavatelé / objednávky", prefill: "E-maily od dodavatelů, nabídky a objednávky jsou roztroušené ve schránkách a tabulkách. Chceme mít přehled, co čeká a co je dohodnuté." },
        { id: "reporting", label: "Reporting / KPI", prefill: "Nemáme jasný přehled o tom, co se ve firmě reálně děje — chceme automatické reporty a jednoduchý dashboard." },
        { id: "approvals", label: "Schvalování a administrativa", prefill: "Schvalování, připomínky, dokumenty a administrativa jsou roztroušené mezi lidmi a nástroji a často nám utíkají." },
        { id: "news", label: "Sledování zpráv / trhu", prefill: "Potřebujeme sledovat zprávy, ceny nebo signály od konkurence napříč webem a převést je do krátkého denního souhrnu." },
        { id: "social", label: "Sociální sítě", prefill: "Nestíháme udržet aktivitu na sociálních sítích — chtěli bychom automatizovat sledování trendů, drafty a plánování." },
        { id: "co2", label: "CBAM / CO₂ reporting", prefill: "Potřebujeme generovat CBAM reporty CO₂ na vyžádání tažením dat z našeho ERP a dokumentů od dodavatelů." },
        { id: "other", label: "Něco jiného", prefill: "" },
      ],
      form: {
        title: "Promluvme si o vašem procesu",
        subtitle: "Bezplatná procesní konzultace. Bez závazku.",
        name: "Jméno",
        email: "E-mail",
        company: "Firma",
        website: "Web (volitelné)",
        message: "Jaký proces vám připadá manuální, pomalý nebo nepřehledný?",
        language: "Preferovaný jazyk",
        languageOptions: [
          { value: "en", label: "English" },
          { value: "cs", label: "Čeština" },
          { value: "ru", label: "Русский" },
        ],
        submit: "Odeslat poptávku",
        submitting: "Odesílání…",
        success: "Díky — poptávku jsme přijali a ozveme se do 1 pracovního dne.",
        error: "Něco se nepovedlo. Zkuste to prosím znovu nebo napište na info@58systems.com.",
        consent:
          "Odesláním souhlasíte s tím, že vás můžeme kontaktovat ohledně vaší poptávky. Žádný spam, žádné newslettery.",
      },
    },
    footer: {
      tagline:
        "Systémy pro rostoucí firmy. Praktická automatizace, jasné procesy a nástroje, které skutečně spolupracují.",
      navTitle: "Navigace",
      contactTitle: "Kontakt",
      links: [
        { label: "Produkty", href: "#systems" },
        { label: "Ukázky práce", href: "#stories" },
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
