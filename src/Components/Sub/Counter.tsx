'use client';

import {
  KeyframeOptions,
  useIsomorphicLayoutEffect,
  animate,
  useInView,
} from 'framer-motion';
import { useRef } from 'react';

type Props = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const Counter = ({ from, to, animationOptions }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      element.textContent = String(to);
      return;
    }

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 1.5,
      ease: 'easeOut',
      ...animationOptions,
      onUpdate(value: number) {
        element.textContent = String(value.toFixed(0));
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return (
    <span
      className='text-2xl lg:text-xl font-light text-orange-600'
      ref={ref}
    />
  );
};

export default Counter;
