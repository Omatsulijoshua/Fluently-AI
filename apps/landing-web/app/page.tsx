import React from 'react';
import { Hero } from '../components/Hero';
import { LivePreviewWidget } from '../components/LivePreviewWidget';
import { CompetitorComparison } from '../components/CompetitorComparison';
import { PricingMatrix } from '../components/PricingMatrix';

export default function Home() {
  return (
    <div>
      <Hero />
      <LivePreviewWidget />
      <CompetitorComparison />
      <PricingMatrix />
      <footer style={{ textAlign: 'center', padding: '40px', color: '#64748B', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        © 2026 Fluently AI Operating System Inc. All rights reserved.
      </footer>
    </div>
  );
}
