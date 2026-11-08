import React, { useState } from 'react';
import Header from './components/Header';
import HeroWelcome from './components/HeroWelcome';
import DedicationCard from './components/DedicationCard';
import DocumentStats from './components/DocumentStats';
import DocumentPreview from './components/DocumentPreview';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

export default function App() {
  const [docSize] = useState('38,4 Mo');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      
      <main className="flex-1">
        <HeroWelcome documentSize={docSize} />
        <DedicationCard />
        <DocumentStats />
        <DocumentPreview />
        <DownloadSection documentSize={docSize} />
      </main>

      <Footer />
    </div>
  );
}
