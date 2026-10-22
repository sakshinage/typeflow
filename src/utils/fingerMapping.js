/**
 * Finger color mapping matching specifications:
 * - Left pinky: red
 * - Left ring finger: orange
 * - Left middle finger: yellow
 * - Left index finger: green
 * - Right index finger: cyan
 * - Right middle finger: blue
 * - Right ring finger: purple
 * - Right pinky: pink
 * - Thumbs: neutral gray for the spacebar
 */

export const FINGER_DEFINITIONS = {
  leftPinky: {
    id: "leftPinky",
    name: "Left Pinky",
    hand: "left",
    finger: "pinky",
    colorName: "red",
    hex: "#ef4444",
    bgClass: "bg-red-500",
    textClass: "text-red-500",
    borderClass: "border-red-400",
    softBgClass: "bg-red-50 text-red-700 border-red-200",
    activeKeyClass: "bg-red-500 text-white shadow-lg ring-4 ring-red-300"
  },
  leftRing: {
    id: "leftRing",
    name: "Left Ring",
    hand: "left",
    finger: "ring",
    colorName: "orange",
    hex: "#f97316",
    bgClass: "bg-orange-500",
    textClass: "text-orange-500",
    borderClass: "border-orange-400",
    softBgClass: "bg-orange-50 text-orange-700 border-orange-200",
    activeKeyClass: "bg-orange-500 text-white shadow-lg ring-4 ring-orange-300"
  },
  leftMiddle: {
    id: "leftMiddle",
    name: "Left Middle",
    hand: "left",
    finger: "middle",
    colorName: "yellow",
    hex: "#eab308",
    bgClass: "bg-amber-400",
    textClass: "text-amber-500",
    borderClass: "border-amber-400",
    softBgClass: "bg-amber-50 text-amber-800 border-amber-200",
    activeKeyClass: "bg-amber-500 text-white shadow-lg ring-4 ring-amber-300"
  },
  leftIndex: {
    id: "leftIndex",
    name: "Left Index",
    hand: "left",
    finger: "index",
    colorName: "green",
    hex: "#22c55e",
    bgClass: "bg-emerald-500",
    textClass: "text-emerald-500",
    borderClass: "border-emerald-400",
    softBgClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    activeKeyClass: "bg-emerald-500 text-white shadow-lg ring-4 ring-emerald-300"
  },
  thumbs: {
    id: "thumbs",
    name: "Thumbs (Spacebar)",
    hand: "both",
    finger: "thumb",
    colorName: "neutral gray",
    hex: "#64748b",
    bgClass: "bg-slate-500",
    textClass: "text-slate-500",
    borderClass: "border-slate-400",
    softBgClass: "bg-slate-100 text-slate-700 border-slate-300",
    activeKeyClass: "bg-slate-600 text-white shadow-lg ring-4 ring-slate-300"
  },
  rightIndex: {
    id: "rightIndex",
    name: "Right Index",
    hand: "right",
    finger: "index",
    colorName: "cyan",
    hex: "#06b6d4",
    bgClass: "bg-cyan-500",
    textClass: "text-cyan-500",
    borderClass: "border-cyan-400",
    softBgClass: "bg-cyan-50 text-cyan-700 border-cyan-200",
    activeKeyClass: "bg-cyan-500 text-white shadow-lg ring-4 ring-cyan-300"
  },
  rightMiddle: {
    id: "rightMiddle",
    name: "Right Middle",
    hand: "right",
    finger: "middle",
    colorName: "blue",
    hex: "#3b82f6",
    bgClass: "bg-blue-500",
    textClass: "text-blue-500",
    borderClass: "border-blue-400",
    softBgClass: "bg-blue-50 text-blue-700 border-blue-200",
    activeKeyClass: "bg-blue-500 text-white shadow-lg ring-4 ring-blue-300"
  },
  rightRing: {
    id: "rightRing",
    name: "Right Ring",
    hand: "right",
    finger: "ring",
    colorName: "purple",
    hex: "#a855f7",
    bgClass: "bg-purple-500",
    textClass: "text-purple-500",
    borderClass: "border-purple-400",
    softBgClass: "bg-purple-50 text-purple-700 border-purple-200",
    activeKeyClass: "bg-purple-500 text-white shadow-lg ring-4 ring-purple-300"
  },
  rightPinky: {
    id: "rightPinky",
    name: "Right Pinky",
    hand: "right",
    finger: "pinky",
    colorName: "pink",
    hex: "#ec4899",
    bgClass: "bg-pink-500",
    textClass: "text-pink-500",
    borderClass: "border-pink-400",
    softBgClass: "bg-pink-50 text-pink-700 border-pink-200",
    activeKeyClass: "bg-pink-500 text-white shadow-lg ring-4 ring-pink-300"
  }
};

/**
 * Key to finger ID lookup map
 */
export const KEY_TO_FINGER = {
  // --- Left Pinky (Red) ---
  '`': 'leftPinky', '~': 'leftPinky',
  '1': 'leftPinky', '!': 'leftPinky',
  'q': 'leftPinky', 'Q': 'leftPinky',
  'a': 'leftPinky', 'A': 'leftPinky',
  'z': 'leftPinky', 'Z': 'leftPinky',
  'Tab': 'leftPinky',
  'CapsLock': 'leftPinky',
  'ShiftLeft': 'leftPinky',
  'ControlLeft': 'leftPinky',

  // --- Left Ring (Orange) ---
  '2': 'leftRing', '@': 'leftRing',
  'w': 'leftRing', 'W': 'leftRing',
  's': 'leftRing', 'S': 'leftRing',
  'x': 'leftRing', 'X': 'leftRing',

  // --- Left Middle (Yellow) ---
  '3': 'leftMiddle', '#': 'leftMiddle',
  'e': 'leftMiddle', 'E': 'leftMiddle',
  'd': 'leftMiddle', 'D': 'leftMiddle',
  'c': 'leftMiddle', 'C': 'leftMiddle',

  // --- Left Index (Green) ---
  '4': 'leftIndex', '$': 'leftIndex',
  '5': 'leftIndex', '%': 'leftIndex',
  'r': 'leftIndex', 'R': 'leftIndex',
  't': 'leftIndex', 'T': 'leftIndex',
  'f': 'leftIndex', 'F': 'leftIndex',
  'g': 'leftIndex', 'G': 'leftIndex',
  'v': 'leftIndex', 'V': 'leftIndex',
  'b': 'leftIndex', 'B': 'leftIndex',

  // --- Thumbs (Neutral Gray) ---
  ' ': 'thumbs',
  'Space': 'thumbs',

  // --- Right Index (Cyan) ---
  '6': 'rightIndex', '^': 'rightIndex',
  '7': 'rightIndex', '&': 'rightIndex',
  'y': 'rightIndex', 'Y': 'rightIndex',
  'u': 'rightIndex', 'U': 'rightIndex',
  'h': 'rightIndex', 'H': 'rightIndex',
  'j': 'rightIndex', 'J': 'rightIndex',
  'n': 'rightIndex', 'N': 'rightIndex',
  'm': 'rightIndex', 'M': 'rightIndex',

  // --- Right Middle (Blue) ---
  '8': 'rightMiddle', '*': 'rightMiddle',
  'i': 'rightMiddle', 'I': 'rightMiddle',
  'k': 'rightMiddle', 'K': 'rightMiddle',
  ',': 'rightMiddle', '<': 'rightMiddle',

  // --- Right Ring (Purple) ---
  '9': 'rightRing', '(': 'rightRing',
  'o': 'rightRing', 'O': 'rightRing',
  'l': 'rightRing', 'L': 'rightRing',
  '.': 'rightRing', '>': 'rightRing',

  // --- Right Pinky (Pink) ---
  '0': 'rightPinky', ')': 'rightPinky',
  '-': 'rightPinky', '_': 'rightPinky',
  '=': 'rightPinky', '+': 'rightPinky',
  'p': 'rightPinky', 'P': 'rightPinky',
  '[': 'rightPinky', '{': 'rightPinky',
  ']': 'rightPinky', '}': 'rightPinky',
  '\\': 'rightPinky', '|': 'rightPinky',
  ';': 'rightPinky', ':': 'rightPinky',
  "'": 'rightPinky', '"': 'rightPinky',
  '/': 'rightPinky', '?': 'rightPinky',
  'Backspace': 'rightPinky',
  'Enter': 'rightPinky',
  'ShiftRight': 'rightPinky'
};

/**
 * Returns finger info for a given character or key
 */
export function getFingerForKey(charOrKey) {
  if (!charOrKey) return FINGER_DEFINITIONS.thumbs;
  const fingerId = KEY_TO_FINGER[charOrKey] || KEY_TO_FINGER[charOrKey.toLowerCase()] || 'thumbs';
  return FINGER_DEFINITIONS[fingerId] || FINGER_DEFINITIONS.thumbs;
}

/**
 * Physical keyboard layout definition for rendering the virtual keyboard
 */
export const KEYBOARD_LAYOUT = [
  // Row 1: Number Row
  [
    { key: '`', shiftKey: '~', code: 'Backquote', width: 'w-10 md:w-12', fingerId: 'leftPinky' },
    { key: '1', shiftKey: '!', code: 'Digit1', width: 'w-10 md:w-12', fingerId: 'leftPinky' },
    { key: '2', shiftKey: '@', code: 'Digit2', width: 'w-10 md:w-12', fingerId: 'leftRing' },
    { key: '3', shiftKey: '#', code: 'Digit3', width: 'w-10 md:w-12', fingerId: 'leftMiddle' },
    { key: '4', shiftKey: '$', code: 'Digit4', width: 'w-10 md:w-12', fingerId: 'leftIndex' },
    { key: '5', shiftKey: '%', code: 'Digit5', width: 'w-10 md:w-12', fingerId: 'leftIndex' },
    { key: '6', shiftKey: '^', code: 'Digit6', width: 'w-10 md:w-12', fingerId: 'rightIndex' },
    { key: '7', shiftKey: '&', code: 'Digit7', width: 'w-10 md:w-12', fingerId: 'rightIndex' },
    { key: '8', shiftKey: '*', code: 'Digit8', width: 'w-10 md:w-12', fingerId: 'rightMiddle' },
    { key: '9', shiftKey: '(', code: 'Digit9', width: 'w-10 md:w-12', fingerId: 'rightRing' },
    { key: '0', shiftKey: ')', code: 'Digit0', width: 'w-10 md:w-12', fingerId: 'rightPinky' },
    { key: '-', shiftKey: '_', code: 'Minus', width: 'w-10 md:w-12', fingerId: 'rightPinky' },
    { key: '=', shiftKey: '+', code: 'Equal', width: 'w-10 md:w-12', fingerId: 'rightPinky' },
    { key: 'Backspace', display: 'Bksp', code: 'Backspace', width: 'w-16 md:w-20', fingerId: 'rightPinky', isSpecial: true }
  ],
  // Row 2: Top Row (Tab + QWERTYUIOP)
  [
    { key: 'Tab', display: 'Tab', code: 'Tab', width: 'w-14 md:w-16', fingerId: 'leftPinky', isSpecial: true },
    { key: 'q', shiftKey: 'Q', code: 'KeyQ', width: 'w-10 md:w-12', fingerId: 'leftPinky' },
    { key: 'w', shiftKey: 'W', code: 'KeyW', width: 'w-10 md:w-12', fingerId: 'leftRing' },
    { key: 'e', shiftKey: 'E', code: 'KeyE', width: 'w-10 md:w-12', fingerId: 'leftMiddle' },
    { key: 'r', shiftKey: 'R', code: 'KeyR', width: 'w-10 md:w-12', fingerId: 'leftIndex' },
    { key: 't', shiftKey: 'T', code: 'KeyT', width: 'w-10 md:w-12', fingerId: 'leftIndex' },
    { key: 'y', shiftKey: 'Y', code: 'KeyY', width: 'w-10 md:w-12', fingerId: 'rightIndex' },
    { key: 'u', shiftKey: 'U', code: 'KeyU', width: 'w-10 md:w-12', fingerId: 'rightIndex' },
    { key: 'i', shiftKey: 'I', code: 'KeyI', width: 'w-10 md:w-12', fingerId: 'rightMiddle' },
    { key: 'o', shiftKey: 'O', code: 'KeyO', width: 'w-10 md:w-12', fingerId: 'rightRing' },
    { key: 'p', shiftKey: 'P', code: 'KeyP', width: 'w-10 md:w-12', fingerId: 'rightPinky' },
    { key: '[', shiftKey: '{', code: 'BracketLeft', width: 'w-10 md:w-12', fingerId: 'rightPinky' },
    { key: ']', shiftKey: '}', code: 'BracketRight', width: 'w-10 md:w-12', fingerId: 'rightPinky' },
    { key: '\\', shiftKey: '|', code: 'Backslash', width: 'w-12 md:w-14', fingerId: 'rightPinky' }
  ],
  // Row 3: Home Row (Caps + ASDFGHJKL;)
  [
    { key: 'CapsLock', display: 'Caps', code: 'CapsLock', width: 'w-16 md:w-20', fingerId: 'leftPinky', isSpecial: true },
    { key: 'a', shiftKey: 'A', code: 'KeyA', width: 'w-10 md:w-12', fingerId: 'leftPinky', isHomeRow: true },
    { key: 's', shiftKey: 'S', code: 'KeyS', width: 'w-10 md:w-12', fingerId: 'leftRing', isHomeRow: true },
    { key: 'd', shiftKey: 'D', code: 'KeyD', width: 'w-10 md:w-12', fingerId: 'leftMiddle', isHomeRow: true },
    { key: 'f', shiftKey: 'F', code: 'KeyF', width: 'w-10 md:w-12', fingerId: 'leftIndex', isHomeRow: true, hasBump: true },
    { key: 'g', shiftKey: 'G', code: 'KeyG', width: 'w-10 md:w-12', fingerId: 'leftIndex' },
    { key: 'h', shiftKey: 'H', code: 'KeyH', width: 'w-10 md:w-12', fingerId: 'rightIndex' },
    { key: 'j', shiftKey: 'J', code: 'KeyJ', width: 'w-10 md:w-12', fingerId: 'rightIndex', isHomeRow: true, hasBump: true },
    { key: 'k', shiftKey: 'K', code: 'KeyK', width: 'w-10 md:w-12', fingerId: 'rightMiddle', isHomeRow: true },
    { key: 'l', shiftKey: 'L', code: 'KeyL', width: 'w-10 md:w-12', fingerId: 'rightRing', isHomeRow: true },
    { key: ';', shiftKey: ':', code: 'Semicolon', width: 'w-10 md:w-12', fingerId: 'rightPinky', isHomeRow: true },
    { key: "'", shiftKey: '"', code: 'Quote', width: 'w-10 md:w-12', fingerId: 'rightPinky' },
    { key: 'Enter', display: 'Enter', code: 'Enter', width: 'w-18 md:w-22', fingerId: 'rightPinky', isSpecial: true }
  ],
  // Row 4: Bottom Row (Shift + ZXCVBNM)
  [
    { key: 'Shift', display: 'Shift', code: 'ShiftLeft', width: 'w-20 md:w-24', fingerId: 'leftPinky', isSpecial: true },
    { key: 'z', shiftKey: 'Z', code: 'KeyZ', width: 'w-10 md:w-12', fingerId: 'leftPinky' },
    { key: 'x', shiftKey: 'X', code: 'KeyX', width: 'w-10 md:w-12', fingerId: 'leftRing' },
    { key: 'c', shiftKey: 'C', code: 'KeyC', width: 'w-10 md:w-12', fingerId: 'leftMiddle' },
    { key: 'v', shiftKey: 'V', code: 'KeyV', width: 'w-10 md:w-12', fingerId: 'leftIndex' },
    { key: 'b', shiftKey: 'B', code: 'KeyB', width: 'w-10 md:w-12', fingerId: 'leftIndex' },
    { key: 'n', shiftKey: 'N', code: 'KeyN', width: 'w-10 md:w-12', fingerId: 'rightIndex' },
    { key: 'm', shiftKey: 'M', code: 'KeyM', width: 'w-10 md:w-12', fingerId: 'rightIndex' },
    { key: ',', shiftKey: '<', code: 'Comma', width: 'w-10 md:w-12', fingerId: 'rightMiddle' },
    { key: '.', shiftKey: '>', code: 'Period', width: 'w-10 md:w-12', fingerId: 'rightRing' },
    { key: '/', shiftKey: '?', code: 'Slash', width: 'w-10 md:w-12', fingerId: 'rightPinky' },
    { key: 'Shift', display: 'Shift', code: 'ShiftRight', width: 'w-20 md:w-24', fingerId: 'rightPinky', isSpecial: true }
  ],
  // Row 5: Spacebar Row
  [
    { key: 'Control', display: 'Ctrl', code: 'ControlLeft', width: 'w-12 md:w-14', fingerId: 'leftPinky', isSpecial: true },
    { key: 'Alt', display: 'Alt', code: 'AltLeft', width: 'w-12 md:w-14', fingerId: 'thumbs', isSpecial: true },
    { key: ' ', display: 'Space', code: 'Space', width: 'flex-1 max-w-md', fingerId: 'thumbs', isSpace: true },
    { key: 'Alt', display: 'Alt', code: 'AltRight', width: 'w-12 md:w-14', fingerId: 'thumbs', isSpecial: true },
    { key: 'Control', display: 'Ctrl', code: 'ControlRight', width: 'w-12 md:w-14', fingerId: 'rightPinky', isSpecial: true }
  ]
];
