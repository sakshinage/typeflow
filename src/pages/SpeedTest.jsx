import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SPEED_TEST_PROMPTS } from '../data/lessonsData';
import VirtualKeyboard from '../components/VirtualKeyboard';
import { playKeySound, playErrorSound, playSuccessSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Gauge, Clock, Target, RotateCcw, Play, Award, Zap, Heart } from 'lucide-react';

export default function SpeedTest({ settings, theme = 'kawaii' }) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const durations = [15, 30, 60, 120];
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  const [typedText, setTypedText] = useState('');
  const [timeLeft, setTimeLeft] = useState(selectedDuration);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [activeKeys, setActiveKeys] = useState(new Set());

  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const currentPrompt = SPEED_TEST_PROMPTS[selectedPromptIndex] || SPEED_TEST_PROMPTS[0];
  const targetText = currentPrompt.text;

  const focusInput = useCallback(() => {
    if (inputRef.current && !isFinished) {
      inputRef.current.focus();
    }
  }, [isFinished]);

  const resetTest = useCallback(() => {
    setTypedText('');
    setTimeLeft(selectedDuration);
    setIsActive(false);
    setIsFinished(false);
    setCorrectCount(0);
    setTotalCount(0);
    setActiveKeys(new Set());
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(focusInput, 50);
  }, [selectedDuration, focusInput]);

  useEffect(() => {
    resetTest();
  }, [selectedDuration, selectedPromptIndex, resetTest]);

  // Countdown timer
  useEffect(() => {
    if (isActive && timeLeft > 0 && !isFinished) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft, isFinished]);

  const finishTest = () => {
    setIsFinished(true);
    setIsActive(false);
    if (settings?.soundEnabled) playSuccessSound(isKawaii);
    try {
      confetti({
        particleCount: isKawaii ? 85 : 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: isKawaii ? ['#ff4d88', '#fbcfe8', '#f43f5e', '#ffd700', '#ffffff'] : undefined
      });
    } catch (e) {}
  };

  const soundType = settings?.soundType || (isKawaii ? 'kawaii' : 'mechanical');

  const handleKeyDown = (e) => {
    if (isFinished) return;

    setActiveKeys((prev) => new Set(prev).add(e.code).add(e.key));

    if (e.key === 'Backspace') {
      if (typedText.length > 0) {
        setTypedText((prev) => prev.slice(0, -1));
        if (settings?.soundEnabled) playKeySound(soundType);
      }
      return;
    }

    if (e.key.length !== 1) return;
    if (e.key === ' ') e.preventDefault();

    if (!isActive) {
      setIsActive(true);
    }

    const currentIdx = typedText.length;
    if (currentIdx >= targetText.length) {
      finishTest();
      return;
    }

    const expected = targetText[currentIdx];
    const isCorrect = e.key === expected;

    const newTyped = typedText + e.key;
    const newCorrect = correctCount + (isCorrect ? 1 : 0);
    const newTotal = totalCount + 1;

    setTypedText(newTyped);
    setCorrectCount(newCorrect);
    setTotalCount(newTotal);

    if (isCorrect) {
      if (settings?.soundEnabled) playKeySound(soundType);
    } else {
      if (settings?.soundEnabled) playErrorSound();
    }

    if (newTyped.length >= targetText.length) {
      finishTest();
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

  const elapsedSeconds = selectedDuration - timeLeft;
  const elapsedMinutes = Math.max(elapsedSeconds / 60, 0.0167);
  const grossWpm = elapsedSeconds > 0 ? Math.round((typedText.length / 5) / elapsedMinutes) : 0;

  let errors = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] !== targetText[i]) errors += 1;
  }
  const netWpm = Math.max(0, Math.round(grossWpm - (errors / elapsedMinutes)));
  const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 100;

  let rank = isKawaii ? "🎀 Cute Kitten Typist" : "Novice Typist";
  if (netWpm >= 70) rank = isKawaii ? "👑 Hello Kitty Grand Master!" : "Typing Master";
  else if (netWpm >= 50) rank = isKawaii ? "✨ Lightning Kitty!" : "Advanced Typist";
  else if (netWpm >= 35) rank = isKawaii ? "🌸 Sweet Ribbon Typist!" : "Intermediate Typist";
  else if (netWpm >= 20) rank = isKawaii ? "🍓 Strawberry Paw Typist!" : "Developing Typist";

  const nextChar = typedText.length < targetText.length ? targetText[typedText.length] : '';

  return (
    <div
      className="max-w-4xl mx-auto space-y-6 pb-24 select-none outline-hidden"
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

      {/* Speed Test Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border shadow-xs ${
        isKawaii
          ? 'bg-white border-pink-200/90 shadow-pink-100/50'
          : isDark
          ? 'bg-slate-800 border-slate-700 text-white'
          : 'bg-white border-slate-200/90'
      }`}>
        <div>
          <div className={`flex items-center gap-1.5 font-black text-xs uppercase tracking-wider mb-1 ${
            isKawaii ? 'text-pink-600' : 'text-indigo-600'
          }`}>
            <span>{isKawaii ? '🎀 Speed Challenge' : '⚡ Speed Benchmark'}</span>
          </div>
          <h1 className={`text-2xl sm:text-3xl font-black ${
            isKawaii ? 'text-pink-950' : 'text-slate-900'
          }`}>
            Speed Test Sprint
          </h1>
          <p className={`text-xs sm:text-sm mt-1 ${
            isKawaii ? 'text-pink-900/70' : 'text-slate-500'
          }`}>
            Measure your real typing velocity and accuracy over fixed intervals
          </p>
        </div>

        {/* Duration Selectors */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-1">Time:</span>
          {durations.map((dur) => (
            <button
              key={dur}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDuration(dur);
              }}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                selectedDuration === dur
                  ? isKawaii
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-xs'
                    : 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {dur}s
            </button>
          ))}
        </div>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
        {SPEED_TEST_PROMPTS.map((p, idx) => (
          <button
            key={p.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPromptIndex(idx);
            }}
            className={`px-3.5 py-2 rounded-2xl transition cursor-pointer whitespace-nowrap border ${
              selectedPromptIndex === idx
                ? isKawaii
                  ? 'bg-pink-100 text-pink-700 border-pink-300 font-black shadow-2xs'
                  : 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-2xs font-bold'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {p.category}
          </button>
        ))}
      </div>

      {/* Live Timer & Stats Top Bar */}
      <div className="grid grid-cols-3 gap-3">
        <div className={`p-4 rounded-3xl border text-center ${
          isKawaii ? 'bg-white border-pink-200' : 'bg-white border-slate-200'
        }`}>
          <span className="text-xs font-bold uppercase text-slate-400 block flex items-center justify-center gap-1">
            <Clock className={`w-3.5 h-3.5 ${isKawaii ? 'text-pink-500' : 'text-indigo-600'}`} /> Time Left
          </span>
          <span className={`text-3xl font-black font-mono mt-1 block ${
            isKawaii ? 'text-pink-900' : 'text-slate-900'
          }`}>
            {timeLeft}s
          </span>
        </div>

        <div className={`p-4 rounded-3xl border text-center ${
          isKawaii ? 'bg-white border-pink-200' : 'bg-white border-slate-200'
        }`}>
          <span className="text-xs font-bold uppercase text-slate-400 block flex items-center justify-center gap-1">
            <Gauge className={`w-3.5 h-3.5 ${isKawaii ? 'text-pink-500' : 'text-indigo-600'}`} /> Current WPM
          </span>
          <span className={`text-3xl font-black font-mono mt-1 block ${
            isKawaii ? 'text-pink-900' : 'text-slate-900'
          }`}>
            {netWpm}
          </span>
        </div>

        <div className={`p-4 rounded-3xl border text-center ${
          isKawaii ? 'bg-white border-pink-200' : 'bg-white border-slate-200'
        }`}>
          <span className="text-xs font-bold uppercase text-slate-400 block flex items-center justify-center gap-1">
            <Target className="w-3.5 h-3.5 text-emerald-600" /> Accuracy
          </span>
          <span className="text-3xl font-black font-mono text-emerald-600 mt-1 block">
            {accuracy}%
          </span>
        </div>
      </div>

      {/* Finished Summary Certificate Card */}
      {isFinished ? (
        <div className={`rounded-3xl p-8 border shadow-xl text-center space-y-6 animate-fadeIn ${
          isKawaii ? 'bg-white border-pink-200 shadow-pink-200/50' : 'bg-white border-slate-200'
        }`}>
          <div className="text-4xl select-none mb-1">
            {isKawaii ? '🎀' : <Award className="w-12 h-12 text-indigo-600 mx-auto" />}
          </div>

          <div>
            <span className={`text-xs font-black uppercase tracking-wider ${
              isKawaii ? 'text-pink-600' : 'text-indigo-600'
            }`}>
              Speed Certificate
            </span>
            <h2 className={`text-3xl font-black mt-1 ${
              isKawaii ? 'text-pink-950' : 'text-slate-900'
            }`}>
              {rank}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Completed {selectedDuration}s test on "{currentPrompt.category}"
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
            <div className={`p-4 rounded-2xl border ${
              isKawaii ? 'bg-pink-50/60 border-pink-100' : 'bg-slate-50 border-slate-100'
            }`}>
              <span className="text-xs text-slate-400 font-bold block">Net Speed</span>
              <span className={`text-3xl font-black font-mono mt-1 block ${
                isKawaii ? 'text-pink-600' : 'text-indigo-600'
              }`}>
                {netWpm} <span className="text-xs text-slate-400">WPM</span>
              </span>
            </div>

            <div className={`p-4 rounded-2xl border ${
              isKawaii ? 'bg-pink-50/60 border-pink-100' : 'bg-slate-50 border-slate-100'
            }`}>
              <span className="text-xs text-slate-400 font-bold block">Accuracy</span>
              <span className="text-3xl font-black font-mono text-emerald-600 mt-1 block">
                {accuracy}%
              </span>
            </div>

            <div className={`p-4 rounded-2xl border ${
              isKawaii ? 'bg-pink-50/60 border-pink-100' : 'bg-slate-50 border-slate-100'
            }`}>
              <span className="text-xs text-slate-400 font-bold block">Gross</span>
              <span className="text-3xl font-black font-mono text-slate-800 mt-1 block">
                {grossWpm}
              </span>
            </div>

            <div className={`p-4 rounded-2xl border ${
              isKawaii ? 'bg-pink-50/60 border-pink-100' : 'bg-slate-50 border-slate-100'
            }`}>
              <span className="text-xs text-slate-400 font-bold block">Errors</span>
              <span className="text-3xl font-black font-mono text-rose-500 mt-1 block">
                {errors}
              </span>
            </div>
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={resetTest}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm text-white shadow-md transition cursor-pointer ${
                isKawaii
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-pink-200'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take Another Test 🎀</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Target Text Box */}
          <div className={`rounded-3xl border p-6 font-mono text-xl leading-relaxed max-h-[220px] overflow-y-auto ${
            isKawaii ? 'bg-white border-pink-200' : 'bg-white border-slate-200'
          }`}>
            {!isActive && (
              <div className={`text-xs font-sans font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                isKawaii ? 'text-pink-600' : 'text-indigo-600'
              }`}>
                <span>{isKawaii ? '🎀 Start typing — timer activates on first keystroke!' : '⚡ Start typing — timer activates on first keystroke!'}</span>
              </div>
            )}
            {targetText.split('').map((char, index) => {
              const isTyped = index < typedText.length;
              const isCurrent = index === typedText.length;
              const isCorrect = isTyped && typedText[index] === char;
              const isIncorrect = isTyped && typedText[index] !== char;

              let cls = isKawaii ? 'text-pink-300/80 ' : 'text-slate-400 ';
              if (isCurrent) cls = isKawaii ? 'bg-pink-100 text-pink-900 font-black underline ' : 'bg-indigo-100 text-indigo-900 font-bold underline ';
              else if (isCorrect) cls = 'text-emerald-600 font-bold ';
              else if (isIncorrect) cls = 'bg-rose-500 text-white rounded px-0.5 font-bold ';

              return (
                <span key={index} className={cls}>
                  {isCurrent && <span className={`typing-cursor mr-0.5 ${isKawaii ? 'bg-pink-500' : 'bg-indigo-600'}`} />}
                  {char === ' ' && isIncorrect ? '␣' : char}
                </span>
              );
            })}
          </div>

          {/* Virtual Keyboard */}
          <VirtualKeyboard
            nextChar={nextChar}
            activeKeys={activeKeys}
            showHints={true}
            theme={theme}
          />
        </>
      )}
    </div>
  );
}
