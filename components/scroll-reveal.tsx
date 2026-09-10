'use client';

import { useEffect } from 'react';

const revealSelector = [
  'main > section',
  'main > article > header',
  'main > article > .article-detail-layout',
  'main > article + section',
  '.site-footer > div',
].join(', ');

export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const firstScreenLimit = window.innerHeight * 0.92;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    );

    elements.forEach((element) => {
      element.classList.add('scroll-reveal');

      if (element.getBoundingClientRect().top <= firstScreenLimit) {
        element.classList.add('is-visible');
      } else {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
