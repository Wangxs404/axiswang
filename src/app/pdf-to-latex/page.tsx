import Link from "next/link";
import {
  Upload,
  Cpu,
  FileDown,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Presentation,
  Layers,
  AlignLeft,
  Table2,
  ImageIcon,
  Code2,
  RefreshCw,
  ArrowRight,
  FileText,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const useCases = [
  {
    icon: BookOpen,
    title: "Academic Journal Submission",
    description:
      "Found a journal whose style you need to match but can't locate the official LaTeX template? Upload the PDF and get a matching template in seconds.",
    examples: ["IEEE Transactions", "Nature / Science", "Elsevier Journals", "Springer LNCS"],
    badge: "Most popular",
  },
  {
    icon: Presentation,
    title: "Conference Paper Submission",
    description:
      "Preparing for a top-tier conference? Reconstruct the exact formatting from accepted papers when the official template is outdated or unavailable.",
    examples: ["NeurIPS", "CVPR / ICCV / ECCV", "ACM SIGGRAPH", "AAAI / IJCAI"],
    badge: null,
  },
  {
    icon: GraduationCap,
    title: "University Thesis & Dissertation",
    description:
      "Many universities only provide old PDF examples of properly formatted theses. Our AI reconstructs the exact layout so your dissertation meets the requirements.",
    examples: ["PhD Dissertations", "Master's Theses", "Undergraduate Projects", "Capstone Reports"],
    badge: null,
  },
];

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your PDF",
    description:
      "Drag and drop any academic PDF — a published paper, a thesis, or a conference proceedings. Our system accepts standard PDF files up to 50 MB.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Analyzes the Layout",
    description:
      "Our AI engine detects columns, margins, font families, heading hierarchies, figure placements, tables, equations, and bibliography styles with high precision.",
  },
  {
    number: "03",
    icon: FileDown,
    title: "Download Your LaTeX Template",
    description:
      "Receive a clean, commented LaTeX template ready to open in Overleaf or any local LaTeX editor. Start writing immediately — no manual formatting required.",
  },
];

const features = [
  {
    icon: Layers,
    title: "Multi-Column Layout Detection",
    description: "Accurately reconstructs one-, two-, and three-column academic layouts with correct gutter spacing and margins.",
  },
  {
    icon: AlignLeft,
    title: "Typography Extraction",
    description: "Identifies heading levels, body font sizes, line spacing, and paragraph indentation to match the original document.",
  },
  {
    icon: Table2,
    title: "Table & Figure Handling",
    description: "Generates LaTeX table environments and figure placeholders with correct caption positioning and cross-reference labels.",
  },
  {
    icon: Code2,
    title: "Math Equation Support",
    description: "Detects inline and display math regions and outputs correctly structured equation environments in LaTeX.",
  },
  {
    icon: RefreshCw,
    title: "Overleaf Compatible",
    description: "All generated templates are tested for compatibility with Overleaf. Upload and compile with a single click.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Uploaded PDFs are processed in isolated sandboxes and automatically deleted after conversion. Your research stays private.",
  },
  {
    icon: Zap,
    title: "Fast Conversion",
    description: "Most documents are analyzed and templated in under 30 seconds, even for complex multi-section papers.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Works with papers in English, Chinese, German, French, Japanese, and other languages with proper encoding support.",
  },
];

const templates = [
  { name: "IEEE Conference", slug: "ieee-conference", category: "Conference", cols: "2-col" },
  { name: "IEEE Transactions", slug: "ieee-transactions", category: "Journal", cols: "2-col" },
  { name: "ACM SIGCHI", slug: "acm-sigchi", category: "Conference", cols: "2-col" },
  { name: "NeurIPS", slug: "neurips", category: "Conference", cols: "1-col" },
  { name: "CVPR", slug: "cvpr", category: "Conference", cols: "2-col" },
  { name: "Nature / Science", slug: "nature-science", category: "Journal", cols: "1-col" },
  { name: "Springer LNCS", slug: "springer-lncs", category: "Journal", cols: "1-col" },
  { name: "Elsevier Article", slug: "elsevier-article", category: "Journal", cols: "1-col" },
  { name: "ICLR", slug: "iclr", category: "Conference", cols: "1-col" },
  { name: "AAAI", slug: "aaai", category: "Conference", cols: "2-col" },
  { name: "ACM SIGGRAPH", slug: "acm-siggraph", category: "Conference", cols: "2-col" },
  { name: "PhD Thesis", slug: "phd-thesis", category: "Thesis", cols: "1-col" },
];

const faqs = [
  {
    question: "How does the PDF to LaTeX template converter work?",
    answer:
      "Our AI analyzes your uploaded PDF visually — detecting columns, fonts, margins, heading hierarchy, figures, and tables. It then generates a clean LaTeX template that mirrors the structure, ready to compile in Overleaf or any LaTeX editor.",
  },
  {
    question: "Which journal and conference formats are supported?",
    answer:
      "We support templates from IEEE (Transactions, Conferences), ACM (SIGCHI, SIGGRAPH), NeurIPS, CVPR, ICCV, ECCV, ICLR, Nature, Science, Springer LNCS, Elsevier journals, and many university thesis formats including MIT, Stanford, Cambridge, and others.",
  },
  {
    question: "Can I use the generated template in Overleaf?",
    answer:
      "Yes. The generated LaTeX template is fully Overleaf-compatible. Create a new blank project in Overleaf, upload the generated .tex and .sty files, and you're ready to write.",
  },
  {
    question: "What if I only have the PDF and not the original LaTeX source?",
    answer:
      "This tool is built exactly for that scenario. Upload the PDF, and our AI will reconstruct the LaTeX template structure from the visual layout alone, so you can submit your own work using the same formatting.",
  },
  {
    question: "How accurate is the AI layout detection?",
    answer:
      "Our AI achieves high accuracy for standard academic layouts, correctly identifying multi-column structures, mathematical equations, figure placements, table formats, header/footer styles, and bibliography formats. Complex or non-standard designs may require minor manual tweaks.",
  },
  {
    question: "Is the converter free to use?",
    answer:
      "We offer a free tier with a generous monthly conversion limit. Premium plans unlock unlimited conversions, priority processing, and advanced template customization options for power users and research groups.",
  },
  {
    question: "Does this work for Chinese, German, or other non-English papers?",
    answer:
      "Yes. The converter supports multilingual documents. It correctly handles UTF-8 encoded text and generates templates with appropriate inputenc and babel packages for non-English content.",
  },
  {
    question: "Is my uploaded PDF kept private?",
    answer:
      "Absolutely. Uploaded PDFs are processed in isolated sandboxes and are automatically and permanently deleted after conversion. We never store, train on, or share your documents.",
  },
];

const stats = [
  { value: "50+", label: "Template formats" },
  { value: "10k+", label: "Templates generated" },
  { value: "98%", label: "Layout accuracy" },
  { value: "<30s", label: "Avg. conversion time" },
];

// ─── Components ──────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-green-700 bg-green-100 rounded-full mb-4">
      {children}
    </span>
  );
}

function UploadZone() {
  return (
    <div className="relative rounded-2xl border-2 border-dashed border-green-300 bg-green-50 p-10 text-center transition-colors hover:border-green-500 hover:bg-green-100 group cursor-pointer">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-green-100 group-hover:shadow-green-100 transition-shadow">
          <Upload className="h-7 w-7 text-green-600" />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">
            Drop your PDF here
          </p>
          <p className="mt-1 text-sm text-gray-500">
            or{" "}
            <span className="text-green-600 font-medium underline underline-offset-2">
              browse files
            </span>{" "}
            — up to 50 MB
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {["IEEE", "NeurIPS", "ACM", "Nature", "Thesis"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white border border-green-200 px-3 py-0.5 text-xs text-green-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="#waitlist"
          className="mt-2 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-700 transition-colors"
        >
          <Zap className="h-4 w-4" />
          Convert PDF to LaTeX
        </Link>
        <p className="text-xs text-gray-400">
          Free tier available · No account required for first conversion
        </p>
      </div>
    </div>
  );
}

function TemplateCard({ template }: { template: (typeof templates)[number] }) {
  const categoryColor: Record<string, string> = {
    Conference: "bg-blue-50 text-blue-700 border-blue-200",
    Journal: "bg-purple-50 text-purple-700 border-purple-200",
    Thesis: "bg-amber-50 text-amber-700 border-amber-200",
  };

  return (
    <Link
      href={`/pdf-to-latex/${template.slug}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-green-300 transition-all"
    >
      {/* Mock page preview */}
      <div className="mb-4 h-28 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden flex items-start gap-1.5 p-3">
        {template.cols === "2-col" ? (
          <>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-gray-300" />
              <div className="h-1.5 w-5/6 rounded-full bg-gray-200" />
              <div className="h-1.5 w-full rounded-full bg-gray-200" />
              <div className="h-1.5 w-4/5 rounded-full bg-gray-200" />
              <div className="h-1.5 w-full rounded-full bg-gray-200" />
              <div className="h-1.5 w-3/4 rounded-full bg-gray-200" />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-gray-200" />
              <div className="h-1.5 w-full rounded-full bg-gray-200" />
              <div className="h-1.5 w-5/6 rounded-full bg-gray-200" />
              <div className="h-1.5 w-full rounded-full bg-gray-200" />
              <div className="h-1.5 w-4/5 rounded-full bg-gray-200" />
              <div className="h-1.5 w-full rounded-full bg-gray-200" />
            </div>
          </>
        ) : (
          <div className="flex-1 space-y-1.5 px-4">
            <div className="h-2 w-3/4 rounded-full bg-gray-400 mx-auto mb-2" />
            <div className="h-1.5 w-full rounded-full bg-gray-200" />
            <div className="h-1.5 w-5/6 rounded-full bg-gray-200 mx-auto" />
            <div className="h-1.5 w-full rounded-full bg-gray-200" />
            <div className="h-1.5 w-4/5 rounded-full bg-gray-200" />
            <div className="h-1.5 w-full rounded-full bg-gray-200" />
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors text-sm">
            {template.name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">{template.cols}</p>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${categoryColor[template.category]}`}
        >
          {template.category}
        </span>
      </div>
    </Link>
  );
}

function FAQItem({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
  return (
    <details
      className="group border-b border-gray-200 py-5 open:pb-5"
      itemScope
      itemType="https://schema.org/Question"
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-4 list-none"
        itemProp="name"
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">
          {faq.question}
        </span>
        <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
      </summary>
      <div
        className="mt-3 text-sm text-gray-600 leading-relaxed"
        itemScope
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <p itemProp="text">{faq.answer}</p>
      </div>
    </details>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PDFToLatexPage() {
  return (
    <div className="bg-white text-gray-900 antialiased">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white pt-20 pb-24 px-4 sm:px-6 lg:px-8"
      >
        {/* Background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #16a34a22 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 border border-green-200 px-4 py-1.5 text-xs font-semibold text-green-700">
              <Zap className="h-3.5 w-3.5" />
              AI-Powered Academic Template Generator
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
            Turn Any Academic PDF into a{" "}
            <span className="text-green-600">Ready-to-Use</span>{" "}
            LaTeX Template
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 leading-relaxed">
            Only have the PDF but not the LaTeX source? Upload it — our AI
            analyzes the layout and generates a clean, editable template
            compatible with{" "}
            <span className="font-semibold text-gray-800">Overleaf</span>,
            IEEE, NeurIPS, ACM, and 50+ academic formats.
          </p>

          {/* Upload zone */}
          <div className="mt-10 max-w-2xl mx-auto">
            <UploadZone />
          </div>

          {/* Stats bar */}
          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-3xl font-extrabold text-green-600">{stat.value}</dt>
                <dd className="mt-1 text-sm text-gray-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────────────────────── */}
      <section
        id="use-cases"
        aria-labelledby="use-cases-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <SectionLabel>Who Is This For?</SectionLabel>
            <h2
              id="use-cases-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Built for Every Academic Submission
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re submitting to a top journal, a competitive
              conference, or fulfilling your university&apos;s thesis
              requirements — we&apos;ve got a template for that.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <article
                  key={uc.title}
                  className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                >
                  {uc.badge && (
                    <span className="absolute top-5 right-5 rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                      {uc.badge}
                    </span>
                  )}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 border border-green-100">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{uc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{uc.description}</p>
                  <ul className="space-y-1.5">
                    {uc.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <SectionLabel>Simple Process</SectionLabel>
            <h2
              id="how-it-works-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              From PDF to LaTeX in 3 Steps
            </h2>
          </div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div
              aria-hidden
              className="hidden md:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-green-200 via-green-400 to-green-200"
            />

            <div className="grid gap-10 md:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative text-center">
                    {/* Step number + icon */}
                    <div className="relative mx-auto mb-6 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-green-200 bg-white shadow-md">
                      <span className="text-xs font-bold text-green-400 tracking-widest">{step.number}</span>
                      <Icon className="mt-1 h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section
        id="features"
        aria-labelledby="features-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <SectionLabel>Capabilities</SectionLabel>
            <h2
              id="features-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Advanced AI Layout Understanding
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our model is trained on thousands of academic documents, giving
              it the precision needed to handle everything from single-column
              theses to dense two-column IEEE papers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                    <Icon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{feat.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Template Gallery ──────────────────────────────────────────────── */}
      <section
        id="templates"
        aria-labelledby="templates-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <SectionLabel>Template Library</SectionLabel>
            <h2
              id="templates-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              50+ Supported Academic Formats
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Browse our growing library of pre-analyzed template formats.
              Each page includes ready-to-use LaTeX code, submission tips, and
              example documents.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {templates.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/pdf-to-latex/templates"
              className="inline-flex items-center gap-2 rounded-lg border border-green-300 bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-50 transition-colors"
            >
              View All Templates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sample Output ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="sample-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SectionLabel>See It in Action</SectionLabel>
            <h2
              id="sample-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Clean, Commented LaTeX Output
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Every generated template is well-structured and commented so you
              can start writing immediately without deciphering complex preamble
              code.
            </p>
          </div>

          {/* Code preview mock */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 font-mono">main.tex — IEEE Conference Template</span>
            </div>
            {/* Code content */}
            <pre className="bg-gray-900 p-6 overflow-x-auto text-sm leading-relaxed">
              <code>
                <span className="text-gray-500">{`% ─────────────────────────────────────────────────────────────\n`}</span>
                <span className="text-gray-500">{`% Generated by AI4Papers PDF-to-LaTeX Converter\n`}</span>
                <span className="text-gray-500">{`% Source: IEEE Conference Paper (2-column, A4)\n`}</span>
                <span className="text-gray-500">{`% ─────────────────────────────────────────────────────────────\n\n`}</span>
                <span className="text-green-400">{`\\documentclass`}</span>
                <span className="text-white">{`[conference]{IEEEtran}\n\n`}</span>
                <span className="text-gray-500">{`% Core packages detected from source PDF\n`}</span>
                <span className="text-green-400">{`\\usepackage`}</span>
                <span className="text-white">{`{amsmath, amssymb}   `}</span>
                <span className="text-gray-500">{`% Math support\n`}</span>
                <span className="text-green-400">{`\\usepackage`}</span>
                <span className="text-white">{`{graphicx}           `}</span>
                <span className="text-gray-500">{`% Figures\n`}</span>
                <span className="text-green-400">{`\\usepackage`}</span>
                <span className="text-white">{`{hyperref}           `}</span>
                <span className="text-gray-500">{`% Links & references\n`}</span>
                <span className="text-green-400">{`\\usepackage`}</span>
                <span className="text-white">{`[utf8]{inputenc}     `}</span>
                <span className="text-gray-500">{`% Unicode\n\n`}</span>
                <span className="text-blue-400">{`\\begin`}</span>
                <span className="text-white">{`{document}\n\n`}</span>
                <span className="text-green-400">{`\\title`}</span>
                <span className="text-white">{`{Your Paper Title Here}\n`}</span>
                <span className="text-green-400">{`\\author`}</span>
                <span className="text-white">{`{Author Name}\n`}</span>
                <span className="text-green-400">{`\\maketitle`}</span>
                <span className="text-white">{`\n\n`}</span>
                <span className="text-blue-400">{`\\begin`}</span>
                <span className="text-white">{`{abstract}\n  `}</span>
                <span className="text-gray-400">{`Your abstract here...\n`}</span>
                <span className="text-blue-400">{`\\end`}</span>
                <span className="text-white">{`{abstract}\n\n`}</span>
                <span className="text-blue-400">{`\\end`}</span>
                <span className="text-white">{`{document}`}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── Waitlist / Early Access CTA ───────────────────────────────────── */}
      <section
        id="waitlist"
        aria-labelledby="waitlist-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-green-600"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-green-100 bg-green-700 rounded-full">
              Early Access
            </span>
          </div>
          <h2
            id="waitlist-heading"
            className="text-3xl font-extrabold text-white sm:text-4xl"
          >
            Be First to Convert Your PDF to LaTeX
          </h2>
          <p className="mt-4 text-green-100 text-lg max-w-xl mx-auto">
            Join the waitlist and get early access when we launch. No credit
            card required. Free tier available at launch.
          </p>

          {/* Email form (static placeholder) */}
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            aria-label="Waitlist signup form"
            action="#"
            method="post"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              placeholder="your@email.com"
              className="flex-1 max-w-xs rounded-lg border-0 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors shadow-sm"
            >
              Join Waitlist →
            </button>
          </form>

          <p className="mt-4 text-xs text-green-200">
            By joining, you agree to receive product updates. Unsubscribe at any time.
          </p>

          {/* Social proof */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              "IEEE Format",
              "NeurIPS Style",
              "ACM Template",
              "PhD Thesis",
              "Nature Layout",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-green-100 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2
              id="faq-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section
        aria-label="Final call to action"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100"
      >
        <div className="mx-auto max-w-3xl text-center">
          <FileText className="mx-auto h-12 w-12 text-green-500 mb-6" />
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Stop Formatting. Start Writing.
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Let our AI handle the LaTeX template so you can focus on your
            research. Upload your PDF today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-700 transition-colors"
            >
              <Upload className="h-4 w-4" />
              Convert a PDF Now
            </Link>
            <Link
              href="/pdf-to-latex/templates"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Browse Templates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
