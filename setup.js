#!/usr/bin/env node
/*
 * Questify.xyz project generator
 * Usage:  node setup.js        (then)  npm install  &&  npm run dev
 * Existing files are kept; run  node setup.js --force  to overwrite them.
 */

const files = {};

/* ------------------------------------------------------------------ */
/* Root files                                                          */
/* ------------------------------------------------------------------ */

files['package.json'] = String.raw`{
  "name": "questify-xyz",
  "private": true,
  "version": "1.0.0",
  "description": "Questify.xyz - turn your study notes into boss fights.",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.8"
  }
}
`;

files['index.html'] = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#FAF9F6" />
    <meta name="description" content="Questify.xyz turns your study notes into boss fights. Paste notes, answer questions, defeat the boss." />
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%9A%94%EF%B8%8F%3C/text%3E%3C/svg%3E" />
    <title>Questify.xyz - Turn your notes into boss fights</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

files['vite.config.js'] = String.raw`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
`;

files['tailwind.config.js'] = String.raw`/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF9F6',
        sage: {
          50: '#F4F7F2',
          100: '#E6EDE1',
          200: '#CDDBC4',
          300: '#AFC4A2',
          400: '#8DAA7D',
          500: '#6F8F5E',
          600: '#587449',
          700: '#475D3B',
          800: '#394A30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 10px 28px -14px rgba(15, 23, 42, 0.12)',
        lift: '0 2px 4px rgba(15, 23, 42, 0.05), 0 18px 40px -16px rgba(79, 70, 229, 0.28)',
      },
      keyframes: {
        hit: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '20%': { transform: 'translateX(-9px) rotate(-4deg)' },
          '40%': { transform: 'translateX(9px) rotate(4deg)' },
          '60%': { transform: 'translateX(-5px) rotate(-2deg)' },
          '80%': { transform: 'translateX(5px) rotate(2deg)' },
        },
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.9)' },
          '20%': { opacity: '1', transform: 'translateY(0) scale(1.1)' },
          '100%': { opacity: '0', transform: 'translateY(-38px) scale(1)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        lunge: {
          '0%, 100%': { transform: 'translateX(0) scale(1)' },
          '40%': { transform: 'translateX(-20px) scale(1.07)' },
        },
      },
      animation: {
        hit: 'hit 0.5s ease-in-out',
        'float-up': 'floatUp 1.3s ease-out forwards',
        'pop-in': 'popIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.25s ease-out',
        bob: 'bob 3.2s ease-in-out infinite',
        lunge: 'lunge 0.55s ease-in-out',
      },
    },
  },
  plugins: [],
};
`;

files['postcss.config.js'] = String.raw`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;

/* ------------------------------------------------------------------ */
/* src/index.css & src/main.jsx                                        */
/* ------------------------------------------------------------------ */

files['src/index.css'] = String.raw`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    @apply bg-paper font-sans text-slate-800 antialiased;
    background-image:
      radial-gradient(60rem 30rem at 85% -10%, rgba(99, 102, 241, 0.07), transparent 60%),
      radial-gradient(50rem 28rem at -10% 0%, rgba(111, 143, 94, 0.09), transparent 60%);
    background-attachment: fixed;
    min-height: 100vh;
  }

  h1,
  h2,
  h3 {
    @apply font-display tracking-tight;
  }

  ::selection {
    background: rgba(99, 102, 241, 0.2);
  }

  button:focus-visible,
  textarea:focus-visible,
  input:focus-visible {
    @apply outline-none ring-2 ring-indigo-400 ring-offset-2 ring-offset-paper;
  }
}

@layer utilities {
  .scrollbar-soft::-webkit-scrollbar {
    width: 10px;
  }
  .scrollbar-soft::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 999px;
    border: 3px solid transparent;
    background-clip: content-box;
  }
}
`;

files['src/main.jsx'] = String.raw`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;

/* ------------------------------------------------------------------ */
/* src/services/anakinAI.js                                            */
/* ------------------------------------------------------------------ */

files['src/services/anakinAI.js'] = String.raw`/*
 * anakinAI - mock study-notes parser.
 *
 * generateQuest(notes) turns pasted notes into a "boss fight":
 *   {
 *     title, bossName, bossTagline, bossEmoji,
 *     questions: [{ id, prompt, options: [4 strings], answerIndex, explanation, kind }]
 *   }
 *
 * Everything runs locally in the browser with simple language heuristics
 * (definition detection + fill-in-the-blank). To plug in a real AI backend,
 * replace the body of generateQuest with an API call that resolves to the
 * same shape, and the rest of the app keeps working unchanged.
 */

export const SAMPLE_NOTES = [
  'Photosynthesis is the process plants use to convert light energy into chemical energy stored in glucose.',
  'Chloroplasts are the organelles where photosynthesis takes place inside plant cells.',
  'Chlorophyll is the green pigment that absorbs sunlight, mainly in the red and blue wavelengths.',
  'The light-dependent reactions occur in the thylakoid membranes and produce ATP and NADPH.',
  'The Calvin cycle uses ATP and NADPH to fix carbon dioxide into sugar molecules in the stroma.',
  'Stomata are tiny pores on leaves that let carbon dioxide enter and oxygen escape.',
  'Oxygen is released as a byproduct when water molecules are split during the light-dependent reactions.',
  'Rising temperature and limited water can slow the rate of photosynthesis significantly.',
].join('\n');

const STOPWORDS = new Set(
  (
    'a about above after again all also am an and any are as at be because been before being below between both but by can ' +
    'could did do does doing down during each few for from further had has have having he her here hers him his how i if in ' +
    'into is it its just may me might more most must my no nor not of off on once only or other our out over own same she ' +
    'should so some such than that the their theirs them then there these they this those through to too under until up us ' +
    'very was we were what when where which while who whom why will with would you your yours often usually called known ' +
    'mainly inside takes place enter escape released produce uses use used occur split tiny'
  ).split(' ')
);

const FALLBACK_TERMS = [
  'Entropy',
  'Equilibrium',
  'Synthesis',
  'Momentum',
  'Hypothesis',
  'Catalyst',
  'Variable',
  'Spectrum',
  'Gradient',
  'Threshold',
];

const BOSS_FORMS = [
  { suffix: 'Colossus', emoji: '🗿' },
  { suffix: 'Wraith', emoji: '👻' },
  { suffix: 'Leviathan', emoji: '🐙' },
  { suffix: 'Golem', emoji: '🪨' },
  { suffix: 'Sphinx', emoji: '🦁' },
  { suffix: 'Drake', emoji: '🐉' },
];

const DEF_RE = /^([A-Z][^,;:]{1,50}?)\s+(is|are|refers to|means|describes)\s+(.{12,})$/;

const escapeRegExp = (s) => s.replace(/[.*+?^$|()\[\]{}\\]/g, '\\$&');
const titleCase = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s);
const wordsOf = (s) => s.match(/[A-Za-z][A-Za-z'-]*[A-Za-z]|[A-Za-z]/g) || [];
const isKeyword = (w) => w.length >= 5 && !STOPWORDS.has(w.toLowerCase());

const hashString = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
};

const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
};

const matchCase = (term, ref) => {
  if (term.length > 1 && term === term.toUpperCase()) return term;
  return /^[A-Z]/.test(ref)
    ? term.charAt(0).toUpperCase() + term.slice(1)
    : term.charAt(0).toLowerCase() + term.slice(1);
};

function splitSentences(text) {
  const seen = new Set();
  return text
    .replace(/\r/g, '')
    .split(/\n+|(?<=[.!?])\s+/)
    .map((s) => s.trim().replace(/^([-*•>]|\d+[.)])\s*/, '').trim())
    .filter((s) => {
      const count = s.split(/\s+/).length;
      if (count < 5 || count > 45) return false;
      const key = s.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function pickAnswer(sentence) {
  const tokens = wordsOf(sentence);
  const candidates = tokens.map((w, i) => ({ w, i })).filter(({ w }) => isKeyword(w));
  if (!candidates.length) return null;
  const proper = candidates.filter(({ w, i }) => i > 0 && /^[A-Z]/.test(w));
  if (proper.length) return proper[0].w;
  return candidates.slice().sort((a, b) => b.w.length - a.w.length)[0].w;
}

function buildPool(sentences, extras) {
  const seen = new Map();
  const add = (t) => {
    const key = t.toLowerCase();
    if (!seen.has(key)) seen.set(key, t);
  };
  extras.forEach(add);
  sentences.forEach((s) => wordsOf(s).filter(isKeyword).forEach(add));
  return Array.from(seen.values());
}

function makeOptions(answer, pool, prompt) {
  const answerKey = answer.toLowerCase();
  const promptKey = prompt.toLowerCase();
  const picked = [];
  const used = new Set([answerKey]);

  shuffle(pool).forEach((term) => {
    const key = term.toLowerCase();
    if (picked.length >= 3 || used.has(key) || promptKey.indexOf(key) !== -1) return;
    used.add(key);
    picked.push(matchCase(term, answer));
  });

  shuffle(FALLBACK_TERMS).forEach((term) => {
    const key = term.toLowerCase();
    if (picked.length >= 3 || used.has(key)) return;
    used.add(key);
    picked.push(matchCase(term, answer));
  });

  const options = shuffle([answer].concat(picked));
  return { options, answerIndex: options.indexOf(answer) };
}

function buildQuestion(sentence, idx, pool) {
  const explanation = 'From your notes: “' + sentence + '”';
  const def = sentence.match(DEF_RE);

  if (def && def[1].split(/\s+/).length <= 4) {
    const subject = def[1].trim();
    const rest = def[3].replace(/[.!?]+$/, '').trim();
    const prompt = 'Which term from your notes matches this description? “' + rest + '”';
    const built = makeOptions(subject, pool, prompt);
    return {
      id: 'q' + (idx + 1),
      kind: 'definition',
      prompt,
      options: built.options,
      answerIndex: built.answerIndex,
      explanation,
    };
  }

  const answer = pickAnswer(sentence);
  if (!answer) return null;
  const blankRe = new RegExp('\\b' + escapeRegExp(answer) + '\\b', 'i');
  const blanked = sentence.replace(blankRe, '_____');
  const prompt = 'Fill in the blank: ' + blanked;
  const built = makeOptions(answer, pool, blanked);
  return {
    id: 'q' + (idx + 1),
    kind: 'cloze',
    prompt,
    options: built.options,
    answerIndex: built.answerIndex,
    explanation,
  };
}

function evenlySample(list, max) {
  if (list.length <= max) return list;
  const step = list.length / max;
  const out = [];
  for (let i = 0; i < max; i += 1) {
    out.push(list[Math.floor(i * step)]);
  }
  return out;
}

function detectTopics(text) {
  const counts = new Map();
  wordsOf(text)
    .filter(isKeyword)
    .forEach((w) => {
      const key = w.toLowerCase();
      counts.set(key, (counts.get(key) || 0) + 1);
    });
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || b[0].length - a[0].length)
    .map((entry) => entry[0]);
}

export async function generateQuest(notes) {
  const text = (notes || '').trim();

  // Simulated network + "thinking" time so the UI can show its loading state.
  await new Promise((resolve) => setTimeout(resolve, 1400));

  const sentences = splitSentences(text);
  const pool = buildPool(sentences, []);
  const questions = evenlySample(sentences, 8)
    .map((s, i) => buildQuestion(s, i, pool))
    .filter(Boolean)
    .map((q, i) => Object.assign({}, q, { id: 'q' + (i + 1) }));

  if (questions.length < 3) {
    throw new Error(
      'We need a little more to work with. Paste at least three full sentences of notes (definitions and key facts work best).'
    );
  }

  const topics = detectTopics(text);
  const top = topics[0] || 'knowledge';
  const second = topics[1];
  const form = BOSS_FORMS[hashString(top) % BOSS_FORMS.length];

  return {
    title: titleCase(top) + ' Showdown',
    bossName: 'The ' + titleCase(top) + ' ' + form.suffix,
    bossTagline: 'Guardian of ' + titleCase(top) + (second ? ' & ' + titleCase(second) : ''),
    bossEmoji: form.emoji,
    questions,
  };
}
`;

/* ------------------------------------------------------------------ */
/* src/components/Dashboard.jsx                                        */
/* ------------------------------------------------------------------ */

files['src/components/Capybara.jsx'] = String.raw`/*
 * Capybara - the Questify study companion.
 * Pure inline SVG, no assets. Moods: 'calm' | 'happy' | 'surprised'.
 */

const cx = (...parts) => parts.filter(Boolean).join(' ');

const FUR = '#C99A6B';
const FUR_DARK = '#B98A5E';
const FUR_SHADOW = '#8C6240';
const SNOUT = '#E3C29B';
const INK = '#3B2A1E';
const NOSE = '#5B3F29';

export default function Capybara({
  mood = 'calm',
  size = 120,
  glasses = true,
  book = true,
  bob = false,
  className = '',
}) {
  const happy = mood === 'happy';
  const surprised = mood === 'surprised';

  return (
    <span className={cx('inline-block select-none', bob && 'animate-bob', className)}>
      <svg
        viewBox="0 0 120 124"
        width={size}
        height={Math.round((size * 124) / 120)}
        role="img"
        aria-label={'Capybara study companion looking ' + mood}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* body */}
        <ellipse cx="60" cy="100" rx="35" ry="22" fill={FUR_DARK} />

        {/* ears */}
        <circle cx="33" cy="36" r="9" fill={FUR_DARK} />
        <circle cx="33" cy="36" r="4.5" fill={FUR_SHADOW} />
        <circle cx="87" cy="36" r="9" fill={FUR_DARK} />
        <circle cx="87" cy="36" r="4.5" fill={FUR_SHADOW} />

        {/* head */}
        <rect x="22" y="28" width="76" height="60" rx="30" fill={FUR} />

        {/* snout */}
        <ellipse cx="60" cy="70" rx="23" ry="16" fill={SNOUT} />
        <ellipse cx="52" cy="63" rx="3" ry="2.2" fill={NOSE} />
        <ellipse cx="68" cy="63" rx="3" ry="2.2" fill={NOSE} />

        {/* mouth */}
        {happy && (
          <g>
            <path d="M51 73 Q60 87 69 73 Z" fill="#7A3E3E" stroke={NOSE} strokeWidth="1.5" strokeLinejoin="round" />
            <ellipse cx="60" cy="80" rx="4" ry="2.4" fill="#F29A9A" />
          </g>
        )}
        {surprised && <ellipse cx="60" cy="78" rx="4" ry="5" fill="#7A3E3E" />}
        {!happy && !surprised && (
          <path d="M53 75 Q60 80 67 75" fill="none" stroke={NOSE} strokeWidth="2" strokeLinecap="round" />
        )}

        {/* cheeks */}
        <ellipse cx="33" cy="68" rx="5" ry="3.2" fill="#F29A9A" opacity="0.55" />
        <ellipse cx="87" cy="68" rx="5" ry="3.2" fill="#F29A9A" opacity="0.55" />

        {/* eyes */}
        {happy ? (
          <g fill="none" stroke={INK} strokeWidth="2.8" strokeLinecap="round">
            <path d="M39 54 Q44 46 49 54" />
            <path d="M71 54 Q76 46 81 54" />
          </g>
        ) : (
          <g>
            <circle cx="44" cy="52" r={surprised ? 4.8 : 3.2} fill={INK} />
            <circle cx="76" cy="52" r={surprised ? 4.8 : 3.2} fill={INK} />
            <circle cx={surprised ? 45.6 : 45} cy={surprised ? 50.2 : 50.8} r={surprised ? 1.7 : 1} fill="#FFFFFF" />
            <circle cx={surprised ? 77.6 : 77} cy={surprised ? 50.2 : 50.8} r={surprised ? 1.7 : 1} fill="#FFFFFF" />
          </g>
        )}

        {/* raised brows when surprised */}
        {surprised && (
          <g fill="none" stroke={FUR_SHADOW} strokeWidth="2.4" strokeLinecap="round">
            <path d="M37 37 Q44 32 51 37" />
            <path d="M69 37 Q76 32 83 37" />
          </g>
        )}

        {/* study glasses */}
        {glasses && (
          <g fill="rgba(255,255,255,0.28)" stroke="#4F46E5" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="44" cy="52" r="10.5" />
            <circle cx="76" cy="52" r="10.5" />
            <path d="M54.5 51 Q60 47 65.5 51" fill="none" />
            <path d="M33.5 51 L26 48" fill="none" />
            <path d="M86.5 51 L94 48" fill="none" />
          </g>
        )}

        {/* book + paws */}
        {book ? (
          <g>
            <rect x="40" y="94" width="40" height="22" rx="4" fill="#6F8F5E" />
            <path d="M60 94 V116" stroke="#587449" strokeWidth="2" />
            <rect x="44" y="98" width="13" height="3" rx="1.5" fill="#E6EDE1" />
            <rect x="63" y="98" width="13" height="3" rx="1.5" fill="#E6EDE1" />
            <rect x="44" y="104" width="9" height="3" rx="1.5" fill="#CDDBC4" />
            <rect x="63" y="104" width="9" height="3" rx="1.5" fill="#CDDBC4" />
            <ellipse cx="40" cy="101" rx="7" ry="6" fill={FUR} />
            <ellipse cx="80" cy="101" rx="7" ry="6" fill={FUR} />
          </g>
        ) : (
          <g>
            <ellipse cx="45" cy="108" rx="8" ry="6" fill={FUR} />
            <ellipse cx="75" cy="108" rx="8" ry="6" fill={FUR} />
          </g>
        )}

        {/* mood extras */}
        {happy && (
          <g>
            <path d="M102 20 L104 26 L110 28 L104 30 L102 36 L100 30 L94 28 L100 26 Z" fill="#A5B4FC" />
            <path d="M14 30 L15.5 34 L19.5 35.5 L15.5 37 L14 41 L12.5 37 L8.5 35.5 L12.5 34 Z" fill="#AFC4A2" />
          </g>
        )}
        {surprised && <path d="M102 40 Q96 49 102 53 Q108 49 102 40 Z" fill="#93C5FD" />}
      </svg>
    </span>
  );
}
`;

/* ------------------------------------------------------------------ */
/* src/components/Dashboard.jsx                                        */
/* ------------------------------------------------------------------ */

files['src/components/Dashboard.jsx'] = String.raw`import { useRef, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  Eraser,
  Loader2,
  Share2,
  Swords,
  Upload,
  Wand2,
} from 'lucide-react';
import { SAMPLE_NOTES } from '../services/anakinAI.js';
import Capybara from './Capybara.jsx';

const cx = (...parts) => parts.filter(Boolean).join(' ');
const MIN_WORDS = 20;
const countWords = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0);

const STEPS = [
  {
    icon: BookOpen,
    title: 'Paste your notes',
    body: 'Definitions, key facts, lecture bullet points. Anything you want to remember.',
  },
  {
    icon: Swords,
    title: 'Fight the boss',
    body: 'Every correct answer lands a hit. Keep your hearts and chain a streak for bonus damage.',
  },
  {
    icon: Share2,
    title: 'Share the room',
    body: 'Send a link so friends and classmates can take on the same boss.',
  },
];

export default function Dashboard({ onLaunch }) {
  const [notes, setNotes] = useState('');
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef(null);

  const words = countWords(notes);
  const ready = words >= MIN_WORDS && !busy;

  const readFile = async (file) => {
    if (!file) return;
    if (file.size > 1000000) {
      setError('That file is a little large. Try one under 1 MB.');
      return;
    }
    try {
      const text = await file.text();
      setNotes((prev) => (prev.trim() ? prev.trim() + '\n\n' + text : text));
      setError('');
    } catch (err) {
      setError("We couldn't read that file. Try pasting the text instead.");
    }
  };

  const handleDrop = (event) => {
    setDragging(false);
    const file = event.dataTransfer.files && event.dataTransfer.files[0];
    if (file) {
      event.preventDefault();
      readFile(file);
    }
  };

  const launch = async () => {
    if (!ready) return;
    setBusy(true);
    setError('');
    try {
      await onLaunch(notes);
    } catch (err) {
      setError(err && err.message ? err.message : 'Something went wrong. Please try again.');
      setBusy(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:gap-10 sm:text-left">
        <div className="flex shrink-0 flex-col items-center gap-2">
          <Capybara mood={error ? 'surprised' : ready ? 'happy' : 'calm'} size={136} bob />
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs font-medium text-indigo-600 shadow-sm">
            <BookOpen className="h-3.5 w-3.5" />
            Your Study Companion
          </span>
        </div>
        <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700">
          <Wand2 className="h-3.5 w-3.5" />
          Study sessions that fight back
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          Turn your notes into a <span className="text-indigo-600">boss fight</span>.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mx-0">
          Paste what you are studying. Questify reads it, writes the questions, and summons a boss
          that only your knowledge can defeat.
        </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-3xl">
        <div
          onDragOver={(e) => {
            if (e.dataTransfer.types && Array.from(e.dataTransfer.types).indexOf('Files') !== -1) {
              e.preventDefault();
              setDragging(true);
            }
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={cx(
            'rounded-3xl border bg-white p-4 shadow-card transition sm:p-5',
            dragging ? 'border-indigo-400 ring-4 ring-indigo-100' : 'border-slate-200/80'
          )}
        >
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <label htmlFor="notes" className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <BookOpen className="h-4 w-4 text-sage-600" />
              Your study notes
            </label>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setNotes(SAMPLE_NOTES)}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-indigo-600 transition hover:bg-indigo-50"
              >
                Try sample notes
              </button>
              <button
                type="button"
                onClick={() => fileRef.current && fileRef.current.click()}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
              >
                <Upload className="h-3.5 w-3.5" />
                Upload .txt / .md
              </button>
              <button
                type="button"
                onClick={() => {
                  setNotes('');
                  setError('');
                }}
                disabled={!notes}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
              >
                <Eraser className="h-3.5 w-3.5" />
                Clear
              </button>
              <input
                ref={fileRef}
                type="file"
                accept=".txt,.md,.markdown,text/plain,text/markdown"
                className="hidden"
                onChange={(e) => {
                  readFile(e.target.files && e.target.files[0]);
                  e.target.value = '';
                }}
              />
            </div>
          </div>

          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={11}
            placeholder={'Paste your notes here, or drop a .txt / .md file.\n\nTip: full sentences and definitions like "Mitosis is the process by which a cell divides..." make the best questions.'}
            className="scrollbar-soft block w-full resize-y rounded-2xl border border-slate-200 bg-paper/60 px-4 py-3.5 text-[15px] leading-relaxed text-slate-800 placeholder:text-slate-400 focus:border-indigo-300"
          />

          {error && (
            <div
              role="alert"
              className="mt-3 flex items-start gap-2 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="mt-4 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-500">
              {words === 0
                ? 'Nothing yet.'
                : words + (words === 1 ? ' word' : ' words')}
              {words > 0 && words < MIN_WORDS && (
                <span className="text-slate-400"> · add {MIN_WORDS - words} more to launch</span>
              )}
            </p>
            <button
              type="button"
              onClick={launch}
              disabled={!ready}
              className={cx(
                'inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition',
                ready
                  ? 'bg-indigo-600 text-white shadow-lift hover:bg-indigo-500 active:scale-[0.98]'
                  : 'cursor-not-allowed bg-slate-100 text-slate-400'
              )}
            >
              {busy ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Reading your notes...
                </>
              ) : (
                <>
                  <Swords className="h-4 w-4" />
                  Summon the boss
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="rounded-2xl border border-slate-200/70 bg-white/70 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">Step {i + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
`;

/* ------------------------------------------------------------------ */
/* src/components/GameArena.jsx                                        */
/* ------------------------------------------------------------------ */

files['src/components/GameArena.jsx'] = String.raw`import { useCallback, useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Flame,
  Heart,
  RotateCcw,
  Share2,
  Swords,
  Trophy,
  X,
} from 'lucide-react';
import Capybara from './Capybara.jsx';

const cx = (...parts) => parts.filter(Boolean).join(' ');
const LETTERS = ['A', 'B', 'C', 'D'];
const MAX_HP = 100;
const MAX_HEARTS = 3;

export default function GameArena({ quest, onExit, onShare }) {
  const questions = quest.questions;
  const total = questions.length;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [hp, setHp] = useState(MAX_HP);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [results, setResults] = useState([]);
  const [phase, setPhase] = useState('playing');
  const [bossHits, setBossHits] = useState(0);
  const [playerHits, setPlayerHits] = useState(0);
  const [floatDmg, setFloatDmg] = useState(null);
  const [hurt, setHurt] = useState(false);

  const q = questions[index];
  const revealed = selected !== null;
  const correctCount = results.filter((r) => r === 'correct').length;
  const hpPct = Math.max(0, Math.round((hp / MAX_HP) * 100));
  const isLast = index >= total - 1;

  const choose = useCallback(
    (i) => {
      if (selected !== null || phase !== 'playing') return;
      setSelected(i);
      if (i === q.answerIndex) {
        const base = Math.ceil(MAX_HP / total);
        const damage = Math.round(base * (streak >= 2 ? 1.25 : 1));
        setHp((h) => Math.max(0, h - damage));
        setBossHits((n) => n + 1);
        setFloatDmg({ id: Date.now(), amount: damage });
        setStreak(streak + 1);
        setBestStreak((b) => Math.max(b, streak + 1));
        setResults((r) => r.concat('correct'));
      } else {
        setHearts((h) => h - 1);
        setHurt(true);
        setPlayerHits((n) => n + 1);
        setStreak(0);
        setResults((r) => r.concat('wrong'));
      }
    },
    [selected, phase, q, total, streak]
  );

  const next = useCallback(() => {
    if (selected === null) return;
    if (hp <= 0) {
      setPhase('won');
      return;
    }
    if (hearts <= 0 || isLast) {
      setPhase('lost');
      return;
    }
    setIndex((n) => n + 1);
    setSelected(null);
    setFloatDmg(null);
  }, [selected, hp, hearts, isLast]);

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setHp(MAX_HP);
    setHearts(MAX_HEARTS);
    setStreak(0);
    setBestStreak(0);
    setResults([]);
    setPhase('playing');
    setBossHits(0);
    setPlayerHits(0);
    setFloatDmg(null);
    setHurt(false);
  };

  useEffect(() => {
    if (!hurt) return undefined;
    const timer = setTimeout(() => setHurt(false), 1500);
    return () => clearTimeout(timer);
  }, [hurt, playerHits]);

  useEffect(() => {
    const onKey = (event) => {
      if (phase !== 'playing') return;
      if (event.key >= '1' && event.key <= '4') {
        choose(Number(event.key) - 1);
      } else if (event.key === 'ArrowRight') {
        next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, choose, next]);

  const wasCorrect = revealed && selected === q.answerIndex;
  const mood =
    phase === 'won'
      ? 'happy'
      : phase === 'lost' || hurt
        ? 'surprised'
        : wasCorrect || streak >= 2
          ? 'happy'
          : 'calm';
  const nextLabel = hp <= 0 ? 'Claim victory' : hearts <= 0 || isLast ? 'See results' : 'Next question';
  const accuracy = results.length ? Math.round((correctCount / results.length) * 100) : 0;

  const barColor = hpPct > 50 ? 'bg-sage-500' : hpPct > 25 ? 'bg-amber-400' : 'bg-rose-400';

  return (
    <div className="animate-fade-in mx-auto max-w-3xl">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Notes
        </button>

        <div className="flex items-center gap-3">
          <div key={'hearts-' + playerHits} className={cx('flex items-center gap-1', playerHits > 0 && 'animate-hit')} aria-label={hearts + ' hearts left'}>
            {Array.from({ length: MAX_HEARTS }).map((_, i) => (
              <Heart
                key={i}
                className={cx(
                  'h-5 w-5 transition',
                  i < hearts ? 'fill-rose-400 text-rose-400' : 'text-slate-300'
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={onShare}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
          >
            <Share2 className="h-4 w-4" />
            Share room
          </button>
        </div>
      </div>

      {/* Boss */}
      <section className="mt-5 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div
              key={'boss-' + bossHits}
              className={cx(
                'flex h-20 w-20 items-center justify-center rounded-3xl bg-sage-100 text-5xl transition sm:h-24 sm:w-24 sm:text-6xl',
                bossHits > 0 && 'animate-hit',
                phase === 'won' && 'opacity-40 grayscale'
              )}
            >
              {quest.bossEmoji}
            </div>
            {floatDmg && (
              <span
                key={floatDmg.id}
                className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 animate-float-up text-xl font-bold text-rose-500"
              >
                {'-' + floatDmg.amount}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="truncate text-2xl font-semibold text-slate-900">{quest.bossName}</h2>
              {streak >= 2 && phase === 'playing' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                  <Flame className="h-3.5 w-3.5" />
                  {streak} streak · +25% damage
                </span>
              )}
            </div>
            <p className="text-sm text-slate-500">{quest.bossTagline}</p>

            <div className="mt-3">
              <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-slate-500">
                <span>Boss HP</span>
                <span>{hpPct}%</span>
              </div>
              <div
                className="h-3 overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-valuenow={hpPct}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className={cx('h-full rounded-full transition-all duration-700 ease-out', barColor)}
                  style={{ width: hpPct + '%' }}
                />
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-center">
            <div key={'you-' + playerHits} className={playerHits > 0 ? 'animate-hit' : ''}>
              <div key={'lunge-' + bossHits} className={bossHits > 0 ? 'animate-lunge' : ''}>
                <Capybara mood={mood} size={88} bob={phase === 'playing' && !revealed} />
              </div>
            </div>
            <span className="mt-1 text-xs font-medium text-slate-400">You</span>
          </div>
        </div>
      </section>

      {/* Question or results */}
      {phase === 'playing' ? (
        <section key={q.id} className="mt-5 animate-pop-in rounded-3xl border border-slate-200/80 bg-white p-5 shadow-card sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Question {index + 1} of {total}
            </p>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {questions.map((item, i) => {
                const result = results[i];
                return (
                  <span
                    key={item.id}
                    className={cx(
                      'h-2 w-2 rounded-full transition',
                      result === 'correct' && 'bg-sage-500',
                      result === 'wrong' && 'bg-rose-400',
                      !result && i === index && 'bg-indigo-500',
                      !result && i !== index && 'bg-slate-200'
                    )}
                  />
                );
              })}
            </div>
          </div>

          <h3 className="mt-4 text-xl font-medium leading-snug text-slate-900 sm:text-2xl">{q.prompt}</h3>

          <div className="mt-6 grid gap-3">
            {q.options.map((option, i) => {
              const isAnswer = i === q.answerIndex;
              const isPicked = i === selected;
              let state = 'idle';
              if (revealed) {
                if (isAnswer) state = 'correct';
                else if (isPicked) state = 'wrong';
                else state = 'dim';
              }
              return (
                <button
                  key={option + i}
                  type="button"
                  onClick={() => choose(i)}
                  disabled={revealed}
                  className={cx(
                    'flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-[15px] transition',
                    state === 'idle' && 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/60',
                    state === 'correct' && 'border-sage-400 bg-sage-50 text-sage-800',
                    state === 'wrong' && 'border-rose-300 bg-rose-50 text-rose-700',
                    state === 'dim' && 'border-slate-100 bg-slate-50 text-slate-400'
                  )}
                >
                  <span
                    className={cx(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold',
                      state === 'idle' && 'bg-slate-100 text-slate-500',
                      state === 'correct' && 'bg-sage-500 text-white',
                      state === 'wrong' && 'bg-rose-400 text-white',
                      state === 'dim' && 'bg-slate-100 text-slate-300'
                    )}
                  >
                    {state === 'correct' ? (
                      <Check className="h-4 w-4" />
                    ) : state === 'wrong' ? (
                      <X className="h-4 w-4" />
                    ) : (
                      LETTERS[i]
                    )}
                  </span>
                  <span className="flex-1">{option}</span>
                </button>
              );
            })}
          </div>

          {revealed ? (
            <div
              className={cx(
                'mt-5 animate-pop-in rounded-2xl border p-4',
                wasCorrect ? 'border-sage-200 bg-sage-50/70' : 'border-rose-200 bg-rose-50/70'
              )}
            >
              <p className={cx('text-sm font-semibold', wasCorrect ? 'text-sage-700' : 'text-rose-700')}>
                {wasCorrect ? 'Direct hit! The boss takes damage.' : 'Missed. You lose a heart.'}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{q.explanation}</p>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition hover:bg-indigo-500 active:scale-[0.98]"
                >
                  {nextLabel}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-5 text-xs text-slate-400">Tip: press 1 to 4 to answer, and the right arrow key to continue.</p>
          )}
        </section>
      ) : (
        <section className="mt-5 animate-pop-in rounded-3xl border border-slate-200/80 bg-white p-6 text-center shadow-card sm:p-9">
          <div
            className={cx(
              'mx-auto flex h-14 w-14 items-center justify-center rounded-2xl',
              phase === 'won' ? 'bg-sage-100 text-sage-700' : 'bg-slate-100 text-slate-500'
            )}
          >
            {phase === 'won' ? <Trophy className="h-7 w-7" /> : <Swords className="h-7 w-7" />}
          </div>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">
            {phase === 'won' ? 'Boss defeated!' : hearts <= 0 ? 'Out of hearts' : 'The boss escaped'}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
            {phase === 'won'
              ? quest.bossName + ' has fallen. Your notes are in good shape.'
              : quest.bossName + ' still has ' + hpPct + '% HP. Review the explanations and try a rematch.'}
          </p>

          <div className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-3">
            <div className="rounded-2xl bg-paper px-3 py-4">
              <p className="text-2xl font-semibold text-slate-900">{accuracy}%</p>
              <p className="mt-0.5 text-xs text-slate-500">Accuracy</p>
            </div>
            <div className="rounded-2xl bg-paper px-3 py-4">
              <p className="text-2xl font-semibold text-slate-900">{bestStreak}</p>
              <p className="mt-0.5 text-xs text-slate-500">Best streak</p>
            </div>
            <div className="rounded-2xl bg-paper px-3 py-4">
              <p className="text-2xl font-semibold text-slate-900">
                {Math.max(0, hearts)}/{MAX_HEARTS}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">Hearts left</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lift transition hover:bg-indigo-500 active:scale-[0.98]"
            >
              <RotateCcw className="h-4 w-4" />
              Rematch
            </button>
            <button
              type="button"
              onClick={onShare}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              <Share2 className="h-4 w-4" />
              Challenge a friend
            </button>
            <button
              type="button"
              onClick={onExit}
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              New notes
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
`;

/* ------------------------------------------------------------------ */
/* src/components/ShareModal.jsx                                       */
/* ------------------------------------------------------------------ */

files['src/components/ShareModal.jsx'] = String.raw`import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Link2, X } from 'lucide-react';

const cx = (...parts) => parts.filter(Boolean).join(' ');

export default function ShareModal({ open, onClose, roomCode, questTitle }) {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const link = 'https://questify.xyz/room/' + roomCode;

  useEffect(() => {
    if (!open) {
      setCopied(false);
      return undefined;
    }
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  if (!open) return null;

  const copy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(link);
        setCopied(true);
        return;
      }
      throw new Error('Clipboard API unavailable');
    } catch (err) {
      const el = inputRef.current;
      if (el) {
        el.focus();
        el.select();
        try {
          setCopied(document.execCommand('copy'));
        } catch (copyErr) {
          setCopied(false);
        }
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 px-4 backdrop-blur-sm animate-fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-title"
        className="w-full max-w-md animate-pop-in rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Link2 className="h-5 w-5" />
            </span>
            <div>
              <h2 id="share-title" className="text-xl font-semibold text-slate-900">
                Share this room
              </h2>
              <p className="text-sm text-slate-500">{questTitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-600">
          Send this link to classmates or friends so they can take on the same boss.
        </p>

        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-paper p-1.5">
          <input
            ref={inputRef}
            readOnly
            value={link}
            onFocus={(e) => e.target.select()}
            aria-label="Room link"
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-slate-700"
          />
          <button
            type="button"
            onClick={copy}
            className={cx(
              'inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.97]',
              copied ? 'bg-sage-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-500'
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>
            Room code <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-slate-600">{roomCode}</span>
          </span>
          <span>Demo build: links are generated locally.</span>
        </div>
      </div>
    </div>
  );
}
`;

/* ------------------------------------------------------------------ */
/* src/App.jsx                                                         */
/* ------------------------------------------------------------------ */

files['src/App.jsx'] = String.raw`import { useCallback, useState } from 'react';
import { Swords } from 'lucide-react';
import Dashboard from './components/Dashboard.jsx';
import GameArena from './components/GameArena.jsx';
import ShareModal from './components/ShareModal.jsx';
import { generateQuest } from './services/anakinAI.js';

const ROOM_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const makeRoomCode = () => {
  let code = '';
  for (let i = 0; i < 6; i += 1) {
    code += ROOM_ALPHABET.charAt(Math.floor(Math.random() * ROOM_ALPHABET.length));
  }
  return code;
};

export default function App() {
  const [view, setView] = useState('dashboard');
  const [quest, setQuest] = useState(null);
  const [roomCode, setRoomCode] = useState('');
  const [shareOpen, setShareOpen] = useState(false);

  const handleLaunch = async (notes) => {
    const generated = await generateQuest(notes);
    setQuest(generated);
    setRoomCode(makeRoomCode());
    setView('arena');
    window.scrollTo({ top: 0 });
  };

  const handleExit = () => {
    setView('dashboard');
    setShareOpen(false);
  };

  const closeShare = useCallback(() => setShareOpen(false), []);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-paper/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
          <button type="button" onClick={handleExit} className="flex items-center gap-2.5 rounded-xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-500 text-white shadow-sm">
              <Swords className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold text-slate-900">
              Questify<span className="text-indigo-500">.xyz</span>
            </span>
          </button>

          {view === 'arena' && (
            <button
              type="button"
              onClick={handleExit}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-900"
            >
              New notes
            </button>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        {view === 'dashboard' || !quest ? (
          <Dashboard onLaunch={handleLaunch} />
        ) : (
          <GameArena
            key={roomCode}
            quest={quest}
            onExit={handleExit}
            onShare={() => setShareOpen(true)}
          />
        )}
      </main>

      <footer className="border-t border-slate-200/70 py-6 text-center text-xs text-slate-400">
        Questify.xyz · Study smarter, one boss at a time.
      </footer>

      <ShareModal
        open={shareOpen && !!quest}
        onClose={closeShare}
        roomCode={roomCode}
        questTitle={quest ? quest.title : ''}
      />
    </div>
  );
}
`;

/* ------------------------------------------------------------------ */
/* Writer                                                              */
/* ------------------------------------------------------------------ */

(async () => {
  const fs = (await import('node:fs')).default;
  const path = (await import('node:path')).default;

  const root = path.dirname(path.resolve(process.argv[1]));
  const force = process.argv.indexOf('--force') !== -1;

  ['src', 'src/components', 'src/services'].forEach((dir) => {
    fs.mkdirSync(path.join(root, dir), { recursive: true });
  });

  let written = 0;
  let skipped = 0;

  Object.keys(files).forEach((rel) => {
    const target = path.join(root, rel);
    if (fs.existsSync(target) && !force) {
      skipped += 1;
      console.log('  skipped  ' + rel + ' (already exists, use --force to overwrite)');
      return;
    }
    fs.writeFileSync(target, files[rel], 'utf8');
    written += 1;
    console.log('  created  ' + rel);
  });

  console.log('');
  console.log('Questify.xyz ready: ' + written + ' file(s) written' + (skipped ? ', ' + skipped + ' skipped' : '') + '.');
  console.log('Next steps:');
  console.log('  npm install');
  console.log('  npm run dev');
})().catch((err) => {
  console.error('Setup failed:', err);
  process.exit(1);
});
