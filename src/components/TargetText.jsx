import React, { useRef, useEffect } from 'react';
import { RotateCcw, AlignLeft } from 'lucide-react';

export default function TargetText({
  targetText = '',
  typedText = '',
  onRestart,
  lessonTitle = '',
  isPaused = false,
  theme = 'kawaii'
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const containerRef = useRef(null);
  const activeCharRef = useRef(null);

  useEffect(() => {
    if (activeCharRef.current && containerRef.current) {
      const container = containerRef.current;
      const charEl = activeCharRef.current;

      const containerRect = container.getBoundingClientRect();
      const charRect = charEl.getBoundingClientRect();

      if (charRect.bottom > containerRect.bottom - 40 || charRect.top < containerRect.top + 20) {
        charEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }
  }, [typedText.length]);

  const currentIndex = typedText.length;
  const totalChars = targetText.length;

  const targetWords = targetText.trim().split(/\s+/);
  const typedWords = typedText.trim().split(/\s+/);
  const currentWordIndex = Math.min(
    targetWords.length,
    typedText.endsWith(' ') ? typedWords.length + 1 : Math.max(1, typedWords.length)
  );

  return (
    <div className={`w-full rounded-3xl border shadow-xs overflow-hidden transition-all duration-200 ${
      isKawaii
        ? 'bg-white border-pink-200/90 shadow-pink-100/50'
        : isDark
        ? 'bg-slate-800 border-slate-700 text-white'
        : 'bg-white border-slate-200/90'
    }`}>
      {/* Header Bar */}
      <div className={`flex items-center justify-between px-5 py-3.5 border-b text-xs font-bold ${
        isKawaii
          ? 'bg-pink-50/70 border-pink-100 text-pink-900'
          : isDark
          ? 'bg-slate-850 border-slate-700 text-slate-300'
          : 'bg-slate-50/90 border-slate-200 text-slate-600'
      }`}>
        <div className="flex items-center gap-2">
          {isKawaii ? <span className="text-sm">🎀</span> : <AlignLeft className="w-4 h-4 text-indigo-600" />}
          <span className="truncate max-w-xs sm:max-w-md">{lessonTitle || 'Target Exercise'}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
            <span>
              Word <strong className={isKawaii ? 'text-pink-600' : 'text-slate-900'}>{currentWordIndex}</strong>/{targetWords.length}
            </span>
            <span>•</span>
            <span>
              Char <strong className={isKawaii ? 'text-pink-600' : 'text-slate-900'}>{currentIndex}</strong>/{totalChars}
            </span>
          </div>

          {onRestart && (
            <button
              onClick={onRestart}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer border ${
                isKawaii
                  ? 'bg-white border-pink-200 text-pink-700 hover:bg-pink-50 shadow-2xs'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title="Restart exercise"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart</span>
            </button>
          )}
        </div>
      </div>

      {/* Target Text Render Container */}
      <div
        ref={containerRef}
        className="relative p-6 sm:p-8 max-h-[220px] overflow-y-auto font-mono text-xl sm:text-2xl leading-relaxed tracking-wide select-none"
        style={{ letterSpacing: '0.04em' }}
      >
        {isPaused && (
          <div className="absolute inset-0 bg-pink-900/30 backdrop-blur-xs flex items-center justify-center z-20 text-white font-sans font-black text-lg">
            Lesson Paused — Click or Press Any Key to Resume 💖
          </div>
        )}

        {targetText.split('').map((char, index) => {
          const isTyped = index < currentIndex;
          const isCurrent = index === currentIndex;
          const typedChar = typedText[index];
          const isCorrect = isTyped && typedChar === char;
          const isIncorrect = isTyped && typedChar !== char;

          const displayChar = char === ' ' ? ' ' : char;

          let charClassName = 'transition-colors duration-75 relative rounded-xs ';

          if (isCurrent) {
            charClassName += isKawaii
              ? 'bg-pink-100 text-pink-900 font-black underline decoration-pink-500 decoration-2 '
              : 'bg-indigo-100 text-indigo-900 font-bold underline decoration-indigo-500 decoration-2 ';
          } else if (isCorrect) {
            charClassName += isKawaii
              ? 'text-emerald-600 font-bold '
              : 'text-emerald-600 font-semibold ';
          } else if (isIncorrect) {
            charClassName += 'text-white bg-rose-500 font-bold rounded px-0.5 ';
          } else {
            charClassName += isKawaii
              ? 'text-pink-300/80 hover:text-pink-400 '
              : 'text-slate-400 hover:text-slate-500 ';
          }

          return (
            <span
              key={index}
              ref={isCurrent ? activeCharRef : null}
              className={charClassName}
            >
              {isCurrent && (
                <span className={`typing-cursor mr-0.5 ${isKawaii ? 'bg-pink-500' : 'bg-indigo-600'}`} />
              )}
              {char === ' ' && isIncorrect ? '␣' : displayChar}
            </span>
          );
        })}

        {currentIndex >= targetText.length && (
          <span className={`typing-cursor ml-0.5 ${isKawaii ? 'bg-pink-500' : 'bg-indigo-600'}`} />
        )}
      </div>
    </div>
  );
}
