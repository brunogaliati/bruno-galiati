import "./globals.css";

export const metadata = {
  title: "Bruno Galiati | Product Builder — Data & Finance",
  description:
    "I build products with data. Background in economics, 6 years in wealth management, a SaaS in production.",
  keywords: [
    "Bruno Galiati",
    "product builder",
    "product manager",
    "FIDCs",
    "wealth management",
    "Python",
    "React",
    "data",
    "SaaS",
  ],
  authors: [{ name: "Bruno Galiati" }],
  openGraph: {
    title: "Bruno Galiati | Product Builder — Data & Finance",
    description:
      "I build products with data. Background in economics, 6 years in wealth management, a SaaS in production.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
