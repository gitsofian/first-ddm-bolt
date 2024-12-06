import React from 'react';
import { LifeBuoy, Mail, Phone } from 'lucide-react';

const supportInfo = [
  {
    Icon: Phone,
    text: '24/7 Support Line',
    detail: '+1 (888) 123-4567',
    href: 'tel:+18881234567',
  },
  {
    Icon: Mail,
    text: 'Email Support',
    detail: 'support@company.com',
    href: 'mailto:support@company.com',
  },
  {
    Icon: LifeBuoy,
    text: 'Help Center',
    detail: 'Visit our knowledge base',
    href: '#',
  },
];

export function FooterSupport() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8 lg:mt-0">
      <h3 className="text-white text-lg font-semibold mb-4">Need Help?</h3>
      <div className="space-y-4">
        {supportInfo.map(({ Icon, text, detail, href }) => (
          <a
            key={text}
            href={href}
            className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
          >
            <Icon className="h-6 w-6 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">{text}</p>
              <p className="text-sm">{detail}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}