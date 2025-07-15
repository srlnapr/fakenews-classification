"use client";

import design1 from "@/assets/design-example-1.png";
import design2 from "@/assets/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/PointerHome";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="container relative">
        {/* Left Design */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: -100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image src={design1} draggable="false" alt="design1" />
        </motion.div>

        {/* Left Pointer */}
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: -100, x: -200 }}
          className="absolute left-56 top-96 lg:block hidden"
        >
          <Pointer name="Beneran" />
        </motion.div>

        {/* Right Design */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image src={design2} alt="design2" draggable="false" />
        </motion.div>

        {/* Right Pointer */}
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className="absolute right-80 -top-4 lg:block hidden"
        >
          <Pointer name="Bohongan" color="red" />
        </motion.div>

        {/* Content */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-blue-400 to-red-400 rounded-full text-neutral-950 font-semibold">
            Uji Kebenaran Berita dalam Sekejap
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
          Beneran Nih?
        </h1>

        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto leading-relaxed">
          Bantu kamu membedakan mana berita yang valid dan mana yang cuma hoaks.  
          Jangan sampai termakan informasi palsu — cek dulu sebelum percaya.  
          Masukkan isi berita yang kamu ragu, dan biarkan sistem kami memverifikasi keasliannya dengan analisis cerdas berbasis AI.  
          Gratis, cepat, dan akurat.
        </p>
      </div>
    </section>
  );
}
