'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export default function AnimatedNumber({ targetValue }: { targetValue: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const count = useMotionValue(0);
  const text = useTransform(count, (latest) => `${Math.round(latest)}%`);

  useEffect(() => {
    if (isInView) {
      animate(count, targetValue, {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      });
    }
  }, [isInView, count, targetValue]);

  return <motion.span ref={ref}>{text}</motion.span>;
}
