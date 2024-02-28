export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 text-center bg-background md:text-lg text-base">
      <p>© {year} SG Anti-Scam AI. All rights reserved.</p>
    </footer>
  );
}
