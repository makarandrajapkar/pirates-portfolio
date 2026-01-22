import { PirateNavigation } from '@/app/components/PirateNavigation';
import { PirateHero } from '@/app/components/PirateHero';
import { AboutSection } from '@/app/components/AboutSection';
import { SkillsTreasure } from '@/app/components/SkillsTreasure';
import { ProjectsVoyages } from '@/app/components/ProjectsVoyages';
import { ContactSection } from '@/app/components/ContactSection';
import { PirateFooter } from '@/app/components/PirateFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <PirateNavigation />
      <main>
        <PirateHero />
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsTreasure />
        </div>
        <div id="projects">
          <ProjectsVoyages />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <PirateFooter />
    </div>
  );
}
