import React from 'react';
import ProgressChart from '../components/ProgressChart';
import { LESSONS } from '../data/lessonsData';
import { resetProgress } from '../utils/progressStorage';
import { BarChart2, Trophy, Clock, Target, CheckCircle2, RotateCcw, Layers } from 'lucide-react';

export default function Progress({ progress, onReset, theme = 'kawaii' }) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const completedLessons = progress?.completedLessons || {};
  const history = progress?.history || [];
  const keyMistakes = progress?.keyMistakes || {};
  const streak = progress?.streak || 1;
  const totalPracticeSeconds = progress?.totalPracticeSeconds || 0;
  const totalChars = progress?.totalCharsTyped || 0;

  const totalHours = Math.floor(totalPracticeSeconds / 3600);
  const totalMins = Math.floor((totalPracticeSeconds % 3600) / 60);
  const timeFormatted = totalHours > 0 ? `${totalHours}h ${totalMins}m` : `${totalMins} mins`;

  const bestWpms = Object.values(completedLessons).map(l => l.bestWpm || 0);
  const bestWpmOverall = bestWpms.length > 0 ? Math.max(...bestWpms) : 0;

  const accuracies = Object.values(completedLessons).map(l => l.bestAccuracy || 0);
  const avgAccuracy = accuracies.length > 0
    ? Math.round(accuracies.reduce((a, b) => a + b, 0) / accuracies.length)
    : 100;

  const completedCount = Object.keys(completedLessons).filter(id => completedLessons[id]?.completed).length;

  const handleResetConfirm = () => {
    if (window.confirm("Are you sure you want to reset all your typing progress and statistics? This cannot be undone.")) {
      resetProgress();
      if (onReset) onReset();
    }
  };

  return (
    <div className="space-y-8 pb-24">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border shadow-2xs ${
            isKawaii ? 'bg-pink-100 text-pink-700 border-pink-200' : 'bg-indigo-50 text-indigo-700 border-indigo-100'
          }`}>
            <span>{isKawaii ? '🎀 Learning Records' : '📊 Learning Records'}</span>
          </div>
          <h1 className={`text-3xl font-black tracking-tight ${
            isKawaii ? 'text-pink-950' : isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Progress & Performance Statistics
          </h1>
          <p className={`text-sm mt-1 ${isKawaii ? 'text-pink-900/70' : 'text-slate-500'}`}>
            Track your progress across all 310 curriculum lessons, error heatmap, and milestones
          </p>
        </div>

        <button
          onClick={handleResetConfirm}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold transition cursor-pointer self-start sm:self-auto"
          title="Reset local progress data"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Progress</span>
        </button>
      </div>

      {/* Top 4 Lifetime Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`rounded-3xl p-5 border shadow-xs flex flex-col justify-between ${
          isKawaii ? 'bg-white border-pink-200 shadow-pink-100/40' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
            <span>Lessons Cleared</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-3">
            <span className={`text-3xl font-black font-mono ${
              isKawaii ? 'text-pink-900' : 'text-slate-900'
            }`}>
              {completedCount} <span className="text-sm font-semibold text-slate-400 font-mono">/ {LESSONS.length}</span>
            </span>
            <span className={`text-[11px] block mt-1 font-bold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
              {Math.round((completedCount / LESSONS.length) * 100)}% of 310 lessons
            </span>
          </div>
        </div>

        <div className={`rounded-3xl p-5 border shadow-xs flex flex-col justify-between ${
          isKawaii ? 'bg-white border-pink-200 shadow-pink-100/40' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
            <span>Lifetime Best</span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-3">
            <span className={`text-3xl font-black font-mono ${
              isKawaii ? 'text-pink-900' : 'text-slate-900'
            }`}>
              {bestWpmOverall} <span className="text-sm font-bold text-slate-400 font-sans">WPM</span>
            </span>
            <span className={`text-[11px] block mt-1 font-bold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
              Highest recorded lesson velocity
            </span>
          </div>
        </div>

        <div className={`rounded-3xl p-5 border shadow-xs flex flex-col justify-between ${
          isKawaii ? 'bg-white border-pink-200 shadow-pink-100/40' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
            <span>Overall Accuracy</span>
            <Target className="w-4 h-4 text-pink-500" />
          </div>
          <div className="mt-3">
            <span className="text-3xl font-black font-mono text-emerald-600">
              {avgAccuracy}%
            </span>
            <span className={`text-[11px] block mt-1 font-bold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
              Across all completed exercises
            </span>
          </div>
        </div>

        <div className={`rounded-3xl p-5 border shadow-xs flex flex-col justify-between ${
          isKawaii ? 'bg-white border-pink-200 shadow-pink-100/40' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
            <span>Practice Time</span>
            <Clock className="w-4 h-4 text-purple-500" />
          </div>
          <div className="mt-3">
            <span className={`text-3xl font-black font-mono ${
              isKawaii ? 'text-pink-900' : 'text-slate-900'
            }`}>
              {timeFormatted}
            </span>
            <span className={`text-[11px] block mt-1 font-bold ${isKawaii ? 'text-pink-500' : 'text-slate-400'}`}>
              {totalChars.toLocaleString()} total keystrokes
            </span>
          </div>
        </div>
      </div>

      {/* Visual Charts & Finger Heatmap */}
      <ProgressChart
        history={history}
        keyMistakes={keyMistakes}
      />

      {/* Curriculum Table (Sample of 310) */}
      <div className={`rounded-3xl border p-5 sm:p-6 shadow-xs ${
        isKawaii ? 'bg-white border-pink-200 shadow-pink-100/40' : 'bg-white border-slate-200'
      }`}>
        <h3 className={`font-black text-lg mb-4 flex items-center gap-2 ${
          isKawaii ? 'text-pink-950' : 'text-slate-900'
        }`}>
          <span>{isKawaii ? '🎀 Curriculum Progress (First 50 Lessons)' : '📚 Curriculum Progress'}</span>
        </h3>

        <div className="overflow-x-auto max-h-[400px]">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-pink-100 text-slate-400 font-black uppercase">
                <th className="pb-3 pl-2">Lesson</th>
                <th className="pb-3">Title</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Best Speed</th>
                <th className="pb-3">Best Accuracy</th>
                <th className="pb-3">Attempts</th>
                <th className="pb-3 pr-2">Stars</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-50">
              {LESSONS.slice(0, 60).map((l) => {
                const data = completedLessons[l.id];
                const isCompleted = !!data?.completed;

                return (
                  <tr key={l.id} className="hover:bg-pink-50/50 transition-colors">
                    <td className="py-3 pl-2 font-mono font-bold text-pink-600">
                      L{l.id}
                    </td>
                    <td className="py-3 font-bold text-slate-800">
                      {l.title.split(': ')[1] || l.title}
                    </td>
                    <td className="py-3">
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          <CheckCircle2 className="w-3 h-3" /> Done
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[11px]">Upcoming</span>
                      )}
                    </td>
                    <td className="py-3 font-mono font-bold text-slate-700">
                      {isCompleted ? `${data.bestWpm} WPM` : '—'}
                    </td>
                    <td className="py-3 font-mono font-bold text-emerald-600">
                      {isCompleted ? `${data.bestAccuracy}%` : '—'}
                    </td>
                    <td className="py-3 font-mono text-slate-500">
                      {data?.attempts || 0}
                    </td>
                    <td className="py-3 pr-2">
                      <span className="font-mono font-bold text-amber-400">
                        {isCompleted ? '★'.repeat(data.stars || 1) : '—'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
