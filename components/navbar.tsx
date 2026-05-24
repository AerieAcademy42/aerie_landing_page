"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ContactForm } from "./contact-form";
import { DialogBox } from "./dialog-box";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#courses", label: "Courses" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Aerie_logo.png"
                alt="Aerie Academy Logo"
                width={140}
                height={40}
                className=" object-contain"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <DialogBox
                open={isOpen}
                onOpenChange={setIsOpen}
                trigger={
                  <Button asChild className="gradient-blue border-0 text-white">
                    <p>Contact Us</p>
                  </Button>
                }
              >
                <ContactForm />
              </DialogBox>
            </motion.div>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-blue-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <motion.div key={link.href} whileHover={{ x: 4 }}>
                  <Link
                    href={link.href}
                    className="block text-foreground/70 hover:text-primary transition-colors py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <DialogBox
                open={isOpen}
                onOpenChange={setIsOpen}
                trigger={
                  <Button
                    asChild
                    className="w-full mt-4 gradient-blue border-0 text-white"
                  >
                    Contact Us
                  </Button>
                }
              >
                <ContactForm />
              </DialogBox>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
