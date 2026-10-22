import React from 'react';
import { Gauge, Target, CheckCircle2, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function TypingStatistics({
  wpm = 0,
  grossWpm = 0,
  netWpm = 0,
  accuracy = 100,
  correctChars = 0,
  incorrectChars = 0,
  totalChars = 0,
  elapsedSeconds = 0,
  targetAccuracy = 95,
  theme = 'kawaii'
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const typedChars = correctChars + incorrectChars;
  const remainingChars = Math.max(0, totalChars - typedChars);
  const progressPercent = totalChars > 0 ? Math.min(100, Math.round((typedChars / totalChars) * 100)) : 0;

  // Accuracy badge styling
  let accuracyColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  let accuracyBadge = isKawaii ? '🎀 Flawless Precision' : 'Excellent Precision';
  if (accuracy < 90) {
    accuracyColor = 'text-rose-600 bg-rose-50 border-rose-200';
    accuracyBadge = isKawaii ? '🐱 Focus on Fingers' : 'Needs Focus on Fingers';
  } else if (accuracy < targetAccuracy) {
    accuracyColor = 'text-amber-600 bg-amber-50 border-amber-200';
    accuracyBadge = 'Aim for 95%+';
  }

  // Cute encouragement message
  let feedbackMessage = isKawaii
    ? "Rest your fingers on home row anchors (A S D F & J K L ;) 🎀"
    : "Place fingers on home row anchors (A S D F & J K L ;).";

  if (typedChars > 5) {
    if (accuracy >= 98) {
      feedbackMessage = isKawaii
        ? "✨ Purr-fect accuracy! Hello Kitty is so proud of you! 💖"
        : "🌟 Flawless accuracy! Your muscle memory is locking in.";
    } else if (accuracy >= 95) {
      feedbackMessage = isKawaii
        ? "🎀 Great job! Your accuracy is right on target. Keep this sweet rhythm!"
        : "✨ Great! Your accuracy is right on target. Keep this steady rhythm.";
    } else if (accuracy >= 90) {
      feedbackMessage = isKawaii
        ? "🍎 Slow down a little and focus on the correct finger, cutie!"
        : "💡 Slow down a little and focus on the correct finger rather than speed.";
    } else {
      feedbackMessage = isKawaii
        ? "💖 Prioritize accuracy over speed! Relax your wrists and take a deep breath."
        : "⚠️ Prioritize accuracy over speed. Relax your shoulders and check finger positions.";
    }
  }

  return (
    <div className={`w-full rounded-3xl border p-4 sm:p-5 shadow-xs space-y-4 transition-all duration-200 ${
      isKawaii
        ? 'bg-white border-pink-200/90 shadow-pink-100/40'
        : isDark
        ? 'bg-slate-800 border-slate-700 text-white'
        : 'bg-white border-slate-200/90'
    }`}>
      {/* Top Stat Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {/* Speed / WPM */}
        <div className={`rounded-2xl p-3 border flex flex-col justify-between ${
          isKawaii ? 'bg-pink-50/50 border-pink-100' : isDark ? 'bg-slate-750 border-slate-700' : 'bg-slate-50/80 border-slate-100'
        }`}>
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Gauge className={`w-3.5 h-3.5 ${isKawaii ? 'text-pink-500' : 'text-indigo-600'}`} />
              <span>Speed (WPM)</span>
            </span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className={`text-2xl sm:text-3xl font-black font-mono ${
              isKawaii ? 'text-pink-950' : isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {wpm}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Net {netWpm}
            </span>
          </div>
          <span className="text-[10px] text-slate-400">Gross: {grossWpm} WPM</span>
        </div>

        {/* Accuracy % */}
        <div className={`rounded-2xl p-3 border flex flex-col justify-between transition-colors ${accuracyColor}`}>
          <div className="flex items-center justify-between text-xs font-black">
            <span className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>Accuracy</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider">
              Goal {targetAccuracy}%
            </span>
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-black font-mono">
              {accuracy}%
            </span>
          </div>
          <span className="text-[10px] font-bold truncate">{accuracyBadge}</span>
        </div>

        {/* Keystrokes Breakdown */}
        <div className={`rounded-2xl p-3 border flex flex-col justify-between ${
          isKawaii ? 'bg-pink-50/50 border-pink-100' : isDark ? 'bg-slate-750 border-slate-700' : 'bg-slate-50/80 border-slate-100'
        }`}>
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Keystrokes</span>
            </span>
          </div>
          <div className="mt-1 flex items-center gap-3">
            <div className="flex items-center gap-1 text-emerald-600 font-mono font-black text-lg">
              <span>{correctChars}</span>
              <span className="text-[10px] text-slate-400 font-sans">ok</span>
            </div>
            <div className="flex items-center gap-1 text-rose-500 font-mono font-black text-lg">
              <span>{incorrectChars}</span>
              <span className="text-[10px] text-slate-400 font-sans">err</span>
            </div>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">{remainingChars} left</span>
        </div>

        {/* Elapsed Timer */}
        <div className={`rounded-2xl p-3 border flex flex-col justify-between ${
          isKawaii ? 'bg-pink-50/50 border-pink-100' : isDark ? 'bg-slate-750 border-slate-700' : 'bg-slate-50/80 border-slate-100'
        }`}>
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className={`w-3.5 h-3.5 ${isKawaii ? 'text-pink-500' : 'text-indigo-500'}`} />
              <span>Elapsed</span>
            </span>
          </div>
          <div className="mt-1">
            <span className={`text-2xl sm:text-3xl font-black font-mono ${
              isKawaii ? 'text-pink-950' : isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {timeFormatted}
            </span>
          </div>
          <span className="text-[10px] text-slate-400">Live timer</span>
        </div>

        {/* Progress % */}
        <div className={`col-span-2 sm:col-span-1 rounded-2xl p-3 border flex flex-col justify-between ${
          isKawaii ? 'bg-pink-50/50 border-pink-100' : isDark ? 'bg-slate-750 border-slate-700' : 'bg-slate-50/80 border-slate-100'
        }`}>
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className={`w-3.5 h-3.5 ${isKawaii ? 'text-pink-500' : 'text-indigo-600'}`} />
              <span>Done</span>
            </span>
            <span className="font-mono text-xs font-black text-slate-800">{progressPercent}%</span>
          </div>
          <div className={`mt-2 w-full rounded-full h-2 overflow-hidden ${
            isKawaii ? 'bg-pink-200/60' : 'bg-slate-200'
          }`}>
            <div
              className={`h-full rounded-full transition-all duration-200 ${
                isKawaii ? 'bg-gradient-to-r from-pink-500 to-rose-400' : 'bg-indigo-600'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400 mt-1">
            {typedChars} / {totalChars} chars
          </span>
        </div>
      </div>

      {/* Accuracy First Pedagogical Banner */}
      <div className={`rounded-2xl px-4 py-2.5 flex items-center justify-between gap-3 text-xs border ${
        isKawaii
          ? 'bg-pink-50/80 border-pink-200 text-pink-900'
          : 'bg-indigo-50/60 border-indigo-100 text-indigo-900'
      }`}>
        <div className="flex items-center gap-2">
          {isKawaii ? <Heart className="w-4 h-4 text-pink-500 fill-pink-500 shrink-0" /> : <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />}
          <span className="font-bold">{feedbackMessage}</span>
        </div>
        <span className={`hidden sm:inline-block text-[11px] font-black shrink-0 ${
          isKawaii ? 'text-pink-600' : 'text-indigo-600'
        }`}>
          {isKawaii ? '💖 95%+ Target' : 'Accuracy First'}
        </span>
      </div>
    </div>
  );
}
