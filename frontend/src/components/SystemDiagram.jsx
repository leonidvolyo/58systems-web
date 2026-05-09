import React from "react";
import {
  Inbox,
  Mail,
  Database,
  Sheet,
  ShoppingCart,
  Headphones,
  ArrowRight,
  RefreshCw,
  Bell,
  Send,
  LineChart,
  FileText,
  MessageSquareText,
} from "lucide-react";

/**
 * Inputs --> 58 Systems engine --> Outputs.
 * Pure SVG + DOM cards so it stays light, scales to its container, and
 * works on GitHub Pages with no extra deps.
 *
 * Container sizes itself to fill the column width while staying short
 * enough to align with the bottom of the hero CTA buttons.
 */
const SystemDiagram = ({ inputItems, outputItems, centerLabel, title, subtitleLines }) => {
  const inputs = (inputItems || []).slice(0, 6);
  const outputs = (outputItems || []).slice(0, 6);
  const subtitles = (subtitleLines && subtitleLines.length > 0)
    ? subtitleLines
    : ["orchestrate", "log", "monitor"];

  const inputIcons = [Inbox, Mail, Database, Sheet, ShoppingCart, Headphones];
  const outputIcons = [RefreshCw, Bell, Send, LineChart, FileText, MessageSquareText];

  // Compact vertical rhythm so the diagram ends near the hero CTA row
  const ROW_GAP = 64;
  const TOP = 50;
  const HEIGHT = 460;
  const WIDTH = 720;
  const CENTER_X = 360;
  const CENTER_Y = HEIGHT / 2;

  return (
    <div
      className="relative w-full"
      role="img"
      aria-label={title}
      data-testid="system-diagram"
    >
      {/* Desktop / tablet — true diagram */}
      <div className="hidden md:block relative">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background panel */}
          <rect
            x="0.5"
            y="0.5"
            width={WIDTH - 1}
            height={HEIGHT - 1}
            rx="16"
            stroke="rgba(255,255,255,0.08)"
            fill="rgba(255,255,255,0.02)"
          />

          {/* Connection lines: inputs -> engine */}
          {inputs.map((_, i) => {
            const startY = TOP + i * ROW_GAP;
            return (
              <path
                key={`il-${i}`}
                d={`M 210 ${startY} C 240 ${startY}, ${CENTER_X - 110} ${CENTER_Y}, ${CENTER_X - 84} ${CENTER_Y}`}
                stroke="rgba(242,160,58,0.42)"
                strokeWidth="1.3"
                className="diagram-flow"
              />
            );
          })}
          {/* Connection lines: engine -> outputs (each beam points directly at its card) */}
          {outputs.map((_, i) => {
            const endY = TOP + i * ROW_GAP;
            return (
              <path
                key={`ol-${i}`}
                d={`M ${CENTER_X + 84} ${CENTER_Y} C ${CENTER_X + 110} ${CENTER_Y}, ${WIDTH - 240} ${endY}, ${WIDTH - 210} ${endY}`}
                stroke="rgba(242,160,58,0.42)"
                strokeWidth="1.3"
                className="diagram-flow"
              />
            );
          })}

          {/* Center engine node */}
          <g>
            <rect
              x={CENTER_X - 84}
              y={CENTER_Y - 56}
              width="168"
              height="112"
              rx="14"
              fill="#0B0F14"
              stroke="#F2A03A"
              strokeWidth="1.6"
            />
            <rect
              x={CENTER_X - 84}
              y={CENTER_Y - 56}
              width="168"
              height="112"
              rx="14"
              fill="url(#centerGlow)"
            />
            <text
              x={CENTER_X}
              y={CENTER_Y - 16}
              textAnchor="middle"
              fill="white"
              fontFamily="Cabinet Grotesk, DM Sans, sans-serif"
              fontWeight="800"
              fontSize="22"
              letterSpacing="-0.5"
            >
              {centerLabel}
            </text>
            {subtitles.map((line, i) => (
              <text
                key={`st-${i}`}
                x={CENTER_X}
                y={CENTER_Y + 12 + i * 14}
                textAnchor="middle"
                fill="rgba(242,160,58,0.95)"
                fontFamily="JetBrains Mono, monospace"
                fontSize="11.5"
                letterSpacing="1.6"
              >
                {line}
              </text>
            ))}
          </g>

          {/* Pulse dots at the engine ports */}
          <circle cx={CENTER_X - 84} cy={CENTER_Y} r="3.5" fill="#F2A03A" className="pulse-dot" />
          <circle cx={CENTER_X + 84} cy={CENTER_Y} r="3.5" fill="#F2A03A" className="pulse-dot" />

          <defs>
            <linearGradient id="centerGlow" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(242,160,58,0.12)" />
              <stop offset="100%" stopColor="rgba(242,160,58,0)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating input cards (overlay) */}
        <div className="absolute inset-0 pointer-events-none">
          {inputs.map((item, i) => {
            const Icon = inputIcons[i % inputIcons.length];
            const top = `${((TOP + i * ROW_GAP - 16) / HEIGHT) * 100}%`;
            return (
              <div
                key={`ic-${i}`}
                className="absolute pointer-events-auto"
                style={{ top, left: "3%" }}
              >
                <div className="flex items-center gap-2 bg-ink-soft/95 border border-white/[0.10] hover:border-orange/60 rounded-lg pl-2 pr-3.5 py-1.5 text-[12.5px] text-white/90 transition-colors shadow-[0_8px_30px_-18px_rgba(0,0,0,0.7)]">
                  <span className="w-7 h-7 inline-flex items-center justify-center rounded-md bg-white/[0.04] text-orange">
                    <Icon size={15} />
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              </div>
            );
          })}
          {outputs.map((item, i) => {
            const Icon = outputIcons[i % outputIcons.length];
            const top = `${((TOP + i * ROW_GAP - 16) / HEIGHT) * 100}%`;
            return (
              <div
                key={`oc-${i}`}
                className="absolute pointer-events-auto"
                style={{ top, right: "3%" }}
              >
                <div className="flex items-center gap-2 bg-ink-soft/95 border border-white/[0.10] hover:border-orange/60 rounded-lg pl-2 pr-3.5 py-1.5 text-[12.5px] text-white/90 transition-colors shadow-[0_8px_30px_-18px_rgba(0,0,0,0.7)]">
                  <span className="w-7 h-7 inline-flex items-center justify-center rounded-md bg-white/[0.04] text-orange">
                    <Icon size={15} />
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile fallback — three vertical clusters */}
      <div className="md:hidden border border-white/10 rounded-xl p-5 bg-white/[0.02] space-y-5">
        <DiagramCluster items={inputs} icons={inputIcons} />
        <div className="flex items-center justify-center">
          <ArrowRight size={18} className="text-orange" />
        </div>
        <div className="rounded-lg border border-orange/40 bg-orange/[0.06] p-4 text-center">
          <div className="font-display text-xl text-white">{centerLabel}</div>
          <div className="font-mono text-[10px] tracking-widest text-orange/85 uppercase mt-1 leading-relaxed">
            {subtitles.join(" · ")}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ArrowRight size={18} className="text-orange" />
        </div>
        <DiagramCluster items={outputs} icons={outputIcons} />
      </div>
    </div>
  );
};

const DiagramCluster = ({ items, icons }) => (
  <div className="grid grid-cols-2 gap-2">
    {items.map((item, i) => {
      const Icon = icons[i % icons.length];
      return (
        <div
          key={i}
          className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-md px-2.5 py-2 text-[12px] text-white/85"
        >
          <Icon size={13} className="text-orange flex-shrink-0" />
          <span className="font-medium truncate">{item}</span>
        </div>
      );
    })}
  </div>
);

export default SystemDiagram;
