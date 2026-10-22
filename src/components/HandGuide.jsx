import React from 'react';
import { getFingerForKey, FINGER_DEFINITIONS } from '../utils/fingerMapping';

export default function HandGuide({ nextChar, show = true }) {
  if (!show) return null;

  const currentFinger = getFingerForKey(nextChar);

  // Home row keys associated with each finger
  const fingerKeyLabels = {
    leftPinky: 'A',
    leftRing: 'S',
    leftMiddle: 'D',
    leftIndex: 'F',
    thumbs: 'Space',
    rightIndex: 'J',
    rightMiddle: 'K',
    rightRing: 'L',
    rightPinky: ';'
  };

  const isLeftPinky = currentFinger.id === 'leftPinky';
  const isLeftRing = currentFinger.id === 'leftRing';
  const isLeftMiddle = currentFinger.id === 'leftMiddle';
  const isLeftIndex = currentFinger.id === 'leftIndex';
  const isThumb = currentFinger.id === 'thumbs';
  const isRightIndex = currentFinger.id === 'rightIndex';
  const isRightMiddle = currentFinger.id === 'rightMiddle';
  const isRightRing = currentFinger.id === 'rightRing';
  const isRightPinky = currentFinger.id === 'rightPinky';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Hand Position & Home-Row Anchors
          </span>
          <span className="text-[11px] bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded-full border border-indigo-100">
            Rest on A S D F & J K L ;
          </span>
        </div>
        <span className="text-xs text-slate-600">
          Active: <strong className="font-bold text-slate-800">{currentFinger.name}</strong>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto py-1">
        {/* LEFT HAND */}
        <div className="flex flex-col items-center p-3 rounded-xl bg-slate-50/70 border border-slate-100">
          <span className="text-xs font-bold text-slate-600 mb-2">Left Hand</span>

          {/* SVG Hand Illustration */}
          <div className="relative w-full max-w-[200px] h-[130px] flex items-end justify-center">
            <svg viewBox="0 0 200 140" className="w-full h-full">
              {/* Palm outline */}
              <path
                d="M 50 135 C 40 100, 35 80, 45 60 C 50 50, 70 48, 80 50 C 90 48, 110 48, 125 55 C 135 60, 150 75, 145 105 C 140 125, 120 135, 95 135 Z"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {/* Pinky (Red) */}
              <g className={`transition-all duration-150 ${isLeftPinky ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 42 65 C 38 45, 38 25, 45 20 C 52 20, 56 40, 54 65"
                  fill={isLeftPinky ? '#ef4444' : '#fee2e2'}
                  stroke={isLeftPinky ? '#dc2626' : '#fca5a5'}
                  strokeWidth={isLeftPinky ? '3' : '2'}
                />
                <circle cx="48" cy="22" r="5" fill="#ef4444" />
                <text x="48" y="25" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">A</text>
              </g>

              {/* Ring Finger (Orange) */}
              <g className={`transition-all duration-150 ${isLeftRing ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 58 55 C 55 35, 56 12, 66 10 C 74 10, 76 30, 73 55"
                  fill={isLeftRing ? '#f97316' : '#ffedd5'}
                  stroke={isLeftRing ? '#ea580c' : '#fdba74'}
                  strokeWidth={isLeftRing ? '3' : '2'}
                />
                <circle cx="66" cy="13" r="5" fill="#f97316" />
                <text x="66" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">S</text>
              </g>

              {/* Middle Finger (Yellow) */}
              <g className={`transition-all duration-150 ${isLeftMiddle ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 77 50 C 76 25, 78 5, 89 5 C 99 5, 98 25, 95 50"
                  fill={isLeftMiddle ? '#eab308' : '#fef9c3'}
                  stroke={isLeftMiddle ? '#ca8a04' : '#fde047'}
                  strokeWidth={isLeftMiddle ? '3' : '2'}
                />
                <circle cx="89" cy="8" r="5" fill="#eab308" />
                <text x="89" y="11" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">D</text>
              </g>

              {/* Index Finger (Green - with tactile bump on F) */}
              <g className={`transition-all duration-150 ${isLeftIndex ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 99 52 C 100 30, 103 14, 114 14 C 123 14, 122 32, 118 55"
                  fill={isLeftIndex ? '#22c55e' : '#dcfce7'}
                  stroke={isLeftIndex ? '#16a34a' : '#86efac'}
                  strokeWidth={isLeftIndex ? '3' : '2'}
                />
                <circle cx="114" cy="17" r="5" fill="#22c55e" />
                <text x="114" y="20" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">F</text>
              </g>

              {/* Thumb (Spacebar - Neutral Gray) */}
              <g className={`transition-all duration-150 ${isThumb ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 125 75 C 145 78, 160 88, 160 98 C 160 108, 142 108, 130 95"
                  fill={isThumb ? '#64748b' : '#f1f5f9'}
                  stroke={isThumb ? '#475569' : '#94a3b8'}
                  strokeWidth={isThumb ? '3' : '2'}
                />
                <circle cx="155" cy="98" r="5" fill="#64748b" />
                <text x="155" y="101" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#ffffff">⎵</text>
              </g>
            </svg>
          </div>

          <div className="flex justify-between w-full text-[10px] text-slate-600 font-semibold mt-1 px-1">
            <span className={isLeftPinky ? 'text-red-600 font-bold' : ''}>Pinky (A)</span>
            <span className={isLeftRing ? 'text-orange-600 font-bold' : ''}>Ring (S)</span>
            <span className={isLeftMiddle ? 'text-amber-600 font-bold' : ''}>Mid (D)</span>
            <span className={isLeftIndex ? 'text-green-600 font-bold' : ''}>Index (F)</span>
          </div>
        </div>

        {/* RIGHT HAND */}
        <div className="flex flex-col items-center p-3 rounded-xl bg-slate-50/70 border border-slate-100">
          <span className="text-xs font-bold text-slate-600 mb-2">Right Hand</span>

          {/* SVG Hand Illustration (Mirrored) */}
          <div className="relative w-full max-w-[200px] h-[130px] flex items-end justify-center">
            <svg viewBox="0 0 200 140" className="w-full h-full">
              {/* Palm outline */}
              <path
                d="M 150 135 C 160 100, 165 80, 155 60 C 150 50, 130 48, 120 50 C 110 48, 90 48, 75 55 C 65 60, 50 75, 55 105 C 60 125, 80 135, 105 135 Z"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {/* Thumb (Spacebar - Neutral Gray) */}
              <g className={`transition-all duration-150 ${isThumb ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 75 75 C 55 78, 40 88, 40 98 C 40 108, 58 108, 70 95"
                  fill={isThumb ? '#64748b' : '#f1f5f9'}
                  stroke={isThumb ? '#475569' : '#94a3b8'}
                  strokeWidth={isThumb ? '3' : '2'}
                />
                <circle cx="45" cy="98" r="5" fill="#64748b" />
                <text x="45" y="101" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#ffffff">⎵</text>
              </g>

              {/* Index Finger (Cyan - with tactile bump on J) */}
              <g className={`transition-all duration-150 ${isRightIndex ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 101 52 C 100 30, 97 14, 86 14 C 77 14, 78 32, 82 55"
                  fill={isRightIndex ? '#06b6d4' : '#cffafe'}
                  stroke={isRightIndex ? '#0891b2' : '#67e8f9'}
                  strokeWidth={isRightIndex ? '3' : '2'}
                />
                <circle cx="86" cy="17" r="5" fill="#06b6d4" />
                <text x="86" y="20" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">J</text>
              </g>

              {/* Middle Finger (Blue) */}
              <g className={`transition-all duration-150 ${isRightMiddle ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 123 50 C 124 25, 122 5, 111 5 C 101 5, 102 25, 105 50"
                  fill={isRightMiddle ? '#3b82f6' : '#dbeafe'}
                  stroke={isRightMiddle ? '#2563eb' : '#93c5fd'}
                  strokeWidth={isRightMiddle ? '3' : '2'}
                />
                <circle cx="111" cy="8" r="5" fill="#3b82f6" />
                <text x="111" y="11" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">K</text>
              </g>

              {/* Ring Finger (Purple) */}
              <g className={`transition-all duration-150 ${isRightRing ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 142 55 C 145 35, 144 12, 134 10 C 126 10, 124 30, 127 55"
                  fill={isRightRing ? '#a855f7' : '#f3e8ff'}
                  stroke={isRightRing ? '#9333ea' : '#d8b4fe'}
                  strokeWidth={isRightRing ? '3' : '2'}
                />
                <circle cx="134" cy="13" r="5" fill="#a855f7" />
                <text x="134" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">L</text>
              </g>

              {/* Pinky (Pink) */}
              <g className={`transition-all duration-150 ${isRightPinky ? 'scale-105 origin-bottom' : ''}`}>
                <path
                  d="M 158 65 C 162 45, 162 25, 155 20 C 148 20, 144 40, 146 65"
                  fill={isRightPinky ? '#ec4899' : '#fce7f3'}
                  stroke={isRightPinky ? '#db2777' : '#f472b6'}
                  strokeWidth={isRightPinky ? '3' : '2'}
                />
                <circle cx="152" cy="22" r="5" fill="#ec4899" />
                <text x="152" y="25" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">;</text>
              </g>
            </svg>
          </div>

          <div className="flex justify-between w-full text-[10px] text-slate-600 font-semibold mt-1 px-1">
            <span className={isRightIndex ? 'text-cyan-600 font-bold' : ''}>Index (J)</span>
            <span className={isRightMiddle ? 'text-blue-600 font-bold' : ''}>Mid (K)</span>
            <span className={isRightRing ? 'text-purple-600 font-bold' : ''}>Ring (L)</span>
            <span className={isRightPinky ? 'text-pink-600 font-bold' : ''}>Pinky (;)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
