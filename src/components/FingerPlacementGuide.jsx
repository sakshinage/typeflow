import React from 'react';
import { FINGER_DEFINITIONS, getFingerForKey } from '../utils/fingerMapping';
import { Hand, Sparkles } from 'lucide-react';

export default function FingerPlacementGuide({ nextChar, showHints = true }) {
  const currentFinger = getFingerForKey(nextChar);

  // Group fingers in keyboard order (Left to Right)
  const leftFingers = [
    FINGER_DEFINITIONS.leftPinky,
    FINGER_DEFINITIONS.leftRing,
    FINGER_DEFINITIONS.leftMiddle,
    FINGER_DEFINITIONS.leftIndex
  ];

  const thumbFinger = FINGER_DEFINITIONS.thumbs;

  const rightFingers = [
    FINGER_DEFINITIONS.rightIndex,
    FINGER_DEFINITIONS.rightMiddle,
    FINGER_DEFINITIONS.rightRing,
    FINGER_DEFINITIONS.rightPinky
  ];

  if (!showHints) return null;

  const charDisplay = nextChar === ' ' ? 'Space' : nextChar || '—';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-xs">
      {/* Active Finger Target Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Hand className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-600 block">Recommended Finger</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-800">
                {currentFinger.name}
              </span>
              <span
                className="w-3 h-3 rounded-full inline-block shadow-2xs border border-white"
                style={{ backgroundColor: currentFinger.hex }}
              />
              <span className="text-xs uppercase tracking-wide font-extrabold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                {currentFinger.colorName}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-indigo-50/70 border border-indigo-100 px-3 py-1.5 rounded-xl">
          <Sparkles className="w-4 h-4 text-indigo-600 animate-spin-slow" />
          <span className="text-xs text-indigo-900">
            Target Key: <strong className="font-mono text-sm px-1.5 py-0.5 rounded bg-white border border-indigo-200 text-indigo-700 shadow-2xs">{charDisplay}</strong>
          </span>
        </div>
      </div>

      {/* Complete 10-Finger Color Legend */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 px-1">
          <span>Left Hand</span>
          <span className="text-slate-600">Thumbs</span>
          <span>Right Hand</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-9 gap-1.5 text-[11px]">
          {/* Left Hand Fingers */}
          {leftFingers.map((f) => {
            const isActive = currentFinger.id === f.id;
            return (
              <div
                key={f.id}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border transition-all ${
                  isActive
                    ? 'border-indigo-500 bg-indigo-50/80 shadow-xs ring-1 ring-indigo-400 font-bold'
                    : 'border-slate-100 bg-slate-50/60 text-slate-600'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs"
                  style={{ backgroundColor: f.hex }}
                />
                <span className="truncate">{f.finger}</span>
              </div>
            );
          })}

          {/* Thumbs */}
          <div
            className={`col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg border transition-all ${
              currentFinger.id === thumbFinger.id
                ? 'border-indigo-500 bg-indigo-50/80 shadow-xs ring-1 ring-indigo-400 font-bold'
                : 'border-slate-100 bg-slate-50/60 text-slate-600'
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs"
              style={{ backgroundColor: thumbFinger.hex }}
            />
            <span className="truncate">Space</span>
          </div>

          {/* Right Hand Fingers */}
          {rightFingers.map((f) => {
            const isActive = currentFinger.id === f.id;
            return (
              <div
                key={f.id}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border transition-all ${
                  isActive
                    ? 'border-indigo-500 bg-indigo-50/80 shadow-xs ring-1 ring-indigo-400 font-bold'
                    : 'border-slate-100 bg-slate-50/60 text-slate-600'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs"
                  style={{ backgroundColor: f.hex }}
                />
                <span className="truncate">{f.finger}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
