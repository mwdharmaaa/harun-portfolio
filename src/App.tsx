import { useState } from 'react';
import { Navbar } from '@/features/navigation/components/Navbar';
import { SocialSidebar } from '@/features/navigation/components/SocialSidebar';
import { ScrollIndicator } from '@/features/navigation/components/ScrollIndicator';
import { AmbientGlow } from '@/features/hero/components/AmbientGlow';
import { HeroSection } from '@/features/hero/components/HeroSection';
import { PortfolioSection } from '@/features/portfolio/components/PortfolioSection';
import { ContactSection } from '@/features/contact/components/ContactSection';
import { PresentationView } from '@/features/presentation/components/PresentationView';
import { SiteFooter } from '@/features/footer/components/SiteFooter';
import { ToastContainer } from '@/features/toast/components/ToastContainer';
import { useToast } from '@/features/toast/hooks/useToast';
import { useActiveSection } from '@/core/hooks/useActiveSection';
import type { ViewMode } from '@/core/types/navigation.types';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('immersive');
  const activeSection = useActiveSection(['hero', 'projects', 'contact']);
  const { toasts, addToast, removeToast } = useToast();

  const handleNavigate = (href: string) => {
    if (viewMode === 'showcase') {
      setViewMode('immersive');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleViewMode = () => {
    setViewMode((prev) => (prev === 'immersive' ? 'showcase' : 'immersive'));
    addToast(
      'View Mode Switched',
      viewMode === 'immersive' ? 'Now viewing Mockup Presentation Board' : 'Now viewing Interactive Landing Page',
      'info'
    );
  };

  return (
    <div className="relative min-h-screen bg-canvas-texture text-slate-100 overflow-x-hidden">
      {/* Background Lighting */}
      <AmbientGlow />

      {/* Primary Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      {viewMode === 'immersive' ? (
        <main className="relative z-10 flex flex-col">
          <HeroSection onExplore={() => handleNavigate('#projects')} />
          <PortfolioSection />
          <ContactSection
            onSuccessMessage={(name) =>
              addToast('Message Dispatched', `Thank you ${name}, Harun will get back to you shortly.`, 'success')
            }
            onCopyNotice={(msg) => addToast('Clipboard', msg, 'info')}
          />
          <SiteFooter />

          {/* Sticky Edge Elements */}
          <SocialSidebar />
          <ScrollIndicator />
        </main>
      ) : (
        <main className="relative z-10 pt-20">
          <PresentationView
            onSuccessMessage={(name) =>
              addToast('Message Dispatched', `Thank you ${name}, Harun will get back to you shortly.`, 'success')
            }
            onCopyNotice={(msg) => addToast('Clipboard', msg, 'info')}
          />
        </main>
      )}

      {/* Action Notification Toasts */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
