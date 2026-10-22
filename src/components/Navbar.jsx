import React from 'react';
import { Keyboard, Flame, Trophy, BookOpen, Gauge, BarChart2, Settings, Zap, Heart, Sparkles, Moon, Sun, Palette } from 'lucide-react';

export default function Navbar({
  activePage,
  setActivePage,
  streak = 1,
  currentLessonId = 1,
  theme = 'kawaii',
  onToggleTheme
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Trophy, emoji: '🏠' },
    { id: 'lessons', label: 'Lessons', icon: BookOpen, badge: '310', emoji: '🎀' },
    { id: 'practice', label: 'Practice', icon: Keyboard, badge: `L${currentLessonId}`, emoji: '⌨️' },
    { id: 'speedtest', label: 'Speed Test', icon: Gauge, emoji: '⚡' },
    { id: 'progress', label: 'Statistics', icon: BarChart2, emoji: '📊' },
    { id: 'settings', label: 'Settings', icon: Settings, emoji: '⚙️' },
  ];

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
      isKawaii
        ? 'bg-white/90 border-pink-200/80 shadow-xs shadow-pink-100/50'
        : isDark
        ? 'bg-slate-900/90 border-slate-800 text-white shadow-md'
        : 'bg-white/95 border-slate-200 shadow-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo with Hello Kitty reference */}
          <button
            onClick={() => setActivePage('dashboard')}
            className="flex items-center gap-3 group text-left cursor-pointer transition focus:outline-hidden"
          >
            <div className={`relative w-11 h-11 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105 ${
              isKawaii
                ? 'bg-gradient-to-tr from-pink-500 via-rose-400 to-pink-300 text-white shadow-pink-200 ring-2 ring-pink-100'
                : isDark
                ? 'bg-gradient-to-tr from-pink-600 to-purple-600 text-white'
                : 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white'
            }`}>
              {/* Cute Cat Whiskers / Bow reference */}
              {isKawaii ? (
                <span className="text-xl select-none" role="img" aria-label="Hello Kitty Bow">🎀</span>
              ) : (
                <Keyboard className="w-5 h-5" />
              )}
              {isKawaii && (
                <span className="absolute -top-1 -right-1 text-xs animate-bounce">✨</span>
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className={`text-xl font-extrabold tracking-tight ${
                  isKawaii
                    ? 'bg-gradient-to-r from-pink-600 via-rose-500 to-pink-400 bg-clip-text text-transparent'
                    : isDark
                    ? 'text-pink-400 font-bold'
                    : 'text-indigo-700 font-bold'
                }`}>
                  TypeFlow
                </span>
                {isKawaii && (
                  <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-bold border border-pink-200">
                    Kitty Mode 💖
                  </span>
                )}
              </div>
              <span className={`block text-[10px] uppercase tracking-wider font-bold ${
                isKawaii ? 'text-pink-400' : isDark ? 'text-slate-400' : 'text-slate-400'
              }`}>
                {isKawaii ? 'Cute Touch Typing Tutor' : 'Touch Typing Tutor'}
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? isKawaii
                        ? 'bg-pink-50 text-pink-700 border border-pink-200/80 shadow-2xs'
                        : isDark
                        ? 'bg-slate-800 text-pink-400 border border-slate-700'
                        : 'bg-indigo-50 text-indigo-700 shadow-xs'
                      : isKawaii
                      ? 'text-pink-900/70 hover:text-pink-900 hover:bg-pink-50/60'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {isKawaii && <span className="text-xs">{item.emoji}</span>}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`px-1.5 py-0.2 text-[10px] font-bold rounded-full ${
                      isKawaii
                        ? 'bg-pink-100 text-pink-700 border border-pink-200'
                        : isDark
                        ? 'bg-pink-900/50 text-pink-300'
                        : 'bg-indigo-100 text-indigo-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                      isKawaii ? 'bg-pink-500' : isDark ? 'bg-pink-400' : 'bg-indigo-600'
                    }`} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side: Theme Mode Selector + Streak + CTA */}
          <div className="flex items-center gap-2.5">
            {/* Mode Switcher Pill */}
            <div className={`flex items-center p-1 rounded-2xl border text-xs font-bold transition-all ${
              isKawaii
                ? 'bg-pink-50/80 border-pink-200'
                : isDark
                ? 'bg-slate-800 border-slate-700'
                : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => onToggleTheme('kawaii')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  isKawaii
                    ? 'bg-white text-pink-600 shadow-xs font-black'
                    : 'text-slate-500 hover:text-pink-600'
                }`}
                title="Hello Kitty Kawaii Pink & White Mode"
              >
                <span>🎀</span>
                <span className="hidden sm:inline">Kawaii</span>
              </button>

              <button
                onClick={() => onToggleTheme('modern')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  theme === 'modern'
                    ? 'bg-white text-indigo-700 shadow-xs font-black'
                    : 'text-slate-500 hover:text-indigo-600'
                }`}
                title="Modern Minimal Pro Mode"
              >
                <span>💻</span>
                <span className="hidden sm:inline">Modern</span>
              </button>

              <button
                onClick={() => onToggleTheme('dark')}
                className={`flex items-center gap-1 px-2 py-1 rounded-xl transition cursor-pointer ${
                  isDark
                    ? 'bg-slate-700 text-pink-300 shadow-xs font-black'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Midnight Kitty Dark Mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Streak Counter */}
            <div
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold shadow-2xs border ${
                isKawaii
                  ? 'bg-pink-50 border-pink-200 text-pink-700'
                  : 'bg-amber-50 border-amber-200 text-amber-700'
              }`}
              title={`${streak} day daily typing streak!`}
            >
              <Heart className={`w-3.5 h-3.5 ${isKawaii ? 'text-pink-500 fill-pink-500 animate-pulse' : 'text-amber-500 fill-amber-500'}`} />
              <span>{streak}d</span>
            </div>

            {/* Jump to Practice */}
            <button
              onClick={() => setActivePage('practice')}
              className={`hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-sm hover:shadow transition cursor-pointer ${
                isKawaii
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-pink-200'
                  : isDark
                  ? 'bg-pink-600 hover:bg-pink-700'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              <span>Type Now</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav bar */}
      <div className={`md:hidden flex items-center justify-around border-t px-2 py-1.5 overflow-x-auto ${
        isKawaii ? 'bg-white/95 border-pink-100' : isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex flex-col items-center py-1 px-2.5 rounded-md text-[11px] font-bold transition cursor-pointer ${
                isActive
                  ? isKawaii ? 'text-pink-600' : isDark ? 'text-pink-400' : 'text-indigo-600'
                  : isKawaii ? 'text-pink-900/60' : 'text-slate-400'
              }`}
            >
              <span className="text-sm mb-0.5">{item.emoji}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
