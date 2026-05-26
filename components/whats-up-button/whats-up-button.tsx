"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919799333490?text=Hi I want to know more about the course . Basics of Computational Design
       (Rhino + Grasshopper)  "
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-green-500
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
