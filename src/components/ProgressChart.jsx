import React from 'react';
import { getFingerMistakeAnalysis } from '../utils/progressStorage';
import { TrendingUp, AlertTriangle, CheckCircle, BarChart3, Activity } from 'lucide-react';

export default function ProgressChart({ history = [], keyMistakes = {} }) {
  const fingerAnalysis = getFingerMistakeAnalysis(keyMistakes);

  // Take the last 15 attempts in chronological order for the trend chart
  const trendData = [...history].slice(0, 15).reverse();

  // Find max WPM for scaling
  const maxWpm = Math.max(50, ...trendData.map(d => d.wpm || 0));

  const totalErrors = Object.values(fingerAnalysis).reduce((acc, f) => acc + f.mistakes, 0);

  // Sorted list of fingers by mistakes to find problem areas
  const problemFingers = Object.values(fingerAnalysis)
    .filter(f => f.mistakes > 0)
    .sort((a, b) => b.mistakes - a.mistakes);

  return (
    <div className="space-y-6">
      {/* Session History WPM & Accuracy Trend Chart */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="font-bold text-slate-800 text-base">Performance History Trend</h3>
              <p className="text-xs text-slate-500">Speed (WPM) and Accuracy (%) across recent lessons</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block" />
              <span>Speed (WPM)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span>Accuracy (%)</span>
            </span>
          </div>
        </div>

        {trendData.length > 0 ? (
          <div className="h-56 w-full flex items-end gap-2 pt-8 pb-4 px-2 border-b border-slate-100 overflow-x-auto">
            {trendData.map((item, index) => {
              const heightPercent = Math.min(100, Math.round((item.wpm / maxWpm) * 100));
              const isAccHigh = item.accuracy >= 95;

              return (
                <div key={item.id || index} className="flex-1 min-w-[36px] flex flex-col items-center h-full justify-end group relative">
                  {/* Hover tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 bg-slate-900 text-white text-[11px] py-1.5 px-2.5 rounded-lg whitespace-nowrap z-20 pointer-events-none shadow-lg">
                    <div className="font-bold text-indigo-300">{item.lessonTitle}</div>
                    <div>Speed: <strong>{item.wpm} WPM</strong></div>
                    <div>Accuracy: <strong>{item.accuracy}%</strong></div>
                    <div className="text-[10px] text-slate-400">{new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                  </div>

                  {/* Accuracy marker dot */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs mb-1 ${
                      isAccHigh ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    title={`Accuracy: ${item.accuracy}%`}
                  />

                  {/* WPM Bar */}
                  <div
                    className="w-full max-w-[24px] bg-gradient-to-t from-indigo-700 to-indigo-500 rounded-t-md transition-all duration-300 group-hover:from-indigo-600 group-hover:to-indigo-400"
                    style={{ height: `${Math.max(12, heightPercent)}%` }}
                  />

                  {/* Index / Label */}
                  <span className="text-[10px] text-slate-400 mt-2 font-mono truncate max-w-full">
                    #{trendData.length - index}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center text-slate-400 text-sm">
            No typing attempts recorded yet. Complete your first lesson to see your live progress charts!
          </div>
        )}
      </div>

      {/* Finger Accuracy Diagnostics & Heatmap */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="font-bold text-slate-800 text-base">Finger Error Heatmap & Diagnostics</h3>
              <p className="text-xs text-slate-500">Identifies which fingers and keys experience the most typos</p>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-500">
            Total recorded errors: <strong className="text-slate-800">{totalErrors}</strong>
          </span>
        </div>

        {/* 9-Zone Finger Diagnostic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4">
          {Object.values(fingerAnalysis).map((f) => {
            const errorRate = totalErrors > 0 ? Math.round((f.mistakes / totalErrors) * 100) : 0;
            const topMissedKeys = Object.entries(f.mistakeKeys)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([key, count]) => `${key === ' ' ? 'Space' : key} (${count})`)
              .join(', ');

            return (
              <div
                key={f.id}
                className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/60 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full shadow-2xs border border-white"
                      style={{ backgroundColor: f.hex }}
                    />
                    <span className="font-bold text-xs text-slate-800">{f.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600">
                    {f.mistakes} errors
                  </span>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Mistake share</span>
                    <span>{errorRate}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${errorRate}%`,
                        backgroundColor: f.hex
                      }}
                    />
                  </div>
                </div>

                {topMissedKeys ? (
                  <p className="text-[11px] text-slate-500 mt-2 truncate">
                    Most missed: <strong className="text-slate-700 font-mono">{topMissedKeys}</strong>
                  </p>
                ) : (
                  <p className="text-[11px] text-emerald-600 font-medium mt-2 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> No errors recorded
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Targeted Training Advice */}
        {problemFingers.length > 0 && (
          <div className="mt-5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">Muscle Memory Recommendation</span>
              <p>
                Your <strong className="underline decoration-amber-400">{problemFingers[0].name}</strong> ({problemFingers[0].colorName}) has the highest error frequency ({problemFingers[0].mistakes} mistakes). Pay special attention to keeping your wrists relaxed and curling your fingers from the home row rather than twisting your hand.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
