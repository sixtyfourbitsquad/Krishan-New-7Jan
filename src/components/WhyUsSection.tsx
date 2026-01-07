import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Data-Driven Decisions",
    description: "Every move backed by analytics, not assumptions.",
  },
  {
    title: "ROAS-Focused Execution",
    description: "We optimize for revenue, not vanity metrics.",
  },
  {
    title: "Fast Testing Cycles",
    description: "50+ ad variations tested weekly to find winners.",
  },
  {
    title: "No Guesswork Marketing",
    description: "Proven frameworks that deliver predictable growth.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Why <span className="gradient-text">KRISHAN ADS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not another generic agency. We're operators who've spent millions on ads 
              and know exactly what it takes to print money with paid traffic.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gradient-border p-8 bg-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold gradient-text mb-2">$50M+</div>
                  <div className="text-sm text-muted-foreground">Ad Spend Managed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold gradient-text mb-2">4.8x</div>
                  <div className="text-sm text-muted-foreground">Average ROAS</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold gradient-text mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Clients Scaled</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold gradient-text mb-2">48hr</div>
                  <div className="text-sm text-muted-foreground">Launch Time</div>
                </div>
              </div>
            </div>

            {/* Decorative geometric elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rotate-45" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-lg" />
            <motion.div
              className="absolute top-1/2 right-0 w-16 h-16 border-2 border-primary/20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
