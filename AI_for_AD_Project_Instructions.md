# AI for Account Directors — Project Instructions
Last Updated: May 24, 2026

---

## What This Project Is

A learning app built for Account Directors at Power Digital Marketing. The subject is using Claude as an internal prep system to prepare for external client meetings and deliverables. Claude is positioned as an internal tool only — never client-facing.

The app is built as a standalone HTML file that runs in any browser. It uses Hormozi-style education: short punchy hooks, direct prose, no analogies unless they genuinely help, and a quiz with instant feedback after every lesson.

---

## Current Version

Version 6. Saved as: AI_for_Account_Directors_v6.html

---

## Version History

V1: Basic AI fundamentals learning app. Eight lessons on how AI works technically. XP system with ranks.

V2: Rewrote all lessons in Hormozi style with marketing analogies. Added SVG diagrams per lesson. Updated ranks.

V3: Added role selector (Account Manager vs Account Director). Dual lesson content per role. Four new lessons. Boss Round spaced repetition system for wrong answers.

V4: Removed AM track entirely. Rebuilt AD track around a completely new subject: using Claude as an internal operator tool for account leadership. Twelve lessons. All platform AI content removed.

V5: Applied four rounds of feedback. Removed all dashes and hyphens used as punctuation. Reframed all lessons as internal prep tool, not client-facing. Dropped analogies where they did not add value. Replaced email writing lesson with briefing quality lesson.

V6: Rebuilt lessons one through three as a proper setup sequence. Lesson one creates the cold start problem. Lesson two shows exactly how to build a context file with a real CPG example template rendered inside the lesson. Lesson three covers the exact session workflow and the three minute update habit. Iris integration identified as the next improvement for lesson two.

---

## Lesson Structure (V6)

All 12 lessons follow this format:

Concept tag, Hook line, Section label, Body block with one bolded key sentence, One-liner callout, SVG diagram, Quiz question with four options, Correct and wrong feedback, Go deeper button that fires a usable follow-up prompt.

### The 12 Lessons

1. The Cold Start Problem — why starting without context costs 2.5 hours per week
2. Build Your Context File — seven sections, real CPG example template rendered in the lesson
3. Run a Session and Keep It Current — upload workflow plus three minute update habit
4. Extract Signal from Call Recordings — transcript plus context file produces debrief in two minutes
5. Build the QBR Narrative Internally — narrative arc before the deck, not after
6. Brief Claude Like a Senior Strategist — the brief determines output quality, not Claude
7. Translate Metrics into Business Language — ROAS to CAC, LTV:CAC, MER, payback period
8. Diagnose the Account Before You Touch It — structured diagnosis before any campaign changes
9. Stress Test Your Recommendations — adversarial CMO roleplay before the meeting
10. Run Competitive Intelligence Before Meetings — structured prompt plus context file in fifteen minutes
11. Spot Retention Risk Before It Becomes a Crisis — communication pattern signals fed to Claude
12. Your Claude Operating System — the full stack and why it compounds

---

## Gamification System

XP per correct answer: 25
XP per wrong answer: 10

Ranks: Novice AD (0 XP), System Builder (60 XP), Operator (150 XP), AI-Led AD (280 XP), Elite Operator (400 XP)

Boss Round: Wrong answers come back after lesson 12, capped at three, framed as Boss Round not remedial review. Skipped entirely if the user goes clean.

---

## Design Rules

No dashes or hyphens used as punctuation anywhere in lesson content, feedback, or diagrams. Write around them using full sentence construction.

Claude is always an internal prep tool. Never client-facing. Every lesson frames Claude as something you use before the meeting, not in the meeting.

Analogies are used selectively. Not every lesson needs one. Use them where they genuinely clarify. Drop them where they slow things down.

Hormozi style throughout: short punchy hooks, direct prose, one bolded key insight per lesson body, one crisp one-liner callout.

---

## Open Items for Next Session

### Priority 1: Iris Integration for Lesson 2

Power Digital uses an internal LLM called Iris that auto-saves client information over time and integrates with platforms for performance data. Lesson 2 currently teaches building a context file from scratch. It should be updated to show how to pull context from Iris efficiently instead.

To do this correctly, need to understand: what does an Iris output actually look like? Is it a structured summary, a set of fields, a narrative, or something else?

Once that is known, lesson 2 becomes: pull from Iris, format it for Claude, keep it current. The CPG example template becomes the output of an Iris pull. The update habit in lesson 3 shifts to: when to re-pull from Iris versus when to add a quick manual note on top for qualitative signals Iris does not capture.

### Priority 2: V7 Planning

Once Iris integration is accurate, scope V7 additions. Candidates:

Teach it to a client mode: same concepts reframed for a non-marketer audience. Held for after V7 is solid.

Team coaching lesson: using Claude to structure one on one feedback before the conversation. Was in V5, removed to keep the lesson count manageable.

Additional difficulty or framing options based on user feedback after real use.

---

## Files in This Project

AI_for_Account_Directors_v6.html — the fully working app, open in any browser
AI_for_AD_Project_Instructions.md — this file, upload at the start of every new session

---

## How to Resume This Project

Upload both files above at the start of the session. Also upload Joey_Master_Context.txt and AI_Instructions.txt as usual.

Open with: here are the project files for the AI for Account Directors learning app. Current version is V6. The open item is integrating Iris into lesson 2. Here is what an Iris output looks like: [paste example].

---

## Folder Location

Personal Operating System / Shipped / AI for Marketers — Learning App /
