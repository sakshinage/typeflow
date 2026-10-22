import React from 'react';
import { KEYBOARD_LAYOUT, FINGER_DEFINITIONS, getFingerForKey } from '../utils/fingerMapping';

export default function VirtualKeyboard({
  nextChar = '',
  activeKeys = new Set(),
  lastMistake = null,
  showHints = true,
  theme = 'kawaii'
}) {
  const isKawaii = theme === 'kawaii';
  const isDark = theme === 'dark';

  const currentFinger = getFingerForKey(nextChar);
  const isShiftNeeded = nextChar && nextChar !== ' ' && nextChar !== nextChar.toLowerCase() && /[A-Z!@#$%^&*()_+{}|:"<>?]/.test(nextChar);
  const targetChar = nextChar ? nextChar.toLowerCase() : '';

  return (
    <div className={`w-full rounded-3xl p-3 sm:p-5 shadow-xl select-none transition-all duration-200 ${
      isKawaii
        ? 'bg-gradient-to-b from-white via-pink-50/70 to-pink-100/60 border-2 border-pink-200 shadow-pink-200/50'
        : isDark
        ? 'bg-slate-900 border border-slate-800 text-white'
        : 'bg-slate-900 border border-slate-800'
    }`}>
      {/* Top Banner & Status */}
      <div className={`flex flex-wrap items-center justify-between gap-2 mb-3 px-1 text-xs ${
        isKawaii ? 'text-pink-900 font-bold' : 'text-slate-300'
      }`}>
        <div className="flex items-center gap-2">
          {isKawaii ? (
            <span className="text-base select-none">🎀</span>
          ) : (
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
          <span className={`tracking-wide uppercase text-[11px] font-black ${
            isKawaii ? 'text-pink-600' : 'text-slate-400'
          }`}>
            {isKawaii ? 'Hello Kitty QWERTY Keyboard' : 'Interactive QWERTY Keyboard'}
          </span>
          {isShiftNeeded && (
            <span className={`ml-2 px-2.5 py-0.5 rounded-full font-black text-[11px] border animate-bounce ${
              isKawaii
                ? 'bg-pink-100 text-pink-700 border-pink-300'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
            }`}>
              Hold Shift + Press Key ✨
            </span>
          )}
        </div>

        {/* Gentle mistake indicator */}
        {lastMistake && (
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs animate-fadeIn border ${
            isKawaii
              ? 'bg-pink-100 text-pink-800 border-pink-300'
              : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
          }`}>
            <span>Target:</span>
            <strong className={`font-mono px-1.5 py-0.5 rounded shadow-2xs ${
              isKawaii ? 'bg-white text-pink-600' : 'bg-rose-600/40 text-white'
            }`}>
              {lastMistake.expected === ' ' ? 'Space' : lastMistake.expected}
            </strong>
            <span className="text-pink-500">use</span>
            <span className="underline decoration-pink-500">{lastMistake.fingerName}</span>
          </div>
        )}
      </div>

      {/* Main Keys Container */}
      <div className="flex flex-col gap-1.5 sm:gap-2 max-w-4xl mx-auto overflow-x-auto pb-1">
        {KEYBOARD_LAYOUT.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1 sm:gap-1.5 min-w-[640px]">
            {row.map((keyObj, keyIndex) => {
              const finger = FINGER_DEFINITIONS[keyObj.fingerId] || FINGER_DEFINITIONS.thumbs;

              let isNextKey = false;
              if (nextChar === ' ' && keyObj.isSpace) {
                isNextKey = true;
              } else if (nextChar && (keyObj.key.toLowerCase() === targetChar || keyObj.shiftKey === nextChar)) {
                isNextKey = true;
              }

              const isHighlightShift = isShiftNeeded && keyObj.key === 'Shift';
              const isPhysicallyPressed =
                activeKeys.has(keyObj.code) ||
                activeKeys.has(keyObj.key) ||
                activeKeys.has(keyObj.key.toLowerCase());

              const hasTactileBump = keyObj.hasBump;
              const fingerColorHex = finger.hex;

              return (
                <div
                  key={keyIndex}
                  className={`
                    relative flex flex-col items-center justify-center
                    h-10 sm:h-12 rounded-xl font-mono text-xs sm:text-sm font-bold
                    transition-all duration-75 select-none
                    ${keyObj.width || 'w-10 sm:w-12'}
                    ${
                      isKawaii
                        ? isPhysicallyPressed
                          ? 'translate-y-1 bg-pink-100 text-pink-700 shadow-inner border border-pink-300'
                          : isNextKey || isHighlightShift
                          ? 'bg-white text-pink-600 shadow-lg ring-3 ring-pink-400 scale-[1.05] z-10 border-2 border-pink-400 font-black'
                          : 'bg-white hover:bg-pink-50/50 text-slate-700 border border-pink-200/90 shadow-2xs'
                        : isPhysicallyPressed
                        ? 'translate-y-1 bg-slate-700 text-white shadow-inner border border-slate-500'
                        : isNextKey || isHighlightShift
                        ? 'bg-slate-800 text-white shadow-lg ring-2 ring-indigo-400 scale-[1.04] z-10'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80'
                    }
                  `}
                  style={{
                    borderTop: showHints && !isNextKey ? `3px solid ${fingerColorHex}` : undefined
                  }}
                >
                  {/* Glowing Next Key Indicator */}
                  {(isNextKey || isHighlightShift) && (
                    <div
                      className="absolute inset-0 rounded-xl animate-pulse pointer-events-none"
                      style={{
                        boxShadow: isKawaii
                          ? `0 0 16px #ff4d88aa, inset 0 0 8px #ff4d8866`
                          : `0 0 16px ${fingerColorHex}88, inset 0 0 8px ${fingerColorHex}66`
                      }}
                    />
                  )}

                  {/* Shifted symbol on top */}
                  {keyObj.shiftKey && keyObj.shiftKey !== keyObj.key.toUpperCase() && (
                    <span className={`text-[9px] sm:text-[10px] leading-none ${
                      isKawaii ? 'text-pink-400' : 'text-slate-400'
                    }`}>
                      {keyObj.shiftKey}
                    </span>
                  )}

                  {/* Primary Key Label */}
                  <span
                    className={`leading-tight flex items-center justify-center gap-1 ${
                      isNextKey || isHighlightShift
                        ? isKawaii ? 'text-pink-600 font-black text-sm sm:text-base' : 'text-white font-extrabold text-sm sm:text-base'
                        : isKawaii ? 'text-slate-800' : 'text-slate-200'
                    }`}
                  >
                    {keyObj.isSpace && isKawaii ? (
                      <span className="flex items-center gap-1.5 text-xs text-pink-400 font-sans">
                        <span>🎀</span> <span>Spacebar</span> <span>🎀</span>
                      </span>
                    ) : (
                      keyObj.display || keyObj.key.toUpperCase()
                    )}
                  </span>

                  {/* Tactile bump marker for F and J home row anchors */}
                  {hasTactileBump && (
                    <span
                      className={`absolute bottom-1 w-3 sm:w-3.5 h-0.5 rounded-full ${
                        isKawaii ? 'bg-pink-400' : 'bg-slate-400'
                      }`}
                      title="Tactile anchor bump"
                    />
                  )}

                  {/* Mini Finger Color Pip (bottom right) */}
                  {showHints && !keyObj.isSpecial && (
                    <span
                      className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full opacity-80"
                      style={{ backgroundColor: fingerColorHex }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Keyboard Footer: Home Row Legend */}
      <div className={`mt-3 pt-2.5 border-t flex flex-wrap items-center justify-between text-[11px] gap-2 px-1 ${
        isKawaii ? 'border-pink-200/80 text-pink-700/80' : 'border-slate-800/80 text-slate-400'
      }`}>
        <div className="flex items-center gap-2">
          <span className="font-bold">Home Row Rest:</span>
          <span className={`px-2 py-0.5 rounded-md font-mono font-bold ${
            isKawaii ? 'bg-pink-100 text-pink-700' : 'bg-slate-800 text-slate-300'
          }`}>A S D F</span>
          <span>•</span>
          <span className={`px-2 py-0.5 rounded-md font-mono font-bold ${
            isKawaii ? 'bg-pink-100 text-pink-700' : 'bg-slate-800 text-slate-300'
          }`}>J K L ;</span>
        </div>

        <div className="flex items-center gap-3 font-semibold">
          <span className="flex items-center gap-1">
            <span className={`w-2 h-0.5 rounded-full inline-block ${isKawaii ? 'bg-pink-400' : 'bg-slate-400'}`} />
            <span>Tactile Bumps on F & J</span>
          </span>
          <span className="flex items-center gap-1">
            <span>{isKawaii ? '🐱 Thumbs for Space' : 'Thumbs for Space'}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
