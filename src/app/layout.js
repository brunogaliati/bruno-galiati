import "./globals.css";

export const metadata = {
  title: "Bruno Galiati | Product Builder — Dados & Mercado Financeiro",
  description:
    "Construo produtos com dados. Background em economia, 6 anos em wealth management, um SaaS em produção.",
  keywords: [
    "Bruno Galiati",
    "product builder",
    "FIDCs",
    "wealth management",
    "Python",
    "React",
    "dados",
    "SaaS",
  ],
  authors: [{ name: "Bruno Galiati" }],
  openGraph: {
    title: "Bruno Galiati | Product Builder — Dados & Mercado Financeiro",
    description:
      "Construo produtos com dados. Background em economia, 6 anos em wealth management, um SaaS em produção.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
