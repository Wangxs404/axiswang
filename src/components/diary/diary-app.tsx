"use client";

import { useState, useEffect, useCallback } from "react";
import {
  DiaryEntry,
  verifyPassword,
  isAuthenticated,
  setAuthenticated,
  clearAuth,
  getAllDiaries,
  saveDiary,
  updateDiary,
  deleteDiary,
  suggestEmoji,
} from "@/lib/diary";

// ── Emoji Data ────────────────────────────────────────

const EMOJI_GROUPS = [
  {
    name: "心情",
    emojis: [
      "😊", "😢", "😡", "🥰", "😴", "🤔", "😎", "🎉",
      "😩", "😤", "🥺", "😌", "🤩", "😏", "😭", "🥳", "😇", "🫠",
    ],
  },
  {
    name: "天气",
    emojis: ["☀️", "🌧️", "⛈️", "🌈", "❄️", "🌤️", "🌙", "⭐"],
  },
  {
    name: "活动",
    emojis: [
      "📚", "💻", "🎮", "🏃", "🎵", "🍽️", "✈️", "🛏️",
      "🎬", "📷", "🏠", "💪",
    ],
  },
  {
    name: "自然",
    emojis: ["🌸", "🌺", "🍃", "🌊", "🌻", "🍂", "🌿", "🌲"],
  },
];

type View = "auth" | "list" | "editor" | "detail";

// ── Auth View ─────────────────────────────────────────

function AuthView({ onAuth }: { onAuth: (pw: string) => boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAuth(password)) {
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-sm space-y-6 ${shake ? "animate-shake" : ""}`}
      >
        <div className="text-center space-y-2">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold">私密日记</h1>
          <p className="text-sm text-zinc-400">请输入密码以访问日记</p>
        </div>

        <div className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="输入密码..."
            autoFocus
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-center text-lg tracking-widest outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 placeholder:text-zinc-600 placeholder:tracking-normal"
          />
          {error && (
            <p className="text-center text-sm text-red-400">密码错误，请重试</p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-amber-600 px-4 py-3 font-medium text-white transition-colors hover:bg-amber-500 active:bg-amber-700"
          >
            进入日记
          </button>
        </div>
      </form>
    </div>
  );
}

// ── List View ─────────────────────────────────────────

function ListView({
  entries,
  onCreate,
  onView,
  onLock,
}: {
  entries: DiaryEntry[];
  onCreate: () => void;
  onView: (id: string) => void;
  onLock: () => void;
}) {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">我的日记</h1>
          <p className="text-zinc-400 text-sm mt-1">
            记录生活的点点滴滴
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onLock}
            className="rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            title="锁定日记"
          >
            🔒
          </button>
          <button
            onClick={onCreate}
            className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-500"
          >
            + 写日记
          </button>
        </div>
      </div>

      {/* Entry List */}
      {entries.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📖</div>
          <p className="text-zinc-400 text-lg">还没有日记</p>
          <p className="text-zinc-500 text-sm mt-1">
            点击「写日记」开始记录吧
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <button
              key={entry.id}
              onClick={() => onView(entry.id)}
              className="w-full text-left rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all hover:border-zinc-600 hover:bg-zinc-900/70"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{entry.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-lg font-semibold truncate">
                      {entry.title}
                    </h2>
                  </div>
                  <p className="text-xs text-zinc-500 mb-2">{entry.date}</p>
                  <p className="text-sm text-zinc-400 line-clamp-2">
                    {entry.content}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Editor View ───────────────────────────────────────

function EditorView({
  entry,
  onSave,
  onCancel,
}: {
  entry: DiaryEntry | null;
  onSave: (content: string, emoji: string, id?: string) => void;
  onCancel: () => void;
}) {
  const [content, setContent] = useState(entry?.content ?? "");
  const [emoji, setEmoji] = useState(entry?.emoji ?? "📝");
  const [showPicker, setShowPicker] = useState(false);

  const handleSave = () => {
    if (!content.trim()) return;
    onSave(content, emoji, entry?.id);
  };

  const handleContentChange = (val: string) => {
    setContent(val);
    // Auto-suggest emoji based on content
    if (!entry && val.length > 10) {
      const suggested = suggestEmoji(val);
      if (suggested !== "📝") setEmoji(suggested);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onCancel}
          className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          ← 返回
        </button>
        <h2 className="text-lg font-semibold">
          {entry ? "编辑日记" : "写日记"}
        </h2>
        <button
          onClick={handleSave}
          disabled={!content.trim()}
          className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          保存
        </button>
      </div>

      {/* Emoji Picker */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="text-4xl transition-transform hover:scale-110"
            title="选择表情"
          >
            {emoji}
          </button>
          <span className="text-sm text-zinc-500">
            {showPicker ? "选择一个表情" : "点击切换表情"}
          </span>
        </div>

        {showPicker && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 space-y-4">
            {EMOJI_GROUPS.map((group) => (
              <div key={group.name}>
                <p className="text-xs text-zinc-500 mb-2">{group.name}</p>
                <div className="flex flex-wrap gap-2">
                  {group.emojis.map((e) => (
                    <button
                      key={e}
                      onClick={() => {
                        setEmoji(e);
                        setShowPicker(false);
                      }}
                      className={`text-2xl p-1.5 rounded-lg transition-all hover:bg-zinc-700/50 hover:scale-110 ${
                        emoji === e
                          ? "bg-amber-600/20 ring-1 ring-amber-500/40"
                          : ""
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content Editor */}
      <textarea
        value={content}
        onChange={(e) => handleContentChange(e.target.value)}
        placeholder="今天想写点什么..."
        autoFocus
        className="w-full min-h-[400px] resize-y rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 text-base leading-relaxed outline-none transition-colors focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 placeholder:text-zinc-600"
      />

      <p className="text-xs text-zinc-600 mt-3 text-right">
        {content.length} 字 · 标题和日期将由 AI 自动生成
      </p>
    </div>
  );
}

// ── Detail View ───────────────────────────────────────

function DetailView({
  entry,
  onBack,
  onEdit,
  onDelete,
}: {
  entry: DiaryEntry;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-10">
        <button
          onClick={onBack}
          className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          ← 返回列表
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onEdit}
            className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
          >
            编辑
          </button>
          {showConfirm ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  onDelete();
                  setShowConfirm(false);
                }}
                className="rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white transition-colors hover:bg-red-500"
              >
                确认删除
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-zinc-500"
              >
                取消
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="rounded-lg border border-red-900/50 px-3 py-1.5 text-sm text-red-400 transition-colors hover:border-red-700 hover:text-red-300"
            >
              删除
            </button>
          )}
        </div>
      </div>

      {/* Entry Content */}
      <article>
        <div className="text-center mb-10">
          <span className="text-5xl block mb-4">{entry.emoji}</span>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            {entry.title}
          </h1>
          <p className="text-sm text-zinc-500">{entry.date}</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
          <div className="whitespace-pre-wrap text-base leading-relaxed text-zinc-300">
            {entry.content}
          </div>
        </div>

        <p className="text-xs text-zinc-600 mt-4 text-center">
          创建于{" "}
          {new Date(entry.createdAt).toLocaleString("zh-CN")}
          {entry.updatedAt !== entry.createdAt && (
            <>
              {" · "}
              更新于{" "}
              {new Date(entry.updatedAt).toLocaleString("zh-CN")}
            </>
          )}
        </p>
      </article>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────

export default function DiaryApp() {
  const [view, setView] = useState<View>("auth");
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isAuthenticated()) {
      setView("list");
      setEntries(getAllDiaries());
    }
  }, []);

  const refreshEntries = useCallback(() => {
    setEntries(getAllDiaries());
  }, []);

  const handleAuth = useCallback(
    (password: string) => {
      if (verifyPassword(password)) {
        setAuthenticated();
        setView("list");
        refreshEntries();
        return true;
      }
      return false;
    },
    [refreshEntries],
  );

  const handleLock = useCallback(() => {
    clearAuth();
    setView("auth");
    setEntries([]);
    setSelectedId(null);
  }, []);

  const handleCreate = useCallback(() => {
    setSelectedId(null);
    setIsEditing(false);
    setView("editor");
  }, []);

  const handleView = useCallback((id: string) => {
    setSelectedId(id);
    setView("detail");
  }, []);

  const handleEdit = useCallback((id: string) => {
    setSelectedId(id);
    setIsEditing(true);
    setView("editor");
  }, []);

  const handleSave = useCallback(
    (content: string, emoji: string, existingId?: string) => {
      if (existingId) {
        updateDiary(existingId, content, emoji);
      } else {
        saveDiary(content, emoji);
      }
      refreshEntries();
      setView("list");
      setSelectedId(null);
    },
    [refreshEntries],
  );

  const handleDelete = useCallback(
    (id: string) => {
      deleteDiary(id);
      refreshEntries();
      setView("list");
      setSelectedId(null);
    },
    [refreshEntries],
  );

  const handleBack = useCallback(() => {
    setView("list");
    setSelectedId(null);
    setIsEditing(false);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-pulse text-zinc-500">Loading...</div>
      </div>
    );
  }

  const selectedEntry = selectedId
    ? entries.find((e) => e.id === selectedId) ?? null
    : null;

  return (
    <div className="min-h-[80vh]">
      {view === "auth" && <AuthView onAuth={handleAuth} />}
      {view === "list" && (
        <ListView
          entries={entries}
          onCreate={handleCreate}
          onView={handleView}
          onLock={handleLock}
        />
      )}
      {view === "editor" && (
        <EditorView
          entry={isEditing ? selectedEntry : null}
          onSave={handleSave}
          onCancel={handleBack}
        />
      )}
      {view === "detail" && selectedEntry && (
        <DetailView
          entry={selectedEntry}
          onBack={handleBack}
          onEdit={() => handleEdit(selectedEntry.id)}
          onDelete={() => handleDelete(selectedEntry.id)}
        />
      )}
    </div>
  );
}
