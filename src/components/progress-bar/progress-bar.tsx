import React, { useId } from 'react';
import { cn } from '../../utils/cn';
import type { ProgressBarProps, CircularProgressProps } from './progress-bar.types';
import './progress-bar.css';

const COLOR_MAP: Record<string, string> = {
  primary: 'var(--primaryColor, #fa8029)',
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
  info: '#3b82f6',
};

/* ══════════════════════════════════════════════════════
   ProgressBar — Linear
   ══════════════════════════════════════════════════════ */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  buffer,
  label,
  showPercentage = false,
  labelInside = false,
  size = 'md',
  variant = 'linear',
  color = 'primary',
  customColor,
  gradient,
  animated = false,
  rounded = 'full',
  steps,
  segments,
  className = '',
  style,
}) => {
  const pct = variant === 'indeterminate' ? 100 : Math.min(Math.max(progress, 0), 100);
  const resolvedColor = customColor ?? COLOR_MAP[color] ?? COLOR_MAP.primary;

  // Build fill style
  const fillStyle: React.CSSProperties = { width: `${pct}%` };

  if (gradient) {
    fillStyle.background = `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})`;
  } else if (variant !== 'striped' && variant !== 'indeterminate') {
    fillStyle.background = resolvedColor;
  } else {
    fillStyle.background = resolvedColor;
  }

  // ── Stepped variant ──────────────────────────────
  if (variant === 'stepped') {
    const totalSteps = steps ?? 5;
    const filledSteps = Math.round((pct / 100) * totalSteps);
    return (
      <div className={cn('mango-progress-container', `progress-${size}`, className)} style={style}>
        {(label || showPercentage) && (
          <div className="mango-progress-header">
            {label && <span className="mango-progress-label">{label}</span>}
            {showPercentage && <span className="mango-progress-percentage">{Math.round(pct)}%</span>}
          </div>
        )}
        <div className="mango-stepped-track">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn('mango-step-segment', i < filledSteps && 'is-filled')}
              style={i < filledSteps ? { background: resolvedColor } : undefined}
            />
          ))}
        </div>
      </div>
    );
  }

  // ── Stacked variant ──────────────────────────────
  if (variant === 'stacked' && segments) {
    return (
      <div className={cn('mango-progress-container', `progress-${size}`, className)} style={style}>
        {label && (
          <div className="mango-progress-header">
            <span className="mango-progress-label">{label}</span>
          </div>
        )}
        <div className={cn('mango-progress-track', `rounded-${rounded}`)}>
          <div className="mango-stacked-bar">
            {segments.map((seg, i) => (
              <div
                key={i}
                className="mango-stack-segment"
                style={{ width: `${Math.min(seg.value, 100)}%`, background: seg.color }}
                title={seg.label ? `${seg.label}: ${seg.value}%` : `${seg.value}%`}
              />
            ))}
          </div>
        </div>
        {/* Legend */}
        {segments.some(s => s.label) && (
          <div className="mango-stacked-legend">
            {segments.map((seg, i) => (
              <span key={i} className="mango-legend-item">
                <span className="mango-legend-dot" style={{ background: seg.color }} />
                {seg.label} ({seg.value}%)
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── Default/linear/striped/indeterminate/glass/neon/gradient/buffer ──
  return (
    <div className={cn('mango-progress-container', `progress-${size}`, className)} style={style}>
      {(label || showPercentage) && (
        <div className="mango-progress-header">
          {label && <span className="mango-progress-label">{label}</span>}
          {showPercentage && variant !== 'indeterminate' && (
            <span className="mango-progress-percentage">{Math.round(pct)}%</span>
          )}
        </div>
      )}

      <div className={cn('mango-progress-track', `rounded-${rounded}`)}>
        {/* Buffer fill */}
        {variant === 'buffer' && buffer != null && (
          <div
            className="mango-progress-buffer"
            style={{ width: `${Math.min(buffer, 100)}%`, background: resolvedColor }}
          />
        )}

        <div
          className={cn(
            'mango-progress-bar',
            `is-${variant}`,
            animated && variant !== 'indeterminate' && 'is-animated',
            variant === 'neon' && 'is-neon',
          )}
          style={fillStyle}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {labelInside && variant !== 'indeterminate' && pct > 12 && (
            <span className="mango-progress-inner-label">{Math.round(pct)}%</span>
          )}
        </div>
      </div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';


/* ══════════════════════════════════════════════════════
   CircularProgress — SVG Ring
   ══════════════════════════════════════════════════════ */
export const CircularProgress: React.FC<CircularProgressProps> = ({
  progress = 0,
  size = 80,
  strokeWidth = 8,
  label,
  color = 'primary',
  customColor,
  indeterminate = false,
  showPercentage = false,
  gradient,
  className = '',
  style,
}) => {
  const id = useId().replace(/:/g, '');
  const resolvedColor = customColor ?? COLOR_MAP[color] ?? COLOR_MAP.primary;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(Math.max(progress, 0), 100);
  const dashOffset = circumference - (pct / 100) * circumference;

  return (
    <div
      className={cn('mango-circular-progress', indeterminate && 'is-indeterminate', className)}
      style={{ width: size, height: size, ...style }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {gradient && (
          <defs>
            <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradient[0]} />
              <stop offset="100%" stopColor={gradient[1]} />
            </linearGradient>
          </defs>
        )}
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--borderColor, #e2e8f0)"
          strokeWidth={strokeWidth}
        />
        {/* Fill */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={gradient ? `url(#grad-${id})` : resolvedColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={indeterminate ? circumference * 0.75 : dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            transition: indeterminate ? 'none' : 'stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </svg>
      {/* Center content */}
      <div className="mango-circular-center">
        {showPercentage && !indeterminate && !label && (
          <span className="mango-circular-pct">{Math.round(pct)}%</span>
        )}
        {label && <span className="mango-circular-label">{label}</span>}
      </div>
    </div>
  );
};

CircularProgress.displayName = 'CircularProgress';
