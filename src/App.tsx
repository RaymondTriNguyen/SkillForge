import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';
import { ExplorerPage } from './pages/ExplorerPage';
import { LessonViewerPage } from './pages/LessonViewerPage';
import { Skill } from './types';

type Page = 'home' | 'explore' | 'lesson';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSkill = (skill: Skill) => {
    setSelectedSkill(skill);
    setCurrentPage('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExplorer = () => {
    setCurrentPage('explore');
    setSelectedSkill(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}

      {currentPage === 'explore' && (
        <ExplorerPage onSelectSkill={handleSelectSkill} />
      )}

      {currentPage === 'lesson' && selectedSkill && (
        <LessonViewerPage skill={selectedSkill} onBack={handleBackToExplorer} />
      )}
    </div>
  );
}

export default App;
