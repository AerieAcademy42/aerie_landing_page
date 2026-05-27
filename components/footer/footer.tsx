"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/aerie.architecture",
    label: "Instagram",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Youtube,
    href: "https://youtube.com/@AERIEACADEMY",
    label: "YouTube",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/aerie-architecture",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">Aerie</span>
              <span className="text-2xl font-light text-white/80">Academy</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Empowering future architects and planners to achieve their dreams
              through quality education and expert guidance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Course", "Team", "FAQ"].map((item) => (
                <li key={item}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Study Material", "Blog"].map((item) => (
                <li key={item}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", , "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href={item === "Contact Us" ? "#contact" : "#"}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Aerie Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
