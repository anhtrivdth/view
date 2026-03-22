"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  Music,
  Youtube,
  Github,
  Mail,
  ExternalLink,
  ArrowRight,
  Sun,
  Moon,
  Heart,
  Star,
  Download,
  Briefcase,
  FileText,
  Check,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Theme = "dark" | "light";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  brandClass: string;
  brandColor: string;
}

interface FeaturedItem {
  title: string;
  description: string;
  href: string;
  gradient: string;
  emoji: string;
  accentClass: string;
  category: string;
}

// ─── Profile Data ──────────────────────────────────────────────────────────

const PROFILE = {
  name: "Phan Công Trí",
  username: "@phancongtri.dev",
  bio: "Full-stack Developer & UI Designer.\nBuilding beautiful digital experiences from HoChiMinh, Vietnam.",
  location: "Ho Chi Minh, Vietnam",
  avatar: "https://tomau.vn/wp-content/uploads/tranh-to-mau-luffy-vui-nhon.jpg",
  verified: false,
  followers: "12.4K",
  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/phancongtri.no1",
      icon: <Facebook size={18} />,
      brandClass: "link-facebook",
      brandColor: "#1877f2",
    },
    // {
    //   label: "Instagram",
    //   href: "#",
    //   icon: <Instagram size={18} />,
    //   brandClass: "link-instagram",
    //   brandColor: "#e1306c",
    // },
    // {
    //   label: "TikTok",
    //   href: "#",
    //   icon: <Music size={18} />,
    //   brandClass: "link-tiktok",
    //   brandColor: "#69c9d0",
    // },
    // {
    //   label: "YouTube",
    //   href: "#",
    //   icon: <Youtube size={18} />,
    //   brandClass: "link-youtube",
    //   brandColor: "#ff0000",
    // },
    {
      label: "GitHub",
      href: "https://github.com/anhtrivdth",
      icon: <Github size={18} />,
      brandClass: "link-github",
      brandColor: "#ffffff",
    },
    {
      label: "Email",
      href: "mailto:phancongtri.vdth@gmail.com",
      icon: <Mail size={18} />,
      brandClass: "link-email",
      brandColor: "#a855f7",
    },
  ] as SocialLink[],
  featured: [
    {
      title: "Web Xem Phim",
      description: "Coupon free 1 tháng VIP: FREE1MONTH",
      href: "https://movie.phancongtri.dev",
      gradient: "from-violet-500 to-purple-600",
      emoji: "🎨",
      accentClass: "accent-violet",
      category: "Project",
    },
    {
      title: "n8n Automation",
      description: "Gửi email để nhận link mời dùng n8n.",
      href: "https://n8n.phancongtri.dev",
      gradient: "from-pink-500 to-rose-500",
      emoji: "🚀",
      accentClass: "accent-pink",
      category: "Project",
    },
    {
      title: "Shop Automation",
      description: "Vào shop ngay, săn deal hot hôm nay",
      href: "#",
      gradient: "from-blue-500 to-sky-500",
      emoji: "📄",
      accentClass: "accent-blue",
      category: "Project",
    },
  ] as FeaturedItem[],
};

// ─── Framer Motion Variants ────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// ─── Animated Background ────────────────────────────────────────────────────

function AnimatedBackground({ theme }: { theme: Theme }) {
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isDark
            ? "#09090b"
            : "#fafafa",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          left: "-20%",
          background: isDark
            ? "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 700,
          height: 700,
          bottom: "-25%",
          right: "-20%",
          background: isDark
            ? "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: 400,
          height: 400,
          top: "60%",
          left: "60%",
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

// ─── Avatar ─────────────────────────────────────────────────────────────────

function Avatar({ src }: { src: string }) {
  return (
    <div className="flex justify-center">
      <motion.div
        className="avatar-ring"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative rounded-full overflow-hidden" style={{ width: 96, height: 96 }}>
          <img
            src={src}
            alt="Profile"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.92) contrast(1.05)" }}
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 rounded-full" style={{
            background: "linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(236,72,153,0.08) 100%)",
          }} />
        </div>
      </motion.div>
    </div>
  );
}

// ─── Social Button ──────────────────────────────────────────────────────────

function SocialButton({ link }: { link: SocialLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`glass-card flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-transparent cursor-pointer select-none transition-colors duration-200 ${link.brandClass}`}
      style={{
        color: "var(--text-secondary)",
        borderColor: hovered ? `${link.brandColor}40` : "transparent",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Icon with brand color on hover */}
      <motion.span
        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl"
        style={{
          background: hovered ? `${link.brandColor}18` : "rgba(255,255,255,0.05)",
          color: hovered ? link.brandColor : "var(--text-secondary)",
          transition: "all 0.2s ease",
        }}
      >
        {link.icon}
      </motion.span>

      <span className="flex-1 text-[0.9375rem] font-semibold">{link.label}</span>

      <motion.span
        animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0.4 }}
        transition={{ type: "spring", stiffness: 400 }}
        style={{ color: hovered ? link.brandColor : "var(--text-muted)" }}
      >
        <ExternalLink size={15} />
      </motion.span>
    </motion.a>
  );
}

// ─── Featured Card ──────────────────────────────────────────────────────────

function FeaturedCard({ item }: { item: FeaturedItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card group relative flex items-center gap-4 p-4 rounded-2xl cursor-pointer overflow-hidden`}
      style={{
        borderColor: hovered ? "rgba(168,85,247,0.25)" : "transparent",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-gradient-to-b ${item.gradient}`} />

      {/* Emoji thumbnail */}
      <div
        className={`flex-shrink-0 flex items-center justify-center w-13 h-13 rounded-xl text-2xl bg-gradient-to-br ${item.gradient}`}
        style={{ width: 48, height: 48 }}
      >
        {item.emoji}
      </div>

      <div className="flex-1 min-w-0 pl-1">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.15em] mb-0.5"
          style={{ color: "var(--text-muted)" }}
        >
          {item.category}
        </p>
        <h3
          className="font-semibold text-[0.9375rem] truncate"
          style={{ color: "var(--text-primary)" }}
        >
          {item.title}
        </h3>
        <p
          className="text-[0.8125rem] truncate mt-0.5"
          style={{ color: "var(--text-secondary)" }}
        >
          {item.description}
        </p>
      </div>

      <motion.div
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <ArrowRight
          size={16}
          style={{
            color: hovered ? "var(--accent)" : "var(--text-muted)",
            transition: "color 0.2s ease",
          }}
        />
      </motion.div>
    </motion.a>
  );
}

// ─── Follow Button ──────────────────────────────────────────────────────────

function FollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <motion.button
      className="btn-primary relative flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-semibold text-sm text-white cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setFollowing(!following)}
    >
      <AnimatePresence mode="wait">
        {following ? (
          <motion.span
            key="following"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2"
          >
            <Check size={16} strokeWidth={2.5} />
            Đã Follow
          </motion.span>
        ) : (
          <motion.span
            key="follow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2"
          >
            <Heart size={16} />
            Follow
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Theme Toggle ────────────────────────────────────────────────────────────

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <motion.button
      onClick={onToggle}
      className="glass-card w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border"
      style={{ borderColor: "var(--card-border)" }}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            style={{ color: "#fbbf24" }}
          >
            <Sun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            style={{ color: "#7c3aed" }}
          >
            <Moon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Section Label ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[0.6875rem] font-bold uppercase tracking-[0.15em] mb-3 px-1"
      style={{ color: "var(--text-muted)" }}
    >
      {children}
    </p>
  );
}

// ─── Divider ────────────────────────────────────────────────────────────────

function Divider() {
  return <div className="h-px" style={{ background: "var(--card-border)" }} />;
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("bio-theme") as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("bio-theme", next);
  };

  return (
    <div className={`${theme} min-h-screen`}>
      <AnimatedBackground theme={theme} />

      {/* Theme toggle */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>

      {/* Main card */}
      <main className="flex items-start justify-center min-h-screen px-4 py-10 sm:py-14">
        <motion.div
          className="glass-card w-full max-w-[460px] rounded-[24px] overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Gradient accent bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500" />

          <div className="p-7 sm:p-8 space-y-6">

            {/* ── Header / Profile ── */}
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center">

              <Avatar src={PROFILE.avatar} />

              <h1
                className="mt-4 text-[1.625rem] font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {PROFILE.name}
              </h1>
              <p className="mt-0.5 text-sm font-medium" style={{ color: "var(--accent)" }}>
                {PROFILE.username}
              </p>

              <div className="mt-3 max-w-[300px]">
                <p
                  className="text-[0.875rem] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {PROFILE.bio.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < PROFILE.bio.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              {/* Location pill */}
              <motion.div
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.75rem] font-medium"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-muted)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                {PROFILE.location}
              </motion.div>
            </motion.div>

            {/* ── Follow button ── */}
            <motion.div variants={itemVariants}>
              <FollowButton />
            </motion.div>

            <Divider />

            {/* ── Social Links ── */}
            <motion.div variants={itemVariants}>
              <SectionLabel>Kết nối với tôi</SectionLabel>
              <div className="space-y-2.5">
                {PROFILE.socialLinks.map((link) => (
                  <SocialButton key={link.label} link={link} />
                ))}
              </div>
            </motion.div>

            {/* ── Featured ── */}
            <motion.div variants={itemVariants}>
              <SectionLabel>Nổi bật</SectionLabel>
              <div className="space-y-2.5">
                {PROFILE.featured.map((item) => (
                  <FeaturedCard key={item.title} item={item} />
                ))}
              </div>
            </motion.div>

            {/* ── Footer ── */}
            <motion.div variants={itemVariants} className="text-center pt-1">
              <p className="text-[0.6875rem]" style={{ color: "var(--text-muted)" }}>
                © {new Date().getFullYear()} · {PROFILE.name} · All rights reserved
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
