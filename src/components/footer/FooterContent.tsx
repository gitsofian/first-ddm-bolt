import React from 'react';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterSupport } from './FooterSupport';

const sections = {
  product: {
    title: 'Product',
    links: [
      { text: 'Features', href: '#features' },
      { text: 'Pricing', href: '#pricing' },
      { text: 'Documentation', href: '#docs' },
      { text: 'API Reference', href: '#api' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { text: 'About', href: '#about' },
      { text: 'Blog', href: '#blog' },
      { text: 'Careers', href: '#careers' },
      { text: 'Contact', href: '#contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '#privacy' },
      { text: 'Terms of Service', href: '#terms' },
      { text: 'Cookie Policy', href: '#cookies' },
      { text: 'GDPR', href: '#gdpr' },
    ],
  },
};

export function FooterContent() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-white text-lg font-semibold">Company</h3>
          <p className="mt-2 text-gray-400">
            Building the future of digital solutions, one pixel at a time.
          </p>
          <div className="mt-4">
            <FooterSocial />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:col-span-3">
          <FooterLinks section={sections.product} />
          <FooterLinks section={sections.company} />
          <FooterLinks section={sections.legal} />
        </div>

        <div className="lg:col-span-1">
          <FooterSupport />
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-700">
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Company. All rights reserved.
        </p>
      </div>
    </>
  );
}