import { useState } from 'react';
import type { Experience, PageKey } from './types';
import { SAFETY_COPY } from './data/copy';
import { Header } from './components/layout/Header';
import { HomePage } from './components/pages/HomePage';
import { ExperienceListPage } from './components/pages/ExperienceListPage';
import { ExperienceDetailPage } from './components/pages/ExperienceDetailPage';
import { XiaoKanGuidePage } from './components/pages/XiaoKanGuidePage';
import { ShareExperiencePage } from './components/pages/ShareExperiencePage';
import { CityCirclesPage } from './components/pages/CityCirclesPage';
import { SafetyBoundaryPage } from './components/pages/SafetyBoundaryPage';

export default function App() {
  const [page, setPage] = useState<PageKey>('home');
  const [guideQuery, setGuideQuery] = useState('');
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const navigate = (nextPage: PageKey, query = '') => {
    setSelectedExperience(null);
    setPage(nextPage);
    if (nextPage === 'guide') setGuideQuery(query);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectExperience = (experience: Experience) => {
    setSelectedExperience(experience);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let content = <HomePage onNavigate={navigate} onSelect={selectExperience} />;

  if (selectedExperience) {
    content = <ExperienceDetailPage experience={selectedExperience} onBack={() => setSelectedExperience(null)} />;
  } else if (page === 'experiences') {
    content = <ExperienceListPage onSelect={selectExperience} />;
  } else if (page === 'guide') {
    content = <XiaoKanGuidePage query={guideQuery} onNavigate={navigate} onSelect={selectExperience} />;
  } else if (page === 'share') {
    content = <ShareExperiencePage />;
  } else if (page === 'circles') {
    content = <CityCirclesPage />;
  } else if (page === 'safety') {
    content = <SafetyBoundaryPage />;
  }

  return (
    <div className="min-h-screen text-ink">
      <Header page={page} onNavigate={navigate} />
      <main>{content}</main>
      <footer className="border-t border-line bg-surface px-4 py-8 text-center text-xs leading-6 text-muted md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 font-serif text-base font-bold text-ink">看好了么 · v0.2 本地 Demo</div>
          <p>{SAFETY_COPY.global}</p>
        </div>
      </footer>
    </div>
  );
}
