import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const TELEGRAM_LINK = "https://telegram.me/+Yajv5z8zWPAyZWI9";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-geometric opacity-40" />
      
      {/* Geometric shapes instead of orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-primary/30 rotate-45"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [45, 60, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-accent/30 rounded-lg"
        animate={{ 
          x: [0, -25, 0],
          y: [0, 25, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-primary/20 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 bg-waves opacity-20" />

      <div className="container relative z-10 px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Performance-Driven Results</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
            <span className="gradient-text">KRISHAN ADS AGENCY</span>
          </h1>

          {/* Subheadline */}
          <motion.p 
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Data-driven paid ads, aggressive scaling, and ROI-focused execution. 
            No fluff. No guesswork. Just results that move the needle.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-primary via-accent to-primary bg-[length:400%_400%] animate-gradient-shift text-primary-foreground animate-pulse-glow transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Our Telegram Channel
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* Social proof */}
          <motion.p
            className="mt-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Join 5,000+ marketers getting daily ad insights
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
