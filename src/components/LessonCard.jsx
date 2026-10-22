import React from 'react';
import { Star, Lock, Play, Sparkles, Heart } from 'lucide-react';

export default function LessonCard({
  lesson,
  completedData = null,
  isCurrent = false,
  isLocked = false,
  onSelectLesson,
  theme = 'kawaii'
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const isCompleted = !!completedData?.completed;
  const stars = completedData?.stars || 0;
  const bestWpm = completedData?.bestWpm || 0;
  const bestAccuracy = completedData?.bestAccuracy || 0;

  return (
    <div
      onClick={() => !isLocked && onSelectLesson(lesson.id)}
      className={`
        relative rounded-3xl p-5 border transition-all duration-200 flex flex-col justify-between
        ${isLocked ? 'opacity-55 cursor-not-allowed bg-slate-50/60 border-slate-200' : 'cursor-pointer hover:-translate-y-0.5'}
        ${
          isCurrent
            ? isKawaii
              ? 'bg-white border-pink-400 shadow-md shadow-pink-200/50 ring-2 ring-pink-300'
              : isDark
              ? 'bg-slate-800 border-pink-500 shadow-lg ring-2 ring-pink-500/40 text-white'
              : 'bg-white border-indigo-500 shadow-md ring-2 ring-indigo-400/30'
            : isCompleted
            ? isKawaii
              ? 'bg-white border-pink-200/90 hover:border-pink-300 shadow-2xs shadow-pink-100/30'
              : isDark
              ? 'bg-slate-800/80 border-slate-700 text-slate-100'
              : 'bg-white border-slate-200 hover:border-indigo-300'
            : isKawaii
            ? 'bg-white border-pink-100 hover:border-pink-200'
            : isDark
            ? 'bg-slate-800/50 border-slate-700 text-slate-200'
            : 'bg-white border-slate-200'
        }
      `}
    >
      {/* Current Lesson Badge */}
      {isCurrent && (
        <span className={`absolute -top-3 left-4 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1 ${
          isKawaii
            ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white'
            : isDark
            ? 'bg-pink-600 text-white'
            : 'bg-indigo-600 text-white'
        }`}>
          <span>{isKawaii ? '🎀 Current Target' : '✨ Current Target'}</span>
        </span>
      )}

      {/* Header: Title and Status Icon */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className={`text-[11px] font-black uppercase tracking-wider ${
            isKawaii ? 'text-pink-500' : isDark ? 'text-pink-400' : 'text-indigo-600'
          }`}>
            Lesson {lesson.id}
          </span>

          <div className="flex items-center gap-1">
            {isLocked ? (
              <span className="p-1 rounded-md bg-slate-100 text-slate-400" title="Locked lesson">
                <Lock className="w-3.5 h-3.5" />
              </span>
            ) : isCompleted ? (
              <div className="flex items-center gap-0.5">
                {[1, 2, 3].map((starIdx) => (
                  <Star
                    key={starIdx}
                    className={`w-3.5 h-3.5 ${
                      starIdx <= stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <h3 className={`font-bold text-sm leading-snug line-clamp-1 ${
          isKawaii ? 'text-pink-950' : isDark ? 'text-white' : 'text-slate-800'
        }`}>
          {lesson.title.split(': ')[1] || lesson.title}
        </h3>

        <p className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
          isKawaii ? 'text-pink-900/60' : isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {lesson.shortDesc}
        </p>
      </div>

      {/* Focus Keys Pills */}
      <div className={`mt-3.5 pt-2.5 border-t ${
        isKawaii ? 'border-pink-100' : isDark ? 'border-slate-700' : 'border-slate-100'
      }`}>
        <div className="flex items-center justify-between text-xs mb-2">
          <span className={`text-[10px] font-bold ${
            isKawaii ? 'text-pink-400' : 'text-slate-400'
          }`}>Keys:</span>
          <div className="flex flex-wrap gap-1 justify-end max-w-[75%]">
            {lesson.focusKeys.slice(0, 4).map((key, i) => (
              <span
                key={i}
                className={`px-1.5 py-0.5 rounded-md font-mono text-[10px] font-bold ${
                  isKawaii
                    ? 'bg-pink-50 text-pink-700 border border-pink-100'
                    : isDark
                    ? 'bg-slate-700 text-pink-300'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {key === ' ' ? 'Space' : key}
              </span>
            ))}
            {lesson.focusKeys.length > 4 && (
              <span className="text-[10px] text-pink-400 font-bold self-center">
                +{lesson.focusKeys.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        {isCompleted ? (
          <div className="flex items-center justify-between pt-1 text-xs">
            <div className="flex items-center gap-2">
              <span className={`font-mono font-bold ${
                isKawaii ? 'text-pink-900' : isDark ? 'text-white' : 'text-slate-700'
              }`}>
                {bestWpm} <span className="text-[10px] font-normal text-slate-400">WPM</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono font-bold text-emerald-600">
                {bestAccuracy}%
              </span>
            </div>

            <span className={`text-[11px] font-bold hover:underline ${
              isKawaii ? 'text-pink-600' : 'text-indigo-600'
            }`}>
              Retry
            </span>
          </div>
        ) : isCurrent ? (
          <div className="pt-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectLesson(lesson.id);
              }}
              className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl text-white font-black text-xs uppercase tracking-wider shadow-sm transition ${
                isKawaii
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-pink-200'
                  : isDark
                  ? 'bg-pink-600 hover:bg-pink-700'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start</span>
            </button>
          </div>
        ) : (
          <div className={`flex items-center justify-between pt-1 text-[11px] ${
            isKawaii ? 'text-pink-400' : 'text-slate-400'
          }`}>
            <span>Goal: {lesson.targetAccuracy}%</span>
            <span>{isLocked ? 'Locked' : 'Available'}</span>
          </div>
        )}
      </div>
    </div>
  );
}
