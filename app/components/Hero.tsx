"use client"; // <-- Obligatoire pour les animations

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // Je définis une animation de base pour les éléments
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative mb-24 pt-16 pb-24 overflow-hidden">
      
      {/* Effet de grille et Halo (inchangés) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[40rem] h-[20rem] bg-blue-500/20 dark:bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto px-4">
        
        {/* On anime chaque bloc avec un délai différent (stagger) */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Disponible pour de nouveaux projets
        </motion.div>

        <motion.h1 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white"
        >
          Salut, moi c'est <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Matteo Ventura
          </span>
        </motion.h1>
        
        <motion.p 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Développeur Full-Stack passionné par le développement web et la sécurisation des applications. 
          Je conçois des interfaces performantes et des architectures robustes, 
          tout en mettant toujours l'accent sur une sécurisation optimale et une expérience utilisateur fluide. 
          Mon objectif est de créer des solutions web qui allient esthétique, fonctionnalité et sécurité.
        </motion.p>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="#projets" 
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            Voir mes projets
          </Link>
          <Link 
            href="/a-propos" 
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all"
          >
            En savoir plus
          </Link>
        </motion.div>

      </div>
    </section>
  );
}