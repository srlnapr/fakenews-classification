"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logoImage from "@/assets/logo.svg";

const footerLinks = {
  company: [
    { label: "Tentang Kami", href: "/about" },
    { label: "Tim", href: "/team" },
    { label: "Karir", href: "/career" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Deteksi", href: "/services" },
    { label: "Alur Kerja", href: "/workflow" },
    { label: "API", href: "/api" },
    { label: "Dokumentasi", href: "/docs" },
  ],
  support: [
    { label: "Pusat Bantuan", href: "/help" },
    { label: "Kontak", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Status", href: "/status" },
  ],
};

const socialLinks = [
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.809 14.792 3.29 13.145 3.29 11.314c0-1.83.519-3.478 1.836-4.377.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c1.317.899 1.836 2.547 1.836 4.377 0 1.831-.519 3.478-1.836 4.377-.875.807-2.026 1.297-3.323 1.297zm7.179-10.718c-.51 0-.924-.414-.924-.924s.414-.924.924-.924.924.414.924.924-.414.924-.924.924zm2.527 6.403c0 .510-.414.924-.924.924s-.924-.414-.924-.924.414-.924.924-.924.924.414.924.924z"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="relative bg-black/50 backdrop-blur-sm border-t border-white/10 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Gradient background */}
<div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-blue-600/20 to-red-500/10" />
      
      <div className="relative container max-w-6xl mx-auto px-4 py-12 lg:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and description */}
          <motion.div 
            className="lg:col-span-2 space-y-4"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={logoImage}
                alt="Logo"
                className="h-8 w-auto"
              />
            </motion.div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Platform deteksi modern yang menggunakan teknologi AI terdepan untuk memberikan solusi terbaik bagi kebutuhan Anda.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm block py-1"
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm block py-1"
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg">Dukungan</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm block py-1"
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

     

        {/* Bottom bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/60"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <p>&copy; {currentYear} YourBrand. Semua hak cipta dilindungi.</p>
            <div className="flex gap-6">
              <motion.a
                href="/privacy"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Kebijakan Privasi
              </motion.a>
              <motion.a
                href="/terms"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Syarat & Ketentuan
              </motion.a>
              <motion.a
                href="/cookies"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Cookies
              </motion.a>
            </div>
          </div>
          <motion.p
            className="text-xs opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Dibuat dengan ❤️ di Indonesia
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}