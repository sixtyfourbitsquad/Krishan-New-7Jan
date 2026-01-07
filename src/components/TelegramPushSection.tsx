import { motion } from "framer-motion";
import { Send, Zap, TrendingUp, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

const TELEGRAM_LINK = "https://telegram.me/+Yajv5z8zWPAyZWI9";

const benefits = [
  { icon: Zap, text: "Live Strategies" },
  { icon: TrendingUp, text: "Daily Insights" },
  { icon: BarChart3, text: "Ad Breakdowns" },
];

const TelegramPushSection = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0 && !hasRedirected) {
      setHasRedirected(true);
      window.open(TELEGRAM_LINK, "_blank");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, hasRedirected]);

  return (
    <section id="telegram" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated geometric background elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-4 border-primary/20 rotate-45"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [45, 225, 45]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-4 border-accent/15 rounded-full"
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Send className="w-16 h-16 text-primary mx-auto mb-6" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get <span className="gradient-text">Insider Access</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Join our Telegram for strategies we don't share anywhere else
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <benefit.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Countdown Timer */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground mb-3">Auto-redirecting in:</p>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-primary bg-card glow-box animate-countdown-pulse">
              <span className="text-3xl font-bold gradient-text">{timeLeft}</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-lg bg-gradient-to-r from-primary via-accent to-primary bg-[length:400%_400%] animate-gradient-shift text-primary-foreground cta-glow transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-6 h-6" />
            Join Telegram Now
          </motion.a>

          <p className="mt-4 text-xs text-muted-foreground">
            Free access • No spam • Unsubscribe anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TelegramPushSection;
