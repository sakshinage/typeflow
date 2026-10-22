import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Star, ArrowRight, RotateCcw, BookOpen, AlertTriangle, Sparkles, Heart } from 'lucide-react';

export default function LessonResult({
  result,
  lesson,
  previousAttempt = null,
  onRetry,
  onNextLesson,
  onBackToLessons,
  theme = 'kawaii'
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const {
    wpm = 0,
    grossWpm = 0,
    netWpm = 0,
    accuracy = 0,
    correctChars = 0,
    incorrectChars = 0,
    durationSeconds = 0,
    stars = 1,
    passed = true
  } = result || {};

  const targetAccuracy = lesson?.targetAccuracy || 95;
  const isAccuracyMet = accuracy >= targetAccuracy;

  // Trigger celebration confetti
  useEffect(() => {
    if (isAccuracyMet) {
      try {
        confetti({
          particleCount: isKawaii ? 90 : 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: isKawaii
            ? ['#ff4d88', '#ff85a2', '#fbcfe8', '#f43f5e', '#ffd700', '#ffffff']
            : ['#4f46e5', '#22c55e', '#f59e0b', '#ec4899', '#06b6d4']
        });
      } catch (e) {}
    }
  }, [isAccuracyMet, isKawaii]);

  const wpmDiff = previousAttempt ? wpm - (previousAttempt.bestWpm || 0) : null;
  const accDiff = previousAttempt ? (accuracy - (previousAttempt.bestAccuracy || 0)).toFixed(1) : null;

  let suggestion = "";
  if (!isAccuracyMet) {
    suggestion = isKawaii
      ? `You achieved ${accuracy}% accuracy, just under our ${targetAccuracy}% milestone! Let's repeat this exercise together to build stronger finger muscle memory! 💖`
      : `Your accuracy was ${accuracy}%, just below the ${targetAccuracy}% milestone. Repeating this lesson now will build stronger muscle memory before advancing.`;
  } else if (accuracy >= 98) {
    suggestion = isKawaii
      ? "Purr-fect! Your fingers danced across the keys with near-flawless precision! You are totally ready for the next lesson! 🎀✨"
      : "Exceptional technique! Your finger accuracy is nearly flawless. You are ready to tackle the next lesson with confidence.";
  } else {
    suggestion = isKawaii
      ? "Wonderful job hitting our accuracy target! Keep your hands relaxed and maintain this sweet rhythm as you advance! 🌸"
      : "Great job reaching the target accuracy! Focus on maintaining consistent keystroke rhythm as your fingers learn their natural positions.";
  }

  return (
    <div className={`max-w-2xl mx-auto rounded-3xl border shadow-xl overflow-hidden animate-fadeIn ${
      isKawaii
        ? 'bg-white border-pink-200 shadow-pink-200/50'
        : isDark
        ? 'bg-slate-850 border-slate-700 text-white'
        : 'bg-white border-slate-200'
    }`}>
      {/* Top Banner */}
      <div className={`p-8 text-center text-white relative ${
        isAccuracyMet
          ? isKawaii
            ? 'bg-gradient-to-br from-pink-500 via-rose-400 to-pink-600'
            : isDark
            ? 'bg-gradient-to-br from-purple-800 to-pink-700'
            : 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700'
          : 'bg-gradient-to-br from-amber-500 to-orange-500'
      }`}>
        <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-md mb-3 ring-2 ring-white/30 text-3xl select-none">
          {isAccuracyMet ? (isKawaii ? '🎀' : <Trophy className="w-10 h-10 text-amber-300" />) : <AlertTriangle className="w-10 h-10 text-white" />}
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          {isAccuracyMet ? (isKawaii ? 'Lesson Cleared! 💖' : 'Lesson Completed!') : 'Keep Practicing!'}
        </h2>
        <p className="text-white/90 text-sm mt-1 max-w-md mx-auto font-medium">
          {lesson?.title || 'Typing Exercise Summary'}
        </p>

        {/* Star Rating Badge */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {[1, 2, 3].map((starIndex) => (
            <Star
              key={starIndex}
              className={`w-7 h-7 ${
                starIndex <= stars
                  ? 'text-amber-300 fill-amber-300 drop-shadow-md animate-bounce'
                  : 'text-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Stats Summary Cards */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Final WPM */}
          <div className={`rounded-2xl p-4 border text-center ${
            isKawaii ? 'bg-pink-50/60 border-pink-100' : 'bg-slate-50 border-slate-100'
          }`}>
            <span className="text-xs font-bold uppercase text-slate-400 block">Speed</span>
            <div className={`text-3xl font-black font-mono mt-1 ${
              isKawaii ? 'text-pink-900' : 'text-slate-900'
            }`}>
              {wpm} <span className="text-xs font-normal text-slate-400">WPM</span>
            </div>
            {wpmDiff !== null && (
              <span className={`text-[11px] font-bold ${wpmDiff >= 0 ? 'text-emerald-600' : 'text-slate-400'}`}>
                {wpmDiff >= 0 ? `+${wpmDiff}` : wpmDiff} vs best
              </span>
            )}
          </div>

          {/* Final Accuracy */}
          <div className={`rounded-2xl p-4 border text-center ${
            isAccuracyMet ? 'bg-emerald-50/70 border-emerald-200' : 'bg-amber-50/70 border-amber-200'
          }`}>
            <span className="text-xs font-bold uppercase text-slate-500 block">Accuracy</span>
            <div className={`text-3xl font-black font-mono mt-1 ${
              isAccuracyMet ? 'text-emerald-700' : 'text-amber-700'
            }`}>
              {accuracy}%
            </div>
            {accDiff !== null && (
              <span className={`text-[11px] font-bold ${Number(accDiff) >= 0 ? 'text-emerald-700' : 'text-slate-400'}`}>
                {Number(accDiff) >= 0 ? `+${accDiff}%` : `${accDiff}%`} vs best
              </span>
            )}
          </div>

          {/* Keystrokes */}
          <div className={`rounded-2xl p-4 border text-center ${
            isKawaii ? 'bg-pink-50/60 border-pink-100' : 'bg-slate-50 border-slate-100'
          }`}>
            <span className="text-xs font-bold uppercase text-slate-400 block">Keystrokes</span>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="font-mono text-xl font-bold text-emerald-600">{correctChars}</span>
              <span className="text-slate-300">/</span>
              <span className="font-mono text-xl font-bold text-rose-500">{incorrectChars}</span>
            </div>
            <span className="text-[10px] text-slate-400">ok / err</span>
          </div>

          {/* Time */}
          <div className={`rounded-2xl p-4 border text-center ${
            isKawaii ? 'bg-pink-50/60 border-pink-100' : 'bg-slate-50 border-slate-100'
          }`}>
            <span className="text-xs font-bold uppercase text-slate-400 block">Time</span>
            <div className={`text-2xl font-black font-mono mt-1 ${
              isKawaii ? 'text-pink-900' : 'text-slate-800'
            }`}>
              {durationSeconds}s
            </div>
            <span className="text-[10px] text-slate-400">practice</span>
          </div>
        </div>

        {/* Cute Advice Box */}
        <div className={`p-4 rounded-2xl border text-sm flex items-start gap-3.5 ${
          isAccuracyMet
            ? isKawaii
              ? 'bg-pink-50/80 border-pink-200 text-pink-950'
              : 'bg-indigo-50/60 border-indigo-100 text-indigo-950'
            : 'bg-amber-50/70 border-amber-200 text-amber-950'
        }`}>
          <div className="p-2 rounded-xl bg-white border border-pink-200 shrink-0 text-xl select-none">
            {isKawaii ? '🐱' : <Sparkles className="w-5 h-5 text-indigo-600" />}
          </div>
          <div>
            <h4 className="font-black text-xs uppercase tracking-wider mb-1">
              {isKawaii ? 'Hello Kitty Feedback 💖' : 'Improvement Tip'}
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm font-medium">{suggestion}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-pink-100">
          <button
            onClick={onBackToLessons}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border font-bold text-xs sm:text-sm transition cursor-pointer ${
              isKawaii
                ? 'border-pink-200 text-pink-700 hover:bg-pink-50'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>All 310 Lessons</span>
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3">
            <button
              onClick={onRetry}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-slate-600" />
              <span>Retry</span>
            </button>

            <button
              onClick={onNextLesson}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-black text-xs sm:text-sm text-white shadow-md transition cursor-pointer ${
                isAccuracyMet
                  ? isKawaii
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-pink-200'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-slate-700 hover:bg-slate-800'
              }`}
            >
              <span>{isAccuracyMet ? 'Next Lesson 🎀' : 'Continue Anyway'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
