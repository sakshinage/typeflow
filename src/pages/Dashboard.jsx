import React from 'react';
import { LESSONS, LESSON_STAGES } from '../data/lessonsData';
import LessonCard from '../components/LessonCard';
import { Play, Flame, Trophy, Target, Gauge, Award, ArrowRight, Sparkles, CheckCircle2, Heart, Star } from 'lucide-react';

export default function Dashboard({
  progress,
  onSelectLesson,
  onNavigate,
  theme = 'kawaii'
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const completedLessons = progress.completedLessons || {};
  const currentLessonId = progress.currentLessonId || 1;
  const streak = progress.streak || 1;

  const completedCount = Object.keys(completedLessons).filter(id => completedLessons[id]?.completed).length;
  const totalLessons = LESSONS.length; // 310
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const bestWpms = Object.values(completedLessons).map(l => l.bestWpm || 0);
  const topWpm = bestWpms.length > 0 ? Math.max(...bestWpms) : 0;

  const accuracies = Object.values(completedLessons).map(l => l.bestAccuracy || 0);
  const avgAccuracy = accuracies.length > 0
    ? Math.round(accuracies.reduce((a, b) => a + b, 0) / accuracies.length)
    : 100;

  const currentLesson = LESSONS.find(l => l.id === currentLessonId) || LESSONS[0];

  return (
    <div className="space-y-10 pb-20">
      {/* Hero Welcome Banner */}
      <section className={`relative overflow-hidden rounded-3xl p-7 sm:p-11 shadow-xl transition-all duration-300 ${
        isKawaii
          ? 'bg-gradient-to-br from-pink-500 via-rose-400 to-pink-600 text-white shadow-pink-200/60 border border-pink-300/40'
          : isDark
          ? 'bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white border border-slate-800'
          : 'bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white'
      }`}>
        {/* Decorative elements */}
        {isKawaii && (
          <>
            <div className="absolute top-2 right-6 text-7xl opacity-20 select-none animate-float-bow pointer-events-none">
              🎀
            </div>
            <div className="absolute bottom-3 right-1/4 text-6xl opacity-15 select-none pointer-events-none">
              🌸
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-pink-300/20 blur-2xl pointer-events-none" />
          </>
        )}

        <div className="relative z-10 max-w-3xl">
          {/* Hello Kitty Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-black uppercase tracking-wider mb-5 shadow-xs">
            <span>{isKawaii ? '🎀 Hello Kitty Edition' : '✨ Touch Typing Tutor'}</span>
            <span>•</span>
            <span>310 Progressive Lessons</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
            Learn to Type.{' '}
            <span className={`${
              isKawaii
                ? 'bg-gradient-to-r from-amber-200 via-white to-pink-100 bg-clip-text text-transparent underline decoration-pink-300'
                : 'bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent'
            }`}>
              Build Accuracy.
            </span>{' '}
            Get Faster.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl font-medium">
            {isKawaii
              ? "Join Hello Kitty and friends on a fun journey to train all 10 fingers! Build 95%+ muscle memory with cute pink guides, tactile bumps, and 310 delightful lessons."
              : "Master all ten fingers with structured step-by-step lessons, realistic virtual keyboard guides, real-time posture feedback, and an accuracy-first curriculum."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectLesson(currentLesson.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base shadow-lg transition-all cursor-pointer group hover:scale-[1.02] ${
                isKawaii
                  ? 'bg-white text-pink-600 hover:bg-pink-50 shadow-pink-900/20'
                  : 'bg-white text-indigo-900 hover:bg-indigo-50 shadow-indigo-950/40'
              }`}
            >
              <Play className={`w-5 h-5 group-hover:scale-110 transition-transform ${
                isKawaii ? 'fill-pink-500 text-pink-500' : 'fill-indigo-600 text-indigo-600'
              }`} />
              <span>{completedCount === 0 ? 'Start Learning' : `Continue Lesson ${currentLesson.id}`}</span>
            </button>

            <button
              onClick={() => onNavigate('lessons')}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm backdrop-blur-sm border border-white/25 transition cursor-pointer"
            >
              <span>Explore All 310 Lessons</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Cute Mascot Greeting Callout (Kawaii Mode Only) */}
      {isKawaii && (
        <div className="bg-white rounded-3xl p-5 border border-pink-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-pink-100 border-2 border-pink-200 flex items-center justify-center text-3xl shadow-xs shrink-0 select-none animate-bounce">
              🐱
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-pink-700 text-sm">Hello Kitty says:</span>
                <span className="text-xs bg-pink-50 text-pink-600 font-bold px-2 py-0.5 rounded-full border border-pink-100">
                  Tip of the Day 🍎
                </span>
              </div>
              <p className="text-xs sm:text-sm text-pink-900/80 mt-1 font-medium leading-relaxed">
                "Rest your index fingers on F and J bumps! You don't need to look down at your hands — trust your muscle memory! 💖"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs font-bold text-pink-600 bg-pink-50 px-4 py-2 rounded-2xl border border-pink-100">
            <span>🍎 5 Apples Tall</span>
            <span>•</span>
            <span>🥧 Loves Apple Pie</span>
          </div>
        </div>
      )}

      {/* Beginner-Friendly Typing Progress Dashboard */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl sm:text-2xl font-black ${
              isKawaii ? 'text-pink-900' : isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Your Typing Dashboard
            </h2>
            <p className={`text-xs sm:text-sm ${
              isKawaii ? 'text-pink-900/70' : isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Track your daily consistency, speed, and accuracy across 310 lessons
            </p>
          </div>

          <button
            onClick={() => onNavigate('progress')}
            className={`text-xs sm:text-sm font-bold flex items-center gap-1 hover:underline ${
              isKawaii ? 'text-pink-600' : 'text-indigo-600'
            }`}
          >
            <span>View Detailed Analytics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Lessons Completed */}
          <div className={`rounded-3xl p-5 sm:p-6 border shadow-xs flex flex-col justify-between ${
            isKawaii
              ? 'bg-white border-pink-200/80 shadow-pink-100/40'
              : isDark
              ? 'bg-slate-800/90 border-slate-700 text-white'
              : 'bg-white border-slate-200/90'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-black uppercase tracking-wider ${
                isKawaii ? 'text-pink-600' : 'text-slate-500'
              }`}>
                Lessons Finished
              </span>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isKawaii ? 'bg-pink-100 text-pink-600' : 'bg-indigo-50 text-indigo-600'
              }`}>
                {isKawaii ? '🎀' : <CheckCircle2 className="w-5 h-5" />}
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl sm:text-4xl font-black font-mono ${
                  isKawaii ? 'text-pink-900' : isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {completedCount}
                </span>
                <span className={`text-sm font-bold font-mono ${
                  isKawaii ? 'text-pink-500' : 'text-slate-400'
                }`}>
                  / {totalLessons}
                </span>
              </div>
              <div className={`mt-3 w-full rounded-full h-2 overflow-hidden ${
                isKawaii ? 'bg-pink-100' : 'bg-slate-100'
              }`}>
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isKawaii ? 'bg-gradient-to-r from-pink-500 to-rose-400' : 'bg-indigo-600'
                  }`}
                  style={{ width: `${Math.max(2, progressPercent)}%` }}
                />
              </div>
              <span className={`text-[11px] mt-1 block font-bold ${
                isKawaii ? 'text-pink-500' : 'text-slate-400'
              }`}>
                {progressPercent}% of 310 lessons completed
              </span>
            </div>
          </div>

          {/* Current Typing Speed */}
          <div className={`rounded-3xl p-5 sm:p-6 border shadow-xs flex flex-col justify-between ${
            isKawaii
              ? 'bg-white border-pink-200/80 shadow-pink-100/40'
              : isDark
              ? 'bg-slate-800/90 border-slate-700 text-white'
              : 'bg-white border-slate-200/90'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-black uppercase tracking-wider ${
                isKawaii ? 'text-pink-600' : 'text-slate-500'
              }`}>
                Top Speed
              </span>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isKawaii ? 'bg-rose-50 text-rose-500' : 'bg-cyan-50 text-cyan-600'
              }`}>
                <Gauge className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-1.5">
                <span className={`text-3xl sm:text-4xl font-black font-mono ${
                  isKawaii ? 'text-pink-900' : isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {topWpm}
                </span>
                <span className={`text-sm font-bold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
                  WPM
                </span>
              </div>
              <p className={`text-[11px] mt-3 font-semibold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
                Words per minute personal best
              </p>
            </div>
          </div>

          {/* Overall Accuracy */}
          <div className={`rounded-3xl p-5 sm:p-6 border shadow-xs flex flex-col justify-between ${
            isKawaii
              ? 'bg-white border-pink-200/80 shadow-pink-100/40'
              : isDark
              ? 'bg-slate-800/90 border-slate-700 text-white'
              : 'bg-white border-slate-200/90'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-black uppercase tracking-wider ${
                isKawaii ? 'text-pink-600' : 'text-slate-500'
              }`}>
                Accuracy
              </span>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isKawaii ? 'bg-emerald-50 text-emerald-600' : 'bg-emerald-50 text-emerald-600'
              }`}>
                <Target className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600">
                  {avgAccuracy}%
                </span>
              </div>
              <p className={`text-[11px] mt-3 font-semibold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
                Accuracy milestone is 95%+
              </p>
            </div>
          </div>

          {/* Practice Streak */}
          <div className={`rounded-3xl p-5 sm:p-6 border shadow-xs flex flex-col justify-between ${
            isKawaii
              ? 'bg-white border-pink-200/80 shadow-pink-100/40'
              : isDark
              ? 'bg-slate-800/90 border-slate-700 text-white'
              : 'bg-white border-slate-200/90'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-black uppercase tracking-wider ${
                isKawaii ? 'text-pink-600' : 'text-slate-500'
              }`}>
                Practice Streak
              </span>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isKawaii ? 'bg-pink-100 text-pink-500' : 'bg-amber-50 text-amber-600'
              }`}>
                <Heart className="w-5 h-5 fill-current animate-pulse" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-1.5">
                <span className={`text-3xl sm:text-4xl font-black font-mono ${
                  isKawaii ? 'text-pink-900' : isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {streak}
                </span>
                <span className={`text-sm font-bold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
                  Day{streak !== 1 ? 's' : ''}
                </span>
              </div>
              <p className={`text-[11px] mt-3 font-semibold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
                Practice daily for muscle memory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Lesson Progression (Next 6 Lessons) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl sm:text-2xl font-black ${
              isKawaii ? 'text-pink-900' : isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Visual Lesson Progression
            </h2>
            <p className={`text-xs sm:text-sm ${
              isKawaii ? 'text-pink-900/70' : isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Currently at Lesson {currentLessonId} of 310 — continue right where you left off
            </p>
          </div>

          <button
            onClick={() => onNavigate('lessons')}
            className={`text-xs sm:text-sm font-bold flex items-center gap-1 hover:underline ${
              isKawaii ? 'text-pink-600' : 'text-indigo-600'
            }`}
          >
            <span>See all 310 Lessons</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Display surrounding lessons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LESSONS.slice(
            Math.max(0, currentLessonId - 2),
            Math.min(LESSONS.length, Math.max(6, currentLessonId + 4))
          ).slice(0, 6).map((lesson) => {
            const isCompleted = !!completedLessons[lesson.id]?.completed;
            const isCurrent = lesson.id === currentLessonId;
            const isLocked = lesson.id > currentLessonId && !isCompleted;

            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                completedData={completedLessons[lesson.id]}
                isCurrent={isCurrent}
                isLocked={isLocked}
                onSelectLesson={onSelectLesson}
                theme={theme}
              />
            );
          })}
        </div>
      </section>

      {/* 8 Curriculum Stages Overview */}
      <section className="space-y-4 pt-2">
        <h2 className={`text-xl sm:text-2xl font-black ${
          isKawaii ? 'text-pink-900' : isDark ? 'text-white' : 'text-slate-800'
        }`}>
          The 8 Stages of Mastery (310 Lessons)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LESSON_STAGES.map((stg) => {
            const stgLessons = LESSONS.filter(l => l.stage === stg.id);
            const stgDone = stgLessons.filter(l => completedLessons[l.id]?.completed).length;
            const isCurrentStage = currentLesson.stage === stg.id;

            return (
              <div
                key={stg.id}
                onClick={() => onNavigate('lessons')}
                className={`p-4 rounded-3xl border transition-all cursor-pointer hover:-translate-y-0.5 ${
                  isCurrentStage
                    ? isKawaii
                      ? 'bg-pink-50 border-pink-400 ring-2 ring-pink-200'
                      : 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-200'
                    : isKawaii
                    ? 'bg-white border-pink-200/80 hover:border-pink-300'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-xl select-none">{stg.kawaiiIcon}</span>
                  <span className={`font-mono text-[11px] font-bold ${
                    isKawaii ? 'text-pink-600' : 'text-indigo-600'
                  }`}>
                    {stgDone}/{stgLessons.length}
                  </span>
                </div>
                <h3 className={`font-bold text-sm ${
                  isKawaii ? 'text-pink-950' : 'text-slate-900'
                }`}>
                  {stg.badge}
                </h3>
                <p className={`text-[11px] mt-0.5 ${
                  isKawaii ? 'text-pink-800/70' : 'text-slate-500'
                }`}>
                  {stg.range}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
