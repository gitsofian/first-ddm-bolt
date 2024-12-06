import React from 'react';
import { FooterContent } from './footer/FooterContent';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <FooterContent />
      </div>
    </footer>
  );
}