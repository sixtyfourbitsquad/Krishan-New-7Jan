import { motion } from "framer-motion";
import { Zap, TrendingUp, Target, Star } from "lucide-react";

const marqueeItems = [
  { icon: Zap, text: "Live Strategies Daily" },
  { icon: TrendingUp, text: "4.8x Average ROAS" },
  { icon: Target, text: "$50M+ Ad Spend Managed" },
  { icon: Star, text: "200+ Clients Scaled" },
  { icon: Zap, text: "No Guesswork Marketing" },
  { icon: TrendingUp, text: "Fast Testing Cycles" },
  { icon: Target, text: "ROAS-Focused Execution" },
  { icon: Star, text: "Data-Driven Decisions" },
];

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/90 via-accent/90 to-primary/90 backdrop-blur-sm border-b border-primary/20 overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Double the items for seamless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-2 text-primary-foreground whitespace-nowrap"
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.text}</span>
              <span className="text-primary-foreground/50 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopBar;
