import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LESSONS } from '../data/lessonsData';
import TargetText from '../components/TargetText';
import VirtualKeyboard from '../components/VirtualKeyboard';
import FingerPlacementGuide from '../components/FingerPlacementGuide';
import HandGuide from '../components/HandGuide';
import TypingStatistics from '../components/TypingStatistics';
import LessonResult from '../components/LessonResult';
import { getFingerForKey } from '../utils/fingerMapping';
import { playKeySound, playErrorSound, playSuccessSound } from '../utils/soundEffects';
import { saveLessonResult } from '../utils/progressStorage';
import { ArrowLeft, Pause, Play, RotateCcw, Volume2, VolumeX, Eye, Info, Sparkles, Heart } from 'lucide-react';

export default function TypingPractice({
  lessonId = 1,
  settings,
  progress,
  onBackToLessons,
  onSelectLesson,
  theme = 'kawaii'
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const lesson = LESSONS.find((l) => l.id === Number(lessonId)) || LESSONS[0];

  const [typedText, setTypedText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [correctKeystrokes, setCorrectKeystrokes] = useState(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [activeKeys, setActiveKeys] = useState(new Set());
  const [mistakesMap, setMistakesMap] = useState({});
  const [lastMistake, setLastMistake] = useState(null);

  const [showHandGuide, setShowHandGuide] = useState(settings?.showHandGuide ?? true);
  const [soundEnabled, setSoundEnabled] = useState(settings?.soundEnabled ?? true);
  const soundType = settings?.soundType || (isKawaii ? 'kawaii' : 'mechanical');

  const [completedResult, setCompletedResult] = useState(null);

  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const targetText = lesson.text;
  const currentIndex = typedText.length;
  const nextChar = currentIndex < targetText.length ? targetText[currentIndex] : '';

  const focusInput = useCallback(() => {
    if (inputRef.current && !isFinished) {
      inputRef.current.focus();
    }
  }, [isFinished]);

  const resetLesson = useCallback(() => {
    setTypedText('');
    setStartTime(null);
    setElapsedSeconds(0);
    setIsPaused(false);
    setIsFinished(false);
    setCorrectKeystrokes(0);
    setTotalKeystrokes(0);
    setActiveKeys(new Set());
    setMistakesMap({});
    setLastMistake(null);
    setCompletedResult(null);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(focusInput, 50);
  }, [focusInput]);

  useEffect(() => {
    resetLesson();
  }, [lesson.id, resetLesson]);

  // Live timer interval
  useEffect(() => {
    if (startTime && !isPaused && !isFinished) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, isPaused, isFinished]);

  // Gross and Net WPM
  const elapsedMinutes = Math.max(elapsedSeconds / 60, 0.0167);
  const grossWpm = startTime ? Math.round((typedText.length / 5) / elapsedMinutes) : 0;

  let uncorrectedErrors = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] !== targetText[i]) uncorrectedErrors += 1;
  }

  const netWpm = Math.max(0, Math.round(grossWpm - (uncorrectedErrors / elapsedMinutes)));
  const liveWpm = netWpm;

  const liveAccuracy = totalKeystrokes > 0
    ? Math.round((correctKeystrokes / totalKeystrokes) * 100)
    : 100;

  const handleFinish = useCallback((finalTypedText, finalCorrect, finalTotal, finalDuration, finalMistakes) => {
    setIsFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);

    if (soundEnabled) {
      playSuccessSound(isKawaii);
    }

    const durationSec = Math.max(1, finalDuration);
    const minutes = durationSec / 60;
    const finalGrossWpm = Math.round((finalTypedText.length / 5) / minutes);

    let finalUncorrected = 0;
    for (let i = 0; i < finalTypedText.length; i++) {
      if (finalTypedText[i] !== targetText[i]) finalUncorrected += 1;
    }
    const finalNetWpm = Math.max(0, Math.round(finalGrossWpm - (finalUncorrected / minutes)));
    const finalAccuracy = finalTotal > 0 ? Math.round((finalCorrect / finalTotal) * 100) : 100;
    const targetAccuracy = lesson.targetAccuracy || 95;
    const passed = finalAccuracy >= targetAccuracy;

    const resultData = {
      wpm: finalNetWpm,
      grossWpm: finalGrossWpm,
      netWpm: finalNetWpm,
      accuracy: finalAccuracy,
      durationSeconds: durationSec,
      totalChars: finalTypedText.length,
      correctChars: finalCorrect,
      incorrectChars: finalTotal - finalCorrect,
      lessonTitle: lesson.title,
      minWpmTarget: lesson.minWpmTarget || 15,
      passed,
      mistakesMap: finalMistakes
    };

    saveLessonResult(lesson.id, resultData);
    setCompletedResult(resultData);
  }, [lesson, targetText, soundEnabled, isKawaii]);

  const handleKeyDown = (e) => {
    if (isFinished) return;

    setActiveKeys((prev) => new Set(prev).add(e.code).add(e.key));

    if (e.key === 'Backspace') {
      if (settings?.allowBackspace !== false && typedText.length > 0) {
        setTypedText((prev) => prev.slice(0, -1));
        if (soundEnabled) playKeySound(soundType);
      }
      return;
    }

    if (e.key.length !== 1) {
      if (e.key === 'Escape') {
        setIsPaused((p) => !p);
      }
      return;
    }

    if (e.key === ' ') e.preventDefault();

    const now = Date.now();
    let currentStart = startTime;
    if (!startTime) {
      currentStart = now;
      setStartTime(now);
    }

    if (isPaused) setIsPaused(false);

    const currentIdx = typedText.length;
    if (currentIdx >= targetText.length) return;

    const expectedChar = targetText[currentIdx];
    const typedChar = e.key;
    const isCorrect = typedChar === expectedChar;

    const newTypedText = typedText + typedChar;
    const newCorrect = correctKeystrokes + (isCorrect ? 1 : 0);
    const newTotal = totalKeystrokes + 1;

    setTypedText(newTypedText);
    setTotalKeystrokes(newTotal);

    if (isCorrect) {
      setCorrectKeystrokes(newCorrect);
      setLastMistake(null);
      if (soundEnabled) playKeySound(soundType);
    } else {
      const updatedMistakes = {
        ...mistakesMap,
        [expectedChar]: (mistakesMap[expectedChar] || 0) + 1
      };
      setMistakesMap(updatedMistakes);

      const expectedFinger = getFingerForKey(expectedChar);
      setLastMistake({
        expected: expectedChar,
        fingerName: expectedFinger.name
      });

      if (soundEnabled) playErrorSound();
    }

    if (newTypedText.length >= targetText.length) {
      const finalSec = Math.floor((Date.now() - (currentStart || now)) / 1000);
      handleFinish(
        newTypedText,
        newCorrect,
        newTotal,
        finalSec,
        isCorrect ? mistakesMap : { ...mistakesMap, [expectedChar]: (mistakesMap[expectedChar] || 0) + 1 }
      );
    }
  };

  const handleKeyUp = (e) => {
    setActiveKeys((prev) => {
      const next = new Set(prev);
      next.delete(e.code);
      next.delete(e.key);
      return next;
    });
  };

  const previousAttempt = progress?.completedLessons?.[lesson.id] || null;

  return (
    <div
      className="max-w-5xl mx-auto space-y-6 pb-24 select-none outline-hidden"
      onClick={focusInput}
    >
      <input
        ref={inputRef}
        type="text"
        className="opacity-0 absolute pointer-events-none w-0 h-0"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        autoFocus
        tabIndex={0}
      />

      {/* Top Navigation & Controls Bar */}
      <div className={`flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 rounded-3xl border shadow-xs ${
        isKawaii
          ? 'bg-white border-pink-200/90 shadow-pink-100/40'
          : isDark
          ? 'bg-slate-800 border-slate-700 text-white'
          : 'bg-white border-slate-200/90'
      }`}>
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToLessons}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              isKawaii
                ? 'border-pink-200 text-pink-700 hover:bg-pink-50'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Lessons</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                isKawaii
                  ? 'bg-pink-100 text-pink-700 border-pink-200'
                  : 'bg-indigo-50 text-indigo-700 border-indigo-100'
              }`}>
                Lesson {lesson.id} of {LESSONS.length}
              </span>
              <h1 className={`text-sm sm:text-base font-bold truncate ${
                isKawaii ? 'text-pink-950' : isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {lesson.title.split(': ')[1] || lesson.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Quick Toolbar */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSoundEnabled(!soundEnabled);
            }}
            className={`p-2 rounded-xl border text-xs font-bold transition cursor-pointer ${
              soundEnabled
                ? isKawaii
                  ? 'bg-pink-100 border-pink-200 text-pink-700'
                  : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                : 'bg-slate-50 border-slate-200 text-slate-400'
            }`}
            title={soundEnabled ? 'Mute typing sounds' : 'Enable sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Hand Guide Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowHandGuide(!showHandGuide);
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              showHandGuide
                ? isKawaii
                  ? 'bg-pink-100 border-pink-200 text-pink-700'
                  : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
            title="Toggle hand diagram"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hands</span>
          </button>

          {/* Pause / Resume */}
          {startTime && !isFinished && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPaused(!isPaused);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
          )}

          {/* Restart */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              resetLesson();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
            title="Restart exercise"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restart</span>
          </button>
        </div>
      </div>

      {/* Lesson Instruction Callout */}
      {lesson.instructions && !isFinished && (
        <div className={`rounded-3xl p-4 flex items-start gap-3 text-xs border ${
          isKawaii
            ? 'bg-pink-50/70 border-pink-200 text-pink-950'
            : 'bg-indigo-50/70 border-indigo-100 text-indigo-950'
        }`}>
          {isKawaii ? (
            <span className="text-xl select-none">🎀</span>
          ) : (
            <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          )}
          <div>
            <strong className={`block font-bold mb-0.5 ${
              isKawaii ? 'text-pink-900' : 'text-indigo-900'
            }`}>
              {isKawaii ? 'Hello Kitty Technique Guide:' : 'Lesson Focus & Technique:'}
            </strong>
            <p className="leading-relaxed font-medium">{lesson.instructions}</p>
          </div>
        </div>
      )}

      {/* Finished Result or Active Exercise */}
      {isFinished && completedResult ? (
        <LessonResult
          result={completedResult}
          lesson={lesson}
          previousAttempt={previousAttempt}
          onRetry={resetLesson}
          onNextLesson={() => {
            const nextId = Math.min(LESSONS.length, lesson.id + 1);
            onSelectLesson(nextId);
          }}
          onBackToLessons={onBackToLessons}
          theme={theme}
        />
      ) : (
        <>
          {/* SECTION A: Target Text */}
          <TargetText
            targetText={targetText}
            typedText={typedText}
            onRestart={resetLesson}
            lessonTitle={lesson.title}
            isPaused={isPaused}
            theme={theme}
          />

          {/* SECTION B: Finger Placement Guide */}
          <FingerPlacementGuide
            nextChar={nextChar}
            showHints={settings?.showFingerHints ?? true}
          />

          {/* Optional Anatomical Hand Guide */}
          {showHandGuide && (
            <HandGuide
              nextChar={nextChar}
              show={showHandGuide}
            />
          )}

          {/* SECTION C: Virtual Keyboard with Dynamic Key Highlighting */}
          <VirtualKeyboard
            nextChar={nextChar}
            activeKeys={activeKeys}
            lastMistake={lastMistake}
            showHints={settings?.showFingerHints ?? true}
            theme={theme}
          />

          {/* SECTION D: Live Typing Statistics */}
          <TypingStatistics
            wpm={liveWpm}
            grossWpm={grossWpm}
            netWpm={netWpm}
            accuracy={liveAccuracy}
            correctChars={correctKeystrokes}
            incorrectChars={totalKeystrokes - correctKeystrokes}
            totalChars={targetText.length}
            elapsedSeconds={elapsedSeconds}
            targetAccuracy={lesson.targetAccuracy || 95}
            theme={theme}
          />
        </>
      )}
    </div>
  );
}
