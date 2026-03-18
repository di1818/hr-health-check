import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    ym: (...args: unknown[]) => void;
  }
}

const COOKIE_KEY = "cookie_consent";

function loadYandexMetrika() {
  if (document.querySelector('script[src*="mc.yandex.ru/metrika/tag.js"]')) return;
  const script = document.createElement("script");
  script.src = "https://mc.yandex.ru/metrika/tag.js?id=107027471";
  script.async = true;
  document.head.appendChild(script);
  script.onload = () => {
    window.ym(107027471, "init", {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: "dataLayer",
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce: true,
      trackLinks: true,
    });
  };
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent === "accepted") {
      loadYandexMetrika();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
    loadYandexMetrika();
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/95 backdrop-blur-md p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-secondary-foreground flex-1 font-[var(--font-body)]">
              Мы используем файлы cookie и Яндекс.Метрику для улучшения работы сайта. 
              Нажимая «Принять», вы соглашаетесь с использованием cookie.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground transition-colors"
              >
                Отклонить
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Принять
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
