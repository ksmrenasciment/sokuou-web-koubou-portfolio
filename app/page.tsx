import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StrengthsSection from '@/components/StrengthsSection';
import WorksSummary from '@/components/WorksSummary';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <StrengthsSection />
      <WorksSummary />
    </main>
  );
}
