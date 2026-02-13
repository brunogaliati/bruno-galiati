import "./globals.css";

export const metadata = {
  title: "Bruno Galiati | Analista Financeiro & Builder",
  description:
    "Construo sistemas que transformam dados financeiros em decisões. 6 anos na interseção entre wealth management, crédito estruturado e ciência de dados.",
  keywords: [
    "Bruno Galiati",
    "analista financeiro",
    "desenvolvedor",
    "FIDCs",
    "wealth management",
    "Python",
    "React",
  ],
  authors: [{ name: "Bruno Galiati" }],
  openGraph: {
    title: "Bruno Galiati | Analista Financeiro & Builder",
    description:
      "Construo sistemas que transformam dados financeiros em decisões.",
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
