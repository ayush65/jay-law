import type { ReactNode } from "react";

/**
 * Progressive-enhancement reveal wrapper. Content is fully rendered and
 * visible by default; the CSS gate `html.js` only hides elements when
 * JavaScript is active, and ScrollAnimations adds `.is-visible` as they
 * enter the viewport. Animations can never leave content permanently
 * hidden (see ScrollAnimations failsafe).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
