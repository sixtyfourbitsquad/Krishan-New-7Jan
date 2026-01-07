import { motion } from "framer-motion";
import { Send } from "lucide-react";

const TELEGRAM_LINK = "https://telegram.me/+Yajv5z8zWPAyZWI9";

const FloatingCTA = () => {
  return (
    <motion.a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg cta-glow transition-all hover:scale-110 md:bottom-8 md:right-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Send className="w-5 h-5" />
      <span className="hidden sm:inline">Join Telegram</span>
    </motion.a>
  );
};

export default FloatingCTA;
