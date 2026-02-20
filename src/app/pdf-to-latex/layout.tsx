import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PDF to LaTeX Template Converter | AI-Powered Academic Template Generator",
  description:
    "Convert any PDF paper into a ready-to-use LaTeX template with AI-powered layout analysis. Perfect for IEEE journals, NeurIPS, CVPR, ACM conferences, and university thesis submissions. No more hunting for lost LaTeX templates.",
  keywords: [
    "PDF to LaTeX converter",
    "LaTeX template generator",
    "academic paper template",
    "IEEE LaTeX template",
    "NeurIPS LaTeX template",
    "CVPR LaTeX template",
    "ACM LaTeX template",
    "journal submission template",
    "conference paper template",
    "university thesis LaTeX template",
    "PhD thesis LaTeX",
    "Overleaf template",
    "LaTeX layout extraction",
    "AI LaTeX generator",
    "scientific paper template",
    "research paper LaTeX",
  ],
  authors: [{ name: "Axis Wang" }],
  openGraph: {
    title: "PDF to LaTeX Template Converter | AI-Powered Layout Extraction",
    description:
      "Upload any academic PDF and get a clean, editable LaTeX template in seconds. Supports journal, conference, and thesis formats.",
    url: "https://axiswang.me/pdf-to-latex",
    type: "website",
    images: [
      {
        url: "https://axiswang.me/assets/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "PDF to LaTeX Template Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to LaTeX Template Converter | AI-Powered",
    description:
      "Upload any PDF and get a ready-to-use LaTeX template. Perfect for IEEE, NeurIPS, ACM, and university thesis formats.",
    images: ["https://axiswang.me/assets/seo/og-image.png"],
  },
  alternates: {
    canonical: "https://axiswang.me/pdf-to-latex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://axiswang.me/pdf-to-latex#app",
      name: "PDF to LaTeX Template Converter",
      url: "https://axiswang.me/pdf-to-latex",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Web",
      description:
        "AI-powered tool that converts any academic PDF into a ready-to-use LaTeX template. Supports IEEE, ACM, NeurIPS, CVPR, Nature, and university thesis formats.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "Axis Wang",
        url: "https://axiswang.me",
      },
      featureList: [
        "AI-powered PDF layout analysis",
        "Multi-column layout detection",
        "Figure and table extraction",
        "Citation format preservation",
        "Overleaf compatible output",
        "IEEE, ACM, NeurIPS template support",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the PDF to LaTeX template converter work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our AI analyzes the layout of your uploaded PDF, detecting columns, fonts, margins, headings, figures, and tables. It then generates a clean LaTeX template that mirrors the original structure, ready to use in Overleaf or any LaTeX editor.",
          },
        },
        {
          "@type": "Question",
          name: "Which journal and conference LaTeX templates are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The converter supports templates from IEEE (Transactions, Conferences), ACM (SIGCHI, SIGGRAPH), NeurIPS, CVPR, ICCV, ECCV, Nature, Science, Springer LNCS, Elsevier journals, and many university thesis formats including MIT, Stanford, and others.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use the generated LaTeX template in Overleaf?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The generated LaTeX template is fully compatible with Overleaf. Simply create a new project in Overleaf and upload the generated .tex files to start editing immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What if I only have the PDF of a paper and not the original LaTeX source?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This tool is designed exactly for that scenario. Upload the PDF and our AI will reconstruct the LaTeX template structure from the visual layout, so you can submit your own work using the same format.",
          },
        },
        {
          "@type": "Question",
          name: "Is the PDF to LaTeX converter free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a free tier that allows you to convert a limited number of PDFs per month. Premium plans provide unlimited conversions, priority processing, and advanced template customization options.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is the AI layout detection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our AI achieves high accuracy for standard academic paper layouts, correctly identifying multi-column structures, mathematical equations, figure placements, table formats, header/footer styles, and bibliography formats.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://axiswang.me",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "PDF to LaTeX Converter",
          item: "https://axiswang.me/pdf-to-latex",
        },
      ],
    },
  ],
};

export default function PDFToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="pdf-latex-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
