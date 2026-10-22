import { KEY_TO_FINGER, FINGER_DEFINITIONS } from './fingerMapping';

const STORAGE_PROGRESS_KEY = 'typeflow_typing_progress_v2';
const STORAGE_SETTINGS_KEY = 'typeflow_settings_v2';

export const DEFAULT_SETTINGS = {
  soundEnabled: true,
  soundType: 'kawaii', // 'kawaii' | 'mechanical' | 'soft' | 'silent'
  showFingerHints: true,
  showHandGuide: true,
  allowBackspace: true,
  targetAccuracy: 95,
  practiceDuration: 30, // for speed test
  theme: 'kawaii' // 'kawaii' (Hello Kitty Pink & White) | 'modern' (Minimal Slate/Indigo) | 'dark' (Midnight Kitty)
};

const DEFAULT_PROGRESS = {
  completedLessons: {},
  currentLessonId: 1,
  streak: 1,
  lastPracticeDate: new Date().toISOString().split('T')[0],
  totalPracticeSeconds: 0,
  totalCharsTyped: 0,
  history: [],
  keyMistakes: {}
};

export function getSettings() {
  try {
    const data = localStorage.getItem(STORAGE_SETTINGS_KEY);
    return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
  } catch (e) {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings to localStorage', e);
  }
}

export function getProgress() {
  try {
    const data = localStorage.getItem(STORAGE_PROGRESS_KEY);
    if (!data) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(data);

    // Calculate streak maintenance
    const todayStr = new Date().toISOString().split('T')[0];
    const lastDateStr = parsed.lastPracticeDate || todayStr;
    const diffDays = Math.floor((new Date(todayStr) - new Date(lastDateStr)) / (1000 * 60 * 60 * 24));

    let updatedStreak = parsed.streak || 1;
    if (diffDays > 1) {
      updatedStreak = 1;
    }

    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      streak: updatedStreak
    };
  } catch (e) {
    return DEFAULT_PROGRESS;
  }
}

export function saveLessonResult(lessonId, result) {
  try {
    const progress = getProgress();
    const todayStr = new Date().toISOString().split('T')[0];

    // Update streak if first practice today
    let streak = progress.streak || 1;
    if (progress.lastPracticeDate !== todayStr) {
      const diffDays = Math.floor((new Date(todayStr) - new Date(progress.lastPracticeDate)) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        streak += 1;
      } else if (diffDays > 1) {
        streak = 1;
      }
    }

    const prevLessonData = progress.completedLessons[lessonId] || {
      bestWpm: 0,
      bestAccuracy: 0,
      attempts: 0,
      stars: 0
    };

    let stars = 1;
    if (result.accuracy >= 95) stars = 2;
    if (result.accuracy >= 98 && result.wpm >= (result.minWpmTarget || 15)) stars = 3;

    const attempts = prevLessonData.attempts + 1;
    const bestWpm = Math.max(prevLessonData.bestWpm || 0, result.wpm || 0);
    const bestAccuracy = Math.max(prevLessonData.bestAccuracy || 0, result.accuracy || 0);
    const bestStars = Math.max(prevLessonData.stars || 0, stars);

    const completedLessons = {
      ...progress.completedLessons,
      [lessonId]: {
        completed: true,
        bestWpm,
        bestAccuracy,
        attempts,
        stars: bestStars,
        lastCompletedAt: new Date().toISOString()
      }
    };

    // Determine next currentLessonId up to 310
    let nextLessonId = progress.currentLessonId;
    if (lessonId >= progress.currentLessonId) {
      nextLessonId = Math.min(310, lessonId + 1);
    }

    const keyMistakes = { ...progress.keyMistakes };
    if (result.mistakesMap) {
      Object.entries(result.mistakesMap).forEach(([char, count]) => {
        keyMistakes[char] = (keyMistakes[char] || 0) + count;
      });
    }

    const historyEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      lessonId,
      lessonTitle: result.lessonTitle || `Lesson ${lessonId}`,
      wpm: result.wpm,
      grossWpm: result.grossWpm,
      netWpm: result.netWpm,
      accuracy: result.accuracy,
      durationSeconds: result.durationSeconds,
      correctChars: result.correctChars,
      incorrectChars: result.incorrectChars,
      passed: result.passed,
      stars
    };

    const history = [historyEntry, ...(progress.history || [])].slice(0, 50);

    const updatedProgress = {
      ...progress,
      completedLessons,
      currentLessonId: nextLessonId,
      streak,
      lastPracticeDate: todayStr,
      totalPracticeSeconds: (progress.totalPracticeSeconds || 0) + (result.durationSeconds || 0),
      totalCharsTyped: (progress.totalCharsTyped || 0) + (result.totalChars || 0),
      history,
      keyMistakes
    };

    localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(updatedProgress));
    return updatedProgress;
  } catch (e) {
    console.error('Failed to save lesson result', e);
    return getProgress();
  }
}

export function resetProgress() {
  try {
    localStorage.removeItem(STORAGE_PROGRESS_KEY);
    return DEFAULT_PROGRESS;
  } catch (e) {
    return DEFAULT_PROGRESS;
  }
}

export function getFingerMistakeAnalysis(keyMistakes = {}) {
  const fingerStats = {};

  Object.keys(FINGER_DEFINITIONS).forEach(fId => {
    fingerStats[fId] = {
      ...FINGER_DEFINITIONS[fId],
      mistakes: 0,
      mistakeKeys: {}
    };
  });

  Object.entries(keyMistakes).forEach(([char, count]) => {
    const fingerId = KEY_TO_FINGER[char] || KEY_TO_FINGER[char.toLowerCase()] || 'thumbs';
    if (fingerStats[fingerId]) {
      fingerStats[fingerId].mistakes += count;
      fingerStats[fingerId].mistakeKeys[char] = (fingerStats[fingerId].mistakeKeys[char] || 0) + count;
    }
  });

  return fingerStats;
}
