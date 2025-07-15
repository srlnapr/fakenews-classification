import Image from "next/image";
import logoImage from "@/assets/logo.svg";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Alur", href: "/about" },
  { label: "Deteksi", href: "/services" },
  { label: "isi apa y", href: "/contact" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8 ">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 items-center">
          <div className="w-auto">
            <Image
              src={logoImage}
              alt="Logo"
              className="h-6 sm:h-4 md:h-6 lg:h-8 w-auto"
            />
          </div>

          <div className="lg:flex justify-center items-center hidden ">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
