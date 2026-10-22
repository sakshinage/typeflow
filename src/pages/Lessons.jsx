import React, { useState } from 'react';
import { LESSON_STAGES, LESSONS } from '../data/lessonsData';
import LessonCard from '../components/LessonCard';
import { Search, CheckCircle, Sparkles, Layers, ArrowRight } from 'lucide-react';

export default function Lessons({
  progress,
  onSelectLesson,
  theme = 'kawaii'
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const [selectedStage, setSelectedStage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const completedLessons = progress.completedLessons || {};
  const currentLessonId = progress.currentLessonId || 1;

  // Filter lessons
  const filteredLessons = LESSONS.filter((lesson) => {
    const matchesSearch =
      searchQuery === '' ||
      lesson.id.toString() === searchQuery.trim() ||
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.focusKeys.join(' ').toLowerCase().includes(searchQuery.toLowerCase());

    if (searchQuery.trim() !== '') {
      return matchesSearch;
    }

    return lesson.stage === selectedStage;
  });

  const currentStageObj = LESSON_STAGES.find(s => s.id === selectedStage) || LESSON_STAGES[0];
  const stageLessons = LESSONS.filter(l => l.stage === selectedStage);
  const stageCompleted = stageLessons.filter(l => completedLessons[l.id]?.completed).length;

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border shadow-2xs ${
            isKawaii
              ? 'bg-pink-100/80 border-pink-200 text-pink-700'
              : 'bg-indigo-50 border-indigo-100 text-indigo-700'
          }">
            <span>{isKawaii ? '🎀 310 Lessons Curriculum' : '✨ 310 Lessons Curriculum'}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl font-black tracking-tight ${
            isKawaii ? 'text-pink-950' : isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Typing Curriculum (310 Lessons)
          </h1>
          <p className={`text-sm mt-1 max-w-2xl leading-relaxed ${
            isKawaii ? 'text-pink-900/70' : isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Complete step-by-step master journey from first finger anchors to real-world code and conversational fluency.
          </p>
        </div>

        {/* Quick jump to current + search */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button
            onClick={() => {
              const currentL = LESSONS.find(l => l.id === currentLessonId);
              if (currentL) {
                setSelectedStage(currentL.stage);
              }
              onSelectLesson(currentLessonId);
            }}
            className={`w-full sm:w-auto px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider text-white shadow-sm flex items-center justify-center gap-2 transition cursor-pointer ${
              isKawaii
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-pink-200'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            <span>Resume Lesson {currentLessonId}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="relative w-full sm:w-60">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 1-310 or key..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-sm focus:outline-hidden transition shadow-2xs ${
                isKawaii
                  ? 'border-pink-200 bg-white text-pink-950 placeholder-pink-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200'
                  : 'border-slate-200 bg-white text-slate-800 focus:border-indigo-400'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Stage Selector Tabs (8 Stages) */}
      {searchQuery.trim() === '' && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-pink-100 text-xs font-bold">
          {LESSON_STAGES.map((stg) => {
            const isSelected = selectedStage === stg.id;
            const stgAll = LESSONS.filter(l => l.stage === stg.id);
            const stgDone = stgAll.filter(l => completedLessons[l.id]?.completed).length;

            return (
              <button
                key={stg.id}
                onClick={() => setSelectedStage(stg.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl transition cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? isKawaii
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-200 font-black'
                      : 'bg-indigo-600 text-white shadow-xs font-bold'
                    : isKawaii
                    ? 'bg-white text-pink-900 border border-pink-200/80 hover:bg-pink-50'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>{stg.kawaiiIcon}</span>
                <span>Stage {stg.id}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected
                    ? 'bg-white/25 text-white'
                    : isKawaii
                    ? 'bg-pink-100 text-pink-700'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {stgDone}/{stgAll.length}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Current Stage Overview Banner */}
      {searchQuery.trim() === '' && (
        <div className={`p-6 rounded-3xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
          isKawaii
            ? 'bg-gradient-to-r from-pink-50 via-white to-pink-50/50 border-pink-200 shadow-xs'
            : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl select-none">{currentStageObj.kawaiiIcon}</span>
              <h2 className={`text-lg font-black ${
                isKawaii ? 'text-pink-950' : 'text-slate-900'
              }`}>
                {currentStageObj.title}
              </h2>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                isKawaii ? 'bg-pink-100 text-pink-700 border-pink-200' : 'bg-slate-200 text-slate-700 border-slate-300'
              }`}>
                {currentStageObj.range}
              </span>
            </div>
            <p className={`text-xs mt-1 ${
              isKawaii ? 'text-pink-900/70' : 'text-slate-500'
            }`}>
              {currentStageObj.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className={`text-xs font-bold block ${
                isKawaii ? 'text-pink-600' : 'text-slate-500'
              }`}>
                Stage Progress
              </span>
              <span className={`font-mono text-sm font-black ${
                isKawaii ? 'text-pink-950' : 'text-slate-800'
              }`}>
                {stageCompleted} of {stageLessons.length} finished
              </span>
            </div>
            {stageCompleted === stageLessons.length && stageLessons.length > 0 && (
              <CheckCircle className="w-5 h-5 text-emerald-500 inline" />
            )}
          </div>
        </div>
      )}

      {/* Lessons Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredLessons.map((lesson) => {
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

      {filteredLessons.length === 0 && (
        <div className="p-12 text-center text-slate-400 text-sm">
          No lessons found matching "{searchQuery}". Try searching by lesson number (e.g. 42) or key (e.g. F).
        </div>
      )}
    </div>
  );
}
