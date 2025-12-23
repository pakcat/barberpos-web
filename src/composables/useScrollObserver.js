import { onMounted, onUnmounted } from 'vue';

export function useScrollObserver(classNames = ['reveal-on-scroll', 'reveal-scale']) {
  const targets = Array.isArray(classNames) ? classNames : [classNames];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  onMounted(() => {
    targets.forEach((className) => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach((el) => observer.observe(el));
    });
  });

  onUnmounted(() => {
    observer.disconnect();
  });
}
