# Bio Profile — Design Specification

## 1. Concept & Vision

Một trang profile cá nhân dạng **"bio link"** — kiểu trang mà creator, freelancer, designer hay developer hay dùng để tập hợp tất cả đường link của mình ở một nơi. Trang này mang cảm giác **sạch sẽ, tinh tế, chuyên nghiệp** — như một tấm card visit kỹ thuật số, có thể tùy chỉnh dễ dàng. Mỗi phần tử đều có nhịp thở riêng, không chật chội, không gò bó.

**Persona:** Minh Hoàng — Full-stack Developer & UI Designer, Hà Nội.

---

## 2. Design Language

### Aesthetic
**Dark Minimal Glassmorphism** — nền tối sâu với các lớp kính mờ floating trên gradient nhẹ. Tạo cảm giác premium, hiện đại, nhưng không quá phô trương.

### Color Palette

| Token | Dark Mode | Light Mode |
|---|---|---|
| Page BG | `#09090b` | `#fafafa` |
| Card BG | `rgba(255,255,255,0.04)` | `rgba(255,255,255,0.75)` |
| Card Border | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.06)` |
| Text Primary | `#fafafa` | `#18181b` |
| Text Secondary | `#71717a` | `#71717a` |
| Text Muted | `#52525b` | `#a1a1aa` |
| Accent Primary | `#a855f7` (violet) | `#7c3aed` |
| Accent Gradient | `linear-gradient(135deg, #a855f7, #ec4899)` | same |

### Typography
- **Font:** `Plus Jakarta Sans` (Google Fonts) — geometric, modern
- **Username:** 1.5rem / 700
- **Bio:** 0.875rem / 400
- **Button Labels:** 0.9375rem / 600
- **Section Label:** 0.6875rem / 700 / uppercase / tracking-[0.15em]

### Motion
- **Entrance:** Staggered fade-up (opacity 0→1, y 20→0, 500ms ease-out, 70ms stagger)
- **Link hover:** translateY -2px + shadow expand + accent color reveal, 200ms
- **Theme toggle:** crossfade 300ms
- **Stats count-up:** animate number on mount

---

## 3. Layout & Structure

```
┌─────────────────────────────────────────┐
│ [Theme toggle — top right]              │
│                                         │
│     ┌───────────────────────────┐       │
│     │  [Gradient accent bar]    │       │
│     │                           │       │
│     │  [Avatar — 96px circle]   │       │
│     │  [Name — bold large]      │       │
│     │  [Username — muted]       │       │
│     │  [Bio — 1-2 lines]        │       │
│     │                           │       │
│     │  [Divider]                │       │
│     │                           │       │
│     │  [Social Links]           │       │
│     │  - Full width buttons     │       │
│     │  - Icon + Label           │       │
│     │                           │       │
│     │  [Featured Cards]         │       │
│     │  - Card + arrow           │       │
│     │                           │       │
│     │  [Footer]                 │       │
│     └───────────────────────────┘       │
└─────────────────────────────────────────┘
```

**Responsive:**
- **Mobile (< 480px):** Card full-width, 16px horizontal margin, compact spacing
- **Tablet/Desktop (≥ 480px):** Card 460px max-width, centered, generous padding

---

## 4. Sections

### Header
- Avatar: 96px circle with animated gradient ring border
- Name: bold, 1.5rem
- Username: muted, with @ prefix
- Bio: 0.875rem, max 2 lines, secondary color

### Social Links
- 6 buttons: Facebook, Instagram, TikTok, YouTube, GitHub, Email
- Full-width, stacked vertically
- Each: icon left + label center + subtle arrow right
- Hover: lift effect + accent glow shadow

### Featured Cards
- 3 cards: Portfolio, Dự án mới, CV / Booking
- Each: gradient emoji icon + title + description + arrow
- Hover: lift + arrow slides right

### Footer
- Single line: © 2026 · Minh Hoàng · All rights reserved

---

## 5. Technical

- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS v3
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Font:** Plus Jakarta Sans via `next/font/google`
- **State:** React useState (follow state, theme)
- **Theme:** CSS class toggle + localStorage persistence
