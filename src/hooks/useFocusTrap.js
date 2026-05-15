import { useEffect, useLayoutEffect, useRef } from 'react';
const activeTraps = [];
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]',
  'details > summary',
  'iframe',
].join(', ');

function getFocusable(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(el => {
    if (el.getAttribute('aria-hidden') === 'true') return false;
    if (el.closest('[aria-hidden="true"]')) return false;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
  });
}

function focusFirstFocusable(element) {
  const focusable = getFocusable(element);

  if (focusable.length > 0) {
    focusable[0].focus({ preventScroll: true });
    return;
  }

  if (!element.hasAttribute('tabindex')) {
    element.setAttribute('tabindex', '-1');
  }

  element.focus({ preventScroll: true });
}

function getTopTrap() {
  return activeTraps[activeTraps.length - 1];
}

export const useFocusTrap = (ref, active) => {
  const previousFocusRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (!active) return;

    const element = ref.current;
    if (!element) return;

    previousFocusRef.current = null;
    const alreadyFocused = document.activeElement;
    if (alreadyFocused && !element.contains(alreadyFocused)) {
      previousFocusRef.current = alreadyFocused;
    }

    activeTraps.push(element);

    const autofocusEl = element.querySelector('[autofocus]');
    if (autofocusEl && typeof autofocusEl.focus === 'function') {
      autofocusEl.focus({ preventScroll: true });
    } else {
      focusFirstFocusable(element);
    }

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;
      if (getTopTrap() !== element) return;

      const focusable = getFocusable(element);

      if (focusable.length === 0) {
        e.preventDefault();
        element.focus({ preventScroll: true });
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const cur = document.activeElement;

      if (!element.contains(cur) || cur === element) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus({ preventScroll: true });
        return;
      }

      if (e.shiftKey && (cur === first || cur === element)) {
        e.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!e.shiftKey && cur === last) {
        e.preventDefault();
        first.focus({ preventScroll: true });
      }
    };

    const handleFocusIn = (e) => {
      if (getTopTrap() !== element) return;
      if (element.contains(e.target)) return;

      focusFirstFocusable(element);
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('focusin', handleFocusIn, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('focusin', handleFocusIn, true);

      const idx = activeTraps.indexOf(element);
      if (idx !== -1) activeTraps.splice(idx, 1);

      const prev = previousFocusRef.current;
      if (prev && typeof prev.focus === 'function') {
        requestAnimationFrame(() => {
          if (!document.body.contains(prev)) return;

          const topTrap = getTopTrap();
          if (topTrap && !topTrap.contains(prev)) {
            focusFirstFocusable(topTrap);
            return;
          }

          prev.focus({ preventScroll: true });
        });
      }
    };
  }, [active, ref]);
};
