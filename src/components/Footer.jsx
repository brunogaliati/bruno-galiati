export default function Footer() {
  return (
    <footer className="bg-primary py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 text-sm font-mono">
          &copy; {new Date().getFullYear()} Bruno Galiati &middot; Feito com
          Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
