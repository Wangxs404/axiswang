export interface DiaryEntry {
  id: string;
  content: string;
  emoji: string;
  title: string;
  date: string;
  createdAt: number;
  updatedAt: number;
}

const DIARY_STORAGE_KEY = "axiswang_diary_entries";
const DIARY_AUTH_KEY = "axiswang_diary_auth";
const DIARY_PASSWORD = "2231740";

// ── Auth ──────────────────────────────────────────────

export function verifyPassword(password: string): boolean {
  return password === DIARY_PASSWORD;
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(DIARY_AUTH_KEY) === "true";
}

export function setAuthenticated(): void {
  sessionStorage.setItem(DIARY_AUTH_KEY, "true");
}

export function clearAuth(): void {
  sessionStorage.removeItem(DIARY_AUTH_KEY);
}

// ── CRUD ──────────────────────────────────────────────

export function getAllDiaries(): DiaryEntry[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(DIARY_STORAGE_KEY);
  if (!data) return [];
  try {
    const entries = JSON.parse(data) as DiaryEntry[];
    return entries.sort((a, b) => b.createdAt - a.createdAt);
  } catch {
    return [];
  }
}

export function getDiaryById(id: string): DiaryEntry | null {
  return getAllDiaries().find((d) => d.id === id) || null;
}

export function saveDiary(content: string, emoji: string): DiaryEntry {
  const diaries = getAllDiaries();
  const now = Date.now();
  const entry: DiaryEntry = {
    id: generateId(),
    content,
    emoji,
    title: generateTitle(content),
    date: generateDate(content),
    createdAt: now,
    updatedAt: now,
  };
  diaries.unshift(entry);
  localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(diaries));
  return entry;
}

export function updateDiary(
  id: string,
  content: string,
  emoji: string,
): DiaryEntry | null {
  const diaries = getAllDiaries();
  const index = diaries.findIndex((d) => d.id === id);
  if (index === -1) return null;

  diaries[index] = {
    ...diaries[index],
    content,
    emoji,
    title: generateTitle(content),
    updatedAt: Date.now(),
  };
  localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(diaries));
  return diaries[index];
}

export function deleteDiary(id: string): boolean {
  const diaries = getAllDiaries();
  const filtered = diaries.filter((d) => d.id !== id);
  if (filtered.length === diaries.length) return false;
  localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

// ── AI: Title Generation ──────────────────────────────

export function generateTitle(content: string): string {
  // Strip common emoji characters for analysis
  const text = content
    .trim()
    .replace(
      /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27BF]/g,
      "",
    )
    .trim();

  if (!text) return "心情记录";

  // Question as title
  const qMatch = text.match(/^(.{2,25}[？?])/);
  if (qMatch) return qMatch[1];

  // First sentence
  const sMatch = text.match(/^(.+?)[。！？!?.\n]/);
  if (sMatch && sMatch[1].length >= 2 && sMatch[1].length <= 25) {
    return sMatch[1].trim();
  }

  // First line
  const firstLine = text.split("\n")[0].trim();
  if (firstLine.length <= 25) return firstLine;

  return firstLine.substring(0, 22) + "…";
}

// ── AI: Date Generation ───────────────────────────────

export function generateDate(content: string): string {
  const now = new Date();

  // Detect relative date references
  if (/昨[天日]/.test(content)) {
    now.setDate(now.getDate() - 1);
  } else if (/前天/.test(content)) {
    now.setDate(now.getDate() - 2);
  } else if (/大前天/.test(content)) {
    now.setDate(now.getDate() - 3);
  }

  // Detect absolute date patterns like "X月X日"
  const dateMatch = content.match(/(\d{1,2})月(\d{1,2})[日号]/);
  if (dateMatch) {
    const m = parseInt(dateMatch[1]) - 1;
    const d = parseInt(dateMatch[2]);
    if (m >= 0 && m < 12 && d >= 1 && d <= 31) {
      now.setMonth(m);
      now.setDate(d);
    }
  }

  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
  const w = weekdays[now.getDay()];
  const h = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");

  return `${y}-${m}-${d} 星期${w} ${h}:${min}`;
}

// ── AI: Emoji Suggestion ──────────────────────────────

export function suggestEmoji(content: string): string {
  const t = content.toLowerCase();
  if (/开心|高兴|快乐|哈哈|嘻嘻|棒|太好|nice|happy|great|awesome/.test(t))
    return "😊";
  if (/爱|喜欢|love|❤|心动|甜蜜/.test(t)) return "🥰";
  if (/生气|愤怒|烦|angry|怒|讨厌/.test(t)) return "😡";
  if (/难过|伤心|sad|哭|cry|泪|失落/.test(t)) return "😢";
  if (/累|疲|tired|困|sleepy|休息/.test(t)) return "😴";
  if (/思考|想|think|wonder|纠结|犹豫/.test(t)) return "🤔";
  if (/庆祝|celebrate|恭喜|成功|achieve|完成/.test(t)) return "🎉";
  if (/工作|work|加班|忙|项目|代码|code/.test(t)) return "💻";
  if (/学习|study|读书|看书|知识/.test(t)) return "📚";
  if (/旅行|travel|出行|出去玩|风景/.test(t)) return "✈️";
  if (/吃|美食|food|eat|饭|餐/.test(t)) return "🍽️";
  if (/运动|锻炼|跑步|gym|exercise|健身/.test(t)) return "🏃";
  if (/音乐|music|听歌|唱歌/.test(t)) return "🎵";
  if (/天气|晴|雨|阴|雪/.test(t)) return "🌤️";
  return "📝";
}

// ── Helpers ───────────────────────────────────────────

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}
