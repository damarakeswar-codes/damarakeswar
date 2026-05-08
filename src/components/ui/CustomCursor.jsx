import { useEffect, useRef } from 'react';

const TRAIL_COUNT = 3;

const prefersFinePointer = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
};

const resolveCursorMode = target => {
  if (!target || !(target instanceof Element)) {
    return '';
  }

  const imageTarget = target.closest('[data-cursor="image"]');
  if (imageTarget) {
    return 'image';
  }

  const hoverTarget = target.closest('a, button, [role="button"], [data-cursor="hover"]');
  if (hoverTarget) {
    return 'hover';
  }

  return '';
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const rafRef = useRef(0);
  const modeRef = useRef('');
  const visibleRef = useRef(false);
  const activeTargetRef = useRef(null);
  const magneticCleanupRef = useRef(() => {});

  const pointerRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 })));

  useEffect(() => {
    if (!prefersFinePointer()) {
      return undefined;
    }

    document.body.classList.add('custom-cursor-active');

    const cursorNode = cursorRef.current;
    const ringNode = ringRef.current;

    if (!cursorNode || !ringNode) {
      return () => {
        document.body.classList.remove('custom-cursor-active');
      };
    }

    const lerp = (start, end, amount) => start + (end - start) * amount;
    const moveNode = (node, x, y) => {
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const cleanupMagneticTarget = () => {
      magneticCleanupRef.current();
      magneticCleanupRef.current = () => {};
      activeTargetRef.current = null;
    };

    const setVisible = visible => {
      const value = visible ? 'true' : 'false';
      cursorNode.dataset.visible = value;
      ringNode.dataset.visible = value;
      trailRefs.current.forEach(node => {
        if (node) {
          node.dataset.visible = value;
        }
      });
    };

    const setMode = mode => {
      if (modeRef.current === mode) {
        return;
      }

      modeRef.current = mode;
      cursorNode.dataset.mode = mode;
      ringNode.dataset.mode = mode;
    };

    const updateMagneticTarget = target => {
      const magneticTarget = target?.closest?.('[data-cursor-magnetic]') ?? null;
      if (activeTargetRef.current === magneticTarget) {
        return;
      }

      cleanupMagneticTarget();

      if (!magneticTarget) {
        return;
      }

      const onLeave = () => {
        magneticTarget.style.transform = '';
      };

      magneticTarget.addEventListener('mouseleave', onLeave);
      magneticCleanupRef.current = () => {
        magneticTarget.removeEventListener('mouseleave', onLeave);
        magneticTarget.style.transform = '';
      };
      activeTargetRef.current = magneticTarget;
    };

    const update = () => {
      const target = pointerRef.current;

      cursorPosRef.current.x = lerp(cursorPosRef.current.x, target.x, 0.25);
      cursorPosRef.current.y = lerp(cursorPosRef.current.y, target.y, 0.25);
      ringPosRef.current.x = lerp(ringPosRef.current.x, target.x, 0.14);
      ringPosRef.current.y = lerp(ringPosRef.current.y, target.y, 0.14);

      moveNode(cursorNode, cursorPosRef.current.x, cursorPosRef.current.y);
      moveNode(ringNode, ringPosRef.current.x, ringPosRef.current.y);

      trailRef.current.forEach((dot, index) => {
        const prev = index === 0 ? ringPosRef.current : trailRef.current[index - 1];
        dot.x = lerp(dot.x, prev.x, 0.25 - index * 0.04);
        dot.y = lerp(dot.y, prev.y, 0.25 - index * 0.04);
        const trailNode = trailRefs.current[index];

        if (trailNode) {
          moveNode(trailNode, dot.x, dot.y);
        }
      });

      if (activeTargetRef.current) {
        const rect = activeTargetRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (pointerRef.current.x - centerX) * 0.12;
        const deltaY = (pointerRef.current.y - centerY) * 0.12;

        activeTargetRef.current.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(update);
    };

    const onPointerMove = event => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const mode = resolveCursorMode(event.target);
      setMode(mode);
      updateMagneticTarget(event.target);
    };

    const onPointerLeave = () => {
      visibleRef.current = false;
      setVisible(false);
      setMode('');
      cleanupMagneticTarget();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    rafRef.current = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      cleanupMagneticTarget();
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!prefersFinePointer()) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        data-visible="false"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-400/60 bg-teal-400/10 opacity-0 transition-[width,height,opacity,background-color,border-color,filter] duration-200 ease-out will-change-transform mix-blend-screen data-[visible=true]:opacity-100 data-[mode=hover]:h-16 data-[mode=hover]:w-16 data-[mode=hover]:bg-teal-400/20 data-[mode=hover]:border-teal-300/90 data-[mode=image]:h-24 data-[mode=image]:w-24 data-[mode=image]:bg-white/10 data-[mode=image]:border-white/80 data-[mode=image]:blur-[1px]"
      />

      {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
        <div
          key={`trail-${index}`}
          ref={node => {
            trailRefs.current[index] = node;
          }}
          data-visible="false"
          className="pointer-events-none fixed left-0 top-0 z-[95] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300/60 opacity-0 transition-opacity duration-300 ease-out will-change-transform data-[visible=true]:opacity-100"
        />
      ))}

      <div
        ref={cursorRef}
        data-visible="false"
        className="pointer-events-none fixed left-0 top-0 z-[110] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-[transform,opacity,background-color,box-shadow] duration-200 ease-out will-change-transform data-[visible=true]:opacity-100 data-[mode=hover]:scale-[1.8] data-[mode=hover]:bg-teal-300 data-[mode=hover]:shadow-[0_0_18px_rgba(45,212,191,0.75)] data-[mode=image]:scale-[2.2] data-[mode=image]:bg-white/80"
      />
    </>
  );
};

export default CustomCursor;
