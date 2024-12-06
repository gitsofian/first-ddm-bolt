import React from 'react';

type FooterSection = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

type FooterLinksProps = {
  section: FooterSection;
};

export function FooterLinks({ section }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold">{section.title}</h3>
      <ul className="mt-4 space-y-2">
        {section.links.map((link) => (
          <li key={link.text}>
            <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}