"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("navigation");
  const tFooter = useTranslations("footer");

  return (
    <footer className="border-t bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{tFooter("title")}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {tFooter("description")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tFooter("company")}</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="/about" className="hover:text-primary">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tFooter("products")}</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="/dashboard" className="hover:text-primary">
                  {t("dashboard")}
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-primary">
                  {tFooter("pricing")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tFooter("support")}</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="/help" className="hover:text-primary">
                  {tFooter("helpCenter")}
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-primary">
                  {tFooter("documentation")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
