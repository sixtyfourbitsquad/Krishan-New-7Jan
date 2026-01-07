import { Send } from "lucide-react";

const TELEGRAM_LINK = "https://telegram.me/+Yajv5z8zWPAyZWI9";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-1">KRISHAN ADS AGENCY</h3>
            <p className="text-sm text-muted-foreground">Performance Marketing That Prints Results</p>
          </div>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Send className="w-4 h-4" />
            <span className="font-medium">Join Our Telegram</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KRISHAN ADS AGENCY. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Results vary. Past performance does not guarantee future outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
