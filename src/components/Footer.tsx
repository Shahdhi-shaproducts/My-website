import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
  isOpen?: boolean;
  onToggle?: () => void;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, isOpen, onToggle }) => {
  return (
    <div className="py-2 md:py-0">
      <h3
        className={cn(
          "text-[14px] font-semibold text-[#1D1D1F] uppercase mb-4 flex justify-between items-center",
          onToggle && "cursor-pointer"
        )}
        onClick={onToggle}
      >
        {title}
        {onToggle && (
          <ChevronDown className={cn(
            "w-5 h-5 transition-transform md:hidden",
            isOpen && "transform rotate-180"
          )} />
        )}
      </h3>
      <ul className={cn(
        "space-y-3",
        onToggle && !isOpen ? "hidden md:block" : "block"
      )}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-[12px] text-[#86868B] hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [openSections, setOpenSections] = React.useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const footerSections = {
    shop: {
      title: "Shop",
      links: [
        { label: "ShaStore", href: "/store" },
        { label: "ShaPhone", href: "/shaphone" },
        { label: "ShaBook", href: "/shabook" },
        { label: "ShaPad", href: "/shapad" },
        { label: "ShaWear", href: "/shawear" },
        { label: "ShaAccessories", href: "/accessories" },
      ]
    },
    services: {
      title: "Services",
      links: [
        { label: "ShaCare+", href: "/shacare" },
        { label: "ShaTrade", href: "/shatrade" },
        { label: "ShaPay", href: "/shapay" },
      ]
    },
    sustainability: {
      title: "Sustainability",
      links: [
        { label: "ShaCycle", href: "/shacycle" },
        { label: "ShaGreen", href: "/shagreen" },
      ]
    },
    about: {
      title: "About ShaVolts",
      links: [
        { label: "ShaTeam", href: "/careers" },
        { label: "ShaInvest", href: "/investors" },
        { label: "ShaEthics", href: "/ethics" },
      ]
    },
    support: {
      title: "Support",
      links: [
        { label: "ShaHelp", href: "/contact" },
        { label: "ShaCover", href: "/warranty" },
        { label: "ShaFix", href: "/repairs" },
      ]
    },
  };

  return (
    <footer className="bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <FooterColumn
                key={key}
                title={section.title}
                links={section.links}
                isOpen={openSections.includes(key)}
                onToggle={() => toggleSection(key)}
              />
            ))}
          </div>
        </div>
        <div className="border-t border-[#D2D2D7] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[12px] text-[#86868B]">
              Copyright © 2024 ShaVolts Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <a href="/privacy" className="text-[12px] text-[#86868B] hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[12px] text-[#86868B] hover:text-primary transition-colors duration-300">
                Terms of Use
              </a>
              <a href="/sales-policy" className="text-[12px] text-[#86868B] hover:text-primary transition-colors duration-300">
                Sales Policy
              </a>
              <a href="/legal" className="text-[12px] text-[#86868B] hover:text-primary transition-colors duration-300">
                ShaLegal
              </a>
              <a href="/sitemap" className="text-[12px] text-[#86868B] hover:text-primary transition-colors duration-300">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;