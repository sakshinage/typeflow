import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import TypingPractice from './pages/TypingPractice';
import SpeedTest from './pages/SpeedTest';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import { getProgress, getSettings, saveSettings } from './utils/progressStorage';
import { Keyboard, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [progress, setProgress] = useState(getProgress);
  const [settings, setSettingsState] = useState(getSettings);
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedLessonId, setSelectedLessonId] = useState(() => progress.currentLessonId || 1);

  const currentTheme = settings.theme || 'kawaii';

  // Apply theme to HTML root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'kawaii') {
      document.body.classList.add('theme-kawaii');
    } else {
      document.body.classList.remove('theme-kawaii');
    }
  }, [currentTheme]);

  const refreshProgress = () => {
    setProgress(getProgress());
  };

  const handleUpdateSettings = (newSettings) => {
    setSettingsState(newSettings);
    saveSettings(newSettings);
  };

  const handleToggleTheme = (newTheme) => {
    handleUpdateSettings({ ...settings, theme: newTheme });
  };

  const handleSelectLesson = (lessonId) => {
    setSelectedLessonId(lessonId);
    setActivePage('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isKawaii = currentTheme === 'kawaii';

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      isKawaii
        ? 'bg-[#fff5f8] text-slate-800 selection:bg-pink-400 selection:text-white'
        : currentTheme === 'dark'
        ? 'bg-slate-900 text-white selection:bg-pink-500 selection:text-white'
        : 'bg-slate-50 text-slate-800 selection:bg-indigo-500 selection:text-white'
    }`}>
      {/* Navigation Bar with Direct Mode Switcher */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        streak={progress.streak || 1}
        currentLessonId={progress.currentLessonId || 1}
        theme={currentTheme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activePage === 'dashboard' && (
          <Dashboard
            progress={progress}
            onSelectLesson={handleSelectLesson}
            onNavigate={setActivePage}
            theme={currentTheme}
          />
        )}

        {activePage === 'lessons' && (
          <Lessons
            progress={progress}
            onSelectLesson={handleSelectLesson}
            theme={currentTheme}
          />
        )}

        {activePage === 'practice' && (
          <TypingPractice
            key={selectedLessonId}
            lessonId={selectedLessonId}
            settings={settings}
            progress={progress}
            onBackToLessons={() => {
              refreshProgress();
              setActivePage('lessons');
            }}
            onSelectLesson={handleSelectLesson}
            theme={currentTheme}
          />
        )}

        {activePage === 'speedtest' && (
          <SpeedTest settings={settings} theme={currentTheme} />
        )}

        {activePage === 'progress' && (
          <Progress
            progress={progress}
            onReset={refreshProgress}
            theme={currentTheme}
          />
        )}

        {activePage === 'settings' && (
          <Settings
            settings={settings}
            onSaveSettings={handleUpdateSettings}
            theme={currentTheme}
          />
        )}
      </main>

      {/* Cute Footer */}
      <footer className={`mt-auto border-t py-6 text-center text-xs transition-colors ${
        isKawaii
          ? 'border-pink-200/80 bg-white/70 text-pink-900/70'
          : currentTheme === 'dark'
          ? 'border-slate-800 bg-slate-900 text-slate-400'
          : 'border-slate-200/80 bg-white/60 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>{isKawaii ? '🎀' : <Keyboard className="w-4 h-4 text-indigo-600" />}</span>
            <span className={`font-black ${isKawaii ? 'text-pink-700' : 'text-slate-700'}`}>
              TypeFlow
            </span>
            <span>— {isKawaii ? 'Hello Kitty Cute Touch Typing Tutor' : 'Precision Touch Typing Tutor'}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-bold">
            <span>310 Progressive Lessons</span>
            <span>•</span>
            <span>95%+ Accuracy Target</span>
            <span>•</span>
            <span>{isKawaii ? '💖 Cute Pink Edition' : 'Multi-Mode Ready'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
