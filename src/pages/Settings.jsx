import React from 'react';
import { Settings as SettingsIcon, Volume2, Hand, Eye, Target, Shield, Palette, Sparkles, Heart } from 'lucide-react';
import { playKeySound } from '../utils/soundEffects';

export default function Settings({ settings, onSaveSettings, theme = 'kawaii' }) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const handleChange = (key, value) => {
    const updated = { ...settings, [key]: value };
    onSaveSettings(updated);
  };

  const handleTestSound = (type) => {
    playKeySound(type);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-24">
      <div>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border shadow-2xs ${
          isKawaii ? 'bg-pink-100 text-pink-700 border-pink-200' : 'bg-indigo-50 text-indigo-700 border-indigo-100'
        }`}>
          <span>{isKawaii ? '🎀 Preferences' : '⚙️ Preferences'}</span>
        </div>
        <h1 className={`text-3xl font-black tracking-tight ${
          isKawaii ? 'text-pink-950' : isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Tutor Settings & Themes
        </h1>
        <p className={`text-sm mt-1 ${isKawaii ? 'text-pink-900/70' : 'text-slate-500'}`}>
          Switch between Hello Kitty Kawaii, Modern Pro, and Dark modes, adjust sound profiles, and set milestones
        </p>
      </div>

      <div className={`rounded-3xl border divide-y shadow-xs overflow-hidden ${
        isKawaii
          ? 'bg-white border-pink-200 divide-pink-100 shadow-pink-100/50'
          : isDark
          ? 'bg-slate-800 border-slate-700 divide-slate-700 text-white'
          : 'bg-white border-slate-200 divide-slate-100'
      }`}>
        {/* Theme Mode Selector */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              isKawaii ? 'bg-pink-100 text-pink-600' : 'bg-indigo-50 text-indigo-600'
            }`}>
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-black text-base ${isKawaii ? 'text-pink-950' : 'text-slate-800'}`}>
                Visual Theme Mode
              </h3>
              <p className={`text-xs ${isKawaii ? 'text-pink-900/70' : 'text-slate-500'}`}>
                Choose your preferred visual aesthetic and color palette
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[
              {
                id: 'kawaii',
                name: 'Kawaii Pink & White',
                emoji: '🎀',
                desc: 'Hello Kitty pink, white, cute bows & hearts',
                bg: 'bg-gradient-to-br from-pink-50 to-white border-pink-300'
              },
              {
                id: 'modern',
                name: 'Modern Minimal Pro',
                emoji: '💻',
                desc: 'Clean slate & indigo professional aesthetic',
                bg: 'bg-gradient-to-br from-slate-50 to-white border-slate-300'
              },
              {
                id: 'dark',
                name: 'Midnight Kitty',
                emoji: '🌙',
                desc: 'Dark obsidian background with glowing pink accents',
                bg: 'bg-slate-900 border-slate-700 text-white'
              }
            ].map((m) => {
              const isSelected = settings.theme === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => handleChange('theme', m.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-pink-500 ring-2 ring-pink-300 shadow-md scale-[1.02]'
                      : 'border-slate-200/80 hover:border-pink-200'
                  } ${m.bg}`}
                >
                  <div>
                    <span className="text-2xl select-none mb-2 block">{m.emoji}</span>
                    <h4 className="font-black text-xs sm:text-sm">{m.name}</h4>
                    <p className="text-[11px] opacity-75 mt-1 leading-snug">{m.desc}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-pink-500 text-white' : 'bg-slate-200/60 text-slate-600'
                    }`}>
                      {isSelected ? 'Active Mode' : 'Select'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sound Effects Toggle & Selector */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                isKawaii ? 'bg-pink-100 text-pink-600' : 'bg-indigo-50 text-indigo-600'
              }`}>
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-black text-base ${isKawaii ? 'text-pink-950' : 'text-slate-800'}`}>
                  Typing Audio Feedback
                </h3>
                <p className={`text-xs ${isKawaii ? 'text-pink-900/70' : 'text-slate-500'}`}>
                  Play synthesized sound effects when you strike keys
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={(e) => handleChange('soundEnabled', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
            </label>
          </div>

          {settings.soundEnabled && (
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="text-xs font-bold text-slate-500">Audio Profile:</span>
              {[
                { id: 'kawaii', label: '🎀 Kawaii Bubble Pop' },
                { id: 'mechanical', label: '⌨️ Mechanical Switch' },
                { id: 'soft', label: '💻 Soft Membrane' }
              ].map((snd) => (
                <button
                  key={snd.id}
                  onClick={() => {
                    handleChange('soundType', snd.id);
                    handleTestSound(snd.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    settings.soundType === snd.id
                      ? 'bg-pink-500 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {snd.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Visual Finger Placement Hints */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              isKawaii ? 'bg-pink-100 text-pink-600' : 'bg-amber-50 text-amber-600'
            }`}>
              <Hand className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-black text-base ${isKawaii ? 'text-pink-950' : 'text-slate-800'}`}>
                Finger-Placement Color Hints
              </h3>
              <p className={`text-xs ${isKawaii ? 'text-pink-900/70' : 'text-slate-500'}`}>
                Color-code keys by finger and show recommended finger prompts
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.showFingerHints}
              onChange={(e) => handleChange('showFingerHints', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
          </label>
        </div>

        {/* Visual Anatomical Hand Diagram */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              isKawaii ? 'bg-pink-100 text-pink-600' : 'bg-cyan-50 text-cyan-600'
            }`}>
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-black text-base ${isKawaii ? 'text-pink-950' : 'text-slate-800'}`}>
                Visual Hand Diagram
              </h3>
              <p className={`text-xs ${isKawaii ? 'text-pink-900/70' : 'text-slate-500'}`}>
                Show animated hands with glowing fingertips for home row anchors
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.showHandGuide}
              onChange={(e) => handleChange('showHandGuide', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
          </label>
        </div>

        {/* Backspace Correction */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              isKawaii ? 'bg-pink-100 text-pink-600' : 'bg-emerald-50 text-emerald-600'
            }`}>
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-black text-base ${isKawaii ? 'text-pink-950' : 'text-slate-800'}`}>
                Allow Backspace Correction
              </h3>
              <p className={`text-xs ${isKawaii ? 'text-pink-900/70' : 'text-slate-500'}`}>
                Allow erasing typos with Backspace to practice immediate self-correction
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.allowBackspace}
              onChange={(e) => handleChange('allowBackspace', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
          </label>
        </div>

        {/* Target Accuracy Milestone */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                isKawaii ? 'bg-pink-100 text-pink-600' : 'bg-purple-50 text-purple-600'
              }`}>
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-black text-base ${isKawaii ? 'text-pink-950' : 'text-slate-800'}`}>
                  Target Accuracy Goal
                </h3>
                <p className={`text-xs ${isKawaii ? 'text-pink-900/70' : 'text-slate-500'}`}>
                  Recommended milestone before advancing to speed exercises
                </p>
              </div>
            </div>

            <span className={`font-mono text-base font-black px-3 py-1 rounded-xl border ${
              isKawaii ? 'bg-pink-50 text-pink-600 border-pink-200' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
            }`}>
              {settings.targetAccuracy}%
            </span>
          </div>

          <div className="flex items-center gap-2 pt-2">
            {[90, 95, 98].map((acc) => (
              <button
                key={acc}
                onClick={() => handleChange('targetAccuracy', acc)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  settings.targetAccuracy === acc
                    ? 'bg-pink-500 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {acc}% {acc === 95 ? '(Recommended)' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
